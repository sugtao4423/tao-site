import Link from 'next/link'

import { TwitterClientData } from '@/common/interfaces/twitter-client'
import { Links } from '@/const/link'

export const TwitterClientItems: TwitterClientData[] = [
  {
    name: 'TweetDeck',
    note: 'PCを使っているときは大抵これです',
  },
  {
    name: 'ShootingStar for たおっぱい',
    note: (
      <>
        Android端末使用時。（中身は自作クライアントの
        <Link href={Links.githubLoD} rel="noopener noreferrer" target="_blank">
          Lightning of Dark
        </Link>
        ）
      </>
    ),
  },
  {
    name: 'Twitter for Android',
    note: 'Android端末から画像を投稿する時のみ',
  },
]
