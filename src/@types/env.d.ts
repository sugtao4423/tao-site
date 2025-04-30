declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_GA_ID: string

    readonly ZABBIX_URL: string
    readonly ZABBIX_USER: string
    readonly ZABBIX_PASS: string
  }
}
