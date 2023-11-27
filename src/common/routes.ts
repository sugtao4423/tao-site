export enum Routes {
  root = '/',
  profile = '/profile',
  products = '/products',
  productBaseConvert = `${products}/baseconvert`,
  productTimePlus = `${products}/timeplus`,
  productKancolleUrls = `${products}/kancolleUrls`,
  pcSpec = '/PCspec',
  inm = '/inm',
  serverStatus = '/ServerStatus',

  apiHomeNetworkDiagramUrl = '/api/HomeNetworkDiagramUrl',
  apiServerChart = '/api/ServerChart',
}

export const getInmHomobiPath = (name: string): string =>
  `${Routes.inm}/${name}`

export const getZabbixGraphPath = (
  graphType: string,
  graphId: string
): string => {
  const params = new URLSearchParams({ graphType, graphId })
  return `${Routes.apiServerChart}?${params.toString()}`
}
