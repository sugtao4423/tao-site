'use client'

import { HTMLProps, useEffect, useRef } from 'react'

import { InmAudioFile } from '@/common/interfaces/inm'
import { TableData } from '@/common/interfaces/table'
import { DownloadIcon } from '@/components/icons/DownloadIcon'
import { PlayIcon } from '@/components/icons/PlayIcon'
import { Table } from '@/components/molecules/Table/Table'

import styles from './homobiAudioList.module.scss'

const Play: React.FC<{ onClick: () => void }> = (props) => (
  <PlayIcon className={styles.button} onClick={props.onClick} />
)

const Download: React.FC<HTMLProps<HTMLAnchorElement>> = (props) => (
  <a className={styles.link} {...props}>
    <DownloadIcon className={styles.button} />
  </a>
)

type Props = {
  files: InmAudioFile[]
}

export const HomobiAudioList: React.FC<Props> = (props) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const clickAudio = (src: string): void => {
    if (audioRef.current?.src.endsWith(src)) {
      audioRef.current.pause()
      audioRef.current = null
    } else if (audioRef.current && !audioRef.current.paused) {
      audioRef.current.pause()
      audioRef.current.src = src
      audioRef.current.play()
    } else {
      audioRef.current = new Audio()
      audioRef.current.src = src
      audioRef.current.play()
    }

    if (audioRef.current) {
      audioRef.current.onended = (): void => {
        audioRef.current = null
      }
    }
  }

  useEffect(() => (): void => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }
  })

  /* eslint-disable react/jsx-key */
  const tableData: TableData<3> = props.files.map((file) => [
    file.name,
    <Play onClick={(): void => clickAudio(file.path)} />,
    <Download download={file.filename} href={file.path} />,
  ])
  /* eslint-enable react/jsx-key */

  return <Table noVerticalDivider data={tableData} />
}
