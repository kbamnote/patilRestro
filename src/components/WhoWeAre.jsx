import whi4 from "../assets/images/win4.jpg";
import whi6 from "../assets/images/win6.jpg";

const WhoWeAre = () => {
  return (
     <section className="bg-neutral-950 py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">

        {/* LEFT IMAGES */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {/* Image 1 */}
          <div className="overflow-hidden rounded-xl group">
             <img
            src={whi4}
            alt="Premium Wine"
            className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] object-cover transition duration-700 group-hover:scale-105"
          />
          </div>

          {/* Image 2 */}
          <div className="overflow-hidden rounded-xl group mt-6 sm:mt-8 md:mt-10">
            <img
            src={whi6}
            alt="Premium Wine"
            className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] object-cover transition duration-700 group-hover:scale-105"
          />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-white space-y-4 sm:space-y-6">
          <p className="text-xs sm:text-sm tracking-widest text-amber-400 uppercase">
            Explore Our World
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif leading-snug">
            We're A Family Run Business With A Passion For Wines
          </h2>

          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            Dedicated since 1985, our winery blends tradition with innovation.
            Every bottle tells a story of carefully selected grapes, expert
            craftsmanship, and passion for delivering unforgettable flavors.
          </p>

          {/* Signature */}
          <div>
            <p className="text-xl sm:text-2xl font-signature text-amber-400">
              Peter Smith
            </p>
            <p className="text-xs sm:text-sm text-gray-500 tracking-widest">
              CEO & Founder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

  
export default WhoWeAre;