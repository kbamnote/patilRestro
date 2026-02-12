import amb1 from "../assets/images/cafe1.jpg";
import amb2 from "../assets/images/cafe2.jpg";
import amb3 from "../assets/images/cafe3.jpg";
import amb4 from "../assets/images/cafe4.jpg";
import amb5 from "../assets/images/cafe5.jpg";
import amb6 from "../assets/images/cafe6.jpg";

const images = [amb1, amb2, amb3, amb4, amb5, amb6];

const Ambiance = () => {
  return (
    <div className="bg-neutral-950 text-gray-300 pt-32 pb-20">
      {/* Heading */}
      <div className="section-container text-center mb-16">
        <h1 className="mb-6">
          Our Gallery
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Take a sneak peek into the vibrant atmosphere and cozy corners of Patil Bars.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="section-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg group relative cursor-pointer"
          >
             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 z-10 flex items-center justify-center">
                <span className="text-white font-bold text-lg tracking-wider transform translate-y-4 group-hover:translate-y-0 transition duration-500">VIEW</span>
             </div>
            <img
              src={img}
              alt="Ambiance"
              className="w-full h-64 md:h-72 object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ambiance;
