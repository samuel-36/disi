'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { ReactTyped } from 'react-typed';
import automate from '@/assets/doc-scan2.png';
import Link from 'next/link';

interface CountsState {
  years: number;
  projects: number;
  documents: number;
  ongoing: number;
}

const AnimatedStats = () => {
  const [counts, setCounts] = useState<CountsState>({
    years: 0,
    projects: 0,
    documents: 0,
    ongoing: 0,
  });

  const targets = {
    years: 10,
    projects: 20,
    documents: 30,
    ongoing: 100,
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const updateCounts = (progress: number) => {
      setCounts({
        years: Math.min(Math.round(targets.years * progress), targets.years),
        projects: Math.min(Math.round(targets.projects * progress), targets.projects),
        documents: Math.min(Math.round(targets.documents * progress), targets.documents),
        ongoing: Math.min(Math.round(targets.ongoing * progress), targets.ongoing),
      });
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      if (step <= steps) {
        updateCounts(progress);
      } else {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
      <div>
        <p className='text-4xl font-medium text-green-950'>{counts.years}+</p>
        <p>Years of Experience</p>
      </div>
      <div>
        <p className='text-4xl font-medium text-green-950'>{counts.projects}+</p>
        <p>Projects Completed</p>
      </div>
      <div>
        <p className='text-4xl font-medium text-green-950'>{counts.documents}+</p>
        <p>Minimum Documents Digitized</p>
      </div>
      <div>
        <p className='text-4xl font-medium text-green-950'>{counts.ongoing}+</p>
        <p>Ongoing Projects</p>
      </div>
    </div>
  );
};

const NewAbout = () => {
  return (
    <div
      className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'
      id='About'
    >
      <div className='text-green-950 text-center text-2xl sm:text-4xl font-bold mb-8'>
        <span className="text-center text-3xl text-slate-700 md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-green-400 to-green-950 text-transparent bg-clip-text mt-5">At Disi Group,</span> {/* Static Text */}
        <span className="block">
          <ReactTyped
            strings={[
              'we automate',
              'you achieve',
              'we digitize.',
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
            className="text-slate-800 font-semibold" // Styling for the animated text
          />
        </span>
      </div>

      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <Image src={automate} alt='Automation Image' className='w-full sm:w-1/2 max-w-lg' />
        <div className='flex flex-col items-center md:items-start mt-10 text-green-950'>
          <AnimatedStats />

          <p className='my-10 max-w-lg'>
          Digital Imaging and Scanning International Ltd (DISI), is a regional leader in the provision of end-to-end document management solutions. The company was incorporated in 2009 and in the last 12 years, we have helped our clients digitize over 300M documents, captured tens of TBs of data and automated over 100 business processes (workflows).

With a presence in Kenya, Uganda, Ethiopia, and Botswana; our services enable our clients to manage their physical documents, increase productivity through collaboration and reduce overall document handling costs through a digitized paperless system.

          </p>
          <Link href={'/careers'}>
          <button className='bg-green-950 text-white px-8 py-2 rounded'>
            Meet The Team
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewAbout;



// 'use client';
// import Image from 'next/image';
// import React, { useState, useEffect } from 'react';
// import automate from '@/assets/doc-scan2.png'


// interface CountsState {
//   years: number;
//   projects: number;
//   documents: number;
//   ongoing: number;
// }

// const AnimatedStats = () => {
//   const [counts, setCounts] = useState<CountsState>({
//     years: 0,
//     projects: 0,
//     documents: 0,
//     ongoing: 0
//   });

//   const targets = {
//     years: 10,
//     projects: 20,
//     documents: 30,
//     ongoing: 100
//   };

//   useEffect(() => {
//     const duration = 2000;
//     const steps = 60;
//     const interval = duration / steps;

//     const updateCounts = (progress: number) => {
//       setCounts({
//         years: Math.min(Math.round(targets.years * progress), targets.years),
//         projects: Math.min(Math.round(targets.projects * progress), targets.projects),
//         documents: Math.min(Math.round(targets.documents * progress), targets.documents),
//         ongoing: Math.min(Math.round(targets.ongoing * progress), targets.ongoing)
//       });
//     };

//     let step = 0;
//     const timer = setInterval(() => {
//       step++;
//       const progress = step / steps;
      
//       if (step <= steps) {
//         updateCounts(progress);
//       } else {
//         clearInterval(timer);
//       }
//     }, interval);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
//       <div className=''>
//         <p className='text-4xl font-medium text-green-950'>{counts.years}+</p>
//         <p>Years of Experience</p>
//       </div>
//       <div className=''>
//         <p className='text-4xl font-medium text-green-950'>{counts.projects}+</p>
//         <p>Projects Completed</p>
//       </div>
//       <div className=''>
//         <p className='text-4xl font-medium text-green-950'>{counts.documents}+</p>
//         <p>Minimum Documents Digitized</p>
//       </div>
//       <div className=''>
//         <p className='text-4xl font-medium text-green-950'>{counts.ongoing}+</p>
//         <p>Ongoing Projects</p>
//       </div>
//     </div>
//   );
// };

// const NewAbout = () => {
//   return (
//     <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'
//     id='About'
//     >
//         <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>About      
//           <span className='underline underline-offset-4 decoration-1 under font-light text-center'> Our Resources</span></h1>
//         <p className='text-green-950 max-w-80 text-center mb-8'>Check Out Our Solutions And Resources That Come With Us When You Partner With Us</p>
//         <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
//           <Image src={automate} alt='' className='w-full sm:w-1/2 max-w-lg' />
//           <div className='flex flex-col items-center md:items-start mt-10 text-green-950'>
            
//             <AnimatedStats />

//             <p className='my-10 max-w-lg'>
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
//                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
//                 when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
//                 It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
//                 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
//                 and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//             </p>
//             <button className='bg-green-950 text-white px-8 py-2 rounded'>Meet The Team</button>
//           </div>
//         </div>
//     </div>
//   );
// };

// export default NewAbout;

// import React from 'react'
// import Image from 'next/image';
// import brandImg from 'disi/public/assets2/brand_img.png';




// const NewAbout = () => {
//   return (
//     <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'
//     id='About'
//     >
//         <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>About      
//           <span className='underline underline-offset-4 decoration-1 under font-light text-center'> Our Resources</span></h1>
//         <p className='text-green-950 max-w-80 text-center mb-8'>Check Out Our Solutions And Resources That Come With Us When You Partner With Us</p>
//         <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
//           <img src="/assets2/brand_img.png" alt='' className='w-full sm:w-1/2 max-w-lg' />
//           <div className='flex flex-col items-center md:items-start mt-10 text-green-950'>

//             <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
//               <div className=''>
//                 <p className='text-4xl font-medium text-green-950'>10+</p>
//                 <p>Years of Experience</p>
//               </div>
//               <div className=''>
//                 <p className='text-4xl font-medium text-green-950'>20+</p>
//                 <p>Projects Completed</p>
//               </div>
//               <div className=''>
//                 <p className='text-4xl font-medium text-green-950'>30+</p>
//                 <p>Minimum Douments Digitized</p>
//               </div>
//               <div className=''>
//                 <p className='text-4xl font-medium text-green-950'>100+</p>
//                 <p>Ongoing Projects</p>
//               </div>
//             </div>

//             <p className='my-10 max-w-lg'>
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
//                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
//                 when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
//                 It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
//                 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
//                 and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//             </p>
//             <button className='bg-green-950 text-white px-8 py-2 rounded'>Learn More</button>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default NewAbout;