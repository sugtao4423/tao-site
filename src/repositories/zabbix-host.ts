import 'server-only'

import { ZabbixGraph, ZabbixHost } from '@/common/interfaces/api/zabbix'
import { ZabbixHostGraphResponse } from '@/common/interfaces/api/zabbix-server'
import { ZabbixRepository } from '@/repositories/zabbix'

export class ZabbixHostRepository extends ZabbixRepository {
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
      token = await this.loginApi()

      const method = 'host.get'
      const params = {
        output: ['hostid', 'name'],
        selectGraphs: ['graphid', 'name', 'graphtype'],
      }
      const data = await this.postApi<ZabbixHostGraphResponse[]>(
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
        await this.logoutApi(token)
      }
    }
  }
}
