'use client'

import { useCallback, useEffect, useState } from 'react'

import { PropsWithClassName } from '@/@types/react'

type Props = {
  alt?: string
  src: string

  /* Interval in seconds */
  interval: number
} & PropsWithClassName

export const AutoReloadImage: React.FC<Props> = (props) => {
  const [src, setSrc] = useState<string>('')

  const getTimestampUrl = useCallback(() => {
    const [url, query] = props.src.split('?')
    const params = new URLSearchParams(query)
    params.set('t', Date.now().toString())
    return `${url}?${params.toString()}`
  }, [props.src])

  useEffect(() => {
    setSrc(getTimestampUrl())
  }, [getTimestampUrl])

  useEffect(() => {
    const timer = setInterval(() => {
      setSrc(getTimestampUrl())
    }, props.interval * 1000)
    return () => clearInterval(timer)
  }, [getTimestampUrl, props.interval])

  if (!src) return null

  // eslint-disable-next-line @next/next/no-img-element
  return <img alt={props.alt} className={props.className} src={src} />
}
