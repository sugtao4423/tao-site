import { TableData } from '@/common/interfaces/table'
import { Accordion } from '@/components/molecules/Accordion/Accordion'
import { Table } from '@/components/molecules/Table/Table'

import styles from './spec.module.scss'

const specs: TableData<2> = [
  ['CPU', 'Core i7 13700K'],
  ['CPUクーラー', 'DeepCool LT720'],
  ['M/B', 'TUF GAMING Z790-PLUS WIFI D4'],
  ['メモリ', 'DDR4 64GB (16GBx4)'],
  ['HDD/SSD', 'C: Samsung SSD 980 PRO with Heatsink 1TB (M.2 Type2280)'],
  [null, 'D: Samsung SSD 870 EVO 4TB (SATA)'],
  [null, 'E: Samsung SSD 960 EVO 250GB (M.2 Type2280)'],
  [null, 'F: Samsung SSD 990 PRO 2TB (M.2 Type2280)'],
  ['GPU', 'GeForce RTX 4070 Ti SUPER'],
  ['電源', 'FSP HG2-1000.GEN5'],
  ['OS', 'Win11 Pro 64bit'],
  ['ケース', 'Define 7'],
  ['キーボード', 'HHKB Professional2 (無刻印)'],
  ['マウス', 'Logicool MXTB1s'],
]

const replaceLog: TableData<5> = [
  ['日付', '種別', '換装前', '換装後', '備考'],
  [
    '2023/04/30',
    'Eドライブ',
    'Samsung SSD 850 EVO 250GB (SATA)',
    'Samsung SSD 960 EVO 250GB (M.2 Type2280)',
    null,
  ],
  [
    '2023/05/28',
    'Dドライブ',
    'WD Red 3TB WD30EFRX (SATA)',
    'Samsung SSD 870 EVO 4TB (SATA)',
    null,
  ],
  [
    '2024/01/30',
    'GPU',
    'GeForce RTX 2080',
    'GeForce RTX 4070 Ti SUPER',
    '発売されたばかりで気になってしまった',
  ],
  [
    '2024/03/12',
    'Fドライブ',
    'Samsung SSD 860 EVO 1TB (SATA)',
    'Samsung SSD 990 PRO 2TB (M.2 Type2280)',
    null,
  ],
  ['2024/07/15', 'ケース', 'Define R5', 'Define 7', null],
  [
    '2024/08/16',
    'M/B',
    'PRIME H670-PLUS D4',
    'TUF GAMING Z790-PLUS WIFI D4',
    <>
      VRMフェーズが8から16+1に増え、さらにヒートシンクも付いた
      <br />
      CPUへの電力供給が安定し、持続的にフルロードできるようになった
    </>,
  ],
  [
    '2025/02/28',
    '電源',
    '玄人志向 KRPW-GK750W/90+',
    'FSP HG2-1000.GEN5',
    '1000Wで余裕が生まれ、また12VHPWRを変換せずそのまま使えるようになった',
  ],
]

export const Main3rdSpec: React.FC = () => (
  <Accordion title="Windows（第3世代自作メイン機）">
    <Table className={styles.table} data={specs} />

    <p>2022/12/16に2018年に作ったメイン機を組み直しました</p>

    <p>CPUやM/B以外ほぼすべてを流用しました</p>

    <Accordion title="換装履歴">
      <Table enableHeader data={replaceLog} />
    </Accordion>
  </Accordion>
)
