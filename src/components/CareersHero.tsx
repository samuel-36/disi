import React from "react";

const CareersHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br bg-white py-16">
  <div className="container mx-auto px-4 text-center">
    <h1 className="text-center text-3xl text-slate-700 md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-green-400 to-green-950 text-transparent bg-clip-text mt-5">Welcome To DISI Group Careers</h1>
    <p className="mt-4 text-lg text-gray-600 md:text-xl">
      At our company, it's all about <span className="font-semibold text-blue-700">people</span>.
      We believe in fostering growth, collaboration, and excellence in everything we do.
    </p>
    <p className="mt-2 text-lg text-gray-600 md:text-xl">
      Our <span className="font-semibold text-blue-700">culture</span> is built on trust, inclusion, and a shared vision for a better future.
    </p>
    <div className="mt-8 space-x-4">
      <a
        href="#founders"
        className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition"
      >
        Our Team
      </a>
      <a
        href="#team"
        className="px-6 py-3 bg-green-600 text-white rounded-md shadow-lg hover:bg-green-700 focus:ring-4 focus:ring-green-300 transition"
      >
        Our Vacancies
      </a>
    </div>
  </div>
</section>
  );
};

export default CareersHero;
