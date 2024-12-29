import { TableData } from '@/common/interfaces/table'
import { Accordion } from '@/components/molecules/Accordion/Accordion'
import { Table } from '@/components/molecules/Table/Table'

import styles from '../spec.module.scss'

const specs: TableData<2> = [
  ['商品名', 'Express5800/R120a-1'],
  ['型名', 'N8100-1518'],
  ['CPU', 'Xeon E5520-2.26GHz x2'],
  ['メモリ', 'DDR3 ECC 120GB (16GBx4, 8GBx6, 4GBx2)'],
  ['HDD', '2TB 3.5inch WD Black (SATA) x2 (RAID1)'],
]

export const ServerMain1stSpec: React.FC = () => (
  <Accordion title="メインサーバー（第1世代ラックサーバー）">
    <p>
      <strong>現在はメモリを流用して新しい鯖になっています</strong>
    </p>

    <p>2020/12/13に引退しました。今までありがとう。</p>

    <Table className={styles.table} data={specs} />

    <p>
      2015/10/10にオークションで5,000円で落札しました
      <br />
      送料も合わせて合計6,404円でした
      <br />
      10/14に自宅に着弾しました
    </p>

    <p>
      メモリは元々1GB ECCx4が載っていましたが、増設しました
      <br />
      HDDはESXiを構築するために146GB(SAS)x3から大容量のものに換装しました
      <br />
      同じサーバーを購入してCPUを2台へと増やしました
    </p>

    <p>
      一時期倉庫で稼働していましたが、鯖室を作ったので現在はそちらで稼働しています
    </p>
  </Accordion>
)
