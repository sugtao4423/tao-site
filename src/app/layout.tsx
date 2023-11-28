import { Metadata } from 'next'

import { PropsWithChildren } from '@/@types/react'
import { GaScript } from '@/components/atoms/Script/GaScript'
import '@/styles/global.scss'

export const metadata: Metadata = {
  title: {
    template: '%s | taoのサイト',
    default: 'taoのサイト',
  },
  themeColor: '#55acee',
}

export default function RootLayout(props: PropsWithChildren): React.ReactNode {
  return (
    <html lang="ja">
      <body>
        <GaScript />
        {props.children}
      </body>
    </html>
  )
}
