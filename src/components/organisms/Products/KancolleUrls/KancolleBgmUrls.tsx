import classNames from 'classnames'

import { PropsWithClassName } from '@/@types/react'
import {
  KancolleBattleBgmData,
  KancollePortBgmData,
} from '@/common/interfaces/kancolle-urls'
import { H2 } from '@/components/atoms/Heading/H2'
import { Accordion } from '@/components/molecules/Accordion/Accordion'
import { KancolleUrlsService } from '@/services/products/kancolleUrls/main'

import styles from './kancolleUrls.module.scss'

type Props = {
  portBgms: KancollePortBgmData[]
  battleBgms: KancolleBattleBgmData[]
} & PropsWithClassName

export const KancolleBgmUrls: React.FC<Props> = (props) => (
  <div className={props.className}>
    <H2>BGM</H2>

    <Accordion title="母港BGM">
      <div className="row">
        {props.portBgms.map((bgm) => (
          <div
            key={bgm.id}
            className={classNames('col-6 col-md-4 col-lg-3', styles.item)}
          >
            <a
              href={KancolleUrlsService.bgmLink(bgm.id, 'port')}
              rel="noopener noreferrer"
              target="_blank"
            >
              {`${bgm.id}. ${bgm.name}`}
            </a>
          </div>
        ))}
      </div>
    </Accordion>

    <Accordion title="戦闘BGM">
      <div className="row">
        {props.battleBgms.map((bgm) => (
          <div
            key={bgm.id}
            className={classNames('col-6 col-md-4 col-xl-3', styles.item)}
          >
            <Accordion title={`${bgm.map_no.join('-')}`}>
              <div className="row">
                {KancolleUrlsService.battleBgmItems(bgm).map((item) => (
                  <div key={item.name} className="col-12 col-lg-6">
                    <a
                      href={item.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </Accordion>
          </div>
        ))}
      </div>
    </Accordion>
  </div>
)
