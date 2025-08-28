import classNames from 'classnames'

import { PropsWithClassName } from '@/@types/react'

import styles from './kancolleHistory.module.scss'

export const KancolleHistory: React.FC<PropsWithClassName> = (props) => (
  <div className={classNames(styles.history, props.className)}>
    <div className="container">
      <p>
        <code>/kcs2/js/main.js?version=4.5.3.1</code>
        を解読して作ったボイス&amp;画像URLジェネレーター
      </p>

      <p>
        <a
          href="http://www.darkhorse.mydns.jp/contents/kancolle/access"
          rel="noopener noreferrer"
          target="_blank"
        >
          艦これURLジェネレータ | @Canter
        </a>
        <br />
        今までこちらを使わせていただいていたのだが、艦娘の指定に時間がかかるためオートコンプリートができるものを自作した
      </p>

      <p>
        艦娘データは適当に突っ込んだので全部404の艦娘とかいるかも
        <br />
        修理完了ボイスだけファイル名の算出方法が異なるようでほぼすべて404
      </p>

      <p>なにがあっても責任は負いません</p>

      <ul>
        <li>2025/08/28 リソースURLをIPからドメインに変更</li>
        <li>2023/11/08 最新のデータに更新</li>
        <li>2020/02/15 最新のデータに更新</li>
        <li>2020/02/02 戦闘BGMを追加</li>
        <li>2020/02/01 有志製作の艦娘、BGMデータから最新のものへ変更</li>
        <li>2020/01/31 作成</li>
      </ul>
    </div>
  </div>
)
