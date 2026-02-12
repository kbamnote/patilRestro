import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 text-gray-400 font-light">
      {/* Main Footer */}
      <div className="section-container py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        
          {/* Brand Info */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-6">
            <h2 className="text-white text-2xl font-bold tracking-wider uppercase">
              Patil Bars
            </h2>

            <p className="text-sm leading-relaxed max-w-sm">
              The ultimate destination for nightlife in Nagpur. Enjoy premium drinks, live music, and an unforgettable vibe at Patil Bars.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, idx) => (
                 <div key={idx} className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300 cursor-pointer">
                    <Icon size={16} />
                 </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg tracking-wide">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Drinks Menu", path: "/menu" },
                { name: "Book Table", path: "/reservation" },
                { name: "Gallery", path: "/ambiance" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="hover:text-amber-500 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg tracking-wide">Experience</h3>
            <ul className="space-y-3 text-sm">
               {["Live Screenings", "Private Parties", "DJ Nights", "Corporate Events"].map((item) => (
                 <li key={item} className="flex items-center gap-2">
                    <span className="text-amber-500">•</span> {item}
                 </li>
               ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg tracking-wide">Visit Us</h3>
            <div className="space-y-4 text-sm">
               <div>
                 <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Address</p>
                 <p className="text-white">Civil Lines, Nagpur, MH</p>
               </div>
               <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-white font-medium hover:text-amber-500 cursor-pointer">+91 7709244142</p>
               </div>
               <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Opening Hours</p>
                  <p className="text-white">Mon – Sun: 11:00 AM – 12:30 AM</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-black py-6">
        <div className="section-container text-center text-xs text-gray-500 tracking-wide">
           © 2026 Patil Bars Nagpur. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
