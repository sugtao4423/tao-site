import { PropsWithClassName } from '@/@types/react'
import { DeviceData } from '@/common/interfaces/device'
import { H2 } from '@/components/atoms/Heading/H2'
import { Nl2br } from '@/components/atoms/Text/Nl2br'
import { Accordion } from '@/components/molecules/Accordion/Accordion'
import { DeviceItems } from '@/const/devices/device'
import { DieDeviceItems } from '@/const/devices/device_die'
import { DiscardDeviceItems } from '@/const/devices/device_discard'
import { TransferredDeviceItems } from '@/const/devices/device_transferred'

import styles from './profile.module.scss'

interface Data {
  title: string
  data: DeviceData[]
  note?: string
}

const data: Data[] = [
  {
    title: '所持端末一覧',
    data: DeviceItems,
    note: 'Y!mobileのSIMをPixel 8に挿入♂して使ってます',
  },
  {
    title: '文鎮端末一覧',
    data: DieDeviceItems,
  },
  {
    title: '処分端末一覧',
    data: DiscardDeviceItems,
    note: '時代にそぐわない低スペック端末を2022/01/25に処分した。',
  },
  {
    title: '譲渡/売却端末一覧',
    data: TransferredDeviceItems,
  },
]

export const Devices: React.FC<PropsWithClassName> = (props) => (
  <div className={props.className}>
    <H2>端末</H2>
    <div className={styles.content}>詳しくはありません。ただ興味はあります</div>
    <div className={styles.content}>
      {data.map((d, i) => (
        <Accordion key={i} title={d.title}>
          <ul className={styles.enumList}>
            {d.data.map((item, index) => (
              <li key={index}>
                {item.name}
                {item.note && (
                  <span>
                    <br />
                    <Nl2br text={item.note} />
                  </span>
                )}
              </li>
            ))}
          </ul>
          {d.note && <div className={styles.note}>{d.note}</div>}
        </Accordion>
      ))}
    </div>
  </div>
)
