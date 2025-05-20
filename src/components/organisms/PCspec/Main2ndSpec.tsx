import { TableData } from '@/common/interfaces/table'
import { Accordion } from '@/components/molecules/Accordion/Accordion'
import { Table } from '@/components/molecules/Table/Table'

import styles from './spec.module.scss'

const specs: TableData<2> = [
  ['CPU', 'Core i7 8700K'],
  ['M/B', 'ASRock Z390 Pro4'],
  ['メモリ', 'DDR4 64GB (16GBx4)'],
  ['HDD/SSD', 'C: Samsung SSD 960 EVO 250GB (M.2 Type2280)'],
  [null, 'D: WD Red 3TB WD30EFRX (SATA)'],
  [null, 'E: Samsung SSD 850 EVO 250GB (SATA)'],
  [null, 'F: Samsung SSD 860 EVO 1TB (SATA)'],
  ['GPU', 'GeForce RTX 2080'],
  ['電源', '玄人志向 KRPW-GK750W/90+'],
  ['OS', 'Windows 10 Pro 64bit'],
  ['ケース', 'Define R5'],
  ['キーボード', 'HHKB Professional2 (無刻印)'],
  ['マウス', 'Logicool MXTB1s'],
]

const replaceLog: TableData<5> = [
  ['日付', '種別', '換装前', '換装後', '備考'],
  [
    '組み直し時',
    'Dドライブ',
    null,
    '日立 2TB HDS723020BLA642 (SATA)',
    '旧メイン機から流用',
  ],
  ['組み直し時', 'GPU', null, 'GeForce GTX 1080', '旧メイン機から流用'],
  ['組み直し時', '電源', null, '玄人志向 KRPW-P630W/85+', '旧メイン機から流用'],
  ['組み直し時', 'ケース', null, 'Define R5', '旧メイン機から流用'],
  [
    '2019/06/13',
    '電源',
    '玄人志向 KRPW-P630W/85+',
    '玄人志向 KRPW-GK750W/90+',
    <>
      故障の前兆（フリーズ&amp;操作受け付けない）が発生
      <br />
      CPUとGPUを100%にしてテストしたところ見事フリーズした
    </>,
  ],
  [
    '2019/06/16',
    'GPU',
    'GeForce GTX 1080',
    'GeForce RTX 2080',
    'なんとなく購入',
  ],
  [
    '2019/11/04',
    'Dドライブ',
    '日立 2TB HDS723020BLA642 (SATA)',
    'WD Red 3TB WD30EFRX (SATA)',
    '不調になった',
  ],
  [
    '2021/01/19',
    'M/B',
    'ASUS TUF Z370-PLUS GAMING',
    'ASRock Z390 Pro4',
    '突然クラッシュなどの不調に見舞われた',
  ],
  ['2022/03/13', 'メモリ', 'DDR4 32GB (8GBx4)', 'DDR4 64GB (16GBx4)', null],
]

export const Main2ndSpec: React.FC = () => (
  <Accordion title="Windows（第2世代自作メイン機）">
    <p>
      <strong>現在はパーツを流用して新しいメイン機になっています</strong>
    </p>

    <Table className={styles.table} data={specs} />

    <p>2018/01/15に2011年に作ったメイン機を組み直しました</p>

    <p>前のメイン機からケースを流用しました</p>

    <Accordion title="換装履歴">
      <Table enableHeader data={replaceLog} />
    </Accordion>
  </Accordion>
)
