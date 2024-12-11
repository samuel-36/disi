import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/DISI-logo.png";
import Image from "next/image";
import Sidebar from "@/components/sidebar/sidebar";
import Container from "@/components/container";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50">
      {/* Top Info Bar */}
      <div className="flex justify-center py-2 bg-green-950 text-white text-xs md:text-sm text-center gap-4">
        <p className="text-white/60 hidden md:block">Phone: +254 707 333 301</p>
        <div className="inline-flex gap-1 items-center">
          <p>Request A Quote</p>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>

      {/* Main Header Section */}
      <div className="py-4 bg-white">
        <Container>
          <div className="flex items-center justify-between w-full">
            {/* Logo and Sidebar Wrapper */}
            <div className="flex items-center justify-between w-full md:w-auto">
              {/* Desktop Logo */}
              <Link href={'/'}>
              <Image
                src={Logo}
                alt="DISI Logo"
                height={120} // Reduced height
                width={120}  // Reduced width
                className="hidden md:block"
              />
              {/* Mobile Logo */}
              <Image
                src={Logo}
                alt="DISI Logo"
                className="block md:hidden h-8 w-8 object-contain"
              />
              </Link>
              {/* Sidebar Component for Small Screens */}
              <div className="block md:hidden ml-auto">
                <Sidebar />
              </div>
            </div>

            {/* Navbar Links */}
            <nav className="hidden md:flex gap-4 md:gap-2 lg:gap-4 text-green-950 font-semibold items-center">
              <a href="/about" className="text-xs lg:text-sm">About Us</a>
              <a href="/solutions" className="text-xs lg:text-sm">Solutions</a>
              <a href="resources" className="text-xs lg:text-sm">Resources</a>
              <a href="/blog" className="text-xs lg:text-sm">News & Media</a>
              <a href="/careers" className="text-xs lg:text-sm">Careers</a>
              <Link href={'/contact'}>
              <button className="bg-green-950 text-white px-3 py-2 rounded-lg font-medium inline-flex items-center justify-center text-xs lg:text-sm">
                Contact Us
              </button>
              </Link>
            </nav>
          </div>
        </Container>
      </div>
    </header>
  );
};


// import ArrowRight from "@/assets/arrow-right.svg";
// import Logo from "@/assets/DISI-logo.png";
// import Image from "next/image";
// import Sidebar from "@/components/sidebar/sidebar";
// import Container from "@/components/container";

// export const Header = () => {
//   return (
//     <header className="fixed top-0 left-0 right-0 w-full z-50">
//       <div className="flex justify-center py-3 bg-green-950 text-white text-sm text-center gap-6">
//         <p className="text-white/60 hidden md:block">Phone: +254 707 333 301</p>
//         <div className="inline-flex gap-1 items-center">
//           <p>Request A Quote</p>
//           <ArrowRight className="h-5 w-5 inline-flex justify-center items-center" />
//         </div>
//       </div>
//       <div className="py-5 bg-white border-b">
//         <Container>
//           <div className="flex items-center justify-between w-full">
//             {/* Logo and Sidebar Wrapper */}
//             <div className="flex items-center justify-between w-full md:w-auto">
//               <Image
//                 src={Logo}
//                 alt="DISI Logo"
//                 height={150} width={150}
//                 className="hidden md:block"
//               />
//               {/* Logo for Small Screens */}
//               <Image
//                 src={Logo}
//                 alt="DISI Logo"
//                 className="block md:hidden h-10 w-10 object-contain"
//               />
//               {/* Sidebar Component for Small Screens */}
//               <div className="block md:hidden ml-auto">
//                 <Sidebar />
//               </div>
//             </div>

//             {/* Navbar Links */}
//             <nav className="hidden md:flex gap-4 md:gap-2 lg:gap-6 text-green-950 font-semibold items-center">
//               <a href="#" className="text-sm md:text-xs lg:text-sm">About Us</a>
//               <a href="#" className="text-sm md:text-xs lg:text-sm">Solutions</a>
//               <a href="#" className="text-sm md:text-xs lg:text-sm">Resources</a>
//               <a href="#" className="text-sm md:text-xs lg:text-sm">News & Media</a>
//               <a href="#" className="text-sm md:text-xs lg:text-sm">Careers</a>
//               <button className="bg-green-950 text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight text-sm md:text-xs lg:text-sm">
//                 Contact Us
//               </button>
//             </nav>
//           </div>
//         </Container>
//       </div>
//     </header>
//   );
// };

// import ArrowRight from "@/assets/arrow-right.svg";
// import Logo from "@/assets/DISI-logo.png";
// import Image from "next/image";
// import Sidebar from "@/components/sidebar/sidebar";
// import Container from "@/components/container";

// export const Header = () => {
//   return (
//     <header className="sticky top-0 backdrop-blur z-20">
//       <div className="flex justify-center py-3 bg-green-950 text-white text-sm text-center gap-6">
//         <p className="text-white/60 hidden md:block">Phone: +254 707 333 301</p>
//         <div className="inline-flex gap-1 items-center">
//           <p>Request A Quote</p>
//           <ArrowRight className="h-5 w-5 inline-flex justify-center items-center" />
//         </div>
//       </div>
//       <div className="py-5 bg-white">
//         <Container>
//           <div className="flex items-center justify-between w-full">
//             {/* Logo and Sidebar Wrapper */}
//             <div className="flex items-center justify-between w-full md:w-auto">
//               <Image
//                 src={Logo}
//                 alt="DISI Logo"
//                 height={150} width={150}
//                 className="hidden md:block"
//               />
//               {/* Logo for Small Screens */}
//               <Image
//                 src={Logo}
//                 alt="DISI Logo"
//                 className="block md:hidden h-10 w-10 object-contain"
//               />
//               {/* Sidebar Component for Small Screens */}
//               <div className="block md:hidden ml-auto">
//                 <Sidebar />
//               </div>
//             </div>

//             {/* Navbar Links */}
//             <nav className="hidden md:flex gap-4 md:gap-2 lg:gap-6 text-green-950 font-semibold items-center">
//               <a href="#" className="text-sm md:text-xs lg:text-sm">About Us</a>
//               <a href="#" className="text-sm md:text-xs lg:text-sm">Solutions</a>
//               <a href="#" className="text-sm md:text-xs lg:text-sm">Resources</a>
//               <a href="#" className="text-sm md:text-xs lg:text-sm">News & Media</a>
//               <a href="#" className="text-sm md:text-xs lg:text-sm">Careers</a>
//               <button className="bg-green-950 text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight text-sm md:text-xs lg:text-sm">
//                 Contact Us
//               </button>
//             </nav>
//           </div>
//         </Container>
//       </div>
//     </header>
//   );
// };