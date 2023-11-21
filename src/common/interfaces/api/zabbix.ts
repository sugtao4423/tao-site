export interface ZabbixGraph {
  id: string
  type: '0' | '1' | '2' | '3'
  name: string
}

export interface ZabbixHost {
  id: string
  name: string
  graphs: ZabbixGraph[]
}
