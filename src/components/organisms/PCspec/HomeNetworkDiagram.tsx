'use client'

import { useEffect, useState } from 'react'

import axios from 'axios'
import classNames from 'classnames'

import { PropsWithClassName } from '@/@types/react'
import { HomeNetworkDiagramUrl } from '@/common/interfaces/api/home-network-diagram-url'
import { Routes } from '@/common/routes'
import { H2 } from '@/components/atoms/Heading/H2'

import styles from './homeNetworkDiagram.module.scss'

const getNetworkDiagram = async (): Promise<HomeNetworkDiagramUrl | null> => {
  try {
    const res = await axios.get<HomeNetworkDiagramUrl>(
      Routes.apiHomeNetworkDiagramUrl
    )
    return res.data
  } catch {
    return null
  }
}

export const HomeNetworkDiagram: React.FC<PropsWithClassName> = (props) => {
  const [diagram, setDiagram] = useState<HomeNetworkDiagramUrl | null>(null)

  useEffect(() => {
    getNetworkDiagram().then(setDiagram)
  }, [])

  if (!diagram?.diagram_url) return null

  return (
    <div className={classNames(styles.content, props.className)}>
      <H2>自宅ネットワーク図</H2>
      <a href={diagram.diagram_url} rel="noreferrer" target="_blank">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Home Network Diagram"
          className={styles.diagram}
          src={diagram.diagram_url}
        />
      </a>
    </div>
  )
}
