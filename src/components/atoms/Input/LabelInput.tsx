import { useId } from 'react'

import { clsx } from 'clsx'

type Props = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const LabelInput: React.FC<Props> = (props) => {
  const { label, ...inputProps } = props
  const id = useId()
  return (
    <>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        {...inputProps}
        className={clsx('form-control', props.className)}
        id={id}
      />
    </>
  )
}
