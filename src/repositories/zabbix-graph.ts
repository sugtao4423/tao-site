import 'server-only'
import axios from 'axios'

const { ZABBIX_URL, ZABBIX_USER, ZABBIX_PASS } = process.env

export class ZabbixGraphRepository {
  /**
   * Login to Zabbix web
   * @returns Session id
   * @throws Error if login failed
   */
  private static async loginWeb(): Promise<string> {
    const url = `${ZABBIX_URL}/index.php`
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
    const body = {
      name: ZABBIX_USER,
      password: ZABBIX_PASS,
      enter: 'Sign in',
    }

    const res = await axios.post(url, body, {
      headers,
      maxRedirects: 0,
      validateStatus: (status) => status >= 200 && status <= 302,
    })
    const cookies = res.headers['set-cookie']
    if (!cookies) {
      throw new Error('No cookies')
    }

    const sessionId = cookies
      .find((cookie) => cookie.includes('zbx_session='))
      ?.match(/zbx_session=(.+?);/)?.[1]
    if (!sessionId) {
      throw new Error('No session id')
    }

    return sessionId
  }

  /**
   * Logout from Zabbix web
   * @param sessionId Session id
   * @throws Error if logout failed
   */
  private static async logoutWeb(sessionId: string): Promise<void> {
    const url = `${ZABBIX_URL}/index.php?reconnect=1`
    const headers = { Cookie: `zbx_session=${sessionId}` }
    await axios.get(url, { headers })
  }

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

    let sessionId = ''
    try {
      sessionId = await this.loginWeb()
      const res = await axios.get<ArrayBuffer>(url, {
        responseType: 'arraybuffer',
        headers: {
          Cookie: `zbx_session=${sessionId}`,
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
      if (sessionId) {
        await this.logoutWeb(sessionId)
      }
    }
  }
}
