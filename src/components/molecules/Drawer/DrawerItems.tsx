import Link from 'next/link'

import { PropsWithClassName } from '@/@types/react'
import { DrawerData } from '@/common/interfaces/drawer'

import styles from './drawerItems.module.scss'

type Props = {
  data: DrawerData[]
  onClose: () => void
} & PropsWithClassName

export const DrawerItems: React.FC<Props> = (props) => (
  <div className={props.className}>
    {props.data.map((item) => (
      <div key={item.href} className={styles.item}>
        <Link
          className={styles.itemLink}
          href={item.href}
          rel={item.asNewTab ? 'noopener noreferrer' : undefined}
          target={item.asNewTab ? '_blank' : undefined}
          onClick={props.onClose}
        >
          {item.title}
        </Link>
      </div>
    ))}
  </div>
)
