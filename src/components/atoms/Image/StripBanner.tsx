import Image from 'next/image'

import { PropsWithClassName } from '@/@types/react'
import BannerImage from '@/assets/anz_head.png'

export const StripBanner: React.FC<PropsWithClassName> = (props) => (
  <Image
    priority
    alt="鷹倉杏鈴"
    className={props.className}
    src={BannerImage}
  />
)
