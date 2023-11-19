import classNames from 'classnames'

import { PropsWithClassName } from '@/@types/react'
import { TableData } from '@/common/interfaces/table'

import styles from './table.module.scss'

type Props = {
  data: TableData<number>
} & PropsWithClassName

export const Table: React.FC<Props> = (props) => (
  <div className={classNames(styles.wrapper, props.className)}>
    <table className={styles.table}>
      <tbody>
        {props.data.map((d, i) => (
          <tr key={i}>
            {d.map((v, j) => (
              <td key={j}>{v}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
