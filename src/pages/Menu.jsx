import { useState } from "react";
import { placeOrder } from "../utils/api";


// ---------------- Alcoholic Drinks ----------------

const cocktails = [
  { name: "Mojito", price: "₹350" },
  { name: "Whiskey Sour", price: "₹450" },
  { name: "Classic Margarita", price: "₹400" },
  { name: "Long Island Iced Tea", price: "₹500" },
];

const wines = [
  { name: "Red Wine", price: "₹600" },
  { name: "White Wine", price: "₹550" },
  { name: "Rosé Wine", price: "₹580" },
];

const beers = [
  { name: "Kingfisher Premium", price: "₹250" },
  { name: "Budweiser", price: "₹300" },
  { name: "Corona", price: "₹350" },
  { name: "Bira White", price: "₹320" },
];

// ---------------- Non Alcoholic ----------------

const mocktails = [
  { name: "Virgin Mojito", price: "₹220" },
  { name: "Blue Lagoon", price: "₹240" },
  { name: "Fruit Punch", price: "₹250" },
];

const softDrinks = [
  { name: "Coke / Pepsi", price: "₹90" },
  { name: "Sprite / Limca", price: "₹90" },
  { name: "Fresh Lime Soda", price: "₹120" },
];

// ---------------- Starters ----------------

const vegStarters = [
  { name: "Paneer Tikka", price: "₹320" },
  { name: "Hara Bhara Kebab", price: "₹280" },
  { name: "Chilli Paneer", price: "₹300" },
  { name: "Crispy Corn", price: "₹260" },
];

const nonVegStarters = [
  { name: "Chicken Tikka", price: "₹380" },
  { name: "Tandoori Chicken", price: "₹420" },
  { name: "Chicken Lollipop", price: "₹360" },
  { name: "Fish Fry", price: "₹420" },
];




// ---------------- Order Modal ----------------

const OrderModal = ({ item, closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    table: "",
    quantity: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const validatePhone = (phone) => {
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
      return "Phone number must be exactly 10 digits";
    }
    if (!/^[6-9]/.test(cleanPhone)) {
      return "Phone number must start with 6, 7, 8, or 9";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "phone") {
      const error = validatePhone(value);
      setError(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    const phoneValidationError = validatePhone(formData.phone);
    if (phoneValidationError) {
      setError(phoneValidationError);
      setLoading(false);
      return;
    }

    const payload = {
      name: formData.name,
      tableNo: formData.table,
      itemName: item.name,
      quantity: Number(formData.quantity),
      phoneNumber: formData.phone,
    };

    try {
      await placeOrder(payload);
      setSuccess("Order placed successfully 🍽️");
      setFormData({ name: "", table: "", quantity: "", phone: "" });
      setTimeout(() => closeModal(), 1200);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to place order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-neutral-900 w-full max-w-md rounded-2xl p-6 sm:p-8 relative border border-white/10 shadow-2xl animate-fade-in-up">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-white transition"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Order <span className="text-amber-500">{item.name}</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-black border border-white/10 text-white focus:border-amber-500 outline-none transition"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="table"
            placeholder="Table No"
            className="w-full p-3 rounded-lg bg-black border border-white/10 text-white focus:border-amber-500 outline-none transition"
            onChange={handleChange}
            required
          />

          <div className="grid grid-cols-2 gap-4">
             <input
              type="text"
              value={item.name}
              readOnly
              className="w-full p-3 rounded-lg bg-white/5 border border-white/5 text-gray-400 cursor-not-allowed"
            />

            <input
              type="number"
              name="quantity"
              placeholder="Qty"
              min="1"
              className="w-full p-3 rounded-lg bg-black border border-white/10 text-white focus:border-amber-500 outline-none transition"
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (10 digits)"
            value={formData.phone}
            onChange={handleChange}
            required
            className={`w-full p-3 rounded-lg bg-black border text-white outline-none transition ${
              error && error.includes("Phone") ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-amber-500"
            }`}
          />

          {success && <p className="text-green-500 text-sm text-center font-medium bg-green-500/10 py-1 rounded">{success}</p>}
          {error && <p className="text-red-500 text-sm text-center font-medium bg-red-500/10 py-1 rounded">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-500 text-black py-3 rounded-lg font-bold hover:bg-amber-400 transition disabled:opacity-50 mt-2"
          >
            {loading ? "Placing Order..." : "Confirm Order"}
          </button>
        </form>
      </div>
    </div>
  );
};

// ---------------- Menu Section ----------------

const MenuSection = ({ title, items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="bg-neutral-900/40 p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors duration-300">
      <h2 className="text-2xl font-bold text-white mb-6 text-center tracking-wide border-b border-white/5 pb-4">
        {title}
      </h2>

      <div className="grid grid-cols-1 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center group p-3 rounded-lg hover:bg-white/5 transition duration-300"
          >
             <div>
                <h3 className="text-base font-medium text-gray-200 group-hover:text-white transition">{item.name}</h3>
                <p className="text-amber-500 text-sm font-bold mt-1">{item.price}</p>
             </div>
             
            <button
              onClick={() => setSelectedItem(item)}
              className="bg-transparent border border-gray-600 text-gray-300 px-4 py-1.5 rounded text-sm hover:border-amber-500 hover:text-amber-500 transition"
            >
              Order
            </button>
          </div>
        ))}
      </div>

      {selectedItem && (
        <OrderModal
          item={selectedItem}
          closeModal={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};


// ---------------- Menu Page ----------------

const Menu = () => {
  return (
    <div className="bg-neutral-950 text-gray-300 pt-32 pb-20">
      {/* Heading */}
      <div className="section-container text-center mb-16">
        <h1 className="mb-6">
          Our Exclusive Menu
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore the finest selection of beverages and bites at Patil Bars Nagpur. 
            From rare single malts and vintage wines to refreshing mocktails, our bar menu is curated to delight every palate. 
            Pair your drinks with our mouth-watering tandoori starters and crispy bar nibbles, making us the top choice for food and drinks in Nagpur.
        </p>
      </div>

      {/* Category Grid */}
      <div className="section-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="space-y-8">
           <MenuSection title="Signature Cocktails" items={cocktails} />
           <MenuSection title="Premium Wines" items={wines} />
           <MenuSection title="Beers" items={beers} />
        </div>
        
        <div className="space-y-8">
           <MenuSection title="Veg Starters" items={vegStarters} />
           <MenuSection title="Non-Veg Starters" items={nonVegStarters} />
           <MenuSection title="Mocktails" items={mocktails} />
        </div>

         <div className="space-y-8">
            <MenuSection title="Soft Drinks" items={softDrinks} />
            
            {/* Promo Card */}
            <div className="bg-amber-500 p-8 rounded-2xl text-black text-center h-full flex flex-col justify-center items-center">
               <h3 className="text-2xl font-bold mb-4">Happy Hours! 🍻</h3>
               <p className="font-medium mb-6">Get 1+1 on selected drinks everyday from 4 PM to 8 PM.</p>
               <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-neutral-800 transition">View Offers</button>
            </div>
         </div>
      </div>
    </div>
  );
};


export default Menu;
