import { clsx } from 'clsx'

import { PropsWithClassChildren } from '@/@types/react'

import styles from './h2.module.scss'

export const H2: React.FC<PropsWithClassChildren> = (props) => (
  <h2 className={clsx(props.className, styles.h2)}>{props.children}</h2>
)
