import { Metadata } from 'next'
import '@/styles/global.scss'

export const metadata: Metadata = {
  title: {
    template: '%s | taoのサイト',
    default: 'taoのサイト',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactNode {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
