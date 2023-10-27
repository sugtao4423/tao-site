import { Drawer } from '@/components/organisms/Drawer/Drawer'
import { Footer } from '@/components/organisms/Footer/Footer'
import { Header } from '@/components/organisms/Top/Header'
import { Links } from '@/components/organisms/Top/Links'
import { ProductList } from '@/components/organisms/Top/ProductList'
import { NormalDrawerData } from '@/const/drawer'

export default function Page(): React.ReactNode {
  return (
    <>
      <Header />
      <ProductList />
      <Links />
      <Footer />
      <Drawer data={NormalDrawerData} />
    </>
  )
}
