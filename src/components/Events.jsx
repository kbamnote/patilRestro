import leftImg from "../assets/images/left-drink.jpg";
import rightImg from "../assets/images/right-drink.jpg";

const Events = () => {
  return (
    <section className="relative bg-black section-padding overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12 lg:gap-16">
        
          {/* Left Image */}
          <div className="hidden lg:flex justify-end">
            <div className="relative w-64 h-96 rounded-t-full overflow-hidden border border-white/10 hover:border-amber-500/50 transition duration-500 group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition duration-500 z-10" />
              <img
                src={leftImg}
                alt="Cocktail Event"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
            </div>
          </div>

          {/* Center Content */}
          <div className="text-center lg:col-span-1">
            <span className="text-sm font-bold tracking-[0.2em] text-amber-500 uppercase block mb-4">
              Nightlife in Nagpur
            </span>

            <h2 className="mb-6 leading-tight">
              LIVE MUSIC, DJ NIGHTS <br />
              <span className="text-gray-500 text-3xl sm:text-4xl md:text-5xl">& IPL SCREENINGS</span>
            </h2>

            <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed max-w-md mx-auto">
              Join us for the most happening events in town. From soulful live acoustic sessions to electrifying DJ nights and live sports screenings, Patil Bars is the heartbeat of Nagpur's party scene.
            </p>

            <button className="btn-outline border-white text-white hover:bg-white hover:text-black">
              See Events Calendar
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-start">
             <div className="relative w-64 h-96 rounded-t-full overflow-hidden border border-white/10 hover:border-amber-500/50 transition duration-500 group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition duration-500 z-10" />
              <img
                src={rightImg}
                alt="Whiskey Bottle"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Events;
