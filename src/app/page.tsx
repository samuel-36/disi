import FAQ from "@/components/Accordion/FAQ";
import AnimatedHero from "@/components/AnimatedHero";
import Contact from "@/components/contact/Contact";
import Sidebar from "@/components/sidebar/sidebar";
import { CallToAction } from "@/sections/CallToAction";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <AnimatedHero />
      <ProductShowcase />
      <Testimonials />
      <div className='p-4 bg-white'>
        <div className="flex justify-center mb-4">
          <div className='tag'>FREQUENTLY ASKED QUESTIONS</div>
          </div>
        <FAQ />
        <LogoTicker />
        </div>
    </>
  );
}
