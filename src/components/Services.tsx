'use client';

import Image from "next/image";
import React, { useState } from "react";
import QC from "@/assets/QCIcon.png";
import indexing from '@/assets/indexingIcon.jpg'
import QA from '@/assets/QA.png';
import DP from '@/assets/docPrep.png';
import VD from '@/assets/validation.png';
import RG from '@/assets/Registry.png';
import Scan from '@/assets/scanning.png';
import UP from '@/assets/upload.png';

// Define a type for the service
type Service = {
  imageSrc: string;
  title: string;
  description: string;
  details: string;
};

const services: Service[] = [
  {
    imageSrc: QC.src,
    title: "Quality Control",
    description: "Ensure the accuracy and consistency of digitized documents.",
    details:
      "Our quality control process verifies the accuracy of digitized documents, ensuring they meet the highest standards of precision and consistency before delivery.",
  },
  {
    imageSrc: indexing.src,
    title: "Indexing",
    description: "Organize and label digitized documents for easy retrieval.",
    details:
      "We provide efficient indexing services to categorize and tag your digitized documents, enabling quick and seamless access to your data.",
  },
  {
    imageSrc: QA.src,
    title: "Quality Assurance",
    description: "Maintain the integrity and standards of digitized documents.",
    details:
      "Our quality assurance team performs rigorous checks to maintain the integrity and compliance of digitized documents with your specifications.",
  },
  {
    imageSrc: DP.src,
    title: "Document Preparation",
    description: "Prepare physical documents for a seamless digitization process.",
    details:
      "Our document preparation services include removing staples, repairing tears, and ensuring your documents are ready for efficient digitization.",
  },
  {
    imageSrc: VD.src,
    title: "Document Validation",
    description: "Verify the accuracy and completeness of digitized data.",
    details:
      "We validate the digitized content to ensure it matches the original documents and is complete, consistent, and accurate.",
  },
  {
    imageSrc: RG.src,
    title: "Document Registry",
    description: "Log and track documents throughout the digitization lifecycle.",
    details:
      "Our document registry system tracks every document processed, providing a complete audit trail and ensuring no document is misplaced.",
  },
  {
    imageSrc: Scan.src,
    title: "Scanning",
    description: "Convert physical documents into high-quality digital formats.",
    details:
      "We use state-of-the-art scanning equipment to digitize your documents into high-resolution digital files, suitable for long-term storage and easy access.",
  },
  {
    imageSrc: UP.src,
    title: "Upload & Delivery",
    description: "Securely deliver digitized files to your preferred platform.",
    details:
      "Our upload and delivery services ensure that digitized files are securely transferred and integrated into your document management systems or cloud storage.",
  },  
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center p-6 rounded-md bg-transparent hover:bg-green-950 transform hover:scale-105 transition duration-500 group cursor-pointer"
            onClick={() => handleServiceClick(service)}
          >
            <div className="mb-4">
              <Image
                src={service.imageSrc}
                alt={service.title}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <h2 className="font-semibold text-lg mb-2 transition duration-500 group-hover:text-white">
              {service.title}
            </h2>
            <p className="text-sm transition duration-500 group-hover:text-white">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg p-8 w-11/12 max-w-lg">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="mb-4">
              <Image
                src={selectedService.imageSrc}
                alt={selectedService.title}
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-4">{selectedService.title}</h2>
            <p className="text-gray-700">{selectedService.details}</p>
            <button
              className="mt-6 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-800 transition"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;



// 'use client';

// import Image from "next/image";
// import React, { useState } from "react";
// import {
//   FaLaptopCode,
//   FaChartLine,
//   FaPalette,
//   FaDatabase,
//   FaMobileAlt,
//   FaCalculator,
//   FaNetworkWired,
//   FaMoneyCheckAlt,
// } from "react-icons/fa";
// import QC from "@/assets/QCIcon.png";

// // Define a type for the service
// type Service = {
//   icon: JSX.Element;
//   title: string;
//   description: string;
//   details: string;
// };

// const services: Service[] = [
//   {
//     icon: <FaLaptopCode />,
//     title: "Web Design",
//     description: "We create responsive and visually appealing websites to enhance your online presence.",
//     details:
//       "Our web design service focuses on creating user-friendly, responsive, and visually appealing websites. We ensure your site provides a seamless experience across all devices.",
//   },
//   {
//     icon: <FaChartLine />,
//     title: "Marketing",
//     description: "Boost your brand with our strategic marketing services.",
//     details:
//       "Our marketing experts craft tailored strategies to enhance your brand visibility and reach your target audience effectively.",
//   },
//   {
//     icon: <FaPalette />,
//     title: "Graphics",
//     description: "Stand out with our custom graphic design solutions.",
//     details:
//       "We provide creative graphic design services that help your brand stand out and convey your message effectively.",
//   },
//   {
//     icon: <FaDatabase />,
//     title: "Data Analysis",
//     description: "Unlock insights with our data analysis services.",
//     details:
//       "Our data analysis services help you make informed decisions by extracting valuable insights from your data.",
//   },
//   {
//     icon: <FaMobileAlt />,
//     title: "App Development",
//     description: "Create powerful mobile applications with us.",
//     details:
//       "We develop custom mobile applications tailored to your business needs, ensuring a seamless user experience.",
//   },
//   {
//     icon: <FaCalculator />,
//     title: "Accounting",
//     description: "Manage your finances with precision.",
//     details:
//       "Our accounting services help you manage your finances with accuracy and compliance.",
//   },
//   {
//     icon: <FaNetworkWired />,
//     title: "Networking",
//     description: "Build and maintain robust network infrastructure.",
//     details:
//       "We design and maintain secure and scalable network infrastructures for businesses of all sizes.",
//   },
//   {
//     icon: <FaMoneyCheckAlt />,
//     title: "Payroll",
//     description: "Streamline your payroll processes.",
//     details:
//       "Our payroll services simplify your payroll management, ensuring accuracy and compliance.",
//   },
// ];

// const Services = () => {
//   // Set the state with the correct type
//   const [selectedService, setSelectedService] = useState<Service | null>(null);

//   const handleServiceClick = (service: Service) => {
//     setSelectedService(service);
//   };

//   const closeModal = () => {
//     setSelectedService(null);
//   };

//   return (
//     <div>
//       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center justify-center text-center p-6 rounded-md bg-transparent hover:bg-green-950 transform hover:scale-105 transition duration-500 group cursor-pointer"
//             onClick={() => handleServiceClick(service)}
//           >
//             <div className="text-green-600 text-4xl mb-4 transition duration-500 group-hover:text-white">
//               {service.icon}
//             </div>
//             <h2 className="font-semibold text-lg mb-2 transition duration-500 group-hover:text-white">
//               {service.title}
//             </h2>
//             <p className="text-sm transition duration-500 group-hover:text-white">
//               {service.description}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedService && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50">
//           <div className="relative bg-white rounded-lg p-8 w-11/12 max-w-lg">
//             <button
//               className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
//               onClick={closeModal}
//             >
//               &times;
//             </button>
//             <div className="text-4xl text-green-600 mb-4">{selectedService.icon}</div>
//             <h2 className="text-2xl font-semibold mb-4">{selectedService.title}</h2>
//             <p className="text-gray-700">{selectedService.details}</p>
//             <button
//               className="mt-6 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-800 transition"
//               onClick={closeModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Services;
