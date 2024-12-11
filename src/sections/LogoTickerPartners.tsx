

'use client';

import { useState } from "react";
import Image, { StaticImageData } from "next/image"; // Import StaticImageData
import { motion } from "framer-motion";

// Import logos
import mofLandsLogo from "@/assets/mofLandsLogo.jpg";
import NSSFlogo from "@/assets/NSSFlogo.jpg";
import supremecourtLogo from "@/assets/supremecourtLogo.jpeg";
import RerecLogo from "@/assets/RerecLogo.png";
import oneWayLogo from "@/assets/oneWayLogo.png";
import MinistryofLandsMombasa from "@/assets/MinistryofLandsMombasa.jpg";
import KenyaRailwaysLogo from "@/assets/KenyaRailwaysLogo.png";

// Define the type for a company
type Company = {
  name: string;
  logo: StaticImageData;
  description: string;
};

// Company data
const companies: Company[] = [
  {
    name: "Ministry of Lands",
    logo: mofLandsLogo,
    description: "The Ministry of Lands is responsible for land management in Kenya.",
  },
  {
    name: "NSSF",
    logo: NSSFlogo,
    description: "The National Social Security Fund provides social security services.",
  },
  {
    name: "Supreme Court of Kenya",
    logo: supremecourtLogo,
    description: "The Supreme Court is the highest court in Kenya.",
  },
  {
    name: "REREC",
    logo: RerecLogo,
    description: "The Rural Electrification and Renewable Energy Corporation.",
  },
  {
    name: "One Way",
    logo: oneWayLogo,
    description: "One Way Company provides logistics services across Kenya.",
  },
  {
    name: "Ministry of Lands Mombasa",
    logo: MinistryofLandsMombasa,
    description: "The Ministry of Lands office in Mombasa.",
  },
  {
    name: "Kenya Railways",
    logo: KenyaRailwaysLogo,
    description: "Kenya Railways provides railway transport services.",
  },
];

export const LogoTickerPartners = () => {
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
          <div className="tag mb-8">Our Clients</div>
        </div>

        {/* Hint Text */}
        <div className="text-center text-sm mb-4 text-gray-600">
          <span>Click on the logos to learn more about our clients</span>
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