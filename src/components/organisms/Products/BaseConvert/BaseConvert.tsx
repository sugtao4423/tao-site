'use client'

import { useMemo, useState } from 'react'

import classNames from 'classnames'

import { PropsWithClassName } from '@/@types/react'
import { LabelInput } from '@/components/atoms/Input/LabelInput'
import { BaseConvertService } from '@/services/products/base-convert'

import styles from './baseConvert.module.scss'

export const BaseConvert: React.FC<PropsWithClassName> = (props) => {
  const [num, setNum] = useState<string>('')
  const service = useMemo(() => new BaseConvertService(setNum), [])

  return (
    <div className={classNames('row', props.className)}>
      {service.items.map((item) => (
        <div key={item.base} className={classNames('col-6', styles.col)}>
          <LabelInput
            autoFocus={item.autoFocus}
            label={`${item.base}進数`}
            pattern={item.pattern}
            type="text"
            value={BaseConvertService.value(num, item.base)}
            onChange={(e): void => service.onChange(e, item.base)}
          />
        </div>
      ))}
    </div>
  )
}
