import { TableData } from '@/common/interfaces/table'
import { Accordion } from '@/components/molecules/Accordion/Accordion'
import { Table } from '@/components/molecules/Table/Table'

import styles from '../spec.module.scss'

const specs: TableData<2> = [
  ['商品名', 'Express5800/R120e-1E'],
  ['型名', 'N8100-2124Y'],
  ['CPU', 'Xeon E5-2420v2 2.20GHz x2'],
  ['メモリ', 'DDR3 ECC 120GB (16GBx4, 8GBx6, 4GBx2)'],
  ['SSD', 'Samsung SSD 860 EVO 1TB (SATA) x2 (RAID1)'],
]

const replaceLog: TableData<5> = [
  ['日付', '種別', '換装前', '換装後', '備考'],
  [
    '購入時',
    'メモリ',
    'DDR3 ECC 8GB (4GBx2)',
    'DDR3 ECC 120GB (16GBx4, 8GBx6, 4GBx2)',
    'すべて旧鯖から流用',
  ],
  [
    '購入時',
    'SSD',
    'HDD 300GB (SAS) x2',
    'Samsung SSD 860 EVO 1TB (SATA) x2',
    '2.5インチしか搭載できないのでSSDを新調',
  ],
]

export const ServerMain2ndSpec: React.FC = () => (
  <Accordion title="メインサーバー（第2世代ラックサーバー）">
    <p>
      <strong>現在はSSDを流用して新しい鯖になっています</strong>
    </p>

    <p>2024/12/29に引退しました</p>

    <Table className={styles.table} data={specs} />

    <p>
      2020/12/09にヤフオクで本体9,680円+送料2,000円で落札し、12/11に着弾しました
    </p>

    <p>
      ESXi 7系がドライバの関係でインストール不可能だったので、ESXi
      6.7で稼働しています
    </p>

    <p>2020/12/14より運用開始</p>

    <Accordion title="換装履歴">
      <Table enableHeader data={replaceLog} />
    </Accordion>
  </Accordion>
)
