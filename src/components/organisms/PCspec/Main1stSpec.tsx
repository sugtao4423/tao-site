import { TableData } from '@/common/interfaces/table'
import { Accordion } from '@/components/molecules/Accordion/Accordion'
import { Table } from '@/components/molecules/Table/Table'

import styles from './spec.module.scss'

const specs: TableData<2> = [
  ['CPU', 'Core i7 2600K'],
  ['M/B', 'P8Z68-V'],
  ['メモリ', 'DDR3 24GB (8GBx2, 4GBx2)'],
  ['HDD', '日立 2TB HDS723020BLA642 (SATA)'],
  ['GPU', 'GeForce GTX 1080'],
  ['電源', 'KRPW-P630W/85+'],
  ['OS', 'Win7 Pro 64bit'],
  ['ケース', 'Define R5'],
  ['キーボード', 'HHKB Professional2 (無刻印)'],
  ['マウス', 'Logicool MXTB1s'],
]

export const Main1stSpec: React.FC = () => (
  <Accordion title="Windows（第1世代自作メイン機）">
    <p>
      <strong>現在はパーツを流用して新しいメイン機になっています</strong>
    </p>

    <Table className={styles.table} data={specs} />

    <p>こいつは2011/09/10に組み立てたもの</p>

    <ul>
      <li>
        当初グラボはGTX 550 Ti -&gt; GTX 760だったけどこの前新調しました
        <br />
        マルチモニターにしたしちょうどグラボを新調したかったので。
      </li>
      <li>
        ケースも当初はZ9 Plusでしたがグラボが入り切らなかったので新調しました
      </li>
      <li>
        2017/12/30にメモリを16GBから24GBに増やしました
        <br />
        まだあと数年はこのメイン機で戦うつもりです
      </li>
    </ul>

    <p>
      大体のメイン作業（アニメ鑑賞、ギャルゲ・エロゲ、マイクラ、ニコ動鑑賞など）はこっち。
    </p>
  </Accordion>
)
