import { Metadata } from 'next'

import { KancolleBgmUrls } from '@/components/organisms/Products/KancolleUrls/KancolleBgmUrls'
import { KancolleCharUrls } from '@/components/organisms/Products/KancolleUrls/KancolleCharUrls'
import { KancolleHistory } from '@/components/organisms/Products/KancolleUrls/KancolleHistory'
import { CommonLayout } from '@/layouts/CommonLayout'
import { KancolleUrlsRepository } from '@/repositories/kancolle-urls'

import styles from './page.module.scss'

export const metadata: Metadata = {
  title: '艦これURLs',
}

export default function Page(): React.ReactNode {
  const server = new KancolleUrlsRepository()
  const ships = server.getShipData()
  const portBgms = server.getPortBgmData()
  const battleBgms = server.getBattleBgmData()

  return (
    <CommonLayout
      productsDrawer
      bottomEl={<KancolleHistory />}
      title={metadata.title as string}
    >
      <KancolleCharUrls ships={ships} />
      <KancolleBgmUrls
        battleBgms={battleBgms}
        className={styles.bgms}
        portBgms={portBgms}
      />
    </CommonLayout>
  )
}
