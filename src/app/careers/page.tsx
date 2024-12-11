// import React from 'react';
// import TeamCard from '../../components/TeamCard';
// import HighlightCard from '../../components/HighlightCard';

// // Import images directly from their file paths
// import avatar1 from '@/assets/avatarBenard.png';
// import avatar2 from '@/assets/avatarMuturi.jpg';
// import avatar3 from '@/assets/avatarNyambura.jpg';
// import avatar4 from '@/assets/avatarBella.jpg';
// import avatar5 from '@/assets/avatarVera.jpg';
// import avatar6 from '@/assets/avatarCarol.jpg';
// import avatar7 from '@/assets/avatarHr.jpg';
// import avatar8 from '@/assets/avatarFlorence.jpg';
// import avatar9 from '@/assets/avatarOnnakasi.jpg';
// import avatar10 from '@/assets/avatarGeorge.jpg';
// import avatar11 from '@/assets/avatarKutosi.jpg';
// import avatar12 from '@/assets/avatarEston.jpg';
// import avatar13 from '@/assets/avatarShadrack.jpg';
// import avatar14 from '@/assets/avatarSam.jpg';



// import CareersHero from '@/components/CareersHero';
// //former code
// const CareersPage = () => {
//   const founders = [
//     {
//       name: 'Bernard Kamau',
//       title: 'Managing Director',
//       quote: 'Our team is our greatest asset. Together, we innovate and excel.',
//       image: avatar2,
//     },
//     {
//       name: 'Muturi Mutuota',
//       title: 'Business Development Director',
//       quote: 'Technology and teamwork drive our success every day.',
//       image: avatar2,
//     },
//     {
//       name: 'Elijah Mwangi',
//       title: 'Director',
//       quote: 'Technology and teamwork drive our success every day.',
//       image: avatar2,
//     },
//   ];

//   const teamMembers = [
//     {
//       name: 'Nyambura Njuguna',
//       title: 'General Manager',
//       department: 'Operations',
//       image: avatar3,
//     },
//     {
//       name: 'Benerdinah Wesonga',
//       title: 'Executive Administrator',
//       department: 'Operations',
//       image: avatar4,
//     },
//     {
//       name: 'Veronica Akoth',
//       title: 'Operations Person',
//       department: 'Operations',
//       image: avatar5,
//     },
//     {
//       name: 'Caroline Kamami',
//       title: 'Project Officer',
//       department: 'Operations',
//       image: avatar6,
//     },
//     {
//       name: 'Carolyne Kariuki',
//       title: 'Human Resource Manager',
//       department: 'Human Resources',
//       image: avatar7,
//     },
//     {
//       name: 'Florence Ngui',
//       title: 'Human Resource Administrator',
//       department: 'Human Resources',
//       image: avatar8,
//     },
//     {
//       name: 'Kevin Onnakasi',
//       title: 'Technical Lead',
//       department: 'IT Department',
//       image: avatar9,
//     },
//     {
//       name: 'George Okello',
//       title: 'Senior Software Developer',
//       department: 'IT Department',
//       image: avatar10,
//     },
//     {
//       name: 'Samuel Kutosi',
//       title: 'IT Support Technician',
//       department: 'IT Department',
//       image: avatar11,
//     },
//     {
//       name: 'Eston Mbugua',
//       title: 'Junior Systems Engineer',
//       department: 'IT Department',
//       image: avatar12,
//     },
//     {
//       name: 'Shadrack Nganga',
//       title: 'Junior Systems Engineer',
//       department: 'IT Department',
//       image: avatar13,
//     },
//     {
//       name: 'Samuel Ninga',
//       title: 'Software Developer',
//       department: 'IT Department',
//       image: avatar14,
//     },
//   ];

//   const departments = Array.from(new Set(teamMembers.map((member) => member.department)));

//   return (
//     <div className="bg-white min-h-screen">
//       <CareersHero />
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Highlighted CEO Section */}
//         <section className="mb-12">
//         <h1 className="text-4xl font-bold text-gray-800 md:text-5xl text-center">Meet Our Founders</h1>
//           <div className="mt-8">
//             <HighlightCard founders={founders} />
//           </div>
//         </section>

//         {/* Team Members Section */}
//         <section>
//           <h2 className="text-4xl font-bold text-center text-green-800">Our Team</h2>
//           {departments.map((department) => (
//             <div key={department} className="mt-12">
//               <h3 className="tag">{department}</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
//                 {teamMembers
//                   .filter((member) => member.department === department)
//                   .map((member) => (
//                     <TeamCard
//                       key={member.name}
//                       name={member.name}
//                       title={member.title}
//                       department={member.department}
//                       image={member.image}
//                     />
//                   ))}
//               </div>
//             </div>
//           ))}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default CareersPage;
import React from 'react';
import TeamCard from '../../components/TeamCard';
import HighlightCard from '../../components/HighlightCard';

// Import images directly from their file paths
import avatar1 from '@/assets/avatarBenard.png';
import avatar2 from '@/assets/avatarMuturi.jpg';
import avatar3 from '@/assets/avatarNyambura.jpg';
import avatar4 from '@/assets/avatarBella.jpg';
import avatar5 from '@/assets/avatarVera.jpg';
import avatar6 from '@/assets/avatarCarol.jpg';
import avatar7 from '@/assets/avatarHr.jpg';
import avatar8 from '@/assets/avatarFlorence.jpg';
import avatar9 from '@/assets/avatarOnnakasi.jpg';
import avatar10 from '@/assets/avatarGeorge.jpg';
import avatar11 from '@/assets/avatarKutosi.jpg';
import avatar12 from '@/assets/avatarEston.jpg';
import avatar13 from '@/assets/avatarShadrack.jpg';
import avatar14 from '@/assets/avatarSam.jpg';



import CareersHero from '@/components/CareersHero';
import TeamCardCarousel from '../../components/TeamCard';
//former code
const CareersPage = () => {
  const founders = [
    {
      name: 'Bernard Kamau',
      title: 'Managing Director',
      quote: 'Our team is our greatest asset. Together, we innovate and excel.',
      image: avatar2,
    },
    {
      name: 'Muturi Mutuota',
      title: 'Business Development Director',
      quote: 'Technology and teamwork drive our success every day.',
      image: avatar2,
    },
    {
      name: 'Elijah Mwangi',
      title: 'Director',
      quote: 'Technology and teamwork drive our success every day.',
      image: avatar2,
    },
  ];

  const teamMembers = [
    {
      name: 'Nyambura Njuguna',
      title: 'General Manager',
      department: 'Operations',
      image: avatar3,
    },
    {
      name: 'Benerdinah Wesonga',
      title: 'Executive Administrator',
      department: 'Operations',
      image: avatar4,
    },
    {
      name: 'Veronica Akoth',
      title: 'Operations Person',
      department: 'Operations',
      image: avatar5,
    },
    {
      name: 'Caroline Kamami',
      title: 'Project Officer',
      department: 'Operations',
      image: avatar6,
    },
    {
      name: 'Carolyne Kariuki',
      title: 'Human Resource Manager',
      department: 'Human Resources',
      image: avatar7,
    },
    {
      name: 'Florence Ngui',
      title: 'Human Resource Administrator',
      department: 'Human Resources',
      image: avatar8,
    },
    {
      name: 'Kevin Onnakasi',
      title: 'Technical Lead',
      department: 'IT Department',
      image: avatar9,
    },
    {
      name: 'George Okello',
      title: 'Senior Software Developer',
      department: 'IT Department',
      image: avatar10,
    },
    {
      name: 'Samuel Kutosi',
      title: 'IT Support Technician',
      department: 'IT Department',
      image: avatar11,
    },
    {
      name: 'Eston Mbugua',
      title: 'Junior Systems Engineer',
      department: 'IT Department',
      image: avatar12,
    },
    {
      name: 'Shadrack Nganga',
      title: 'Junior Systems Engineer',
      department: 'IT Department',
      image: avatar13,
    },
    {
      name: 'Samuel Ninga',
      title: 'Software Developer',
      department: 'IT Department',
      image: avatar14,
    },
  ];

  const departments = Array.from(new Set(teamMembers.map((member) => member.department)));

  return (
    <div className="bg-white min-h-screen">
      <CareersHero />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Highlighted CEO Section */}
        <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800 md:text-5xl text-center">Meet Our Founders</h1>
          <div className="mt-8">
            <HighlightCard founders={founders} />
          </div>
        </section>

        {/* Team Members Section */}
        <section>
          <h2 className="text-4xl font-bold text-center text-green-800">Our Team</h2>
          {departments.map((department) => (
            <div key={department} className="mt-12">
              <div className="flex justify-center">
              <h3 className="tag mb-4">{department}</h3>
          </div>
              <TeamCardCarousel 
                members={teamMembers.filter((member) => member.department === department)}
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default CareersPage;
