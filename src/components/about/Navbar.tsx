'use client';
//former code
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import assets from "@/assets/DISI-logo.png"
import menuIcon from './../../../public/assets2/menu_icon.svg';

const Navbar = () => {

  const [showMobileMenu, setshowMobileMenu] = useState(false)

  useEffect (() => {
    if(showMobileMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'mx-auto'
    }
    return () => {
      document.body.style.overflow = 'mx-auto'
    }
  }, [showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-3'>
        <Image
                src={assets}
                alt="DISI Logo"
                height={100} width={100}
                className="hidden md:block"
              />
              {/* Logo for Small Screens */}
              <Image
                src={assets}
                alt="DISI Logo"
                className="block md:hidden h-20 w-20 object-contain"
              />
            <ul className='hidden md:flex gap-7 text-green-950'>
                <a href='#Header' className='cursor-pointer hover:text-slate-400'>About Us</a>
                <a href='#About' className='cursor-pointer hover:text-gray-400'>Solutions</a>
                <a href='#Projects' className='cursor-pointer hover:text-gray-400'>Resources</a>
                <a href='#Testimonials' className='cursor-pointer hover:text-gray-400'>News & Media</a>
                <a href='#Testimonials' className='cursor-pointer hover:text-gray-400'>Careers</a>
            </ul>
            <button className='text-white hidden md:block bg-green-950 px-8 py-2 rounded-full'>Contact US</button>
            <img
            onClick={() => setshowMobileMenu(true)}
            src="/assets2/menu_icon.svg" alt='' className='md:hidden w-7 cursor-pointer'/>
        </div>

          {/* ---------mobile menu -------- */}
          <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
            <div className='flex justify-end p-6 cursor-pointer'>
              <img
              onClick={() => setshowMobileMenu(false)}
              src="/assets2/cross_icon.svg" className='w-6' alt='' />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
              <a onClick={() => setshowMobileMenu(false)} href="#Home" className='px-4 py-2 rounded-full inline-block'>Home</a>
              <a onClick={() => setshowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
              <a onClick={() => setshowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
              <a onClick={() => setshowMobileMenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
            </ul>
          </div>

    </div>
  )
}

export default Navbar;

