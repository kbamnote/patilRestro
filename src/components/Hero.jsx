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
    <section className="relative min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-60px)] flex items-center overflow-hidden">

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
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

          <div className="max-w-2xl text-center sm:text-left text-white mx-auto sm:mx-0">

            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              PATIL RESTRO AND BAR
            </h2>

            <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg md:text-xl max-w-md sm:max-w-lg mx-auto sm:mx-0">
              Experience premium ambiance, crafted cocktails, and unforgettable nights.
            </p>

            
          </div>

        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition ${
              current === index ? "bg-orange-500 scale-110" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;
