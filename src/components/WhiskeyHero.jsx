
import { useEffect, useState } from "react";
import whiskeyImg from "../assets/images/whis1.jpg";
const WhiskeyHero = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 200); // delay for smooth entrance

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[450px] md:min-h-[520px] bg-black overflow-hidden flex items-center">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-neutral-900 to-black" />

      {/* Decorative Shapes */}
      <div className="absolute top-6 sm:top-8 left-4 sm:left-6 md:left-10 w-16 sm:w-24 md:w-32 lg:w-40 h-16 sm:h-24 md:h-32 lg:h-40 border border-yellow-600/20 rotate-45" />
      <div className="absolute bottom-12 sm:bottom-16 left-6 sm:left-8 md:left-10 w-12 sm:w-16 md:w-24 lg:w-32 h-12 sm:h-16 md:h-24 lg:h-32 border border-yellow-600/10 rotate-45" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 sm:gap-10">
          
          {/* Text */}
          <div className="text-center md:text-left max-w-xl w-full">
            <p className="text-[10px] xs:text-xs sm:text-sm tracking-widest text-neutral-400 mb-2 sm:mb-3">
              JACK DANIEL'S
            </p>

            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
              HOUSE OF <br />
              <span className="font-bold">WHISKEY</span>
            </h1>

            <div className="mt-4 sm:mt-6 flex justify-center md:justify-start">
              
            </div>
          </div>

          {/* Image with Transition */}
          <div className="flex justify-center md:justify-end w-full md:w-auto hover:scale-105 hover:-translate-y-2">
            <img
              src={whiskeyImg}
              alt="Whiskey Bottles"
              className={`
                h-[180px] 
                xs:h-[220px]
                sm:h-[280px] 
                md:h-[360px] 
                lg:h-[420px]
                xl:h-[460px]
                object-contain
                drop-shadow-2xl
                transition-all duration-1000 ease-out
                ${
                  showImage
                    ? "opacity-100 translate-x-0 scale-100"
                    : "opacity-0 translate-x-10 scale-90"
                }
              `}
            />
          </div>

        </div>
      </div>

      {/* Bottom Reflection */}
      <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 md:h-28 bg-gradient-to-t from-black/90 to-transparent" />
    </section>
  );
};

export default WhiskeyHero;
