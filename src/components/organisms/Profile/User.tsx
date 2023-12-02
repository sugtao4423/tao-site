import Link from 'next/link'

import classNames from 'classnames'

import { PropsWithClassName } from '@/@types/react'
import { Icon } from '@/components/atoms/Image/Icon'
import { AmebaIcon } from '@/components/icons/AmebaIcon'
import { BlogIcon } from '@/components/icons/BlogIcon'
import { GithubIcon } from '@/components/icons/GithubIcon'
import { Links } from '@/const/link'

import styles from './user.module.scss'

const LinkItems = [
  {
    icon: <AmebaIcon aria-label="Amebaブログ" role="img" />,
    href: Links.ameba,
  },
  {
    icon: <BlogIcon aria-label="ブログ" role="img" />,
    href: Links.blog,
  },
  {
    icon: <GithubIcon aria-label="GitHub" role="img" />,
    href: Links.github,
  },
]

export const User: React.FC<PropsWithClassName> = (props) => (
  <div className={classNames(props.className, styles.wrapper)}>
    <Icon className={styles.icon} />
    <h1 className={styles.userName}>tao</h1>
    <h2 className={styles.screenName}>@sugtao4423</h2>
    <div className={styles.links}>
      {LinkItems.map((item) => (
        <Link
          key={item.href}
          className={styles.link}
          href={item.href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  </div>
)
