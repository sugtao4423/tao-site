import { SetState } from '@/@types/react'

export class TimePlusService {
  private readonly setLogs: SetState<string[]>

  private readonly setTotal: SetState<number>

  private readonly setHours: SetState<string>

  private readonly setMinutes: SetState<string>

  private readonly setSeconds: SetState<string>

  constructor(props: {
    setLogs: SetState<string[]>
    setTotal: SetState<number>
    setHours: SetState<string>
    setMinutes: SetState<string>
    setSeconds: SetState<string>
  }) {
    this.setLogs = props.setLogs
    this.setTotal = props.setTotal
    this.setHours = props.setHours
    this.setMinutes = props.setMinutes
    this.setSeconds = props.setSeconds
  }

  public static secToTime(sec: number): string {
    return [Math.floor(sec / 3600), Math.floor((sec % 3600) / 60), sec % 60]
      .map((n) => n.toString().padStart(2, '0'))
      .join(':')
  }

  public reset(): void {
    this.setLogs([])
    this.setTotal(0)
    this.setHours('')
    this.setMinutes('')
    this.setSeconds('')
  }

  public onSecondsInputKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>,
    focusHours: () => void,
    states: {
      hours: string
      minutes: string
      seconds: string
    }
  ): void {
    if (
      e.altKey ||
      e.ctrlKey ||
      e.shiftKey ||
      (e.key !== 'Enter' && e.key !== 'Tab')
    ) {
      return
    }
    e.preventDefault()

    const { hours, minutes, seconds } = states
    const time = Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds)
    const timeStr = TimePlusService.secToTime(time)

    this.setLogs((logs) => [...logs, timeStr])
    this.setTotal((total) => total + time)

    this.setHours('')
    this.setMinutes('')
    this.setSeconds('')

    focusHours()
  }
}
