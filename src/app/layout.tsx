import { Metadata } from 'next'

import { PropsWithChildren } from '@/@types/react'
import '@/styles/global.scss'

export const metadata: Metadata = {
  title: {
    template: '%s | taoのサイト',
    default: 'taoのサイト',
  },
}

export default function RootLayout(props: PropsWithChildren): React.ReactNode {
  return (
    <html lang="ja">
      <body>{props.children}</body>
    </html>
  )
}
