import img1 from "../assets/images/tandoori.jpg";
import img2 from "../assets/images/chilolli.jpg";
import img3 from "../assets/images/chillipaneer.jpg";
import img4 from "../assets/images/rice.jpg";

const newsData = [
  {
    id: 1,
    image: img1,
    title: "Tandoori",
    
  },
  {
    id: 2,
    image: img2,
    title: "Chiken LolliPop ",
    
  },
  {
    id: 3,
    image: img3,
    title: "ChiliPaneer",
   
  },
  {
    id: 4,
    image: img4,
    title: "Biryani",
   
  },
];

const LatestNews = () => {
  return (
    <section className="bg-neutral-900 section-padding">
      <div className="section-container">
        
        <div className="text-center mb-16">
           <h3 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-wider">
            Happening Now
          </h3>
          <p className="text-amber-500 tracking-[0.2em] font-bold text-sm mt-2 uppercase">At Patil Bars Nagpur</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {newsData.map((item) => (
            <div
              key={item.id}
              className="bg-black rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-500 border border-white/5 hover:border-amber-500/30 shadow-lg"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition z-10" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-amber-500 text-xs font-bold tracking-wider uppercase mb-2 block">
                  Featured
                </span>

                <h4 className="text-xl font-bold text-white mb-2 leading-tight">
                  {item.title}
                </h4>

                <p className="text-gray-400 text-sm line-clamp-2">
                  Discover our exclusive specials and events happening this week.
                </p>
                
                <button className="mt-4 text-sm font-semibold text-white border-b border-amber-500 pb-0.5 hover:text-amber-500 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
