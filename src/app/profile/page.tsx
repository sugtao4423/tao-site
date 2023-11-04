import { Devices } from '@/components/organisms/Profile/Devices'
import { Overview } from '@/components/organisms/Profile/Overview'
import { TwitterClients } from '@/components/organisms/Profile/TwitterClients'
import { User } from '@/components/organisms/Profile/User'
import { CommonLayout } from '@/layouts/CommonLayout'

import styles from './page.module.scss'

export default function Page(): React.ReactNode {
  return (
    <CommonLayout title="My Profile">
      <User />
      <Overview className={styles.contents} />
      <Devices className={styles.contents} />
      <TwitterClients className={styles.contents} />
    </CommonLayout>
  )
}
