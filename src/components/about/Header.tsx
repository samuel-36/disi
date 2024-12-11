// import React from 'react';
// import Navbar from './Navbar';

// const Header = () => {
//   return (
//     <div
//       className='min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden'
//       style={{ backgroundImage: "url('/assets2/header_img2.png')" }}
//       id='Header'
//     >
//       <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
//         <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore Our Portfolio</h2>
//         <div className='space-x-6 mt-16'>
//           <a href='#Projects' className='border border-white px-8 py-3 rounded'>Projects</a>
//           <a href='#Contact' className='bg-green-950 px-8 py-3 rounded'>Contact Us</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
import Link from 'next/link';
import React from 'react';

export default function AboutPage() {
  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-gray-900 to-black overflow-hidden text-white">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="bg-gradient-to-br from-blue-900 via-black to-purple-900 opacity-80 h-full w-full z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-40">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src="/path/to/futuristic-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center md:px-12">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-wider uppercase animate-pulse">
          Empowering Digital Transformation
        </h1>
        <h2 className="mt-6 text-lg md:text-2xl text-gray-300">
          DISI Group: Your Partner in Document Digitization
        </h2>
        <p className="mt-4 text-sm md:text-base max-w-3xl">
          At DISI Group, we specialize in converting physical documents into digital assets, helping industries streamline operations, enhance data accessibility, and safeguard valuable information for the future.
        </p>
        <Link href={'/solutions'}>
        <button
        className="mt-8 px-8 py-3 text-sm font-semibold text-black bg-white rounded-lg hover:bg-gray-300 transition-transform transform hover:scale-105">
          Discover Our Solutions
        </button>
        </Link>
      </div>

      {/* Floating Elements for Futuristic Feel */}
      <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 opacity-50 blur-lg animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 opacity-50 blur-lg animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 opacity-50 blur-md animate-bounce"></div>
    </section>
  );
}

