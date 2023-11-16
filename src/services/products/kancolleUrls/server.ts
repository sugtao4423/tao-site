import 'server-only'
import { readFileSync, readdirSync } from 'fs'

import {
  APIData,
  APIMstShip,
  Convert,
} from '@/common/interfaces/kancolle-getData'
import {
  KancolleBattleBgmData,
  KancollePortBgmData,
  KancolleShipData,
} from '@/common/interfaces/kancolle-urls'

export class KancolleUrlsServer {
  private readonly assetsDirPath = './src/assets'

  private readonly kancolleGetDataPrefix = 'kancolle_getData_'

  private readonly apiData: APIData

  /**
   * Get latest getData file name.
   */
  private get latestGetDataFile(): string {
    const assetFiles = readdirSync(this.assetsDirPath)
    const getDataFiles = assetFiles.filter((f) =>
      f.startsWith(this.kancolleGetDataPrefix)
    )
    return getDataFiles.sort((a, b) =>
      b.localeCompare(a, undefined, { numeric: true })
    )[0]
  }

  constructor() {
    const data = readFileSync(`${this.assetsDirPath}/${this.latestGetDataFile}`)
    const jsonText = data.toString().replace(/^svdata=/, '')
    const json = Convert.toGetData(jsonText)
    this.apiData = json.api_data
  }

  /**
   * Get specific ship's code.
   */
  private getShipCode(shipId: number): KancolleShipData['code'] {
    const result = this.apiData.api_mst_shipgraph.find(
      (shipgraph) => shipgraph.api_id === shipId
    )
    if (!result) {
      throw new Error(`Ship ID ${shipId} not found in getData file.`)
    }
    return result.api_filename
  }

  /**
   * Get specific ship's introduction.
   *
   * If introduction is empty, return `null`.
   */
  private static getShipIntroduction(
    shipObj: APIMstShip
  ): KancolleShipData['introduction'] {
    const introduction = shipObj.api_getmes ?? ''
    const trimmed = introduction.trim()
    if (trimmed === '' || trimmed === '<br>') {
      return null
    }
    return trimmed.replaceAll('<br>', '\n')
  }

  /**
   * Get ship data.
   */
  public getShipData(): KancolleShipData[] {
    return this.apiData.api_mst_ship.map(
      (ship): KancolleShipData => ({
        id: ship.api_id,
        name: ship.api_name,
        yomi: ship.api_yomi,
        code: this.getShipCode(ship.api_id),
        introduction: KancolleUrlsServer.getShipIntroduction(ship),
      })
    )
  }

  /**
   * Get port BGM data.
   */
  public getPortBgmData(): KancollePortBgmData[] {
    return this.apiData.api_mst_bgm.map(
      (bgm): KancollePortBgmData => ({
        id: bgm.api_id,
        name: bgm.api_name,
      })
    )
  }

  /**
   * Get battle BGM data.
   */
  public getBattleBgmData(): KancolleBattleBgmData[] {
    return this.apiData.api_mst_mapbgm.map((bgm): KancolleBattleBgmData => {
      const mapBgm = bgm.api_map_bgm
      const bossBgm = bgm.api_boss_bgm

      return {
        id: bgm.api_id,
        map_no: [bgm.api_maparea_id, bgm.api_no],
        moving_bgm: bgm.api_moving_bgm,
        map_bgm: [mapBgm[0], mapBgm[1]],
        boss_bgm: [bossBgm[0], bossBgm[1]],
      }
    })
  }
}
