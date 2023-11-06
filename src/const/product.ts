import { ProductData } from '@/common/interfaces/product'
import { Routes } from '@/common/routes'
import { Links } from '@/const/link'

export const ProductItems: ProductData[] = [
  {
    title: 'ChinachuClient',
    note: 'ChinachuのAndroidクライアント',
    href: Links.blogChinachuClient,
    asNewTab: true,
  },
  {
    title: '進数変換',
    note: '2、8、10、16進数をリアルタイムに変換',
    href: Routes.productBaseConvert,
  },
  {
    title: '時間の足し算',
    note: '計算しづらい時分秒の足し算',
    href: Routes.productTimePlus,
  },
  {
    title: '艦これURLs',
    note: '各キャラのボイス、立ち絵URL',
    href: Routes.productKancolleUrls,
  },
]
