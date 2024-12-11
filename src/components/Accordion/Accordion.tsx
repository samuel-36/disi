'use client';

import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-4">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full p-4 bg-white text-green-600 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
      >
        <span className="text-lg font-semibold">{title}</span>
        <svg
          className={`fill-green-600 transition-all duration-300 transform ${
            accordionOpen ? 'rotate-180' : 'rotate-0'
          }`}
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transition-all duration-300 transform ${
              accordionOpen ? 'rotate-90' : 'rotate-0'
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transition-all duration-300 transform ${
              accordionOpen ? '-rotate-90' : 'rotate-0'
            }`}
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          accordionOpen
            ? 'max-h-screen opacity-100 p-4 bg-white text-gray-900 rounded-b-lg'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-sm">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;


// 'use client';

// import React, { useState } from 'react';

// interface AccordionProps {
//   title: string;
//   answer: string;
// }

// const Accordion: React.FC<AccordionProps> = ({ title, answer }) => {
//   const [accordionOpen, setAccordionOpen] = useState(false);

//   return (
//     <div className="py-4">
//       <button
//         onClick={() => setAccordionOpen(!accordionOpen)}
//         className="flex justify-between w-full p-4 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
//       >
//         <span className="text-lg font-semibold">{title}</span>
//         <svg
//           className={`fill-white transition-all duration-300 transform ${
//             accordionOpen ? 'rotate-180' : 'rotate-0'
//           }`}
//           width="16"
//           height="16"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <rect
//             y="7"
//             width="16"
//             height="2"
//             rx="1"
//             className={`transition-all duration-300 transform ${
//               accordionOpen ? 'rotate-90' : 'rotate-0'
//             }`}
//           />
//           <rect
//             y="7"
//             width="16"
//             height="2"
//             rx="1"
//             className={`transition-all duration-300 transform ${
//               accordionOpen ? '-rotate-90' : 'rotate-0'
//             }`}
//           />
//         </svg>
//       </button>
//       <div
//         className={`overflow-hidden transition-all duration-500 ease-in-out ${
//           accordionOpen
//             ? 'max-h-screen opacity-100 p-4 bg-white text-gray-900 rounded-b-lg'
//             : 'max-h-0 opacity-0'
//         }`}
//       >
//         <div className="text-sm">{answer}</div>
//       </div>
//     </div>
//   );
// };

// export default Accordion;


// 'use client';

// import React, { useState } from 'react';

// interface AccordionProps {
//   title: string;
//   answer: string;
// }

// const Accordion: React.FC<AccordionProps> = ({ title, answer }) => {
//   const [accordionOpen, setAccordionOpen] = useState(false);

//   return (
//     <div className="py-2">
//       <button
//         onClick={() => setAccordionOpen(!accordionOpen)}
//         className="flex justify-between w-full"
//       >
//         <span className='text-white text-start'>{title}</span>
//         <svg
//           className="fill-white shrink-0 ml-8"
//           width="16"
//           height="16"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <rect
//             y="7"
//             width="16"
//             height="2"
//             rx="1"
//             className={`transform origin-center transition duration-200 ease-out ${
//               accordionOpen && '!rotate-180'
//             }`}
//           />
//           <rect
//             y="7"
//             width="16"
//             height="2"
//             rx="1"
//             className={`transform origin-center rotate-90 transition duration-200 ease-out ${
//               accordionOpen && '!rotate-180'
//             }`}
//           />
//         </svg>
//       </button>
//       <div
//         className={`grid overflow-hidden transition-all duration-300 ease-in-out text-white text-sm ${
//           accordionOpen
//             ? 'grid-rows-[1fr] opacity-100'
//             : 'grid-rows-[0fr] opacity-0'
//         }`}
//       >
//         <div className="overflow-hidden">{answer}</div>
//       </div>
//     </div>
//   );
// };

// export default Accordion;
