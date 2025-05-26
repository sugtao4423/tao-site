import { TableData } from '@/common/interfaces/table'
import { Accordion } from '@/components/molecules/Accordion/Accordion'
import { Table } from '@/components/molecules/Table/Table'

import styles from '../spec.module.scss'

const specs: TableData<2> = [
  ['型番', 'TS-855eU-RP-8G'],
  ['CPU', 'Atom C5125 2.8GHz'],
  ['メモリ', 'DDR4 1600MHz ECC 64GB (32GBx2)'],
  ['SSD - RAID1 4TB', 'Samsung SSD 990 PRO 4TB (M.2 Type2280) x2'],
  [
    'HDD - RAID5 44TB',
    <>
      WD Ultrastar HC570 22TB WUH722222ALE6L4 (SATA) x2
      <br />
      TOSHIBA 22TB MG10AFA22TE (SATA) x1
    </>,
  ],
  [
    'HDD - RAID1 16TB',
    <>
      Ultrastar DC HC550 16TB WUH721816ALE6L4 (SATA) x1
      <br />
      TOSHIBA 16TB MG08ACA16TE (SATA) x1
    </>,
  ],
  ['OS', 'QuTS hero'],
]

const replaceLog: TableData<5> = [
  ['日付', '種別', '換装前', '換装後', '備考'],
  [
    '購入時',
    'メモリ',
    'DDR4 1600MHz 8GB (8GBx1)',
    'DDR4 1600MHz ECC 64GB (32GBx2)',
    '最大容量の64GBとECC付きに換装',
  ],
  [
    '購入時',
    'SSD - RAID1 4TB',
    null,
    'Samsung SSD 990 PRO 4TB (M.2 Type2280) x2',
    '新規追加',
  ],
  [
    '購入時',
    'HDD - RAID5 44TB',
    null,
    <>
      WD Ultrastar HC570 22TB WUH722222ALE6L4 (SATA) x1
      <br />
      TOSHIBA 22TB MG10AFA22TE (SATA) x1
    </>,
    '新規追加',
  ],
  [
    '購入時',
    'HDD - RAID5 44TB',
    null,
    'WD Ultrastar HC570 22TB WUH722222ALE6L4 (SATA) x1',
    '旧NASから流用',
  ],
  [
    '購入時',
    'HDD - RAID1 16TB',
    null,
    <>
      Ultrastar DC HC550 16TB WUH721816ALE6L4 (SATA) x1
      <br />
      TOSHIBA 16TB MG08ACA16TE (SATA) x1
    </>,
    '新規追加',
  ],
]

export const ServerStorage2ndSpec: React.FC = () => (
  <Accordion title="ストレージサーバー（第2世代NAS）">
    <p>鯖室のラックにマウントして運用しています</p>

    <Table className={styles.table} data={specs} />

    <p>
      2025/05/02に注文し、05/17に届きました
      <br />
      本体は384,520円でした
    </p>

    <p>
      宅内ネットワークを10Gにしたためそれを処理できる能力や、極力面倒を見なくてもいいように製品としてのNASに移行しました
    </p>

    <p>旧NASからデータの移行を行い、2025/05/24より本格運用を開始</p>

    <Accordion title="換装履歴">
      <Table enableHeader data={replaceLog} />
    </Accordion>
  </Accordion>
)
