import ArrowRight from '@/assets/arrow-right.svg';


export const CallToAction = () => {
  return <section className="bg-white from-green-950 to-white py-24">
    <div className="container">
      <div className='section-title'>
      <h2 className="section-title">Subscribe To Our NEWSLETTER</h2>
      <p className="section-description mt-5">
      No one shall be held in slavery or servitude; slavery and the slave trade shall be prohibited in all their forms.
      </p>
      </div>
      <div className="flex gap-2 mt-10 justify-center">
        <button className="btn btn-primary">Subscribe</button>
        <button className="btn btn-text gap-1">
          <span>Learn More</span>
          <ArrowRight className="h-5 w-5" />
          </button>
      </div>
    </div>
  </section>;
};
