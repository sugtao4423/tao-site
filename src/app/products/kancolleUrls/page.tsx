import { KancolleBgmUrls } from '@/components/organisms/Products/KancolleUrls/KancolleBgmUrls'
import { KancolleCharUrls } from '@/components/organisms/Products/KancolleUrls/KancolleCharUrls'
import { CommonLayout } from '@/layouts/CommonLayout'
import { KancolleUrlsServer } from '@/services/products/kancolleUrls/server'

import styles from './page.module.scss'

export default function Page(): React.ReactNode {
  const server = new KancolleUrlsServer()
  const ships = server.getShipData()
  const portBgms = server.getPortBgmData()
  const battleBgms = server.getBattleBgmData()

  return (
    <CommonLayout productsDrawer title="艦これURLs">
      <KancolleCharUrls ships={ships} />
      <KancolleBgmUrls
        battleBgms={battleBgms}
        className={styles.bgms}
        portBgms={portBgms}
      />
    </CommonLayout>
  )
}
