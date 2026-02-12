import whi4 from "../assets/images/win4.jpg";
import whi6 from "../assets/images/win6.jpg";

const WhoWeAre = () => {
  return (
     <section className="bg-neutral-950 section-padding">
      <div className="section-container">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT IMAGES */}
        <div className="grid grid-cols-2 gap-6">
          {/* Image 1 */}
          <div className="overflow-hidden rounded-2xl group relative">
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition z-10" />
             <img
                src={whi4}
                alt="Premium Wine"
                className="w-full h-64 sm:h-80 md:h-[400px] object-cover transition duration-700 group-hover:scale-110"
              />
          </div>

          {/* Image 2 */}
          <div className="overflow-hidden rounded-2xl group mt-12 relative">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition z-10" />
            <img
              src={whi6}
              alt="Premium Wine"
              className="w-full h-64 sm:h-80 md:h-[400px] object-cover transition duration-700 group-hover:scale-110"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-white space-y-8">
          <div>
            <span className="text-sm font-bold tracking-[0.2em] text-amber-500 uppercase">
              Why Choose Patil Bars
            </span>
            <h2 className="mt-4 leading-tight">
              Nagpur’s Ultimate Destination for Drinks & Dining
            </h2>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed">
            At Patil Bars, we define the nightlife in Nagpur. Whether you're looking for a relaxed evening with premium scotch or a high-energy party with live music, we are the place to be. 
            Located conveniently in Nagpur, Maharashtra, we offer a sophisticated ambiance perfect for corporate meets and weekend celebrations alike.
          </p>

          <div className="grid gap-4">
             {[
               "Best Cocktails in Nagpur",
               "Premium Lounge Experience",
               "Exclusive Events & DJ Nights"
             ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 font-bold">✓</div>
                  <h3 className="text-lg font-medium text-white mb-0">{item}</h3>
                </div>
             ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

  
export default WhoWeAre;