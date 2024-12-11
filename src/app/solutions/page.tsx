// app/services/page.tsx
import React from "react";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-10 px-4">
      <div className="bg-gray-900 p-8 mb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-emerald-200">
              OUR SOLUTIONS
            </span>
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-green-400 to-emerald-200 mt-4"></div>
        </div>
      </div>
        <Services />
      </div>
    </div>
  );
};

export default ServicesPage;
