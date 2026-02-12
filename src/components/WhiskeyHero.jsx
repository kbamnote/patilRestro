
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
    <section className="relative w-full py-24 sm:py-32 bg-black overflow-hidden flex items-center">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-neutral-900 to-black" />

      {/* Decorative Shapes - Subtle/Modern */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-700/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-20">
          
          {/* Text */}
          <div className="text-center md:text-left order-2 md:order-1">
            <p className="text-sm font-bold tracking-[0.2em] text-amber-500 uppercase mb-4">
              Jack Daniel's Collection
            </p>

            <h2 className="mb-6 leading-tight">
              NAGPUR'S FINEST <br />
              <span className="text-amber-500">WHISKEY SELECTION</span>
            </h2>
            
            <p className="max-w-md mx-auto md:mx-0 text-gray-400 mb-8 leading-relaxed">
              Experience the depth of flavor with our curated selection of premium whiskeys. Perfect for the connoisseur and the casual drinker alike.
            </p>

            <div className="flex justify-center md:justify-start">
               <button className="btn-outline border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black">
                 Explore Collection
               </button>
            </div>
          </div>

          {/* Image with Transition */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative">
               {/* Glow effect behind bottle */}
               <div className="absolute inset-0 bg-amber-500/20 blur-2xl rounded-full scale-75 animate-pulse" />
               <img
                src={whiskeyImg}
                alt="Whiskey Bottles"
                className={`
                  relative z-10
                  h-[300px] sm:h-[400px] md:h-[500px]
                  object-contain
                  drop-shadow-2xl
                  transition-all duration-1000 ease-out
                  ${
                    showImage
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }
                `}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhiskeyHero;
