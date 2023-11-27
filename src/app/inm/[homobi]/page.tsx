import { Metadata } from 'next'

import { HomobiAudioList } from '@/components/organisms/Inm/HomobiAudioList'
import { CommonLayout } from '@/layouts/CommonLayout'
import { InmServer } from '@/services/inm'

export const metadata: Metadata = {
  title: '淫夢音声素材',
}

type Props = {
  params: {
    homobi: string
  }
}

export default function Page(props: Props): React.ReactNode {
  const server = new InmServer(props.params.homobi)

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
