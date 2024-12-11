import Image from "next/image";
import productImage from '@/assets/dash2.png'


export const ProductShowcase = () => {
  return <section className="bg-white py-24 from-transparent to-green-950 overflow-x-clip mt-[-50px]">
    <div>
      <div className="container">
        <div className="max-w-[540px] mx-auto">
        <div className="flex justify-center">
        <div className="tag">Real Time Analysis And Reports</div>
        </div>
      <h2 className="text-center text-3xl text-slate-700 md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-green-400 to-green-950 text-transparent bg-clip-text mt-5">A More Effective Way To Track Your Progress</h2>
      <p className="text-center text-[22px] leading-[30px] tracking-tight text-slate-500 mt-5">
        Effortlessly track your document digitization journey using state-of-the art dashboards and analysis provided using our tools 
      </p>
      </div>
      <div className="relative">
      <Image src={productImage} alt="product Image" className="mt-10" />
      {/* <Image src={pyramidImage} alt="pyramid Image"
      height={262}
      width={262}
      className="hidden md:block absolute -right-36 -top-32" />
      <Image src={tubeImage} alt="tube Image" height={248} className="absolute bottom-24 -left-36 hidden md:block" /> */}
      </div>
    </div>
    </div>
  </section>;
};
