import { BaseConvert } from '@/components/organisms/Products/BaseConvert/BaseConvert'
import { CommonLayout } from '@/layouts/CommonLayout'

export default function Page(): React.ReactNode {
  return (
    <CommonLayout title="進数変換">
      <BaseConvert />
    </CommonLayout>
  )
}
