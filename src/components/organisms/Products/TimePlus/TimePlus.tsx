'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

import { clsx } from 'clsx'

import { PropsWithClassName } from '@/@types/react'
import { H3 } from '@/components/atoms/Heading/H3'
import { TimePlusService } from '@/services/products/time-plus'

import styles from './timePlus.module.scss'

export const TimePlus: React.FC<PropsWithClassName> = (props) => {
  const [logs, setLogs] = useState<string[]>([])

  const [total, setTotal] = useState<number>(0)
  const [hours, setHours] = useState<string>('')
  const [minutes, setMinutes] = useState<string>('')
  const [seconds, setSeconds] = useState<string>('')

  const hoursRef = useRef<HTMLInputElement>(null)
  const focusHours = (): void => hoursRef.current?.focus()
  useEffect(() => {
    focusHours()
  }, [])

  const service = useMemo(
    () =>
      new TimePlusService({
        setLogs,
        setTotal,
        setHours,
        setMinutes,
        setSeconds,
      }),
    []
  )
  const onAdd = (e: React.KeyboardEvent<HTMLInputElement>): void =>
    service.onSecondsInputKeyDown(e, focusHours, { hours, minutes, seconds })

  return (
    <div className={props.className}>
      <div className={clsx('row', styles.row)}>
        <div className={clsx('col-4', styles.resetWrapper)}>
          <button
            className="btn btn-outline-info"
            type="button"
            onClick={(): void => service.reset()}
          >
            Reset
          </button>
        </div>
        <div className="col-8 col-md-4">
          <input
            readOnly
            className={clsx('form-control form-control-lg', styles.resultInput)}
            type="text"
            value={TimePlusService.secToTime(total)}
          />
        </div>
      </div>
      <div className={clsx('row', styles.row)}>
        {[
          { ph: 'hour', val: hours, change: setHours, ref: hoursRef },
          { ph: 'min', val: minutes, change: setMinutes },
          { ph: 'sec', val: seconds, change: setSeconds, keyDown: onAdd },
        ].map((item) => (
          <div key={item.ph} className="col-4">
            <input
              className="form-control form-control-lg"
              pattern="[0-9]*"
              placeholder={item.ph}
              ref={item.ref}
              type="text"
              value={item.val}
              onChange={(e): void => {
                if (!e.target.validity.valid) return
                item.change(e.target.value)
              }}
              onKeyDown={item.keyDown}
            />
          </div>
        ))}
      </div>

      <H3 className={styles.logTitle}>ログ</H3>
      <ol>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ol>
    </div>
  )
}
