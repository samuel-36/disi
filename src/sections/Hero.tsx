'use client'

import ArrowRight from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import Image from "next/image";
import compImage from "@/assets/doc-scan1.jpeg";
import heroImage from "@/assets/heroImage.png";
import cylinderImage from "@/assets/cylinder.png"
import { LogoTicker } from "./LogoTicker";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";


export const Hero = () => {

  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });

  const translateY = useTransform(scrollYProgress, [0,1], [150, -150]);


  return <section ref={heroRef}
  
  className="pt-8 pb-20 md:pt-5 md:pb-10 bg-white overflow-x-clip">
    <div className="container">
      <div className="md:flex items-center">
      <div>
          <div className="text-sm text-white bg-green-950 font-bold inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">Document Digitization Experts</div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-green-950 bg-clip-text mt-6">Digitize Your Business
            
          With DISI GROUP</h1>
          <p className="text-xl text-green-950 tracking-tight mt-6">
          We seek to simplify our customers business processes by enabling you to better manage physical documents, increasing productivity, efficiency, and lowering overall document handling expenses with our teams of highly experienced professionals.
          </p>
          <div className="flex gap-1 items-center mt-[30px]">
            <button className="btn btn-primary gap-1">
              <span>Learn More</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
      </div>
      {/* <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
        <Image
        src={cogImage} alt="Hero Image" className="md:absolute h-full md:w-auto md:max-w-none md:left-6"/>
        <Image src={cylinderImage} width={220} height={220} alt="Cylinder Image"
        className="hidden md:block -top-8 -left-32 md:absolute"
        />
      </div> */}
      </div>
    </div>
    <div>
    </div>
  </section>;
};
