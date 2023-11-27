import { Suspense } from 'react'

import { ServerStatus } from '@/components/organisms/ServerStatus/ServerStatus'
import { CommonLayout } from '@/layouts/CommonLayout'
import { ZabbixHostServer } from '@/services/ServerStatus/ZabbixHostServer'

export default async function Page(): Promise<React.ReactElement> {
  const hosts = await ZabbixHostServer.getHosts()

  return (
    <CommonLayout title="ServerStatus">
      <Suspense>
        <ServerStatus hosts={hosts} />
      </Suspense>
    </CommonLayout>
  )
}
