import { TableData } from '@/common/interfaces/table'
import { Accordion } from '@/components/molecules/Accordion/Accordion'
import { Table } from '@/components/molecules/Table/Table'

import styles from './spec.module.scss'

const specs: TableData<2> = [
  ['CPU', '2.2GHz 6コア Intel Core i7 9MB共有L3キャッシュ'],
  ['メモリ', '8GB x 2 (16GB)'],
  ['ストレージ', '256GB SSD'],
  ['GPU', 'Radeon Pro 555X 4GB GDDR5'],
  ['OS', 'macOS Catalina (10.15)'],
]

export const Mac3rdSpec: React.FC = () => (
  <Accordion title="Mac（第3世代サブ機）">
    <p>
      <strong>2023/12より父親用として稼働しています</strong>
    </p>

    <p>
      <a
        href="https://support.apple.com/kb/SP776"
        rel="noopener noreferrer"
        target="_blank"
      >
        MacBook Pro (15-inch, 2018)
      </a>{' '}
      (スペースグレイ)
    </p>

    <Table className={styles.table} data={specs} />

    <p>
      以前は
      <a
        href="https://support.apple.com/kb/SP690"
        rel="noopener noreferrer"
        target="_blank"
      >
        MacBook Pro (Retina, 15-inch, Late 2013)
      </a>
      を使っていました
    </p>
  </Accordion>
)
