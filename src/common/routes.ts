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
}

export const getInmHomobiPath = (name: string): string =>
  `${Routes.inm}/${name}`
