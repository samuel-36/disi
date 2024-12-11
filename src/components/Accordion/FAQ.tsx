import React from 'react'
import Accordion from './Accordion';

const FAQ = () => {
  return (
    <div className='p-4 bg-green-950 shadow-black rounded-2xl container'>
    <Accordion title='How does the digitization process work?' answer='Our process involves document collection, preparation, scanning, quality checks, indexing, and secure delivery. We customize each step to meet your unique needs.' />
    <Accordion title='Can you customize workflow automation for my business?' answer='Absolutely! We work closely with your team to design and implement automated workflows that align with your business processes and goals.' />
    <Accordion title='What happens to my original documents after scanning?' answer='Depending on your preference, we can return your documents, securely store them, or arrange for certified shredding to ensure confidentiality.' />
    <Accordion title='Can you handle confidential or sensitive documents?' answer='Yes, we have extensive experience handling sensitive documents, and we comply with strict confidentiality and data protection regulations.' />
    <Accordion title='Can you digitize damaged or fragile documents?' answer='Yes, we use specialized equipment and techniques to handle fragile documents with care, ensuring they are digitized without further damage.' />
    <Accordion title='How long does the digitization process take?' answer='The duration varies based on the size and scope of the project. We provide a clear timeline during the initial consultation.' />
    <Accordion title='How do I get started with Disi Group?' answer='Simply contact us through our website, email, or phone. Our team will assess your needs and provide a tailored solution for your digitization and automation project.' />
    <Accordion title='Where are you located, and do you serve international clients?' answer=' Disi Group is based in Kenya, Zambia and South Africa, but we serve clients locally and internationally. Contact us to discuss your project.' />
    </div>
  )
}

export default FAQ;