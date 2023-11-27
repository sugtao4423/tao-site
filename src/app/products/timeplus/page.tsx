import { Metadata } from 'next'

import { TimePlus } from '@/components/organisms/Products/TimePlus/TimePlus'
import { CommonLayout } from '@/layouts/CommonLayout'

export const metadata: Metadata = {
  title: '時間の足し算',
}

export default function Page(): React.ReactNode {
  return (
    <CommonLayout productsDrawer title={metadata.title as string}>
      <TimePlus />
    </CommonLayout>
  )
}
