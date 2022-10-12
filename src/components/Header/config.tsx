import Image from 'next/image'
import { IconAvatar, IconBasket } from '@assets/index'

export const navs = [
  {
    label: 'PRODUCTS',
    path: '/'
  },
  {
    label: 'BRANDS',
    path: '/brands'
  },
  {
    label: 'SIGN IN',
    path: '/sign-in',
    icon: <IconAvatar className="mr-2" />
  },
  {
    label: 'CART',
    path: '/cart',
    icon: <IconBasket className="mr-2" />
  }
]
