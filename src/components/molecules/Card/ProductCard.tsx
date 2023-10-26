import { PropsWithClassName } from '@/@types/react'
import { ProductData } from '@/common/interfaces/product'
import { LinkCard } from '@/components/atoms/Card/LinkCard'
import { Icon } from '@/components/atoms/Image/Icon'

import styles from './productCard.module.scss'

type Props = ProductData & PropsWithClassName

export const ProductCard: React.FC<Props> = (props) => (
  <LinkCard
    asNewTab={props.asNewTab}
    className={props.className}
    href={props.href}
    innerClassName={styles.card}
  >
    <div>
      <Icon className={styles.icon} />
    </div>
    <div className={styles.content}>
      <div className={styles.user}>
        <div className={styles.name}>tao</div>
        <div className={styles.screenName}>@sugtao4423</div>
      </div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.note}>{props.note}</div>
    </div>
  </LinkCard>
)
