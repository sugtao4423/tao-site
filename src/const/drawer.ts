import { DrawerData } from '@/common/interfaces/drawer'
import { Routes } from '@/common/routes'

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
