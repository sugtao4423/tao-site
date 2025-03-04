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

export const Main3rdSpec: React.FC = () => (
  <Accordion title="Windows（第3世代自作メイン機）">
    <Table className={styles.table} data={specs} />

    <p>2022/12/16に2018年に作ったメイン機を組み直しました</p>

    <p>CPUやM/B以外ほぼすべてを流用しました</p>

    <ul>
      <li>
        2023/04/30に雑多なファイルを保存しているEドライブのSATA SSDをM.2へ換装
      </li>
      <li>
        同年05/28にドキュメント等を保存しているDドライブの3TB HDDを4TBのSATA
        SSDに換装
      </li>
      <li>
        2024/01/30に発売されたばかりのRTX4070 Ti
        SUPERが気になってしまい購入。RTX2080から換装
      </li>
      <li>
        同年03/12にFドライブのSamsung SSD 860 EVO 1TB (SATA)をM.2の2TBに換装
      </li>
      <li>同年07/15にケースをDefineR5からDefine7に換装</li>
      <li>
        同年08/16にM/Bを<code>H670-PLUS D4</code>から
        <code>Z790-PLUS WIFI D4</code>に換装
        <br />
        VRMフェーズが8から16+1に増え、さらにヒートシンクも付いた
        <br />
        そのためCPUへの電力供給が安定し持続的にフルロードできるようになった
      </li>
      <li>
        2025/02/28に電源を<code>KRPW-GK750W/90+</code>から
        <code>HG2-1000.GEN5</code>に換装
        <br />
        1000Wで余裕が生まれ、また12VHPWRを変換せずそのまま使えるようになった
      </li>
    </ul>
  </Accordion>
)
