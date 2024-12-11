'use client';

import mofLandsLogo from "@/assets/mofLandsLogo.jpg";
import NSSFlogo from "@/assets/NSSFlogo.jpg";
import supremecourtLogo from "@/assets/supremecourtLogo.jpeg";
import RerecLogo from "@/assets/RerecLogo.png";
import oneWayLogo from "@/assets/oneWayLogo.png";
import MinistryofLandsMombasa from "@/assets/MinistryofLandsMombasa.jpg";
import KenyaRailwaysLogo from "@/assets/KenyaRailwaysLogo.png";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

// Define the testimonial data type
interface Testimonial {
  text: string;
  imageSrc: string; // Image source should be a string (URL)
  name: string;
}

// Testimonials data array with logos instead of avatars
const testimonials: Testimonial[] = [
  {
    text: "Digitizing our paper records has transformed how we do business. DISI Group made it so easy, and now our employees can work faster, collaborate more effectively, and focus on growing our business instead of dealing with paper trails.",
    imageSrc: mofLandsLogo.src, // Replaced avatar with logo
    name: "Ministry of Lands",
  },
  {
    text: "We’ve saved a significant amount on storage space and document retrieval times since we partnered with DISI Group to digitize our archives. Their expertise has helped us reduce operational costs, and we can now focus on scaling our business.",
    imageSrc: NSSFlogo.src, // Replaced avatar with logo
    name: "NSSF Kenya",
  },
  {
    text: "With sensitive client data now stored securely in a digital format, we have peace of mind knowing that we’re fully compliant with industry standards. DISI Group's digitization service has taken our data security to the next level.",
    imageSrc: supremecourtLogo.src, // Replaced avatar with logo
    name: "Supreme Court of Kenya",
  },
  {
    text: "Since digitizing our customer records, our response times have decreased dramatically. With easy access to historical data, we can serve our clients faster and more accurately. DISI Group helped us become more agile and responsive.",
    imageSrc: RerecLogo.src, // Replaced avatar with logo
    name: "The Rural Electrification and Renewable Energy Corporation.",
  },
  {
    text: "Compliance is critical in our industry, and DISI Group made it simple. Their digitization services have enabled us to stay compliant with regulations while also improving our overall document retrieval process. We couldn’t be happier with the results!",
    imageSrc: oneWayLogo.src, // Replaced avatar with logo
    name: "One Way",
  },
  {
    text: "We were worried about the complexities of integrating a new system, but DISI Group made the process smooth and straightforward. Our employees quickly adapted to the new digital platform, which has drastically improved our workflow efficiency.",
    imageSrc: MinistryofLandsMombasa.src, // Replaced avatar with logo
    name: "Ministry of Lands Mombasa",
  },
  {
    text: "As our company grows, so does our need for better document management. DISI Group’s scalable digitization solutions have given us the flexibility to manage increasing volumes of data without compromising efficiency or security.",
    imageSrc: KenyaRailwaysLogo.src, // Replaced avatar with logo
    name: "Kenya Railways",
  },
  {
    text: "The ability to access files from any location has improved our team collaboration immensely. We can work together in real-time, making decisions faster and driving innovation within the company.",
    imageSrc: mofLandsLogo.src, // Replaced avatar with logo
    name: "Ministry of Lands",
  },
  {
    text: "Digitizing our physical documents has ensured that we can continue operating smoothly even during unexpected disruptions. DISI Group has helped us establish a more resilient and efficient business model.",
    imageSrc: NSSFlogo.src, // Replaced avatar with logo
    name: "NSSF Kenya",
  },
];

// Split the testimonials into 3 columns for responsive design
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// Testimonials Column Component
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(null);

  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, imageSrc, name }, idx) => (
              <motion.div
                key={name}
                className="card relative"
                onHoverStart={() => setHoveredTestimonial(idx)}
                onHoverEnd={() => setHoveredTestimonial(null)}
                whileHover={{
                  scale: 1.1,
                  zIndex: 10, // Ensures that the hovered card is above others
                }}
              >
                <div>{text}</div>
                <div className="flex items-center gap-4 mt-5 justify-center">
                  <Image
                    width={40}
                    height={40}
                    src={imageSrc} // Image source as string (logo)
                    alt={name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="font-medium">{name}</div>
                </div>

                {/* Popup on Hover */}
                {hoveredTestimonial === idx && (
                  <div className="absolute top-0 left-0 right-0 bg-white p-6 shadow-lg rounded-lg">
                    <div className="font-semibold text-lg">{name}</div>
                    <div className="text-sm text-gray-600">{text}</div>
                  </div>
                )}
              </motion.div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

// Main Testimonials Component
export const Testimonials = () => {
  return (
    <section className="bg-white py-8 from-green-950 to-transparent">
      <div className="container">
        <div className="section-title">
          <div className="flex justify-center">
            <div className="tag mb-8">Testimonials</div>
          </div>
          <h2 className="section-title">What Our Clients Say:</h2>
          <p className="section-description font-semibold mt-5 text-slate-600">
            "Thanks to DISI GROUP, our entire document management system has been digitized seamlessly. The transition was smooth, and now we can access critical files in seconds, saving us hours of manual work each week."
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};


// 'use client';

// import avatar1 from "@/assets/avatar-1.png";
// import avatar2 from "@/assets/avatar-2.png";
// import avatar3 from "@/assets/avatar-3.png";
// import avatar4 from "@/assets/avatar-4.png";
// import avatar5 from "@/assets/avatar-5.png";
// import avatar6 from "@/assets/avatar-6.png";
// import avatar7 from "@/assets/avatar-7.png";
// import avatar8 from "@/assets/avatar-8.png";
// import avatar9 from "@/assets/avatar-9.png";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import React, { useState } from "react";
// import { twMerge } from "tailwind-merge";

// // Define the testimonial data type
// interface Testimonial {
//   text: string;
//   imageSrc: string; // Image source should be a string (URL)
//   name: string;
//   username: string;
// }

// // Testimonials data array
// const testimonials: Testimonial[] = [
//   {
//     text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
//     imageSrc: avatar1.src,
//     name: "Jamie Rivera",
//     username: "@jamietechguru00",
//   },
//   {
//     text: "Our team's productivity has skyrocketed since we started using this tool.",
//     imageSrc: avatar2.src,
//     name: "Josh Smith",
//     username: "@jjsmith",
//   },
//   {
//     text: "This app has completely transformed how I manage my projects and deadlines.",
//     imageSrc: avatar3.src,
//     name: "Morgan Lee",
//     username: "@morganleewhiz",
//   },
//   {
//     text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
//     imageSrc: avatar4.src,
//     name: "Casey Jordan",
//     username: "@caseyj",
//   },
//   {
//     text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
//     imageSrc: avatar5.src,
//     name: "Taylor Kim",
//     username: "@taylorkimm",
//   },
//   {
//     text: "The customizability and integration capabilities of this app are top-notch.",
//     imageSrc: avatar6.src,
//     name: "Riley Smith",
//     username: "@rileysmith1",
//   },
//   {
//     text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
//     imageSrc: avatar7.src,
//     name: "Jordan Patels",
//     username: "@jpatelsdesign",
//   },
//   {
//     text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
//     imageSrc: avatar8.src,
//     name: "Sam Dawson",
//     username: "@dawsontechtips",
//   },
//   {
//     text: "Its user-friendly interface and robust features support our diverse needs.",
//     imageSrc: avatar9.src,
//     name: "Casey Harper",
//     username: "@casey09",
//   },
// ];

// // Split the testimonials into 3 columns for responsive design
// const firstColumn = testimonials.slice(0, 3);
// const secondColumn = testimonials.slice(3, 6);
// const thirdColumn = testimonials.slice(6, 9);

// // Testimonials Column Component
// const TestimonialsColumn = (props: {
//   className?: string;
//   testimonials: typeof testimonials;
//   duration?: number;
// }) => {
//   const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(null);

//   return (
//     <div className={props.className}>
//       <motion.div
//         animate={{
//           translateY: "-50%",
//         }}
//         transition={{
//           duration: props.duration || 10,
//           repeat: Infinity,
//           ease: "linear",
//           repeatType: "loop",
//         }}
//         className="flex flex-col gap-6 pb-6"
//       >
//         {[...new Array(2)].fill(0).map((_, index) => (
//           <React.Fragment key={index}>
//             {props.testimonials.map(({ text, imageSrc, name, username }, idx) => (
//               <motion.div
//                 key={`${username}-${index}`}
//                 className="card relative"
//                 onHoverStart={() => setHoveredTestimonial(idx)}
//                 onHoverEnd={() => setHoveredTestimonial(null)}
//                 whileHover={{
//                   scale: 1.1,
//                   zIndex: 10, // Ensures that the hovered card is above others
//                 }}
//               >
//                 <div>{text}</div>
//                 <div className="flex items-center gap-2 mt-5">
//                   <Image
//                     width={40}
//                     height={40}
//                     src={imageSrc} // Image source as string
//                     alt={name}
//                     className="h-10 w-10 rounded-full"
//                   />
//                   <div className="flex flex-col">
//                     <div className="font-medium tracking-tight leading-5">{name}</div>
//                     <div className="leading-5 tracking-tight">{username}</div>
//                   </div>
//                 </div>

//                 {/* Popup on Hover */}
//                 {hoveredTestimonial === idx && (
//                   <div className="absolute top-0 left-0 right-0 bg-white p-6 shadow-lg rounded-lg">
//                     <div className="font-semibold text-lg">{name}</div>
//                     <div className="text-sm text-gray-600">{text}</div>
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </React.Fragment>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// // Main Testimonials Component
// export const Testimonials = () => {
//   return (
//     <section className="bg-white py-8 from-green-950 to-transparent">
//       <div className="container">
//         <div className="section-title">
//           <div className="flex justify-center">
//             <div className="tag mb-8">Testimonials</div>
//           </div>
//           <h2 className="section-title">What Our Clients Say:</h2>
//           <p className="section-description font-semibold mt-5 text-slate-600">
//             "Thanks to DISI GROUP, our entire document management system has been digitized seamlessly. The transition was smooth, and now we can access critical files in seconds, saving us hours of manual work each week."
//           </p>
//         </div>
//         <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
//           <TestimonialsColumn testimonials={firstColumn} duration={15} />
//           <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
//           <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
//         </div>
//       </div>
//     </section>
//   );
// };


// 'use client';

// import avatar1 from "@/assets/avatar-1.png";
// import avatar2 from "@/assets/avatar-2.png";
// import avatar3 from "@/assets/avatar-3.png";
// import avatar4 from "@/assets/avatar-4.png";
// import avatar5 from "@/assets/avatar-5.png";
// import avatar6 from "@/assets/avatar-6.png";
// import avatar7 from "@/assets/avatar-7.png";
// import avatar8 from "@/assets/avatar-8.png";
// import avatar9 from "@/assets/avatar-9.png";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import React from "react";
// import { twMerge } from "tailwind-merge";

// // Define the testimonial data type
// interface Testimonial {
//   text: string;
//   imageSrc: string; // Image source should be a string (URL)
//   name: string;
//   username: string;
// }

// // Testimonials data array
// const testimonials: Testimonial[] = [
//   {
//     text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
//     imageSrc: avatar1.src,
//     name: "Jamie Rivera",
//     username: "@jamietechguru00",
//   },
//   {
//     text: "Our team's productivity has skyrocketed since we started using this tool.",
//     imageSrc: avatar2.src,
//     name: "Josh Smith",
//     username: "@jjsmith",
//   },
//   {
//     text: "This app has completely transformed how I manage my projects and deadlines.",
//     imageSrc: avatar3.src,
//     name: "Morgan Lee",
//     username: "@morganleewhiz",
//   },
//   {
//     text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
//     imageSrc: avatar4.src,
//     name: "Casey Jordan",
//     username: "@caseyj",
//   },
//   {
//     text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
//     imageSrc: avatar5.src,
//     name: "Taylor Kim",
//     username: "@taylorkimm",
//   },
//   {
//     text: "The customizability and integration capabilities of this app are top-notch.",
//     imageSrc: avatar6.src,
//     name: "Riley Smith",
//     username: "@rileysmith1",
//   },
//   {
//     text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
//     imageSrc: avatar7.src,
//     name: "Jordan Patels",
//     username: "@jpatelsdesign",
//   },
//   {
//     text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
//     imageSrc: avatar8.src,
//     name: "Sam Dawson",
//     username: "@dawsontechtips",
//   },
//   {
//     text: "Its user-friendly interface and robust features support our diverse needs.",
//     imageSrc: avatar9.src,
//     name: "Casey Harper",
//     username: "@casey09",
//   },
// ];

// // Split the testimonials into 3 columns for responsive design
// const firstColumn = testimonials.slice(0, 3);
// const secondColumn = testimonials.slice(3, 6);
// const thirdColumn = testimonials.slice(6, 9);

// // Testimonials Column Component
// const TestimonialsColumn = (props: {
//   className?: string;
//   testimonials: typeof testimonials;
//   duration?: number;
// }) => (
//   <div className={props.className}>
//     <motion.div
//       animate={{
//         translateY: "-50%",
//       }}
//       transition={{
//         duration: props.duration || 10,
//         repeat: Infinity,
//         ease: "linear",
//         repeatType: "loop",
//       }}
//       className="flex flex-col gap-6 pb-6"
//     >
//       {[...new Array(2)].fill(0).map((_, index) => (
//         <React.Fragment key={index}>
//           {props.testimonials.map(({ text, imageSrc, name, username }) => (
//             <div className="card" key={`${username}-${index}`}>
//               <div>{text}</div>
//               <div className="flex items-center gap-2 mt-5">
//                 <Image
//                   width={40}
//                   height={40}
//                   src={imageSrc} // Image source as string
//                   alt={name}
//                   className="h-10 w-10 rounded-full"
//                 />
//                 <div className="flex flex-col">
//                   <div className="font-medium tracking-tight leading-5">{name}</div>
//                   <div className="leading-5 tracking-tight">{username}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </React.Fragment>
//       ))}
//     </motion.div>
//   </div>
// );

// // Main Testimonials Component
// export const Testimonials = () => {
//   return (
//     <section className="bg-white py-8 from-green-950 to-transparent">
//       <div className="container">
//         <div className="section-title">
//           <div className="flex justify-center">
//             <div className="tag mb-8">Testimonials</div>
//           </div>
//           <h2 className="section-title">What Our Clients Say</h2>
//           <p className="section-description font-semibold mt-5 text-slate-600">
//             "With this app, we can easily assign tasks, track progress, and manage documents all in one place."
//           </p>
//         </div>
//         <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
//           <TestimonialsColumn testimonials={firstColumn} duration={15} />
//           <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
//           <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
//         </div>
//       </div>
//     </section>
//   );
// };


// 'use client';

// import avatar1 from "@/assets/avatar-1.png";
// import avatar2 from "@/assets/avatar-2.png";
// import avatar3 from "@/assets/avatar-3.png";
// import avatar4 from "@/assets/avatar-4.png";
// import avatar5 from "@/assets/avatar-5.png";
// import avatar6 from "@/assets/avatar-6.png";
// import avatar7 from "@/assets/avatar-7.png";
// import avatar8 from "@/assets/avatar-8.png";
// import avatar9 from "@/assets/avatar-9.png";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import React from "react";
// import { twMerge } from "tailwind-merge";


// const testimonials = [
//   {
//     text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
//     imageSrc: avatar1.src,
//     name: "Jamie Rivera",
//     username: "@jamietechguru00",
//   },
//   {
//     text: "Our team's productivity has skyrocketed since we started using this tool. ",
//     imageSrc: avatar2.src,
//     name: "Josh Smith",
//     username: "@jjsmith",
//   },
//   {
//     text: "This app has completely transformed how I manage my projects and deadlines.",
//     imageSrc: avatar3.src,
//     name: "Morgan Lee",
//     username: "@morganleewhiz",
//   },
//   {
//     text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
//     imageSrc: avatar4.src,
//     name: "Casey Jordan",
//     username: "@caseyj",
//   },
//   {
//     text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
//     imageSrc: avatar5.src,
//     name: "Taylor Kim",
//     username: "@taylorkimm",
//   },
//   {
//     text: "The customizability and integration capabilities of this app are top-notch.",
//     imageSrc: avatar6.src,
//     name: "Riley Smith",
//     username: "@rileysmith1",
//   },
//   {
//     text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
//     imageSrc: avatar7.src,
//     name: "Jordan Patels",
//     username: "@jpatelsdesign",
//   },
//   {
//     text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
//     imageSrc: avatar8.src,
//     name: "Sam Dawson",
//     username: "@dawsontechtips",
//   },
//   {
//     text: "Its user-friendly interface and robust features support our diverse needs.",
//     imageSrc: avatar9.src,
//     name: "Casey Harper",
//     username: "@casey09",
//   },
// ];

// const firstColumn = testimonials.slice(0,3);
// const secondColumn = testimonials.slice(3,6)
// const thirdColumn =  testimonials.slice(6,9);

// const TestimonialsColumn = ( props: { 
//   className?: string; 
//   testimonials: typeof testimonials;
//   duration?: number
// }) => (
//   <div className={props.className}>
//     <motion.div
//     animate={{
//       translateY:"-50%",
//     }}
//     transition={{
//       duration: props.duration || 10,
//       repeat: Infinity,
//       ease: "linear",
//       repeatType: "loop"
//     }}
//     className="flex flex-col gap-6 pb-6">

//       {[... new Array(2)].fill(0).map((_, index) => (
//         <React.Fragment key={index}>
//           {props.testimonials.map(({ text, imageSrc, name, username }) => (
//           <div className="card" key={`${username}-${index}`}>
//             <div>{text}</div>
//             <div className="flex items-center gap-2 mt-5">
//               <Image
//               width={40}
//               height={40}
//               src={imageSrc} alt={name} className="h-10 w-10 rounded-full" />
//               <div className="flex flex-col">
//                 <div className="font-medium tracking-tight leading-5">{name}</div>
//                 <div className="leading-5 tracking-tight">{username}</div>
//               </div>
//             </div>
//           </div>
//         ))}
//         </React.Fragment>
//       ))} 
//       </motion.div>
//     </div>
// )

// export const Testimonials = () => {
//   return <section className="bg-white py-8 from-green-950 to-transparent">
//     <div className="container">
//       <div className="section-title">
//       <div className="flex justify-center">
//       <div className="tag mb-8">Testimonials</div>
//       </div>
//       <h2 className="section-title">What Our Clients Say</h2>
//       <p className="section-description font-semibold mt-5 text-slate-600">"With this app, we can easily assign tasks, track progress, and manage documents all in one place."</p>
//       </div>
//       <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
//         <TestimonialsColumn testimonials={firstColumn} duration={15} />
//         <TestimonialsColumn testimonials={secondColumn} className="hidden md:block"  duration={19}/>
//         <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17}/>
//       </div>
//     </div>
//   </section>;
// };
