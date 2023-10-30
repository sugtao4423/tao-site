import classNames from 'classnames'

import { PropsWithClassChildren } from '@/@types/react'

import styles from './h3.module.scss'

export const H3: React.FC<PropsWithClassChildren> = (props) => (
  <h3 className={classNames(props.className, styles.h3)}>{props.children}</h3>
)
