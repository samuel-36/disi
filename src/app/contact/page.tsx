import Contact from '@/components/contact/Contact';
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contact = () => {
  return (
    <div>
        <ToastContainer />
        <Contact />
    </div>
  )
}

export default contact;