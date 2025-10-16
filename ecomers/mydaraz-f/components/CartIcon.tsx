import { ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


const CartIcon = () => {
  return (
    <Link href="/cart"><ShoppingCartIcon /> <span className='text-sm font-medium'>0</span></Link>
  )
}

export default CartIcon