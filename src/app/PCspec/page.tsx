import { H2 } from '@/components/atoms/Heading/H2'
import { Mac2ndSpec } from '@/components/organisms/PCspec/Mac2ndSpec'
import { Mac3rdSpec } from '@/components/organisms/PCspec/Mac3rdSpec'
import { Mac4thSpec } from '@/components/organisms/PCspec/Mac4thSpec'
import { Main1stSpec } from '@/components/organisms/PCspec/Main1stSpec'
import { Main2ndSpec } from '@/components/organisms/PCspec/Main2ndSpec'
import { Main3rdSpec } from '@/components/organisms/PCspec/Main3rdSpec'
import { ServerMain1stSpec } from '@/components/organisms/PCspec/server/ServerMain1stSpec'
import { ServerMain2ndSpec } from '@/components/organisms/PCspec/server/ServerMain2ndSpec'
import { ServerRaspiSpec } from '@/components/organisms/PCspec/server/ServerRaspiSpec'
import { ServerStorage1stSpec } from '@/components/organisms/PCspec/server/ServerStorage1stSpec'
import { CommonLayout } from '@/layouts/CommonLayout'

import styles from './page.module.scss'

export default function Page(): React.ReactNode {
  return (
    <CommonLayout title="PCスペック">
      <div>
        <Main3rdSpec />
        <Mac4thSpec />
      </div>

      <div>
        <H2 className={styles.mt}>Servers</H2>
        <ServerMain2ndSpec />
        <ServerStorage1stSpec />
        <ServerRaspiSpec />
      </div>

      <div>
        <H2 className={styles.mt}>引退済み</H2>
        <ServerMain1stSpec />
        <Main1stSpec />
        <Main2ndSpec />
        <Mac3rdSpec />
        <Mac2ndSpec />
      </div>
    </CommonLayout>
  )
}