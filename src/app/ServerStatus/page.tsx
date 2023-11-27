import { Metadata } from 'next'
import { Suspense } from 'react'

import { ServerStatus } from '@/components/organisms/ServerStatus/ServerStatus'
import { CommonLayout } from '@/layouts/CommonLayout'
import { ZabbixHostServer } from '@/services/ServerStatus/ZabbixHostServer'

export const metadata: Metadata = {
  title: 'ServerStatus',
}

export default async function Page(): Promise<React.ReactElement> {
  const hosts = await ZabbixHostServer.getHosts()

  return (
    <CommonLayout title={metadata.title as string}>
      <Suspense>
        <ServerStatus hosts={hosts} />
      </Suspense>
    </CommonLayout>
  )
}
