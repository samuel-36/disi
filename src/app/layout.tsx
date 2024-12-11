import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Header } from "@/sections/Header";  // Import the Header
import Footer from "@/components/Footer/Footer";  // Import the Footer
import { ToastContainer } from "react-toastify";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Light DISI Page",
  description: "Template created by Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative overflow-x-hidden">
      <body className={twMerge(
        dmSans.className, 
        "antialiased bg-[#EAEEFE] overflow-x-hidden min-h-screen flex flex-col"
      )}>
        {/* Header appears on all pages */}
        <Header />
        <ToastContainer />
        {/* Main content */}
        <main className="flex-grow overflow-x-hidden">
          {children}
        </main>
        
        {/* Footer appears on all pages */}
        <Footer />
      </body>
    </html>
  );
}

// import type { Metadata } from "next";
// import { DM_Sans } from "next/font/google";
// import "./globals.css";
// import { twMerge } from "tailwind-merge";
// import { Header } from "@/sections/Header";  // Import the Header
// import Footer from "@/components/Footer/Footer";  // Import the Footer

// const dmSans = DM_Sans({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Light DISI Page",
//   description: "Template created by Frontend Tribe",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className="relative">
//       <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
//         {/* Header appears on all pages */}
//         <Header />
        
//         {/* Main content */}
//         <main>{children}</main>
        
//         {/* Footer appears on all pages */}
//         <Footer />
//       </body>
//     </html>
//   );
// }
