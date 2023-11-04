import { PropsWithClassName } from '@/@types/react'
import { H2 } from '@/components/atoms/Heading/H2'
import { Accordion } from '@/components/molecules/Accordion/Accordion'
import { TwitterClientItems } from '@/const/twitter-client'

import styles from './profile.module.scss'

export const TwitterClients: React.FC<PropsWithClassName> = (props) => (
  <div className={props.className}>
    <H2>使用クライアント</H2>
    <Accordion className={styles.content} title="一覧">
      <ul className={styles.enumList}>
        {TwitterClientItems.map((item, index) => (
          <li key={index}>
            {item.name}
            <br />
            <span>{item.note}</span>
          </li>
        ))}
      </ul>
    </Accordion>
  </div>
)
