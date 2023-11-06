import { DrawerData } from '@/common/interfaces/drawer'
import { Routes } from '@/common/routes'
import { ProductItems } from '@/const/product'

export const NormalDrawerData: DrawerData[] = [
  {
    title: 'Home',
    href: Routes.root,
  },
  {
    title: 'My Profile',
    href: Routes.profile,
  },
  {
    title: '制作物',
    href: Routes.products,
  },
  {
    title: 'PCスペック',
    href: Routes.pcSpec,
  },
  {
    title: '淫夢音声素材',
    href: Routes.inm,
  },
  {
    title: 'ServerStatus',
    href: Routes.serverStatus,
  },
]

export const ProductsDrawerData: DrawerData[] = [
  {
    title: '制作物',
    href: Routes.products,
  },
  ...ProductItems,
]
