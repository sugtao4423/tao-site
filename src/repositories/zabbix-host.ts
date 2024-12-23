import 'server-only'
import axios, { AxiosRequestConfig } from 'axios'

import { ZabbixGraph, ZabbixHost } from '@/common/interfaces/api/zabbix'
import {
  ZabbixBaseResponse,
  ZabbixHostGraphResponse,
} from '@/common/interfaces/api/zabbix-server'

const { ZABBIX_URL, ZABBIX_USER, ZABBIX_PASS } = process.env

export class ZabbixHostRepository {
  /**
   * POST request to Zabbix server
   * @param method Zabbix API method
   * @param params Zabbix API params
   * @param auth Zabbix API auth token
   * @returns Zabbix API result of response
   * @throws Error if response is not valid
   */
  private static async post<T>(
    method: string,
    params: Record<string, unknown>,
    auth?: string
  ): Promise<T> {
    const id = Math.floor(Math.random() * 114514) + 1
    const url = `${ZABBIX_URL}/api_jsonrpc.php`
    const headers: AxiosRequestConfig['headers'] = {
      'Content-Type': 'application/json-rpc',
    }
    if (auth) {
      headers.Authorization = `Bearer ${auth}`
    }
    const body = {
      jsonrpc: '2.0',
      method,
      params,
      id,
    }

    const res = await axios.post<ZabbixBaseResponse<T>>(url, body, {
      headers,
    })
    if (res.data.error) {
      throw new Error(res.data.error.message)
    }
    if (res.data.id !== id) {
      throw new Error('ID mismatch')
    }
    if (!res.data.result) {
      throw new Error('No result')
    }

    return res.data.result
  }

  /**
   * Login to Zabbix server
   * @returns Zabbix token
   * @throws Error if login failed
   */
  private static async login(): Promise<string> {
    const method = 'user.login'
    const params = {
      username: ZABBIX_USER,
      password: ZABBIX_PASS,
    }
    const result = await this.post<string>(method, params)
    return result
  }

  /**
   * Logout from Zabbix server
   * @param token Zabbix token
   * @returns Is logout successful
   * @throws Error if logout failed
   */
  private static async logout(token: string): Promise<boolean> {
    const method = 'user.logout'
    const params = {}
    const result = await this.post<boolean>(method, params, token)
    return result
  }

  /**
   * Zabbix hosts response to frontend hosts data
   * @param data Zabbix hosts response
   * @returns Frontend hosts data
   */
  private static convert(data: ZabbixHostGraphResponse[]): ZabbixHost[] {
    return data.map(
      (host): ZabbixHost => ({
        id: host.hostid,
        name: host.name,
        graphs: host.graphs.map(
          (graph): ZabbixGraph => ({
            id: graph.graphid,
            name: graph.name,
            type: graph.graphtype,
          })
        ),
      })
    )
  }

  /**
   * Filter and sort hosts and graphs
   * @param data Frontend hosts data
   * @returns Filtered and sorted hosts data
   */
  private static hostSortFilter(data: ZabbixHost[]): ZabbixHost[] {
    const graphFilter = (graph: ZabbixGraph): boolean =>
      !/^Network traffic on.*/.test(graph.name) ||
      /^Network traffic on (eth|ens).*/.test(graph.name)

    return data
      .filter((host) => host.graphs.length > 0)
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((host) => ({
        ...host,
        graphs: host.graphs
          .filter(graphFilter)
          .sort((a, b) => a.name.localeCompare(b.name)),
      }))
  }

  /**
   * Get hosts data from Zabbix server
   * @returns Frontend hosts data
   * @throws Error if failed to get hosts
   */
  public static async getHosts(): Promise<ZabbixHost[]> {
    let token = ''
    try {
      token = await this.login()

      const method = 'host.get'
      const params = {
        output: ['hostid', 'name'],
        selectGraphs: ['graphid', 'name', 'graphtype'],
      }
      const data = await this.post<ZabbixHostGraphResponse[]>(
        method,
        params,
        token
      )

      const hosts = this.convert(data)
      return this.hostSortFilter(hosts)
    } catch (e) {
      throw new Error(`Failed to get hosts: ${e}`)
    } finally {
      if (token) {
        await this.logout(token)
      }
    }
  }
}
