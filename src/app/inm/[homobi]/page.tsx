import { Metadata } from 'next'

import { HomobiAudioList } from '@/components/organisms/Inm/HomobiAudioList'
import { CommonLayout } from '@/layouts/CommonLayout'
import { InmServer } from '@/services/inm'

export const metadata: Metadata = {
  title: '淫夢音声素材',
}

type Props = {
  params: Promise<{ homobi: string }>
}

export default async function Page(props: Props): Promise<React.ReactNode> {
  const params = await props.params
  const server = new InmServer(params.homobi)

  return (
    <CommonLayout title={server.homobiName}>
      {server.isValidHomobi() ? (
        <HomobiAudioList files={server.getHomobiAudioFiles()} />
      ) : (
        <p>そんなホモビはない</p>
      )}
    </CommonLayout>
  )
}
