'use client'

import { useEffect, useState } from 'react'

import classNames from 'classnames'
import { parseAsString, useQueryStates } from 'nuqs'

import { PropsWithClassName } from '@/@types/react'
import { ZabbixHost } from '@/common/interfaces/api/zabbix'
import { getZabbixGraphPath } from '@/common/routes'
import { AutoReloadImage } from '@/components/atoms/Image/AutoReloadImage'

import styles from './serverStatus.module.scss'

const defaults = {
  hostId: '10199',
  graphId: '861',
}

type Props = {
  hosts: ZabbixHost[]
} & PropsWithClassName

export const ServerStatus: React.FC<Props> = (props) => {
  const [{ hostId, graphId }, setQuery] = useQueryStates({
    hostId: parseAsString,
    graphId: parseAsString,
  })
  const [showGraph, setShowGraph] = useState<boolean>(true)

  useEffect(() => {
    if (!hostId) setQuery(defaults)
  }, [hostId, setQuery])

  const thisHost = props.hosts.find((host) => host.id === hostId)
  const thisGraph = thisHost?.graphs.find((graph) => graph.id === graphId)
  const thisGraphPaths = thisGraph
    ? getZabbixGraphPath(thisGraph.type, thisGraph.id)
    : null

  const onChangeHost = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setQuery({ hostId: e.target.value })
  }
  const onChangeGraph = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ): Promise<void> => {
    setShowGraph(false)
    await setQuery({ hostId, graphId: e.target.value })
    setShowGraph(true)
  }

  return (
    <div className={classNames('row', styles.row, props.className)}>
      <div className={classNames('col-12 col-sm-6', styles.hostSelector)}>
        <select
          className="form-select"
          value={hostId ?? ''}
          onChange={onChangeHost}
        >
          {props.hosts.map((host) => (
            <option key={host.id} value={host.id}>
              {host.name}
            </option>
          ))}
        </select>
      </div>
      <div className={classNames('col-12 col-sm-6', styles.graphSelector)}>
        <select
          className="form-select"
          value={graphId ?? ''}
          onChange={(e) => {
            onChangeGraph(e)
          }}
        >
          <option value="">-</option>
          {thisHost?.graphs.map((graph) => (
            <option key={graph.id} value={graph.id}>
              {graph.name}
            </option>
          ))}
        </select>
      </div>

      {thisGraphPaths && showGraph && (
        <div className="col-12 col-lg-10">
          <a href={thisGraphPaths} rel="noreferrer" target="_blank">
            <AutoReloadImage alt="Graph" interval={300} src={thisGraphPaths} />
          </a>
        </div>
      )}
    </div>
  )
}
