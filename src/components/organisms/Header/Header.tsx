import { DrawerData } from '@/common/interfaces/drawer'
import { StripBanner } from '@/components/atoms/Image/StripBanner'
import { Drawer } from '@/components/organisms/Drawer/Drawer'

import styles from './header.module.scss'

type Props = {
  title: string
  drawerData: DrawerData[]
}

export const Header: React.FC<Props> = (props) => (
  <header>
    <div className={styles.bannerWrapper}>
      <StripBanner className={styles.banner} />
      <h1 className={styles.title}>{props.title}</h1>
    </div>
    <Drawer menuBorder data={props.drawerData} />
  </header>
)
