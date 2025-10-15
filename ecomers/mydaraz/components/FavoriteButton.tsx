import { HeartIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FavoriteButton = () => {
  return (
    <Link href="/wishlist"><HeartIcon /> <span className='text-sm font-medium'>0</span></Link>
  )
}

export default FavoriteButton