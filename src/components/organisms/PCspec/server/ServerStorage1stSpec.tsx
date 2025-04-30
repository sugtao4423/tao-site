import { TableData } from '@/common/interfaces/table'
import { Accordion } from '@/components/molecules/Accordion/Accordion'
import { Table } from '@/components/molecules/Table/Table'

import styles from '../spec.module.scss'

const specs: TableData<2> = [
  ['CPU', 'AMD Turion II Neo N54L Dual-Core'],
  ['メモリ', 'DDR3 1333MHz 16GB (8GBx2)'],
  ['HDD', 'WD Black 500GB MB0500EBNCR (SATA)'],
  [null, 'WD Red Plus 10TB WD101EFAX (SATA)'],
  [null, 'WD Ultrastar HC570 22TB WUH722222ALE6L4 (SATA)'],
  ['OS', 'Debian 12'],
]

const replaceLog: TableData<5> = [
  ['日付', '種別', '換装前', '換装後', '備考'],
  ['2015/09', 'HDD', null, 'WD Green 3TB WD30EZRX (SATA)', '新規追加'],
  ['2017/11', 'HDD', null, 'WD Blue 4TB WD40EZRZ (SATA)', '新規追加'],
  [
    '2018/01/20',
    'メモリ',
    'DDR3 1333MHz 4GB (4GBx1)',
    'DDR3 1333MHz 16GB (8GBx2)',
    'メイン機の組み替えで余ったメモリを流用',
  ],
  ['2020/09/25', 'HDD', null, 'WD Red Plus 10TB WD101EFAX (SATA)', '新規追加'],
  [
    '2024/11/12',
    'HDD',
    'WD30EZRX, WD40EZRZ',
    'WD Ultrastar HC570 22TB WUH722222ALE6L4 (SATA)',
    null,
  ],
]

export const ServerStorage1stSpec: React.FC = () => (
  <Accordion title="ストレージサーバー（マイクロサーバー）">
    <p>HP ProLiant MicroServer Turion II NEO N5</p>

    <Table className={styles.table} data={specs} />

    <p>
      これは2015/02/20にネットで注文し、翌日21日に届いたサーバーさんです
      <br />
      価格は12,980円で激安なので購入しました
    </p>

    <p>
      初期から付いていた500GBのHDDのラベルには「Enterprise
      Storage」という表記があり、企業用のHDDの模様
    </p>

    <p>鯖室で稼働しています</p>

    <Accordion title="換装履歴">
      <Table enableHeader data={replaceLog} />
    </Accordion>
  </Accordion>
)
