import { TableData } from '@/common/interfaces/table'
import { Accordion } from '@/components/molecules/Accordion/Accordion'
import { Table } from '@/components/molecules/Table/Table'

import styles from './spec.module.scss'

const specs: TableData<2> = [
  ['CPU', 'Core i7 2600K'],
  ['M/B', 'ASUS P8Z68-V'],
  ['メモリ', 'DDR3 24GB (8GBx2, 4GBx2)'],
  ['HDD', '日立 2TB HDS723020BLA642 (SATA)'],
  ['GPU', 'GeForce GTX 1080'],
  ['電源', '玄人志向 KRPW-P630W/85+'],
  ['OS', 'Win7 Pro 64bit'],
  ['ケース', 'Define R5'],
  ['キーボード', 'HHKB Professional2 (無刻印)'],
  ['マウス', 'Logicool MXTB1s'],
]

const replaceLog: TableData<5> = [
  ['日付', '種別', '換装前', '換装後', '備考'],
  ['2014/02/22', 'GPU', 'GeForce GTX 550 Ti', 'GeForce GTX 760', null],
  [
    '2017/02/08',
    'GPU',
    'GeForce GTX 760',
    'GeForce GTX 1080',
    'マルチモニターにしたしちょうどグラボを新調したかった',
  ],
  [
    '2017/02/09',
    'ケース',
    'Z9 Plus',
    'Define R5',
    'グラボが入り切らなかったので新調',
  ],
  [
    '2017/12/30',
    'メモリ',
    'DDR3 16GB (4GBx4)',
    'DDR3 24GB (8GBx2, 4GBx2)',
    'まだあと数年はこのメイン機で戦うつもり',
  ],
]

export const Main1stSpec: React.FC = () => (
  <Accordion title="Windows（第1世代自作メイン機）">
    <p>
      <strong>現在はパーツを流用して新しいメイン機になっています</strong>
    </p>

    <Table className={styles.table} data={specs} />

    <p>こいつは2011/09/10に組み立てたもの</p>

    <p>
      大体のメイン作業（アニメ鑑賞、ギャルゲ・エロゲ、マイクラ、ニコ動鑑賞など）はこっち。
    </p>

    <Accordion title="換装履歴">
      <Table enableHeader data={replaceLog} />
    </Accordion>
  </Accordion>
)
