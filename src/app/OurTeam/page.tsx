import FAQ from '@/components/Accordion/FAQ';
import ProfileCard from '@/components/team/MeetTheTeam';
import React from 'react';

type Social = 'github' | 'twitter' | 'pinterest';

export default function TeamPage() {
  const profiles = [
    {
      imageSrc: '/assets2/profile_img_1.png',
      name: 'Julie Watson',
      role: 'UX / UI Developer',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur delectus, mollitia tenetur libero quam recusandae alias in incidunt.',
      socials: ['github', 'twitter', 'pinterest'] as Social[],
    },
    {
      imageSrc: '/images/profile2.jpg',
      name: 'Marc McKnew',
      role: 'Front-End Developer',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur delectus, mollitia tenetur libero quam recusandae alias in incidunt.',
      socials: ['github', 'pinterest'] as Social[],
    },
    {
      imageSrc: '/images/profile3.jpg',
      name: 'Jenny McKnew',
      role: 'Back-End Developer',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur delectus, mollitia tenetur libero quam recusandae alias in incidunt.',
      socials: ['github', 'twitter'] as Social[],
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-6 justify-center p-6 mt-8">
      {profiles.map((profile, index) => (
        <ProfileCard key={index} {...profile} />
      ))}
      </div>
      <div className='w-full h-screen bg-white'>
        <div className='container p-4'>
          <div className='text-center font-bold mb-4 text-green-950'>FREQUENTLY ASKED QUESTIONS</div>
        <FAQ />
        </div>
      </div>
    </div>
  );
}
