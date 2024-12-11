import Header from '@/components/about/Header';
import NewAbout from '@/components/about/NewAbout';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/Footer/Footer';
import { LogoTickerPartners } from '@/sections/LogoTickerPartners';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const About = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer />
      <Header />
      <div className='bg-white'><NewAbout /></div>
      <LogoTickerPartners />
    </div>
  )
}

export default About;