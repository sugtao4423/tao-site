import { TableData } from '@/common/interfaces/table'
import { Accordion } from '@/components/molecules/Accordion/Accordion'
import { Table } from '@/components/molecules/Table/Table'

import styles from '../spec.module.scss'

const specs: TableData<2> = [
  ['商品名', 'Express5800/R120a-1'],
  ['型名', 'N8100-1518'],
  ['CPU', 'Xeon E5520 2.26GHz x2'],
  ['メモリ', 'DDR3 ECC 120GB (16GBx4, 8GBx6, 4GBx2)'],
  ['HDD', 'WD Black 2TB WD2003FZEX (SATA) x2 (RAID1)'],
]

const replaceLog: TableData<5> = [
  ['日付', '種別', '換装前', '換装後', '備考'],
  [
    '購入時',
    'メモリ',
    'DDR3 ECC 4GB (1GBx4)',
    'DDR3 ECC 18GB (4GBx4, 1GBx2)',
    null,
  ],
  [
    '2016/04/30',
    'メモリ',
    'DDR3 ECC 18GB (4GBx4, 1GBx2)',
    'DDR3 ECC 24GB (4GBx6)',
    null,
  ],
  [
    '2016/09/01',
    'HDD',
    '146GB (SAS) x3',
    'WD Black 2TB WD2003FZEX (SATA) x1',
    'RAID0で運用',
  ],
  [
    '2016/09/17',
    'CPU',
    'Xeon E5520 2.26GHz x1',
    'Xeon E5520 2.26GHz x2',
    '同じサーバーを購入して2枚へ',
  ],
  [
    null,
    'メモリ',
    'DDR3 ECC 24GB (4GBx6)',
    'DDR3 ECC 37GB (4GBx8, 2GBx1, 1GBx3)',
    'CPUの増設で使えるようになったレーンを使用',
  ],
  [
    '2016/11/05',
    'メモリ',
    'DDR3 ECC 37GB (4GBx8, 2GBx1, 1GBx3)',
    'DDR3 ECC 56GB (8GBx2, 4GBx10)',
    null,
  ],
  [
    '2016/11/16',
    'メモリ',
    'DDR3 ECC 56GB (8GBx2, 4GBx10)',
    'DDR3 ECC 72GB (8GBx6, 4GBx6)',
    null,
  ],
  [
    '2016/11/27',
    'メモリ',
    'DDR3 ECC 72GB (8GBx6, 4GBx6)',
    'DDR3 ECC 120GB (16GBx4, 8GBx6, 4GBx2)',
    null,
  ],
  [
    '2017/10/09',
    'HDD',
    'WD Black 2TB WD2003FZEX (SATA) x1',
    'WD Black 2TB WD2003FZEX (SATA) x2',
    'RAID0からRAID1に変更',
  ],
]

export const ServerMain1stSpec: React.FC = () => (
  <Accordion title="メインサーバー（第1世代ラックサーバー）">
    <p>
      <strong>現在はメモリを流用して新しい鯖になっています</strong>
    </p>

    <p>2020/12/13に引退しました</p>

    <Table className={styles.table} data={specs} />

    <p>
      2015/10/10にオークションで5,000円で落札しました
      <br />
      送料も合わせて合計6,404円でした
      <br />
      10/14に自宅に着弾しました
    </p>

    <p>
      一時期倉庫で稼働していましたが、鯖室を作ったので現在はそちらで稼働しています
    </p>

    <Accordion title="換装履歴">
      <Table enableHeader data={replaceLog} />
    </Accordion>
  </Accordion>
)
