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
    <header className="fixed top-0 left-0 w-full z-50 bg-black shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4 text-white">

        {/* LOGO */}
        <Link
          to="/"
          onClick={handleClickOutside}
          className="text-lg sm:text-xl font-bold tracking-wider hover:text-amber-400 transition"
        >
          SIXTH SENSE
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-6 lg:gap-8 text-sm uppercase">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={handleClickOutside}
              className={`hover:text-amber-400 transition whitespace-nowrap ${
                location.pathname === item.path
                  ? "text-amber-400"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-black text-white overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-4 py-6 uppercase text-sm">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`hover:text-amber-400 transition py-2 px-4 rounded ${
                location.pathname === item.path
                  ? "text-amber-400 bg-amber-400/10"
                  : ""
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
