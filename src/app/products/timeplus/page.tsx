import { TimePlus } from '@/components/organisms/Products/TimePlus/TimePlus'
import { CommonLayout } from '@/layouts/CommonLayout'

export default function Page(): React.ReactNode {
  return (
    <CommonLayout productsDrawer title="時間の足し算">
      <TimePlus />
    </CommonLayout>
  )
}
