import Image from "next/image";
import Logo from "@/assets/DISI-logo.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";


export const Footer = () => {
  return (
    <footer className="bg-green-950 text-white text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:h-full before:blur before:w-full before:bg-[linear-gradient(to_roght,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={Logo} height={100} alt="DISI Logo" className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="/about">About</a>
          <a href="/solutions">Solutions</a>
          <a href="/resources">Resources</a>
          <a href="/blog">News & Media</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact Us</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
        <SocialX />
        <SocialInsta />
        <SocialLinkedIn />
        </div>
        <p className="mt-6">&copy; 2024 DISI GROUP, Inc. All Rights Reserved</p>
      </div>
    </footer>
  );
};
