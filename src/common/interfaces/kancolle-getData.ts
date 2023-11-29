import 'server-only'

/*
 * Generated: https://app.quicktype.io/
 * GitHub: https://github.com/glideapps/quicktype
 */

/* eslint-disable */

export interface GetData {
  api_result: number
  api_result_msg: string
  api_data: APIData
}

export interface APIData {
  api_mst_ship: APIMstShip[]
  api_mst_slotitem_equiptype: APIMstSlotitemEquiptype[]
  api_mst_equip_exslot: number[]
  api_mst_equip_exslot_ship: { [key: string]: APIMstEquipExslotShip }
  api_mst_stype: APIMstStype[]
  api_mst_slotitem: APIMstSlotitem[]
  api_mst_furnituregraph: APIMstFurnituregraph[]
  api_mst_useitem: APIMstUseitem[]
  api_mst_payitem: APIMstPayitem[]
  api_mst_item_shop: APIMstItemShop
  api_mst_maparea: APIMstMaparea[]
  api_mst_mapinfo: APIMstMapinfo[]
  api_mst_mapbgm: APIMstMapbgm[]
  api_mst_mission: APIMstMission[]
  api_mst_const: APIMstConst
  api_mst_shipupgrade: { [key: string]: number }[]
  api_mst_bgm: APIMstBgm[]
  api_mst_equip_ship: APIMstEquipShip[]
  api_mst_furniture: APIMstFurniture[]
  api_mst_shipgraph: APIMstShipgraph[]
}

export interface APIMstBgm {
  api_id: number
  api_name: string
}

export interface APIMstConst {
  api_parallel_quest_max: API
  api_dpflag_quest: API
  api_boko_max_ships: API
}

export interface API {
  api_string_value: string
  api_int_value: number
}

export interface APIMstEquipExslotShip {
  api_ship_ids: { [key: string]: number } | null
  api_stypes: { [key: string]: number } | null
  api_ctypes: { [key: string]: number } | null
  api_req_level: number
}

export interface APIMstEquipShip {
  api_ship_id: number
  api_equip_type: number[]
}

export interface APIMstFurniture {
  api_id: number
  api_type: number
  api_no: number
  api_title: string
  api_description: string
  api_rarity: number
  api_price: number
  api_saleflg: number
  api_season: number
  api_version: number
  api_outside_id: number
  api_active_flag: number
}

export interface APIMstFurnituregraph {
  api_id: number
  api_type: number
  api_no: number
  api_filename: string
  api_version: string
}

export interface APIMstItemShop {
  api_cabinet_1: number[]
  api_cabinet_2: number[]
}

export interface APIMstMaparea {
  api_id: number
  api_name: string
  api_type: number
}

export interface APIMstMapbgm {
  api_id: number
  api_maparea_id: number
  api_no: number
  api_moving_bgm: number
  api_map_bgm: number[]
  api_boss_bgm: number[]
}

export interface APIMstMapinfo {
  api_id: number
  api_maparea_id: number
  api_no: number
  api_name: string
  api_level: number
  api_opetext: string
  api_infotext: string
  api_item: number[]
  api_max_maphp: null
  api_required_defeat_count: number | null
  api_sally_flag: number[]
}

export interface APIMstMission {
  api_id: number
  api_disp_no: string
  api_maparea_id: number
  api_name: string
  api_details: string
  api_reset_type: number
  api_damage_type: number
  api_time: number
  api_deck_num: number
  api_difficulty: number
  api_use_fuel: number
  api_use_bull: number
  api_win_item1: number[]
  api_win_item2: number[]
  api_win_mat_level: number[]
  api_return_flag: number
  api_sample_fleet: number[]
}

export interface APIMstPayitem {
  api_id: number
  api_type: number
  api_name: string
  api_description: string
  api_shop_description: string
  api_item: number[]
  api_price: number
}

export interface APIMstShip {
  api_id: number
  api_sortno?: number
  api_sort_id: number
  api_name: string
  api_yomi: string
  api_stype: number
  api_ctype: number
  api_afterlv?: number
  api_aftershipid?: string
  api_taik?: number[]
  api_souk?: number[]
  api_houg?: number[]
  api_raig?: number[]
  api_tyku?: number[]
  api_luck?: number[]
  api_soku: number
  api_leng?: number
  api_slot_num: number
  api_maxeq?: number[]
  api_buildtime?: number
  api_broken?: number[]
  api_powup?: number[]
  api_backs?: number
  api_getmes?: string
  api_afterfuel?: number
  api_afterbull?: number
  api_fuel_max?: number
  api_bull_max?: number
  api_voicef?: number
  api_tais?: number[]
}

export interface APIMstShipgraph {
  api_id: number
  api_filename: string
  api_version: string[]
  api_battle_n?: number[]
  api_battle_d?: number[]
  api_sortno?: number
  api_boko_n?: number[]
  api_boko_d?: number[]
  api_kaisyu_n?: number[]
  api_kaisyu_d?: number[]
  api_kaizo_n?: number[]
  api_kaizo_d?: number[]
  api_map_n?: number[]
  api_map_d?: number[]
  api_ensyuf_n?: number[]
  api_ensyuf_d?: number[]
  api_ensyue_n?: number[]
  api_weda?: number[]
  api_wedb?: number[]
  api_pa?: number[]
  api_pab?: number[]
}

export interface APIMstSlotitem {
  api_id: number
  api_sortno: number
  api_name: string
  api_type: number[]
  api_taik: number
  api_souk: number
  api_houg: number
  api_raig: number
  api_soku: number
  api_baku: number
  api_tyku: number
  api_tais: number
  api_atap: number
  api_houm: number
  api_raim: number
  api_houk: number
  api_raik: number
  api_bakk: number
  api_saku: number
  api_sakb: number
  api_luck: number
  api_leng: number
  api_rare: number
  api_broken: number[]
  api_usebull: string
  api_version?: number
  api_cost?: number
  api_distance?: number
}

export interface APIMstSlotitemEquiptype {
  api_id: number
  api_name: string
  api_show_flg: number
}

export interface APIMstStype {
  api_id: number
  api_sortno: number
  api_name: string
  api_scnt: number
  api_kcnt: number
  api_equip_type: { [key: string]: number }
}

export interface APIMstUseitem {
  api_id: number
  api_usetype: number
  api_category: number
  api_name: string
  api_description: string[]
  api_price: number
}

export class Convert {
  public static toGetData(json: string): GetData {
    return cast(JSON.parse(json), r('GetData'))
  }

  public static getDataToJson(value: GetData): string {
    return JSON.stringify(uncast(value, r('GetData')), null, 2)
  }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
  const prettyTyp = prettyTypeName(typ)
  const parentText = parent ? ` on ${parent}` : ''
  const keyText = key ? ` for key "${key}"` : ''
  throw Error(
    `Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(
      val
    )}`
  )
}

function prettyTypeName(typ: any): string {
  if (Array.isArray(typ)) {
    if (typ.length === 2 && typ[0] === undefined) {
      return `an optional ${prettyTypeName(typ[1])}`
    } else {
      return `one of [${typ
        .map((a) => {
          return prettyTypeName(a)
        })
        .join(', ')}]`
    }
  } else if (typeof typ === 'object' && typ.literal !== undefined) {
    return typ.literal
  } else {
    return typeof typ
  }
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {}
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }))
    typ.jsonToJS = map
  }
  return typ.jsonToJS
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {}
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }))
    typ.jsToJSON = map
  }
  return typ.jsToJSON
}

function transform(
  val: any,
  typ: any,
  getProps: any,
  key: any = '',
  parent: any = ''
): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val
    return invalidValue(typ, val, key, parent)
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length
    for (let i = 0; i < l; i++) {
      const typ = typs[i]
      try {
        return transform(val, typ, getProps)
      } catch (_) {}
    }
    return invalidValue(typs, val, key, parent)
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val
    return invalidValue(
      cases.map((a) => {
        return l(a)
      }),
      val,
      key,
      parent
    )
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue(l('array'), val, key, parent)
    return val.map((el) => transform(el, typ, getProps))
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null
    }
    const d = new Date(val)
    if (isNaN(d.valueOf())) {
      return invalidValue(l('Date'), val, key, parent)
    }
    return d
  }

  function transformObject(
    props: { [k: string]: any },
    additional: any,
    val: any
  ): any {
    if (val === null || typeof val !== 'object' || Array.isArray(val)) {
      return invalidValue(l(ref || 'object'), val, key, parent)
    }
    const result: any = {}
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key]
      const v = Object.prototype.hasOwnProperty.call(val, key)
        ? val[key]
        : undefined
      result[prop.key] = transform(v, prop.typ, getProps, key, ref)
    })
    Object.getOwnPropertyNames(val).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key, ref)
      }
    })
    return result
  }

  if (typ === 'any') return val
  if (typ === null) {
    if (val === null) return val
    return invalidValue(typ, val, key, parent)
  }
  if (typ === false) return invalidValue(typ, val, key, parent)
  let ref: any = undefined
  while (typeof typ === 'object' && typ.ref !== undefined) {
    ref = typ.ref
    typ = typeMap[typ.ref]
  }
  if (Array.isArray(typ)) return transformEnum(typ, val)
  if (typeof typ === 'object') {
    return typ.hasOwnProperty('unionMembers')
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty('arrayItems')
        ? transformArray(typ.arrayItems, val)
        : typ.hasOwnProperty('props')
          ? transformObject(getProps(typ), typ.additional, val)
          : invalidValue(typ, val, key, parent)
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== 'number') return transformDate(val)
  return transformPrimitive(typ, val)
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps)
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps)
}

function l(typ: any) {
  return { literal: typ }
}

function a(typ: any) {
  return { arrayItems: typ }
}

function u(...typs: any[]) {
  return { unionMembers: typs }
}

function o(props: any[], additional: any) {
  return { props, additional }
}

function m(additional: any) {
  return { props: [], additional }
}

function r(name: string) {
  return { ref: name }
}

const typeMap: any = {
  GetData: o(
    [
      { json: 'api_result', js: 'api_result', typ: 0 },
      { json: 'api_result_msg', js: 'api_result_msg', typ: '' },
      { json: 'api_data', js: 'api_data', typ: r('APIData') },
    ],
    false
  ),
  APIData: o(
    [
      { json: 'api_mst_ship', js: 'api_mst_ship', typ: a(r('APIMstShip')) },
      {
        json: 'api_mst_slotitem_equiptype',
        js: 'api_mst_slotitem_equiptype',
        typ: a(r('APIMstSlotitemEquiptype')),
      },
      { json: 'api_mst_equip_exslot', js: 'api_mst_equip_exslot', typ: a(0) },
      {
        json: 'api_mst_equip_exslot_ship',
        js: 'api_mst_equip_exslot_ship',
        typ: m(r('APIMstEquipExslotShip')),
      },
      { json: 'api_mst_stype', js: 'api_mst_stype', typ: a(r('APIMstStype')) },
      {
        json: 'api_mst_slotitem',
        js: 'api_mst_slotitem',
        typ: a(r('APIMstSlotitem')),
      },
      {
        json: 'api_mst_furnituregraph',
        js: 'api_mst_furnituregraph',
        typ: a(r('APIMstFurnituregraph')),
      },
      {
        json: 'api_mst_useitem',
        js: 'api_mst_useitem',
        typ: a(r('APIMstUseitem')),
      },
      {
        json: 'api_mst_payitem',
        js: 'api_mst_payitem',
        typ: a(r('APIMstPayitem')),
      },
      {
        json: 'api_mst_item_shop',
        js: 'api_mst_item_shop',
        typ: r('APIMstItemShop'),
      },
      {
        json: 'api_mst_maparea',
        js: 'api_mst_maparea',
        typ: a(r('APIMstMaparea')),
      },
      {
        json: 'api_mst_mapinfo',
        js: 'api_mst_mapinfo',
        typ: a(r('APIMstMapinfo')),
      },
      {
        json: 'api_mst_mapbgm',
        js: 'api_mst_mapbgm',
        typ: a(r('APIMstMapbgm')),
      },
      {
        json: 'api_mst_mission',
        js: 'api_mst_mission',
        typ: a(r('APIMstMission')),
      },
      { json: 'api_mst_const', js: 'api_mst_const', typ: r('APIMstConst') },
      { json: 'api_mst_shipupgrade', js: 'api_mst_shipupgrade', typ: a(m(0)) },
      { json: 'api_mst_bgm', js: 'api_mst_bgm', typ: a(r('APIMstBgm')) },
      {
        json: 'api_mst_equip_ship',
        js: 'api_mst_equip_ship',
        typ: a(r('APIMstEquipShip')),
      },
      {
        json: 'api_mst_furniture',
        js: 'api_mst_furniture',
        typ: a(r('APIMstFurniture')),
      },
      {
        json: 'api_mst_shipgraph',
        js: 'api_mst_shipgraph',
        typ: a(r('APIMstShipgraph')),
      },
    ],
    false
  ),
  APIMstBgm: o(
    [
      { json: 'api_id', js: 'api_id', typ: 0 },
      { json: 'api_name', js: 'api_name', typ: '' },
    ],
    false
  ),
  APIMstConst: o(
    [
      {
        json: 'api_parallel_quest_max',
        js: 'api_parallel_quest_max',
        typ: r('API'),
      },
      { json: 'api_dpflag_quest', js: 'api_dpflag_quest', typ: r('API') },
      { json: 'api_boko_max_ships', js: 'api_boko_max_ships', typ: r('API') },
    ],
    false
  ),
  API: o(
    [
      { json: 'api_string_value', js: 'api_string_value', typ: '' },
      { json: 'api_int_value', js: 'api_int_value', typ: 0 },
    ],
    false
  ),
  APIMstEquipExslotShip: o(
    [
      { json: 'api_ship_ids', js: 'api_ship_ids', typ: u(m(0), null) },
      { json: 'api_stypes', js: 'api_stypes', typ: u(m(0), null) },
      { json: 'api_ctypes', js: 'api_ctypes', typ: u(m(0), null) },
      { json: 'api_req_level', js: 'api_req_level', typ: 0 },
    ],
    false
  ),
  APIMstEquipShip: o(
    [
      { json: 'api_ship_id', js: 'api_ship_id', typ: 0 },
      { json: 'api_equip_type', js: 'api_equip_type', typ: a(0) },
    ],
    false
  ),
  APIMstFurniture: o(
    [
      { json: 'api_id', js: 'api_id', typ: 0 },
      { json: 'api_type', js: 'api_type', typ: 0 },
      { json: 'api_no', js: 'api_no', typ: 0 },
      { json: 'api_title', js: 'api_title', typ: '' },
      { json: 'api_description', js: 'api_description', typ: '' },
      { json: 'api_rarity', js: 'api_rarity', typ: 0 },
      { json: 'api_price', js: 'api_price', typ: 0 },
      { json: 'api_saleflg', js: 'api_saleflg', typ: 0 },
      { json: 'api_season', js: 'api_season', typ: 0 },
      { json: 'api_version', js: 'api_version', typ: 0 },
      { json: 'api_outside_id', js: 'api_outside_id', typ: 0 },
      { json: 'api_active_flag', js: 'api_active_flag', typ: 0 },
    ],
    false
  ),
  APIMstFurnituregraph: o(
    [
      { json: 'api_id', js: 'api_id', typ: 0 },
      { json: 'api_type', js: 'api_type', typ: 0 },
      { json: 'api_no', js: 'api_no', typ: 0 },
      { json: 'api_filename', js: 'api_filename', typ: '' },
      { json: 'api_version', js: 'api_version', typ: '' },
    ],
    false
  ),
  APIMstItemShop: o(
    [
      { json: 'api_cabinet_1', js: 'api_cabinet_1', typ: a(0) },
      { json: 'api_cabinet_2', js: 'api_cabinet_2', typ: a(0) },
    ],
    false
  ),
  APIMstMaparea: o(
    [
      { json: 'api_id', js: 'api_id', typ: 0 },
      { json: 'api_name', js: 'api_name', typ: '' },
      { json: 'api_type', js: 'api_type', typ: 0 },
    ],
    false
  ),
  APIMstMapbgm: o(
    [
      { json: 'api_id', js: 'api_id', typ: 0 },
      { json: 'api_maparea_id', js: 'api_maparea_id', typ: 0 },
      { json: 'api_no', js: 'api_no', typ: 0 },
      { json: 'api_moving_bgm', js: 'api_moving_bgm', typ: 0 },
      { json: 'api_map_bgm', js: 'api_map_bgm', typ: a(0) },
      { json: 'api_boss_bgm', js: 'api_boss_bgm', typ: a(0) },
    ],
    false
  ),
  APIMstMapinfo: o(
    [
      { json: 'api_id', js: 'api_id', typ: 0 },
      { json: 'api_maparea_id', js: 'api_maparea_id', typ: 0 },
      { json: 'api_no', js: 'api_no', typ: 0 },
      { json: 'api_name', js: 'api_name', typ: '' },
      { json: 'api_level', js: 'api_level', typ: 0 },
      { json: 'api_opetext', js: 'api_opetext', typ: '' },
      { json: 'api_infotext', js: 'api_infotext', typ: '' },
      { json: 'api_item', js: 'api_item', typ: a(0) },
      { json: 'api_max_maphp', js: 'api_max_maphp', typ: null },
      {
        json: 'api_required_defeat_count',
        js: 'api_required_defeat_count',
        typ: u(0, null),
      },
      { json: 'api_sally_flag', js: 'api_sally_flag', typ: a(0) },
    ],
    false
  ),
  APIMstMission: o(
    [
      { json: 'api_id', js: 'api_id', typ: 0 },
      { json: 'api_disp_no', js: 'api_disp_no', typ: '' },
      { json: 'api_maparea_id', js: 'api_maparea_id', typ: 0 },
      { json: 'api_name', js: 'api_name', typ: '' },
      { json: 'api_details', js: 'api_details', typ: '' },
      { json: 'api_reset_type', js: 'api_reset_type', typ: 0 },
      { json: 'api_damage_type', js: 'api_damage_type', typ: 0 },
      { json: 'api_time', js: 'api_time', typ: 0 },
      { json: 'api_deck_num', js: 'api_deck_num', typ: 0 },
      { json: 'api_difficulty', js: 'api_difficulty', typ: 0 },
      { json: 'api_use_fuel', js: 'api_use_fuel', typ: 3.14 },
      { json: 'api_use_bull', js: 'api_use_bull', typ: 3.14 },
      { json: 'api_win_item1', js: 'api_win_item1', typ: a(0) },
      { json: 'api_win_item2', js: 'api_win_item2', typ: a(0) },
      { json: 'api_win_mat_level', js: 'api_win_mat_level', typ: a(0) },
      { json: 'api_return_flag', js: 'api_return_flag', typ: 0 },
      { json: 'api_sample_fleet', js: 'api_sample_fleet', typ: a(0) },
    ],
    false
  ),
  APIMstPayitem: o(
    [
      { json: 'api_id', js: 'api_id', typ: 0 },
      { json: 'api_type', js: 'api_type', typ: 0 },
      { json: 'api_name', js: 'api_name', typ: '' },
      { json: 'api_description', js: 'api_description', typ: '' },
      { json: 'api_shop_description', js: 'api_shop_description', typ: '' },
      { json: 'api_item', js: 'api_item', typ: a(0) },
      { json: 'api_price', js: 'api_price', typ: 0 },
    ],
    false
  ),
  APIMstShip: o(
    [
      { json: 'api_id', js: 'api_id', typ: 0 },
      { json: 'api_sortno', js: 'api_sortno', typ: u(undefined, 0) },
      { json: 'api_sort_id', js: 'api_sort_id', typ: 0 },
      { json: 'api_name', js: 'api_name', typ: '' },
      { json: 'api_yomi', js: 'api_yomi', typ: '' },
      { json: 'api_stype', js: 'api_stype', typ: 0 },
      { json: 'api_ctype', js: 'api_ctype', typ: 0 },
      { json: 'api_afterlv', js: 'api_afterlv', typ: u(undefined, 0) },
      { json: 'api_aftershipid', js: 'api_aftershipid', typ: u(undefined, '') },
      { json: 'api_taik', js: 'api_taik', typ: u(undefined, a(0)) },
      { json: 'api_souk', js: 'api_souk', typ: u(undefined, a(0)) },
      { json: 'api_houg', js: 'api_houg', typ: u(undefined, a(0)) },
      { json: 'api_raig', js: 'api_raig', typ: u(undefined, a(0)) },
      { json: 'api_tyku', js: 'api_tyku', typ: u(undefined, a(0)) },
      { json: 'api_luck', js: 'api_luck', typ: u(undefined, a(0)) },
      { json: 'api_soku', js: 'api_soku', typ: 0 },
      { json: 'api_leng', js: 'api_leng', typ: u(undefined, 0) },
      { json: 'api_slot_num', js: 'api_slot_num', typ: 0 },
      { json: 'api_maxeq', js: 'api_maxeq', typ: u(undefined, a(0)) },
      { json: 'api_buildtime', js: 'api_buildtime', typ: u(undefined, 0) },
      { json: 'api_broken', js: 'api_broken', typ: u(undefined, a(0)) },
      { json: 'api_powup', js: 'api_powup', typ: u(undefined, a(0)) },
      { json: 'api_backs', js: 'api_backs', typ: u(undefined, 0) },
      { json: 'api_getmes', js: 'api_getmes', typ: u(undefined, '') },
      { json: 'api_afterfuel', js: 'api_afterfuel', typ: u(undefined, 0) },
      { json: 'api_afterbull', js: 'api_afterbull', typ: u(undefined, 0) },
      { json: 'api_fuel_max', js: 'api_fuel_max', typ: u(undefined, 0) },
      { json: 'api_bull_max', js: 'api_bull_max', typ: u(undefined, 0) },
      { json: 'api_voicef', js: 'api_voicef', typ: u(undefined, 0) },
      { json: 'api_tais', js: 'api_tais', typ: u(undefined, a(0)) },
    ],
    false
  ),
  APIMstShipgraph: o(
    [
      { json: 'api_id', js: 'api_id', typ: 0 },
      { json: 'api_filename', js: 'api_filename', typ: '' },
      { json: 'api_version', js: 'api_version', typ: a('') },
      { json: 'api_battle_n', js: 'api_battle_n', typ: u(undefined, a(0)) },
      { json: 'api_battle_d', js: 'api_battle_d', typ: u(undefined, a(0)) },
      { json: 'api_sortno', js: 'api_sortno', typ: u(undefined, 0) },
      { json: 'api_boko_n', js: 'api_boko_n', typ: u(undefined, a(0)) },
      { json: 'api_boko_d', js: 'api_boko_d', typ: u(undefined, a(0)) },
      { json: 'api_kaisyu_n', js: 'api_kaisyu_n', typ: u(undefined, a(0)) },
      { json: 'api_kaisyu_d', js: 'api_kaisyu_d', typ: u(undefined, a(0)) },
      { json: 'api_kaizo_n', js: 'api_kaizo_n', typ: u(undefined, a(0)) },
      { json: 'api_kaizo_d', js: 'api_kaizo_d', typ: u(undefined, a(0)) },
      { json: 'api_map_n', js: 'api_map_n', typ: u(undefined, a(0)) },
      { json: 'api_map_d', js: 'api_map_d', typ: u(undefined, a(0)) },
      { json: 'api_ensyuf_n', js: 'api_ensyuf_n', typ: u(undefined, a(0)) },
      { json: 'api_ensyuf_d', js: 'api_ensyuf_d', typ: u(undefined, a(0)) },
      { json: 'api_ensyue_n', js: 'api_ensyue_n', typ: u(undefined, a(0)) },
      { json: 'api_weda', js: 'api_weda', typ: u(undefined, a(0)) },
      { json: 'api_wedb', js: 'api_wedb', typ: u(undefined, a(0)) },
      { json: 'api_pa', js: 'api_pa', typ: u(undefined, a(0)) },
      { json: 'api_pab', js: 'api_pab', typ: u(undefined, a(0)) },
    ],
    false
  ),
  APIMstSlotitem: o(
    [
      { json: 'api_id', js: 'api_id', typ: 0 },
      { json: 'api_sortno', js: 'api_sortno', typ: 0 },
      { json: 'api_name', js: 'api_name', typ: '' },
      { json: 'api_type', js: 'api_type', typ: a(0) },
      { json: 'api_taik', js: 'api_taik', typ: 0 },
      { json: 'api_souk', js: 'api_souk', typ: 0 },
      { json: 'api_houg', js: 'api_houg', typ: 0 },
      { json: 'api_raig', js: 'api_raig', typ: 0 },
      { json: 'api_soku', js: 'api_soku', typ: 0 },
      { json: 'api_baku', js: 'api_baku', typ: 0 },
      { json: 'api_tyku', js: 'api_tyku', typ: 0 },
      { json: 'api_tais', js: 'api_tais', typ: 0 },
      { json: 'api_atap', js: 'api_atap', typ: 0 },
      { json: 'api_houm', js: 'api_houm', typ: 0 },
      { json: 'api_raim', js: 'api_raim', typ: 0 },
      { json: 'api_houk', js: 'api_houk', typ: 0 },
      { json: 'api_raik', js: 'api_raik', typ: 0 },
      { json: 'api_bakk', js: 'api_bakk', typ: 0 },
      { json: 'api_saku', js: 'api_saku', typ: 0 },
      { json: 'api_sakb', js: 'api_sakb', typ: 0 },
      { json: 'api_luck', js: 'api_luck', typ: 0 },
      { json: 'api_leng', js: 'api_leng', typ: 0 },
      { json: 'api_rare', js: 'api_rare', typ: 0 },
      { json: 'api_broken', js: 'api_broken', typ: a(0) },
      { json: 'api_usebull', js: 'api_usebull', typ: '' },
      { json: 'api_version', js: 'api_version', typ: u(undefined, 0) },
      { json: 'api_cost', js: 'api_cost', typ: u(undefined, 0) },
      { json: 'api_distance', js: 'api_distance', typ: u(undefined, 0) },
    ],
    false
  ),
  APIMstSlotitemEquiptype: o(
    [
      { json: 'api_id', js: 'api_id', typ: 0 },
      { json: 'api_name', js: 'api_name', typ: '' },
      { json: 'api_show_flg', js: 'api_show_flg', typ: 0 },
    ],
    false
  ),
  APIMstStype: o(
    [
      { json: 'api_id', js: 'api_id', typ: 0 },
      { json: 'api_sortno', js: 'api_sortno', typ: 0 },
      { json: 'api_name', js: 'api_name', typ: '' },
      { json: 'api_scnt', js: 'api_scnt', typ: 0 },
      { json: 'api_kcnt', js: 'api_kcnt', typ: 0 },
      { json: 'api_equip_type', js: 'api_equip_type', typ: m(0) },
    ],
    false
  ),
  APIMstUseitem: o(
    [
      { json: 'api_id', js: 'api_id', typ: 0 },
      { json: 'api_usetype', js: 'api_usetype', typ: 0 },
      { json: 'api_category', js: 'api_category', typ: 0 },
      { json: 'api_name', js: 'api_name', typ: '' },
      { json: 'api_description', js: 'api_description', typ: a('') },
      { json: 'api_price', js: 'api_price', typ: 0 },
    ],
    false
  ),
}
