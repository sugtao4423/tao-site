import { RefObject, useRef } from 'react'

interface Refs {
  details: RefObject<HTMLDetailsElement | null>
  summary: RefObject<HTMLElement | null>
  content: RefObject<HTMLDivElement | null>
}

interface AccordionData extends Refs {
  onToggle(e: React.MouseEvent<HTMLElement, MouseEvent>): void
}

class Accordion {
  private animation: Animation | null = null

  private isClosing = false

  private isExpanding = false

  private animateOptions: KeyframeAnimationOptions = {
    duration: 400,
    easing: 'ease-out',
  }

  private onAnimationFinish(open: boolean, refs: Refs): void {
    refs.details.current!.open = open
    this.animation = null
    this.isClosing = false
    this.isExpanding = false
    refs.details.current!.style.height = ''
    refs.details.current!.style.overflow = ''
  }

  private expand(refs: Refs): void {
    this.isExpanding = true

    const startHeight = refs.details.current!.offsetHeight
    const endHeight =
      refs.summary.current!.offsetHeight + refs.content.current!.offsetHeight

    if (this.animation) {
      this.animation.cancel()
    }

    this.animation = refs.details.current!.animate(
      { height: [`${startHeight}px`, `${endHeight}px`] },
      this.animateOptions
    )
    this.animation.onfinish = (): void => this.onAnimationFinish(true, refs)
    this.animation.oncancel = (): void => {
      this.isExpanding = false
    }
  }

  private open(refs: Refs): void {
    const { offsetHeight } = refs.details.current!
    refs.details.current!.style.height = `${offsetHeight}px`
    refs.details.current!.open = true
    window.requestAnimationFrame((): void => this.expand(refs))
  }

  private shrink(refs: Refs): void {
    this.isClosing = true

    const startHeight = refs.details.current!.offsetHeight
    const endHeight = refs.summary.current!.offsetHeight

    if (this.animation) {
      this.animation.cancel()
    }

    this.animation = refs.details.current!.animate(
      { height: [`${startHeight}px`, `${endHeight}px`] },
      this.animateOptions
    )
    this.animation.onfinish = (): void => this.onAnimationFinish(false, refs)
    this.animation.oncancel = (): void => {
      this.isClosing = false
    }
  }

  public onToggle(
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    refs: Refs
  ): void {
    e.preventDefault()
    refs.details.current!.style.overflow = 'hidden'
    if (this.isClosing || !refs.details.current!.open) {
      this.open(refs)
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    } else if (this.isExpanding || refs.details.current!.open) {
      this.shrink(refs)
    }
  }
}

export const useAccordion = (): AccordionData => {
  const details = useRef<HTMLDetailsElement>(null)
  const summary = useRef<HTMLElement>(null)
  const content = useRef<HTMLDivElement>(null)

  const accordion = new Accordion()
  const onToggle = (e: React.MouseEvent<HTMLElement, MouseEvent>): void =>
    accordion.onToggle(e, { details, summary, content })

  return { details, summary, content, onToggle }
}
