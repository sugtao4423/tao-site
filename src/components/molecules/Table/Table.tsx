import classNames from 'classnames'

import { PropsWithClassName } from '@/@types/react'
import { TableData } from '@/common/interfaces/table'

import styles from './table.module.scss'

type Props = {
  data: TableData<number>
  enableHeader?: boolean
  noVerticalDivider?: boolean
} & PropsWithClassName

export const Table: React.FC<Props> = (props) => {
  const thead = props.enableHeader ? props.data[0] : []
  const tbody = props.enableHeader ? props.data.slice(1) : props.data

  return (
    <div className={classNames(styles.wrapper, props.className)}>
      <table
        className={classNames(styles.table, {
          [styles.noVerticalDivider]: props.noVerticalDivider,
        })}
      >
        {thead.length > 0 && (
          <thead>
            <tr>
              {thead.map((v, i) => (
                <th key={i}>{v}</th>
              ))}
            </tr>
          </thead>
        )}

        <tbody>
          {tbody.map((d, i) => (
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
}
