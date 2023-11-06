import classNames from 'classnames'

import { H2 } from '@/components/atoms/Heading/H2'
import { ProductCard } from '@/components/molecules/Card/ProductCard'
import { ProductItems } from '@/const/product'
import { CommonLayout } from '@/layouts/CommonLayout'

import styles from './page.module.scss'

export default function Page(): React.ReactNode {
  return (
    <CommonLayout title="制作物">
      <H2>制作物一覧</H2>
      <div>有用そうと思ったものを適当に作りました</div>
      <div className="row">
        {ProductItems.map((item) => (
          <ProductCard
            key={item.href}
            asNewTab={item.asNewTab}
            className={classNames('col-12 col-md-8', styles.item)}
            href={item.href}
            note={item.note}
            title={item.title}
          />
        ))}
      </div>
    </CommonLayout>
  )
}
