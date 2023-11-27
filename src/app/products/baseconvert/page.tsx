import { Metadata } from 'next'

import { BaseConvert } from '@/components/organisms/Products/BaseConvert/BaseConvert'
import { CommonLayout } from '@/layouts/CommonLayout'

export const metadata: Metadata = {
  title: '進数変換',
}

export default function Page(): React.ReactNode {
  return (
    <CommonLayout productsDrawer title={metadata.title as string}>
      <BaseConvert />
    </CommonLayout>
  )
}
