'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface Founder {
  name: string;
  title: string;
  quote: string;
  image: StaticImageData | string; // Accept both StaticImageData and string
}

interface HighlightCardProps {
  founders: Founder[];
}

const HighlightCard: React.FC<HighlightCardProps> = ({ founders }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % founders.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + founders.length) % founders.length);
  };

  const currentFounder = founders[currentIndex];

  return (
    <div className="flex flex-col items-center bg-white shadow-xl shadow-slate-700 rounded-lg p-6">
      <Image
        src={currentFounder.image}
        alt={currentFounder.name}
        width={160}
        height={160}
        className="rounded-full object-cover"
      />
      <div className="text-center mt-4">
        <h3 className="text-2xl font-semibold text-green-900">{currentFounder.name}</h3>
        <p className="text-lg text-green-700">{currentFounder.title}</p>
        <blockquote className="mt-4 italic text-green-800">"{currentFounder.quote}"</blockquote>
      </div>
      <div className="flex justify-between w-full mt-6">
        <button
          onClick={handlePrev}
          className="p-2 bg-green-200 rounded-full hover:bg-green-300"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="p-2 bg-green-200 rounded-full hover:bg-green-300"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default HighlightCard;
