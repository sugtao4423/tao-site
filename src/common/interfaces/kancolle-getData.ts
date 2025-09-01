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
  api_mst_shipgraph: APIMstShipgraph[]
  api_mst_ship: APIMstShip[]
  api_mst_bgm: APIMstBgm[]
  api_mst_mapbgm: APIMstMapbgm[]
}

export interface APIMstBgm {
  api_id: number
  api_name: string
}

export interface APIMstMapbgm {
  api_id: number
  api_maparea_id: number
  api_no: number
  api_moving_bgm: number
  api_map_bgm: number[]
  api_boss_bgm: number[]
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
  api_wedc?: number[]
  api_wedd?: number[]
  api_sp_flag?: number
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
    `Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`
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
        result[key] = val[key]
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
      {
        json: 'api_mst_shipgraph',
        js: 'api_mst_shipgraph',
        typ: a(r('APIMstShipgraph')),
      },
      { json: 'api_mst_ship', js: 'api_mst_ship', typ: a(r('APIMstShip')) },
      { json: 'api_mst_bgm', js: 'api_mst_bgm', typ: a(r('APIMstBgm')) },
      {
        json: 'api_mst_mapbgm',
        js: 'api_mst_mapbgm',
        typ: a(r('APIMstMapbgm')),
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
      { json: 'api_wedc', js: 'api_wedc', typ: u(undefined, a(0)) },
      { json: 'api_wedd', js: 'api_wedd', typ: u(undefined, a(0)) },
      { json: 'api_sp_flag', js: 'api_sp_flag', typ: u(undefined, 0) },
    ],
    false
  ),
}
