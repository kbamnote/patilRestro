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
    <section className="bg-neutral-950 section-padding">
      <div className="section-container">
        {/* Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-sm font-bold tracking-[0.25em] text-gray-500 uppercase mb-3">
            Curated for You
          </p>
          <h2 className="mb-6">
            PREMIUM WINES IN NAGPUR
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full" />
        </div>

        {/* Wines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
          {wines.map((wine) => (
            <div
              key={wine.id}
              className="text-center group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative mb-8 flex justify-center">
                <div className="absolute inset-0 bg-amber-500/10 blur-xl rounded-full scale-0 group-hover:scale-100 transition duration-700" />
                <img
                  src={wine.image}
                  alt={wine.name}
                  className="h-72 sm:h-80 object-contain drop-shadow-lg relative z-10 transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <h3 className="text-lg font-semibold tracking-wide mb-2 text-white group-hover:text-amber-500 transition-colors">
                {wine.name}
              </h3>

              {/* Rating */}
              <div className="flex justify-center gap-1 text-amber-500 text-sm mb-4">
                ★ ★ ★ ★ ★
              </div>

              <p className="text-xl font-bold text-gray-200">{wine.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumWines;
