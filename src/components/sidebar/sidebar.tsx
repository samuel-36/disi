'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleSidebar}
        className="p-2 text-green-950 hover:bg-green-50 rounded-lg"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Sidebar Container */}
      <div 
        aria-hidden={!isOpen}
        className={`fixed inset-0 w-full h-full transition-all duration-300 ease-in-out ${
          isOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
        }`}
        style={{ zIndex: 100 }}
      >
        {/* Overlay */}
        <div 
          className={`fixed inset-0 bg-black transition-opacity duration-300 ${
            isOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={toggleSidebar}
        />

        {/* Sidebar Content */}
        <div 
          className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-4 border-b">
              <button
                onClick={toggleSidebar}
                className="p-2 hover:bg-green-50 rounded-lg"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-green-950" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <nav className="p-4 flex flex-col gap-4">
                <a href="/about" className="text-green-950 hover:text-green-700 font-semibold">About Us</a>
                <a href="/solutions" className="text-green-950 hover:text-green-700 font-semibold">Solutions</a>
                <a href="/resources" className="text-green-950 hover:text-green-700 font-semibold">Resources</a>
                <a href="/blog" className="text-green-950 hover:text-green-700 font-semibold">News & Media</a>
                <a href="/careers" className="text-green-950 hover:text-green-700 font-semibold">Careers</a>
                <Link href={'/contact'}>
                <button className="bg-green-950 text-white px-4 py-2 rounded-lg font-medium text-sm w-full">
                  Contact Us
                </button>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Prevent body scroll when sidebar is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen]);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative overflow-x-hidden">
//       {/* Hamburger Menu Button */}
//       <button
//         onClick={toggleSidebar}
//         className="p-2 text-green-950 hover:bg-green-50 rounded-lg"
//       >
//         <Menu className="h-6 w-6" />
//       </button>

//       {/* Sidebar Container */}
//       <div 
//         aria-hidden={!isOpen}
//         className={`fixed inset-0 w-full transition-all duration-300 ease-in-out ${
//           isOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
//         }`}
//         style={{ zIndex: 9999 }}
//       >
//         {/* Overlay */}
//         <div 
//           className={`absolute inset-0 bg-black transition-opacity duration-300 ${
//             isOpen ? 'opacity-50' : 'opacity-0'
//           }`}
//           onClick={toggleSidebar}
//         />

//         {/* Sidebar Content */}
//         <div 
//           className={`absolute top-0 right-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
//             isOpen ? 'translate-x-0' : 'translate-x-full'
//           }`}
//         >
//           <div className="p-4 h-full">
//             <button
//               onClick={toggleSidebar}
//               className="absolute top-4 right-4 p-2 hover:bg-green-50 rounded-lg"
//             >
//               <X className="h-6 w-6 text-green-950" />
//             </button>

//             <nav className="mt-12 flex flex-col gap-4">
//               <a href="#" className="text-green-950 hover:text-green-700 font-semibold">About Us</a>
//               <a href="#" className="text-green-950 hover:text-green-700 font-semibold">Solutions</a>
//               <a href="#" className="text-green-950 hover:text-green-700 font-semibold">Resources</a>
//               <a href="#" className="text-green-950 hover:text-green-700 font-semibold">News & Media</a>
//               <a href="#" className="text-green-950 hover:text-green-700 font-semibold">Careers</a>
//               <button className="bg-green-950 text-white px-4 py-2 rounded-lg font-medium text-sm w-full">
//                 Contact Us
//               </button>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;