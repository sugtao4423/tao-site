import classNames from 'classnames'

import { H2 } from '@/components/atoms/Heading/H2'
import { LinkCard } from '@/components/molecules/Card/LinkCard'
import { LinkItems } from '@/const/link'

import styles from './links.module.scss'

export const Links: React.FC = () => (
  <div className={styles.wrapper}>
    <div className="container">
      <H2>Links</H2>
      <div className={classNames('row', styles.items)}>
        {LinkItems.map((item) => (
          <LinkCard
            key={item.href}
            asNewTab={item.asNewTab}
            className={classNames(
              'col-6 col-md-4 col-lg-3 col-xxl-2',
              styles.item
            )}
            href={item.href}
            icon={item.icon}
            subtitle={item.subtitle}
            title={item.title}
          />
        ))}
      </div>
    </div>
  </div>
)
