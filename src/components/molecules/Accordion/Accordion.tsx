'use client'

import classNames from 'classnames'

import { PropsWithClassChildren } from '@/@types/react'
import { SquareArrowIcon } from '@/components/icons/SquareArrowIcon'
import { useAccordion } from '@/services/accordion'

import styles from './accordion.module.scss'

type Props = {
  title: string
} & PropsWithClassChildren

export const Accordion: React.FC<Props> = (props) => {
  const accordion = useAccordion()
  /* eslint-disable react-hooks/refs */
  return (
    <details
      className={classNames(props.className, styles.details)}
      ref={accordion.details}
    >
      <summary
        className={styles.summary}
        ref={accordion.summary}
        onClick={(e) => accordion.onToggle(e)}
      >
        <SquareArrowIcon className={styles.arrow} />
        <div className={styles.title}>{props.title}</div>
      </summary>
      <div className={styles.inner} ref={accordion.content}>
        {props.children}
      </div>
    </details>
  )
  /* eslint-enable react-hooks/refs */
}
