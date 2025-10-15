'use client'
import { AlignLeft } from 'lucide-react'
import React, { useState } from 'react'
import SideMenu from './SideMenu'

const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
    <button onClick={() => setOpen(!open)}>
        <AlignLeft className='md:hidden'/>
    </button>
    <div className="md:hidden">

    <SideMenu isOpen={open} onClose={() => setOpen(false)}/>
    </div>
    </>
  )
}

export default MobileMenu