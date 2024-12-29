import { TableData } from '@/common/interfaces/table'
import { Accordion } from '@/components/molecules/Accordion/Accordion'
import { Table } from '@/components/molecules/Table/Table'

import styles from '../spec.module.scss'

const specs: TableData<2> = [
  ['商品名', 'Express5800/R120h-1E'],
  ['型名', 'N8100-2602Y'],
  ['CPU', 'Xeon Gold 5118 2.3GHz x2'],
  ['メモリ', 'DDR4 ECC 256GB (32GBx8)'],
  ['SSD', 'HPE Smart Array P408i-a SR Gen10 (RAID1 Triple)'],
  [null, 'Samsung 860 EVO 1TB (SATA) x2'],
  [null, 'Samsung 870 EVO 1TB (SATA) x1'],
]

export const ServerMain3rdSpec: React.FC = () => (
  <Accordion title="メインサーバー（第3世代ラックサーバー）">
    <p>鯖室のラックにマウントして運用しています</p>

    <Table className={styles.table} data={specs} />

    <p>2024/12/15にヤフオクで33,550円で落札し、12/17に着弾しました</p>

    <p>
      メモリは元々32GBx4が載っていましたが、12レーンも余っていたため買い足しました
      <br />
      ストレージは旧鯖のSSD2台を流用し、新たにSSDとマウンタを1台ずつ買い足しました
    </p>

    <p>
      ESXiの無償版の提供が終了したためProxmox
      VEをインストールし、VMも再構築しました
    </p>

    <p>2024/12/29より運用開始</p>
  </Accordion>
)
