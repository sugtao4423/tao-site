import { PropsWithClassName } from '@/@types/react'
import { LinkData } from '@/common/interfaces/link'
import { LinkCard as BaseLinkCard } from '@/components/atoms/Card/LinkCard'

import styles from './linkCard.module.scss'

type Props = LinkData & PropsWithClassName

export const LinkCard: React.FC<Props> = (props) => (
  <BaseLinkCard
    asNewTab={props.asNewTab}
    className={props.className}
    href={props.href}
    innerClassName={styles.card}
  >
    <div className={styles.icon}>{props.icon}</div>
    <div className={styles.content}>
      <div className={styles.title}>{props.title}</div>
      {props.subtitle && (
        <div className={styles.subtitle}>{props.subtitle}</div>
      )}
    </div>
  </BaseLinkCard>
)
