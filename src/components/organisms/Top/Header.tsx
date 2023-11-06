import Link from 'next/link'

import { Routes } from '@/common/routes'
import { Banner } from '@/components/atoms/Image/Banner'
import { Icon } from '@/components/atoms/Image/Icon'
import { ChevronRightIcon } from '@/components/icons/ChevronRightIcon'

import styles from './header.module.scss'

export const Header: React.FC = () => (
  <header className={styles.header}>
    <Banner className={styles.banner} />
    <div className={styles.user}>
      <Icon className={styles.icon} />
      <h1 className={styles.name}>tao</h1>
      <h2 className={styles.screenName}>@sugtao4423</h2>
      <div className={styles.note}>Twitterだいすき人間</div>
    </div>
    <div className={styles.profileLink}>
      <Link href={Routes.profile}>
        詳しくはProfileページへ
        <ChevronRightIcon className={styles.rightIcon} />
      </Link>
    </div>
  </header>
)
