import { HomobiAudioList } from '@/components/organisms/Inm/HomobiAudioList'
import { CommonLayout } from '@/layouts/CommonLayout'
import { InmServer } from '@/services/inm'

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
