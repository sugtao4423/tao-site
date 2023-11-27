import { Metadata } from 'next'
import Link from 'next/link'

import { getInmHomobiPath } from '@/common/routes'
import { CommonLayout } from '@/layouts/CommonLayout'
import { InmServer } from '@/services/inm'

export const metadata: Metadata = {
  title: '淫夢音声素材',
}

export default function Page(): React.ReactNode {
  const homobies = InmServer.getHomobies()

  return (
    <CommonLayout title={metadata.title as string}>
      <p>初投稿です。</p>
      <ul>
        {homobies.map((h, i) => (
          <li key={i}>
            <Link href={getInmHomobiPath(h)}>{h}</Link>
          </li>
        ))}
      </ul>
    </CommonLayout>
  )
}
