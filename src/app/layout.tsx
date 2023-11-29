import { Metadata, Viewport } from 'next'

import { PropsWithChildren } from '@/@types/react'
import { GaScript } from '@/components/atoms/Script/GaScript'
import '@/styles/global.scss'

export const metadata: Metadata = {
  title: {
    template: '%s | taoのサイト',
    default: 'taoのサイト',
  },
}

export const viewport: Viewport = {
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
