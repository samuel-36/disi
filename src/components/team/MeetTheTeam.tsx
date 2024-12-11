import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import { FaGithub, FaTwitter, FaPinterest } from 'react-icons/fa'; // Import necessary icons

interface ProfileCardProps {
  imageSrc: string;
  name: string;
  role: string;
  description: string;
  socials: Social[];
}

type Social = 'github' | 'twitter' | 'pinterest';

const ProfileCard: React.FC<ProfileCardProps> = ({
  imageSrc,
  name,
  role,
  description,
  socials,
}) => {
  // Mapping social platforms to their respective icons
  const socialIcons = {
    github: <FaGithub />,
    twitter: <FaTwitter />,
    pinterest: <FaPinterest />,
  };

  return (
    <div className="group card bg-white shadow-lg rounded-lg p-6 text-center transition duration-300 hover:bg-green-950">
      <div className="card-image mb-4">
        <Image
          src={imageSrc}
          alt={`${name} Profile`}
          width={96} // 96px width
          height={96} // 96px height
          className="w-24 h-24 mx-auto rounded-full object-cover"
        />
      </div>
      <p className="name text-xl font-semibold group-hover:text-white transition duration-300">{name}</p>
      <p className="text-gray-500 group-hover:text-white transition duration-300">{role}</p>
      <p className="text-gray-700 mt-2 group-hover:text-white transition duration-300">{description}</p>
      <div className="socials flex justify-center gap-4 mt-4">
        {socials.map((social) => (
          <button
            key={social}
            className="text-gray-600 group-hover:text-white transition duration-300"
          >
            {socialIcons[social]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;


// // components/componentTeam.tsx
// import React from 'react';
// import Image from 'next/image'; // Import Next.js Image component
// import { FaGithub, FaTwitter, FaPinterest } from 'react-icons/fa'; // Import necessary icons
// import imageSrc from "@/assets/DISI-logo.png";
// //former code
// interface ProfileCardProps {
//   imageSrc: string;
//   name: string;
//   role: string;
//   description: string;
//   socials: Social[];
// }

// type Social = 'github' | 'twitter' | 'pinterest';

// const ProfileCard: React.FC<ProfileCardProps> = ({
//   imageSrc,
//   name,
//   role,
//   description,
//   socials,
// }) => {
//   // Mapping social platforms to their respective icons
//   const socialIcons = {
//     github: <FaGithub />,
//     twitter: <FaTwitter />,
//     pinterest: <FaPinterest />,
//   };

//   return (
//     <div className="card bg-white shadow-lg rounded-lg p-6 text-center">
//       <div className="card-image mb-4">
//         {/* Replace <img> with <Image> */}
//         <Image
//           src={imageSrc}
//           alt={`${name} Profile`}
//           width={96} // 96px width
//           height={96} // 96px height
//           className="w-24 h-24 mx-auto rounded-full object-cover"
//         />
//       </div>
//       <p className="name text-xl font-semibold">{name}</p>
//       <p className="text-gray-500">{role}</p>
//       <p className="text-gray-700 mt-2">{description}</p>
//       <div className="socials flex justify-center gap-4 mt-4">
//         {socials.map((social) => (
//           <button key={social} className="text-gray-600 hover:text-blue-500">
//             {socialIcons[social]} {/* Display the correct icon */}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProfileCard;
