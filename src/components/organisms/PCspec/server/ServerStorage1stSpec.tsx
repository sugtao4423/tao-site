import { TableData } from '@/common/interfaces/table'
import { Accordion } from '@/components/molecules/Accordion/Accordion'
import { Table } from '@/components/molecules/Table/Table'

import styles from '../spec.module.scss'

const specs: TableData<2> = [
  ['CPU', 'AMD Turion II Neo N54L Dual-Core'],
  ['メモリ', 'DDR3 1333MHz 16GB (8GBx2)'],
  ['HDD', 'WD Black 500GB SATA'],
  [null, 'WD Green 3TB SATA (2015年9月)'],
  [null, 'WD Blue 4TB SATA (2017年11月)'],
  [null, 'WD Red Plus 10TB SATA (2020年9月)'],
  ['OS', 'Debian 10'],
]

export const ServerStorage1stSpec: React.FC = () => (
  <Accordion title="ストレージサーバー（マイクロサーバー）">
    <p>
      <a
        href="http://h50146.www5.hp.com/products/servers/proliant/micro/"
        rel="noopener noreferrer"
        target="_blank"
      >
        HP ProLiant MicroServer Turion II NEO N5
      </a>
    </p>

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

    <ul>
      <li>
        2018/01/20にメイン機の組み替えをしたことでDDR3のメモリが余り、4GBから8GBx2に換装
      </li>
    </ul>

    <p>鯖室で稼働しています</p>
  </Accordion>
)
