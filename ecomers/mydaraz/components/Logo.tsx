import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const Logo = ({className}: {className?: string}) => {
  return (
    <>
    <Link href="/">
        <h1 className={cn("text-2xl font-bold", className)}>ShopCar<span>t</span></h1>
    </Link>
    </>
  )
}

export default Logo