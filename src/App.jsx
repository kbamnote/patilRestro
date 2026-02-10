import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Home Sections
import Hero from "./components/Hero";
import LatestNews from "./components/LatestNews";
import Events from "./components/Events";
import WhoWeAre from "./components/WhoWeAre";
import WhiskeyHero from "./components/WhiskeyHero";
import PremiumWines from "./components/PremiumWines";

// Pages
import About from "./pages/About";
 import Menu from "./pages/Menu";
 import Reservation from "./pages/Reservation";
 import Ambiance from "./pages/Ambiance";
 import Contact from "./pages/Contact";


// ✅ Home Page Layout
const Home = () => {
  return (
    <>
      <Hero />
      <WhiskeyHero />
      <PremiumWines />
      <Events />
      <LatestNews />
      <WhoWeAre />
    </>
  );
};


function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen flex flex-col">

        {/* Navbar Visible Everywhere */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/ambiance" element={<Ambiance />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer Visible Everywhere */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;
