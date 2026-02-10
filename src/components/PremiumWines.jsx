import whi1 from "../assets/images/win1.jpg";
import whi2 from "../assets/images/win2.jpg";
import whi3 from "../assets/images/win3.jpg";
const wines = [
  {
    id: 1,
    name: "ALTOS LAS HORMIGAS CLASICO 2008",
    price: "₹70.00",
    image:whi1
      
  },
  {
    id: 2,
    name: "ALTOS LAS HORMIGAS CLASICO 2008",
    price: "₹70.00",
    image:whi2
      
  },
  {
    id: 3,
    name: "ALTOS LAS HORMIGAS CLASICO 2008",
    price: "₹70.00",
    image:whi3
  },
];

const PremiumWines = () => {
  return (
    <section className="bg-black py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-sm tracking-[0.3em] text-gray-400 uppercase">
          Get Ready
        </p>
        <h2 className="text-3xl md:text-4xl font-serif text-white mt-2">
          PREMIUM WINES
        </h2>
        <div className="w-16 h-[2px] bg-amber-500 mx-auto mt-4" />
      </div>

      {/* Wines */}
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {wines.map((wine) => (
          <div
            key={wine.id}
            className="text-center group transition transform hover:-translate-y-3"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={wine.image}
                alt={wine.name}
                className="mx-auto h-80 object-contain drop-shadow-[0_20px_30px_rgba(255,200,100,0.25)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>

            {/* Info */}
            <h3 className="text-white text-sm tracking-wide mt-6">
              {wine.name}
            </h3>

            {/* Rating */}
            <div className="flex justify-center gap-1 text-amber-400 mt-2">
              ★ ★ ★ ★ ★
            </div>

            <p className="text-gray-300 mt-2">{wine.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PremiumWines;
