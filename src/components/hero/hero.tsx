const Hero = () => {
    return (
      <div className="hero font-bold bg-gray-100 flex flex-col items-center text-center py-10">
        <div className="textContainer space-y-4">
          <h2 className="text-lg text-gray-500 tracking-widest uppercase">DISI Group</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Digitization Company
          </h1>
          <div className="buttons space-x-4 mt-4">
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">Yes</button>
            <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">No</button>
          </div>
        </div>
        <div className="imageContainer mt-8">
          <img src="/scroll.png" alt="scroll" className="w-6 h-6 mx-auto mb-6 animate-bounce" />
          <img src="/hero.png" alt="hero" className="max-w-full h-auto object-cover" />
        </div>
      </div>
    )
  }
  
  export default Hero;
  