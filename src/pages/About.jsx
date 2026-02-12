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
        <div className="relative z-10 section-container text-center">
          <h1 className="mb-4 animate-fade-in-up">
            About Patil Bars Nagpur
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            Redefining Nightlife in the Orange City. The Best Bar in Nagpur for Premium Drinks, Music, and Memories.
          </p>
        </div>
      </section>

      {/* ===== About Content ===== */}
      <section className="section-padding">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Image */}
          <div className="overflow-hidden rounded-2xl group relative">
             <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />
            <img
              src={abImg}
              alt="Interior of Patil Bars Nagpur"
              className="w-full h-[400px] sm:h-[500px] object-cover rounded-2xl shadow-2xl transition duration-700 group-hover:scale-105"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div>
              <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm">Our Origin</span>
              <h2 className="mt-3 leading-tight">
                Our Story in Nagpur
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>
                Patil Bars is not just a bar; it's a landmark in Nagpur's evolving nightlife. 
                Located in the heart of the city, we established Patil Bars with a singular vision: 
                to provide a world-class drinking and dining experience right here in Maharashtra.
              </p>

              <p>
                 We pride ourselves on our extensive collection of premium scotches, curated wines, 
                 and signature cocktails crafted by top mixologists. Whether you are looking for a 
                 "bar near me" for a quick drink or the "best party place in Nagpur" for a weekend bash, 
                 Patil Bars is your ultimate destination.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
               <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center hover:border-amber-500/30 transition">
                  <h4 className="text-amber-500 font-bold text-4xl mb-2">10+</h4>
                  <p className="text-sm font-medium text-gray-300 uppercase tracking-wide">Years of Service</p>
               </div>
               <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center hover:border-amber-500/30 transition">
                  <h4 className="text-amber-500 font-bold text-4xl mb-2">500+</h4>
                  <p className="text-sm font-medium text-gray-300 uppercase tracking-wide">Premium Labels</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Services Section ===== */}
      <section className="bg-neutral-900 section-padding">
        <div className="section-container">
          <div className="text-center mb-16">
              <h2 className="mb-4">Our Services</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">From intimate gatherings to grand celebrations, we host it all.</p>
              <div className="w-20 h-1 bg-amber-500 mx-auto mt-6 rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { title: "Signature Cocktails", desc: "Experience the finest mixology in Nagpur with our unique, handcrafted cocktails using premium spirits." },
              { title: "Private Parties", desc: "Host exclusive birthdays, bachelor parties, and reunions in our dedicated VIP lounge areas." },
              { title: "Live Music & DJ", desc: "Groove to the beats of Nagpur's best DJs and enjoy soulful live music performances every weekend." },
              { title: "Corporate Events", desc: "Professional settings for business meets and corporate networking with high-speed WiFi and premium service." }
            ].map((service, index) => (
              <div key={index} className="p-8 rounded-2xl bg-black border border-white/5 hover:border-amber-500/50 hover:-translate-y-2 transition-all duration-300 shadow-lg group">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ Section ===== */}
      <section className="bg-black section-padding">
        <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
                {[
                    { q: "Where is Patil Bars located in Nagpur?", a: "We are centrally located in Nagpur, easily accessible from Civil Lines and Sadar. Search for 'Patil Bars Nagpur' on Google Maps for exact directions." },
                    { q: "Is Patil Bars good for couples?", a: "Absolutely! We are rated as one of the best bars in Nagpur for couples, offering a safe, decent, and romantic ambiance." },
                    { q: "Do you have a dance floor?", a: "Yes, we have a dedicated dance floor with a DJ playing the latest Bollywood and international hits every weekend." },
                    { q: "What are the timings of Patil Bars?", a: "We are open from 11:00 AM to 12:30 AM every day. Happy hours are available on weekdays." },
                    { q: "Do you serve food along with drinks?", a: "Yes, we have a full kitchen serving delicious multi-cuisine starters and main courses aimed at the Nagpur palate." },
                    { q: "Is prior reservation required?", a: "While walk-ins are welcome, we recommend booking a table on weekends to avoid waiting. You can book via our website." },
                    { q: "Do you screen IPL and cricket matches?", a: "Yes, we host live screenings for IPL, World Cup, and major sporting events on large screens." },
                    { q: "Is valet parking available?", a: "Yes, we offer valet parking services for our guests' convenience." }
                ].map((faq, index) => (
                    <div key={index} className="bg-neutral-900/40 p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                        <h3 className="text-lg font-bold text-white mb-2 flex items-start gap-3">
                          <span className="text-amber-500">Q.</span> {faq.q}
                        </h3>
                        <p className="text-gray-400 text-base pl-8 leading-relaxed">{faq.a}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;
