import amb1 from "../assets/images/cafe1.jpg";
import amb2 from "../assets/images/cafe2.jpg";
import amb3 from "../assets/images/cafe3.jpg";
import amb4 from "../assets/images/cafe4.jpg";
import amb5 from "../assets/images/cafe5.jpg";
import amb6 from "../assets/images/cafe6.jpg";

const images = [amb1, amb2, amb3, amb4, amb5, amb6];

const Ambiance = () => {
  return (
    <div className="bg-neutral-950 text-gray-300 pt-24 sm:pt-28 px-4 sm:px-6 pb-12 sm:pb-16">
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Our Gallery
        </h1>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={img}
              alt="Ambiance"
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ambiance;
