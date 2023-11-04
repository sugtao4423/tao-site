import { PropsWithClassName } from '@/@types/react'
import { H2 } from '@/components/atoms/Heading/H2'
import { H3 } from '@/components/atoms/Heading/H3'
import { Nl2br } from '@/components/atoms/Text/Nl2br'
import { ProfileItem } from '@/const/profile'

import styles from './profile.module.scss'

export const Overview: React.FC<PropsWithClassName> = (props) => (
  <div className={props.className}>
    <H2 className={styles.titleMargin}>
      フォローする際に知っておいてほしいこと
    </H2>
    <div className={styles.content}>
      <H3>フォロー、フォロバについて</H3>
      <div>
        <Nl2br text={ProfileItem.aboutFollow} />
      </div>
    </div>
    <div className={styles.content}>
      <H3>ツイートの自由度に関して</H3>
      <div>
        <Nl2br text={ProfileItem.aboutTweet} />
      </div>
    </div>

    <div className={styles.content}>
      <H2>プロフィール</H2>
      {ProfileItem.profile.map((p, index) => (
        <div key={index} className={styles.content}>
          <Nl2br text={p} />
        </div>
      ))}
    </div>
  </div>
)
