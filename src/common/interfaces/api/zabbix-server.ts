import 'server-only'

export interface ZabbixBaseResponse<T> {
  jsonrpc: string
  id: number
  result?: T
  error?: {
    code: number
    message: string
    data: string
  }
}

export interface ZabbixHostGraphResponse {
  hostid: string
  name: string
  graphs: {
    graphid: string
    name: string
    graphtype: '0' | '1' | '2' | '3'
  }[]
}
