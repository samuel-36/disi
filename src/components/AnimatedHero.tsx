'use client';

import React, { useEffect, useState } from 'react';
import { ReactTyped } from 'react-typed';

const AnimatedHero: React.FC = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    // Get the header element and calculate its height
    const headerElement = document.querySelector('header');
    if (headerElement) {
      setHeaderHeight(headerElement.offsetHeight);
    }

    // Update the header height on window resize
    const handleResize = () => {
      if (headerElement) {
        setHeaderHeight(headerElement.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="relative flex items-center justify-center bg-gradient-to-br from-white to-gray-100 overflow-hidden"
      style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
    >
      {/* Floating Elements for a Futuristic Look */}
      <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-gradient-to-br from-green-300 to-green-500 opacity-30 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-green-700 opacity-20 blur-3xl animate-ping"></div>

      <div className="relative z-10 max-w-[800px] w-full mx-auto text-center flex flex-col justify-center px-4">
        {/* Header Text */}
        <p className="text-center text-3xl md:text-[54px] md:leading-[60px] font-extrabold tracking-tighter bg-gradient-to-r from-green-600 to-green-900 text-transparent bg-clip-text mt-10 mb-4">
          Transform Your Business with DISI Group
        </p>

        {/* Main Title */}
        <h1 className="text-2xl sm:text-2xl md:text-3xl font-extrabold leading-tight text-gray-900 mb-6">
          Welcome to DISI Group, Your Digital Partner for:
        </h1>

        {/* React Typed Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <ReactTyped
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800"
            strings={[
              'Document Digitization',
              'Data Management',
              'Secure Archiving',
              'Workflow Automation',
            ]}
            typeSpeed={75}
            backSpeed={50}
            loop
          />
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 mt-8">
          Empowering businesses with cutting-edge solutions to digitize, manage, and protect your data.
        </p>

        {/* Call to Action Button */}
        <button className="bg-green-500 hover:bg-green-600 text-white w-[200px] rounded-md font-medium my-8 mx-auto py-3 transition-transform transform hover:scale-105 shadow-lg">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AnimatedHero;



// 'use client';

// import React, { useEffect, useState } from 'react';
// import { ReactTyped } from 'react-typed';

// const AnimatedHero: React.FC = () => {
//   const [headerHeight, setHeaderHeight] = useState(0);

//   useEffect(() => {
//     // Get the header element and calculate its height
//     const headerElement = document.querySelector('header');
//     if (headerElement) {
//       setHeaderHeight(headerElement.offsetHeight);
//     }

//     // Update the header height on window resize
//     const handleResize = () => {
//       if (headerElement) {
//         setHeaderHeight(headerElement.offsetHeight);
//       }
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div
//       className="text-slate-700 flex items-center justify-center bg-white"
//       style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
//     >
//       <div className="max-w-[800px] w-full mx-auto text-center flex flex-col justify-center">
//         {/* Header Text */}
//         <p className="text-center text-3xl text-slate-700 md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-green-400 to-green-950 text-transparent bg-clip-text mt-10 mb-4">
//           DIGITIZE YOUR BUSINESS WITH DISI GROUP
//         </p>

//         {/* Main Title */}
//         <h1 className="text-2xl sm:text-2xl md:text-2xl font-bold leading-tight md:py-6 mb-4">
//           Welcome To DISI Group Where We Specialize In:
//         </h1>

//         {/* React Typed Section */}
//         <div className="flex flex-col sm:flex-row justify-center items-center">
//           <ReactTyped
//             className="text-2xl sm:text-3xl md:text-4xl font-bold md:pl-4 pl-2 text-green-800 rounded-md"
//             strings={[
//               'Document Digitization',
//               'Data Management',
//               'Secure Archiving',
//               'Workflow Automation',
//             ]}
//             typeSpeed={75}
//             backSpeed={50}
//             loop
//           />
//         </div>

//         {/* Description */}
//         <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-500 mt-6">
//           Digitize, manage, and secure your documents to streamline operations
//           and unlock the power of digital transformation.
//         </p>

//         {/* Button */}
//         <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-8 mx-auto py-3 text-black">
//           Learn More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AnimatedHero;