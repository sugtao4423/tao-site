import 'server-only'
import axios, { AxiosRequestConfig } from 'axios'

import { ZabbixBaseResponse } from '@/common/interfaces/api/zabbix-server'

const { ZABBIX_URL, ZABBIX_USER, ZABBIX_PASS } = process.env

export abstract class ZabbixRepository {
  /**
   * POST request to Zabbix API
   * @param method Zabbix API method
   * @param params Zabbix API params
   * @param auth Zabbix API auth token
   * @returns Zabbix API result of response
   * @throws Error if response is not valid
   */
  protected static async postApi<T>(
    method: string,
    params: Record<string, unknown>,
    auth?: string
  ): Promise<T> {
    const id = Math.floor(Math.random() * 114514) + 1
    const path = '/api_jsonrpc.php'
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

    const res = await axios.post<ZabbixBaseResponse<T>>(path, body, {
      baseURL: ZABBIX_URL,
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
   * Login to Zabbix API
   * @returns Zabbix token
   * @throws Error if login failed
   */
  protected static async loginApi(): Promise<string> {
    const method = 'user.login'
    const params = {
      username: ZABBIX_USER,
      password: ZABBIX_PASS,
    }
    const result = await this.postApi<string>(method, params)
    return result
  }

  /**
   * Logout from Zabbix API
   * @param token Zabbix token
   * @returns Is logout successful
   * @throws Error if logout failed
   */
  protected static async logoutApi(token: string): Promise<boolean> {
    const method = 'user.logout'
    const params = {}
    const result = await this.postApi<boolean>(method, params, token)
    return result
  }

  /**
   * Login to Zabbix web
   * @returns Session string
   * @throws Error if login failed
   */
  protected static async loginWeb(): Promise<string> {
    const path = '/index.php'
    const headers: AxiosRequestConfig['headers'] = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
    const body = {
      name: ZABBIX_USER,
      password: ZABBIX_PASS,
      enter: 'Sign in',
    }

    const res = await axios.post(path, body, {
      baseURL: ZABBIX_URL,
      headers,
      maxRedirects: 0,
      validateStatus: (status) => status >= 200 && status <= 302,
    })
    const cookies = res.headers['set-cookie']
    if (!cookies) {
      throw new Error('No cookies')
    }

    const session = cookies
      .find((cookie) => cookie.includes('zbx_session='))
      ?.match(/zbx_session=(.+?);/)?.[1]
    if (!session) {
      throw new Error('No session id')
    }

    return session
  }

  /**
   * Logout from Zabbix web
   * @param session Session string
   * @throws Error if logout failed
   */
  protected static async logoutWeb(session: string): Promise<void> {
    const encodedString = session.replace(/(%.+)?$/, '')
    const decodedString = atob(encodedString)

    type JsonType = { sessionid: string; sign: string }
    const json = JSON.parse(decodedString) as JsonType

    await this.logoutApi(json.sessionid)
  }
}
