import Image from 'next/image'

import { PropsWithClassName } from '@/@types/react'
import IconImage from '@/assets/sugtao4423.png'

export const Icon: React.FC<PropsWithClassName> = (props) => (
  <Image alt="tao" className={props.className} src={IconImage} />
)
