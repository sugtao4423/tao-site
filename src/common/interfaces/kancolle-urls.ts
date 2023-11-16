export interface KancolleShipData {
  id: number
  name: string
  yomi: string
  code: string
  introduction: string | null
}

export interface KancollePortBgmData {
  id: number
  name: string
}

export interface KancolleBattleBgmData {
  id: number

  /** Ex. "1-2" `[1, 2]` */
  map_no: [number, number]

  moving_bgm: number

  /** BGM: `[noon, night]` */
  map_bgm: [number, number]

  /** BGM: `[noon, night]` */
  boss_bgm: [number, number]
}
