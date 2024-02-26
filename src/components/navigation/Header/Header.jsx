import Logo from '@/components/Logo'
import React, { useEffect, useState } from 'react'
import Nav from './Nav/Nav'
import MobileNav from './MobileNav/MobileNav'
import { useLocation } from 'react-router-dom';

export default function Header() {
  const [header, setHeader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    })

    return () => window.removeEventListener('scroll', scrollYPos)
  }, [])
  return (
    <header className={`${header ? "py-4 bg-white shadow-lg" : "py-4 bg-white shadow-lg"} sticky top-0 z-30 transition-all ${location.pathname === "/" && 'bg-white'}`}>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <Logo />
          <div className='flex items-center gap-x-6'>
            <Nav 
              containerStyles='hidden xl:flex gap-x-8 items-center'
              linkStyles='relative hover:text-[#2E23B8] transition-all'
              underlineStyles='absolute left-0 top-full h-[2px] bg-[#2E23B8] w-full'  
            />
            <div className='xl:hidden '>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
