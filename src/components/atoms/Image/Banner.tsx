import Image from 'next/image'

import { PropsWithClassName } from '@/@types/react'
import BannerImage from '@/assets/anz.png'

export const Banner: React.FC<PropsWithClassName> = (props) => (
  <Image
    priority
    alt="鷹倉杏鈴"
    className={props.className}
    src={BannerImage}
  />
)
