import { PropsWithChildren } from '@/@types/react'
import { Footer } from '@/components/organisms/Footer/Footer'
import { Header } from '@/components/organisms/Header/Header'
import { NormalDrawerData, ProductsDrawerData } from '@/const/drawer'

import styles from './commonLayout.module.scss'

type Props = {
  title: string
  productsDrawer?: boolean
} & PropsWithChildren

export const CommonLayout: React.FC<Props> = (props) => {
  const drawerData = props.productsDrawer
    ? ProductsDrawerData
    : NormalDrawerData
  return (
    <>
      <Header drawerData={drawerData} title={props.title} />
      <div className={styles.wrapper}>
        <div className="container">
          <div className={styles.content}>{props.children}</div>
        </div>
      </div>
      <Footer />
    </>
  )
}
