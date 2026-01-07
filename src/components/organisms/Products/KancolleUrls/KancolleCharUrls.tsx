'use client'

import { useState } from 'react'

import { clsx } from 'clsx'

import { KancolleShipData } from '@/common/interfaces/kancolle-urls'
import { H2 } from '@/components/atoms/Heading/H2'
import { LabelInput } from '@/components/atoms/Input/LabelInput'
import { KancolleUrlsService } from '@/services/products/kancolle-urls'
import {
  pictureItems,
  voiceItems,
} from '@/services/products/kancolle-urls-const'

import styles from './kancolleUrls.module.scss'

type Props = {
  ships: KancolleShipData[]
}

export const KancolleCharUrls: React.FC<Props> = (props) => {
  const [ship, setShip] = useState<KancolleShipData | null>(null)

  const onChangeShip = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const ship = props.ships.find((ship) => ship.name === e.target.value)
    setShip(ship ?? null)
  }

  return (
    <>
      <div className="row">
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <LabelInput label="艦娘" list="shipList" onChange={onChangeShip} />
          <datalist id="shipList">
            {props.ships.map((ship) => (
              <option key={ship.id} value={ship.name}>
                {ship.yomi}
              </option>
            ))}
          </datalist>
        </div>
      </div>

      <div className={styles.section}>
        <H2>Voices</H2>
        <div className="row">
          {ship &&
            voiceItems.map((item) => (
              <div
                key={item.id}
                className={clsx('col-6 col-sm-4 col-lg-3', styles.item)}
              >
                <a
                  href={KancolleUrlsService.voiceUrl(
                    ship.id,
                    ship.code,
                    item.id
                  )}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {item.name}
                </a>
              </div>
            ))}
        </div>
      </div>

      <div className={styles.section}>
        <H2>Pictures</H2>
        <div className="row">
          {ship &&
            pictureItems.map((item) => (
              <div
                key={item.id}
                className={clsx('col-6 col-sm-4 col-lg-3', styles.item)}
              >
                <a
                  href={KancolleUrlsService.pictureUrl(ship.id, item.id)}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {item.name}
                </a>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
