import { PropsWithChildren } from '@/@types/react'

import styles from './h2.module.scss'

export const H2: React.FC<PropsWithChildren> = (props) => (
  <h2 className={styles.h2}>{props.children}</h2>
)
