import classNames from 'classnames'

import { H2 } from '@/components/atoms/Heading/H2'
import { ProductCard } from '@/components/molecules/Card/ProductCard'
import { ProductItems } from '@/const/product'

import styles from './productList.module.scss'

export const ProductList: React.FC = () => (
  <div className={styles.wrapper}>
    <div className="container">
      <H2>このサイトで公開している制作物一覧</H2>
      <div className={classNames('row', styles.items)}>
        {ProductItems.map((item) => (
          <ProductCard
            key={item.href}
            asNewTab={item.asNewTab}
            className={classNames('col-12 col-md-6', styles.item)}
            href={item.href}
            note={item.note}
            title={item.title}
          />
        ))}
      </div>
    </div>
  </div>
)
