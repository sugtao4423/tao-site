import Link from 'next/link'

import classNames from 'classnames'

import { PropsWithClassChildren } from '@/@types/react'

import styles from './linkCard.module.scss'

type Props = {
  innerClassName?: string
  href: string
  asNewTab?: boolean
} & PropsWithClassChildren

export const LinkCard: React.FC<Props> = (props) => {
  const target = props.asNewTab ? '_blank' : undefined
  const rel = props.asNewTab ? 'noopener noreferrer' : undefined

  return (
    <div className={props.className}>
      <Link
        className={classNames(styles.card, props.innerClassName)}
        href={props.href}
        rel={rel}
        target={target}
      >
        {props.children}
      </Link>
    </div>
  )
}
