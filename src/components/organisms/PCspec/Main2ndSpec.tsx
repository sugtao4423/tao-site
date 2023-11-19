import { TableData } from '@/common/interfaces/table'
import { Accordion } from '@/components/molecules/Accordion/Accordion'
import { Table } from '@/components/molecules/Table/Table'

import styles from './spec.module.scss'

const specs: TableData<2> = [
  ['CPU', 'Core i7 8700K'],
  ['M/B', 'Z390 Pro4'],
  ['メモリ', 'DDR4 64GB (16GBx4)'],
  ['HDD/SSD', 'C: Samsung SSD 250GB 960 EVO (M.2 Type2280)'],
  [null, 'D: WD Red 3TB WD30EFRX (SATA)'],
  [null, 'E: Samsung SSD 250GB 850 EVO (SATA)'],
  [null, 'F: Samsung SSD 1TB 860 EVO (SATA)'],
  ['GPU', 'GeForce RTX 2080'],
  ['電源', 'KRPW-GK750W/90+'],
  ['OS', 'Win10 Pro 64bit'],
  ['ケース', 'Define R5'],
  ['キーボード', 'HHKB Professional2 (無刻印)'],
  ['マウス', 'Logicool MXTB1s'],
]

export const Main2ndSpec: React.FC = () => (
  <Accordion title="Windows（第2世代自作メイン機）">
    <p>
      <strong>現在はパーツを流用して新しいメイン機になっています</strong>
    </p>

    <Table className={styles.table} data={specs} />

    <p>2018/01/15に2011年に作ったメイン機を組み直しました</p>

    <p>前のメイン機からケースを流用しました</p>

    <ul>
      <li>
        2019/06/13に電源故障の前兆（フリーズ&amp;操作受け付けない）が発生
        <br />
        CPU、GPU共に100%にしてテストしたところ見事フリーズしたので電源を
        <code>KRPW-P630W/85+</code>から換装
      </li>
      <li>同年06/16になんとなくRTX2080を購入。GTX1080から換装</li>
      <li>
        同年11/04に前のメイン機から使っていた<code>HDS723020BLA642</code>
        が不調になったためWD製HDDへ換装
      </li>
      <li>
        2021/01/19に突然クラッシュなどの不調に見舞われたM/B
        <code>TUF Z370-Plus Gaming</code>から換装
      </li>
      <li>2022/03/13にメモリを8GBx4から16GBx4へ換装</li>
    </ul>
  </Accordion>
)
