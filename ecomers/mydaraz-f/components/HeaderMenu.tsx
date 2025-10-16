'use client'
import { headerData } from '@/constants/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const HeaderMenu = () => {
    const pathname = usePathname()
  return (
     <>
     <div className='hidden md:inline-flex w-1/3 items-center gap-7 text-sm capitalize font-medium text-gray-900'>
        {headerData?.map((item) => (
            <Link className={`hover:text-green-500 hoverEffect relative gropu transition-all duration-300 ${pathname === item?.href && 'text-green-900 font-bold'}  `} key={item?.title} href={item?.href}>{item?.title}</Link>
        ))}
     </div>
     </>
  )
}

export default HeaderMenu