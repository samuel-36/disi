// import Image, { StaticImageData } from 'next/image';

// interface TeamCardProps {
//   name: string;
//   title: string;
//   department: string;
//   image: StaticImageData | string; // Accept both StaticImageData and string
// }

// const TeamCard: React.FC<TeamCardProps> = ({ name, title, department, image }) => (
//   <div className="bg-white shadow-lg rounded-lg p-4 text-center mb-8">
//     <Image
//       src={image}
//       alt={name}
//       width={120}
//       height={120}
//       className="rounded-full mx-auto object-cover"
//     />
//     <h3 className="text-xl font-semibold text-green-900 mt-4">{name}</h3>
//     <p className="text-green-700">{title}</p>
//     <p className="text-sm text-green-600">{department}</p>
//   </div>
// );

// export default TeamCard;
'use client'
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TeamCardProps {
  name: string;
  title: string;
  department: string;
  image: StaticImageData | string;
}

interface TeamCardCarouselProps {
  members: TeamCardProps[];
}

const TeamCard: React.FC<TeamCardProps> = ({ name, title, department, image }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 text-center mb-8">
    <Image
      src={image}
      alt={name}
      width={120}
      height={120}
      className="rounded-full mx-auto object-cover"
    />
    <h3 className="text-xl font-semibold text-green-900 mt-4">{name}</h3>
    <p className="text-green-700">{title}</p>
    <p className="text-sm text-green-600">{department}</p>
  </div>
);

const TeamCardCarousel: React.FC<TeamCardCarouselProps> = ({ members }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === members.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? members.length - 1 : prev - 1));
  };

  return (
    <div className="relative">
      {/* Mobile view (carousel) */}
      <div className="sm:hidden">
        <div className="flex items-center">
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 p-2 bg-green-50 rounded-full hover:bg-green-100 transition-colors"
            aria-label="Previous member"
          >
            <ChevronLeft className="w-6 h-6 text-green-800" />
          </button>
          
          <div className="w-full">
            <TeamCard
              name={members[currentIndex].name}
              title={members[currentIndex].title}
              department={members[currentIndex].department}
              image={members[currentIndex].image}
            />
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 p-2 bg-green-50 rounded-full hover:bg-green-100 transition-colors"
            aria-label="Next member"
          >
            <ChevronRight className="w-6 h-6 text-green-800" />
          </button>
        </div>
        
        {/* Pagination indicators */}
        <div className="flex justify-center gap-2 py-8">
          {members.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-green-600' : 'bg-green-200'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to member ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop view (grid) */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member) => (
          <TeamCard
            key={member.name}
            name={member.name}
            title={member.title}
            department={member.department}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamCardCarousel;