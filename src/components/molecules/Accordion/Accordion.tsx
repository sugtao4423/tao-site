import classNames from 'classnames'

import { PropsWithClassChildren } from '@/@types/react'
import { SquareArrowIcon } from '@/components/icons/SquareArrowIcon'

import styles from './accordion.module.scss'

type Props = {
  title: string
} & PropsWithClassChildren

export const Accordion: React.FC<Props> = (props) => (
  <details className={classNames(props.className, styles.details)}>
    <summary className={styles.summary}>
      <SquareArrowIcon className={styles.arrow} />
      <div className={styles.title}>{props.title}</div>
    </summary>
    <div className={styles.inner}>{props.children}</div>
  </details>
)
