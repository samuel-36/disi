
'use client';

import { useState } from "react";
import Image, { StaticImageData } from "next/image"; // Import StaticImageData
import { motion } from "framer-motion";

// Import logos
import ibmlLogo from "@/assets/ibml.png";
import sharepointLogo from "@/assets/sharepointLogo.png";
import fujitsuLogo from "@/assets/FujitsuLogo.png";
import msDynamicsLogo from "@/assets/msDynamicsLogo.png";
import newgenLogo from "@/assets/newgen logo.png";
import alfrescoLogo from "@/assets/Alfresco-logo.png";


// Define the type for a company
type Company = {
  name: string;
  logo: StaticImageData;
  description: string;
};

// Company data
const companies: Company[] = [
  {
    name: "ibml",
    logo: ibmlLogo,
    description: "ibml is a global leader in providing high-performance scanning solutions.",
  },
  {
    name: "SharePoint",
    logo: sharepointLogo,
    description: "SharePoint is a web-based collaboration and document management platform by Microsoft.",
  },
  {
    name: "Fujitsu",
    logo: fujitsuLogo,
    description: "Fujitsu is a multinational information technology equipment and services company.",
  },
  {
    name: "Microsoft Dynamics",
    logo: msDynamicsLogo,
    description: "Microsoft Dynamics is a suite of enterprise resource planning (ERP) and customer relationship management (CRM) software applications.",
  },
  {
    name: "Newgen Software",
    logo: newgenLogo,
    description: "Newgen Software provides digital transformation solutions with a focus on process automation and document management.",
  },
  {
    name: "Alfresco",
    logo: alfrescoLogo,
    description: "Alfresco provides enterprise content management solutions, helping organizations manage and share their content securely.",
  },
  {
    name: "Newgen Software",
    logo: newgenLogo,  // You might want to change the logo for this company
    description: "Newgen Software provides digital transformation solutions with a focus on process automation and document management.",
  },
];

export const LogoTicker = () => {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  const handleLogoClick = (company: Company) => {
    setSelectedCompany(company);
  };

  const closePopup = () => {
    setSelectedCompany(null);
  };

  return (
    <div className="py-8 md:py-12 bg-white relative">
      <div className="container">
        <div className="flex justify-center">
          <div className="tag mb-8">Our Partners</div>
        </div>

        {/* Hint Text */}
        <div className="text-center text-sm mb-4 text-gray-600">
          <span>Click on the logos to learn more about our partners</span>
        </div>

        {/* Parallax Scrolling */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className="logo-ticker-image-container"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} Logo`}
                  className="logo-ticker-image cursor-pointer"
                  onClick={() => handleLogoClick(company)}
                />
              </motion.div>
            ))}
            {companies.map((company, index) => (
              <motion.div
                key={index + companies.length}
                className="logo-ticker-image-container"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} Logo`}
                  className="logo-ticker-image cursor-pointer"
                  onClick={() => handleLogoClick(company)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Popup */}
      {selectedCompany && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-4/5 max-w-lg relative">
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>
            <Image
              src={selectedCompany.logo}
              alt={`${selectedCompany.name} Logo`}
              className="mb-4 mx-auto"
            />
            <h2 className="text-xl font-bold text-center mb-2">
              {selectedCompany.name}
            </h2>
            <p className="text-gray-700 text-center">
              {selectedCompany.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};


// 'use client'

// import Image from "next/image";
// import acmeLogo from '@/assets/logo-acme.png';
// import { motion } from "framer-motion";
// import mofLandsLogo from "@/assets/mofLandsLogo.jpg";
// import NSSFlogo from "@/assets/NSSFlogo.jpg";
// import supremecourtLogo from "@/assets/supremecourtLogo.jpeg";
// import RerecLogo from "@/assets/RerecLogo.png";
// import oneWayLogo from "@/assets/oneWayLogo.png";
// import MinistryofLandsMombasa from "@/assets/MinistryofLandsMombasa.jpg";
// import KenyaRailwaysLogo from "@/assets/KenyaRailwaysLogo.png";


// export const LogoTicker = () => {
//   return(
//     <div className="py-8 md:py-12 bg-white">
//     <div className="container">
//     <div className="flex justify-center">
//       <div className="tag mb-8">Our Clients</div>
//       </div>
//       <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
//       <motion.div className="flex gap-14 flex-none pr-14"
//       animate={{
//         translateX: "-50%",
//       }}
//       transition={{
//         duration:20,
//         repeat: Infinity,
//         ease: "linear",
//         repeatType: "loop",
//       }}
//       >
//       <Image src={mofLandsLogo} alt="mofLandsLogo Logo" className="logo-ticker-image"/>
//       <Image src={NSSFlogo} alt="NSSF Logo" className="logo-ticker-image"/>
//       <Image src={supremecourtLogo} alt="supremecourt Logo" className="logo-ticker-image"/>
//       <Image src={RerecLogo} alt="acme Logo" className="logo-ticker-image"/>
//       <Image src={oneWayLogo} alt="oneWay Logo" className="logo-ticker-image"/>
//       <Image src={MinistryofLandsMombasa} alt="MinistryofLandsMombasa Logo" className="logo-ticker-image"/>
//       <Image src={KenyaRailwaysLogo} alt="KenyaRailwaysLogo Logo" className="logo-ticker-image"/>

//       <Image src={mofLandsLogo} alt="mofLandsLogo Logo" className="logo-ticker-image"/>
//       <Image src={NSSFlogo} alt="NSSF Logo" className="logo-ticker-image"/>
//       <Image src={supremecourtLogo} alt="supremecourt Logo" className="logo-ticker-image"/>
//       <Image src={RerecLogo} alt="acme Logo" className="logo-ticker-image"/>
//       <Image src={oneWayLogo} alt="oneWay Logo" className="logo-ticker-image"/>
//       <Image src={MinistryofLandsMombasa} alt="MinistryofLandsMombasa Logo" className="logo-ticker-image"/>
//       <Image src={KenyaRailwaysLogo} alt="KenyaRailwaysLogo Logo" className="logo-ticker-image"/>

//       <Image src={mofLandsLogo} alt="mofLandsLogo Logo" className="logo-ticker-image"/>
//       <Image src={NSSFlogo} alt="NSSF Logo" className="logo-ticker-image"/>
//       <Image src={supremecourtLogo} alt="supremecourt Logo" className="logo-ticker-image"/>
//       <Image src={RerecLogo} alt="acme Logo" className="logo-ticker-image"/>
//       <Image src={oneWayLogo} alt="oneWay Logo" className="logo-ticker-image"/>
//       <Image src={MinistryofLandsMombasa} alt="MinistryofLandsMombasa Logo" className="logo-ticker-image"/>
//       <Image src={KenyaRailwaysLogo} alt="KenyaRailwaysLogo Logo" className="logo-ticker-image"/>
      

//       </motion.div>
//       </div>
//     </div>
//   </div>
//   ) 
// };
