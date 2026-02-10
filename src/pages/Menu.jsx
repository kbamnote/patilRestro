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
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-neutral-200 w-full max-w-md rounded-2xl p-4 sm:p-6 relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-3 sm:top-3 sm:right-4 text-xl sm:text-2xl font-bold text-gray-700 hover:text-black"
        >
          ×
        </button>

        <h2 className="text-xl sm:text-2xl font-semibold text-center text-yellow-500 mb-4 sm:mb-6">
          Book Your Order
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-2 sm:p-3 rounded-lg border text-black text-sm sm:text-base"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="table"
            placeholder="Table No"
            className="w-full p-2 sm:p-3 rounded-lg border text-black text-sm sm:text-base"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            value={item.name}
            readOnly
            className="w-full p-2 sm:p-3 rounded-lg border text-black bg-gray-100 text-sm sm:text-base"
          />

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            min="1"
            className="w-full p-2 sm:p-3 rounded-lg border text-black text-sm sm:text-base"
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (10 digits)"
            value={formData.phone}
            onChange={handleChange}
            required
            className={`w-full p-2 sm:p-3 rounded-lg border text-black text-sm sm:text-base ${
              error && error.includes("Phone") ? "border-red-500" : "border-gray-300"
            }`}
          />

          {success && <p className="text-green-600 text-xs sm:text-sm">{success}</p>}
          {error && <p className="text-red-600 text-xs sm:text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-neutral-800 text-white py-2 sm:py-3 rounded-full hover:bg-black transition disabled:opacity-50 text-sm sm:text-base"
          >
            {loading ? "Placing Order..." : "Book Order"}
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
    <div className="bg-black/40 p-4 sm:p-6 rounded-xl border border-gray-800">
      <h2 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 text-center">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-black p-3 sm:p-4 rounded-lg border border-gray-800 hover:border-amber-400 transition"
          >
            <h3 className="text-xs sm:text-sm text-white">{item.name}</h3>
            <p className="text-amber-400 text-xs sm:text-sm mt-1">{item.price}</p>
            <button
              onClick={() => setSelectedItem(item)}
              className="mt-2 sm:mt-3 w-full bg-amber-500 text-black text-xs sm:text-sm py-1 sm:py-1.5 rounded hover:bg-amber-400 transition"
            >
              Order Now
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
    <div className="bg-neutral-950 text-gray-300 pt-24 sm:pt-28 px-4 sm:px-6 pb-12 sm:pb-16">
      {/* Heading */}
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Our Menu
        </h1>
      </div>

      {/* Category Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
        <MenuSection title="Signature Cocktails" items={cocktails} />
        <MenuSection title="Premium Wines" items={wines} />
        <MenuSection title="Beers" items={beers} />
        <MenuSection title="Mocktails" items={mocktails} />
        <MenuSection title="Soft Drinks" items={softDrinks} />
        <MenuSection title="Veg Starters" items={vegStarters} />
        <MenuSection title="Non-Veg Starters" items={nonVegStarters} />
      </div>
    </div>
  );
};


export default Menu;
