import { useState, useEffect } from "react";

import bar2 from "../assets/images/slider1.jpg";
import bar3 from "../assets/images/slider2.jpg";
import bar1 from "../assets/images/bgg.jpg";

const images = [bar2, bar3, bar1];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">

      {/* Background Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 w-full section-container text-center">
        
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 animate-fade-in-up">
          
          <h1 className="leading-tight text-white mb-2">
            <span className="block text-xl sm:text-2xl md:text-3xl font-medium tracking-[0.2em] mb-4 text-amber-500 uppercase">
              Welcome to
            </span>
            PATIL BARS NAGPUR
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
            Discover the Best Bar in Nagpur. Premium Ambiance, Crafted Cocktails, and the Ultimate Nightlife Experience in Maharashtra.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button className="btn-primary">
              View Menu
            </button>
            <button className="btn-outline">
              Book a Table
            </button>
          </div>

        </div>

      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-amber-500 w-8" : "bg-white/50 hover:bg-white"
            }`}
             aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;
