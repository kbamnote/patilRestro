import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Reservation", path: "/reservation" },
    { name: "Ambiance", path: "/ambiance" },
    { name: "Contact", path: "/contact" },
  ];

  // Close mobile menu when clicking outside
  const handleClickOutside = () => {
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="section-container flex justify-between items-center py-5 text-white">

        {/* LOGO */}
        <Link
          to="/"
          onClick={handleClickOutside}
          className="text-2xl font-bold tracking-widest hover:text-amber-500 transition-colors duration-300 uppercase"
        >
          PATIL BARS
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 lg:gap-10 text-sm font-medium tracking-wide uppercase">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={handleClickOutside}
              className={`relative py-1 transition-colors duration-300 hover:text-amber-500 group ${
                location.pathname === item.path
                  ? "text-amber-500"
                  : "text-gray-300"
              }`}
            >
              {item.name}
              <span className={`absolute left-0 bottom-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full ${
                 location.pathname === item.path ? "w-full" : ""
              }`}></span>
            </Link>
          ))}
        </nav>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded hover:bg-white/10 transition"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${open ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black border-t border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 py-10 uppercase text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`hover:text-amber-500 transition duration-300 ${
                location.pathname === item.path
                  ? "text-amber-500"
                  : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
