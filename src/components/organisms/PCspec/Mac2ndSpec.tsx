import { TableData } from '@/common/interfaces/table'
import { Accordion } from '@/components/molecules/Accordion/Accordion'
import { Table } from '@/components/molecules/Table/Table'

import styles from './spec.module.scss'

const specs: TableData<2> = [
  ['CPU', 'Core i5 2.0GHz 4MB共有L3キャッシュ'],
  ['メモリ', '8GB x 2 (16GB)'],
  ['ストレージ', '256GB PCIeベースオンボードSSD'],
  ['GPU', 'Intel Iris Graphics 540'],
  ['OS', 'macOS Catalina (10.15.7)'],
]

export const Mac2ndSpec: React.FC = () => (
  <Accordion title="Mac（第2世代サブ機、外出用）">
    <p>
      <strong>
        こちらはもう使うことがなくなったので2021/05/22に売却しました
      </strong>
    </p>

    <p>
      <a
        href="https://support.apple.com/kb/SP747"
        rel="noopener noreferrer"
        target="_blank"
      >
        MacBook Pro (13-inch, 2016, Two Thunderbolt 3 ports)
      </a>{' '}
      (シルバー) (CTO)
    </p>

    <Table className={styles.table} data={specs} />

    <p>
      大学に入学し、PCを持ち運ぶ機会も増えたので新MBP13インチのカスタマイズモデルを購入した
    </p>

    <p>
      キーボードがカッタカタして打ちにくいのはあるけど慣れだと思う
      <br />
      トラックパッドが大きくて使いやすいのはとても良い点。ただキーボード打ってる時に触れてしまうことが多々あるのでアレ
      <br />
      あと充電器にケーブルを巻き取るアレがないのは困る…
    </p>
  </Accordion>
)
