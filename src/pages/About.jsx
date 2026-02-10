import aboutImg from "../assets/images/restbg.jpg";
import abImg from "../assets/images/ab2.jpg";


const About = () => {
  return (
    <div className="bg-neutral-950 text-gray-300">
      {/* ===== Hero Section ===== */}
      <section className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-[100vh] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutImg})` }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Hero Content */}
        <div className="relative text-center px-4 sm:px-6 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            About Sixth Sense
          </h1>

          <p className="mt-3 sm:mt-4 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Experience luxury nightlife, signature drinks and unforgettable
            moments at Sixth Sense Bar.
          </p>
        </div>
      </section>

      {/* ===== About Content ===== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Left Image */}
        <div className="overflow-hidden rounded-xl">
          <img
            src={abImg}
            alt="About Sixth Sense"
            className="w-full h-64 sm:h-80 md:h-[350px] object-cover rounded-xl shadow-lg hover:scale-110 transition duration-500"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold">
            Our Story
          </h2>

          <p className="leading-6 sm:leading-7 text-gray-400 text-sm sm:text-base">
            Sixth Sense Bar was created to deliver a premium nightlife
            experience. We blend stylish ambiance, handcrafted cocktails and
            top-quality service to create unforgettable evenings.
          </p>

          <p className="leading-6 sm:leading-7 text-gray-400 text-sm sm:text-base">
            Whether you are celebrating special moments or enjoying a relaxing
            evening, our bar offers the perfect atmosphere.
          </p>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section className="bg-black py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 text-center">
          <div className="p-4 sm:p-6 rounded-xl bg-neutral-900 hover:-translate-y-2 transition duration-300 shadow-lg">
            <h3 className="text-lg sm:text-xl text-white mb-2 sm:mb-3">🍸 Premium Drinks</h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              Enjoy handcrafted cocktails prepared by expert bartenders.
            </p>
          </div>

          <div className="p-4 sm:p-6 rounded-xl bg-neutral-900 hover:-translate-y-2 transition duration-300 shadow-lg">
            <h3 className="text-lg sm:text-xl text-white mb-2 sm:mb-3">🎵 Live Music</h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              Experience energetic live performances and DJ nights.
            </p>
          </div>

          <div className="p-4 sm:p-6 rounded-xl bg-neutral-900 hover:-translate-y-2 transition duration-300 shadow-lg">
            <h3 className="text-lg sm:text-xl text-white mb-2 sm:mb-3">✨ Luxury Ambiance</h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              Relax in an elegant environment designed for comfort and style.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
