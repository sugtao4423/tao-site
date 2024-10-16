import { SetState } from '@/@types/react'

type Base = 2 | 8 | 10 | 16

interface Item {
  base: Base
  autoFocus?: boolean
  pattern: string
}

export class BaseConvertService {
  public readonly items: Item[] = [
    {
      base: 2,
      pattern: '[01]+',
    },
    {
      base: 8,
      pattern: '[0-7]+',
    },
    {
      base: 10,
      autoFocus: true,
      pattern: '[0-9]+',
    },
    {
      base: 16,
      pattern: '[0-9a-fA-F]+',
    },
  ]

  private readonly setNum: SetState<string>

  constructor(setNum: SetState<string>) {
    this.setNum = setNum
  }

  public onChange(e: React.ChangeEvent<HTMLInputElement>, base: Base): void {
    if (!e.target.validity.valid) return

    const num = parseInt(e.target.value, base)
    if (Number.isNaN(num)) {
      this.setNum('')
      return
    }
    this.setNum(num.toString(10))
  }

  public static value(num: string, base: Base): string {
    if (num === '') return ''
    return parseInt(num, 10).toString(base)
  }
}
