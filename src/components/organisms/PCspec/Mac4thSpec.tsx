import { TableData } from '@/common/interfaces/table'
import { Accordion } from '@/components/molecules/Accordion/Accordion'
import { Table } from '@/components/molecules/Table/Table'

import styles from './spec.module.scss'

const specs: TableData<2> = [
  ['CPU', 'M1 Max'],
  ['メモリ', 'LPDDR5 64GB'],
  ['ストレージ', '1TB SSD'],
]

export const Mac4thSpec: React.FC = () => (
  <Accordion title="Mac（第4世代サブ機）">
    <p>
      <a
        href="https://support.apple.com/kb/SP858"
        rel="noopener noreferrer"
        target="_blank"
      >
        MacBook Pro (16インチ, 2021)
      </a>{' '}
      (スペースグレイ) (CTO)
    </p>

    <Table className={styles.table} data={specs} />

    <p>
      2021/11/01注文、12/22着弾。
      <br />
      仕事を始めCore i7ではスペック不足を感じたので新たに発表されたM1 Max
      MBPを購入。
      <br />
      コンパイルが爆速すぎて怖いレベルで神。
    </p>
  </Accordion>
)
