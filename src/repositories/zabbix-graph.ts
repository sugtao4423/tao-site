import 'server-only'
import axios from 'axios'

import { ZabbixRepository } from '@/repositories/zabbix'

const { ZABBIX_URL } = process.env

export class ZabbixGraphRepository extends ZabbixRepository {
  /**
   * Get graph image from Zabbix web
   * @param graphType Graph type 0 ~ 3
   * @param graphId Graph id
   * @returns Graph image as ArrayBuffer
   * @throws Error if failed to get graph image
   */
  public static async getGraphImage(
    graphType: string,
    graphId: string
  ): Promise<ArrayBuffer> {
    const path = graphType === '2' ? 'chart6.php' : 'chart2.php'
    const baseUrl = `${ZABBIX_URL}/${path}`
    const params = new URLSearchParams({
      graphid: graphId,
      profileIdx: 'web.graphs.filter',
      from: 'now-2d',
      to: 'now',
    })
    const url = `${baseUrl}?${params.toString()}`

    let session = ''
    try {
      session = await this.loginWeb()
      const res = await axios.get<ArrayBuffer>(url, {
        responseType: 'arraybuffer',
        headers: {
          Cookie: `zbx_session=${session}`,
        },
      })
      const contentType = res.headers['content-type'] as string | undefined
      if (!contentType?.startsWith('image/')) {
        throw new Error('Not an image')
      }

      return res.data
    } catch (e) {
      throw new Error(`Failed to get graph image: ${e}`)
    } finally {
      if (session) {
        await this.logoutWeb(session)
      }
    }
  }
}
