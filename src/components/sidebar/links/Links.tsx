import { motion } from 'framer-motion';
import React from 'react';

const items = [
    "Homepage",
    "About Us",
    "Solutions",
    "Resources",
    "Careers",
    "Contact", // Corrected typo
];

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    },
};

const Links = () => {
    return (
        <motion.div className='links' variants={variants}>
            {items.map(item => (
                <motion.a
                    href={`#${item}`}
                    key={item}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="link-item" // Add class for styling
                >
                    {item}
                </motion.a>
            ))}
        </motion.div>
    );
};

export default Links;


// import { motion } from 'framer-motion';
// import React from 'react'
// //former code
// const items = [
//     "Homepage",
//     "About Us",
//     "Solutions",
//     "Resources",
//     "Careers",
//     "Contacr",
// ]

// const variants = {
//     open:{
//         transition: {
//             staggerChildren: 0.1,
//         },
//     },
//     closed: {
//         transition: {
//             staggerChildren: 0.05,
//             staggerDirection: -1
//         },
//     },
// };

// const itemVariants = {
//     open:{
//         y: 0,
//         opacity: 1
//     },
//     closed: {
//         y: 50,
//         opacity: 0
//     },
// };

// const Links = () => {
//   return (
//     <motion.div className='links' variants={variants}>{items.map(item => (
//         <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>{item}</motion.a>
//     ))}</motion.div>
//   )
// }

// export default Links;