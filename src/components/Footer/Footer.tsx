import Image from 'next/image';
import React from 'react'
import DisiLogo from '@/assets/DISI-logo.png';
import SocialX from '@/assets/social-x.svg';
import SocialInsta from '@/assets/social-insta.svg';
import SocialLinkedIn from '@/assets/social-linkedin.svg';

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-green-950 w-full overflow-hidden'
    id='Footer'
    >
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0 items-center'>
                <Image src={DisiLogo} height={100} width={100} alt=''/>
                <div className="flex gap-6 mt-6 text-white">
        <SocialX />
        <SocialInsta />
        <SocialLinkedIn />
        </div>
                {/* <p className='text-white mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p> */}
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3> 
            <ul className='flex flex-col gap-2 text-white'>
                <a href='/' className='hover:text-white'>Home</a>
                <a href='/about' className='hover:text-white'>About Us</a>
                <a href='/solutions' className='hover:text-white'>Solutions</a>
                <a href='/resources' className='hover:text-white'>Resources</a>
                <a href='/contact' className='hover:text-white'>Contact</a>
                
            </ul>
            </div>
            <div className='w-full md:w-1/3'>
            <h3 className='text-white text-lg font-bold mb-4'>Subscribe To Our NewsLetter</h3>
            <p className='text-gray-400 mb-4 max-w-80'>
              The lates news, articles, and resources, sent to your inbox weekly
            </p>
            <div className='flex'>
              <input type='email' placeholder='Enter your email' 
              className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' />
              <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
            </div>
            </div>
        </div>
        <div className='border-t border-gray-800 py-4 mt-10 text-center text-white'>
        &copy; 2024 DISI GROUP, Inc. All Rights Reserved
        </div>
    </div>
  )
}

export default Footer;