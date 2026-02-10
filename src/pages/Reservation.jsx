import { useState } from "react";
import { bookTable } from "../utils/api";

import table1 from "../assets/images/table1.jpg";
import table2 from "../assets/images/table2.jpg";
import table3 from "../assets/images/table3.jpg";
import table4 from "../assets/images/table4.jpg";
import table5 from "../assets/images/table5.jpg";
import table6 from "../assets/images/table6.jpg";
import table7 from "../assets/images/table7.jpg";
import table8 from "../assets/images/table8.jpg";
import table9 from "../assets/images/table9.jpg";

const Reservation = () => {
  const [openForm, setOpenForm] = useState(false);
  const [selectedTable, setSelectedTable] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    guests: "",
    date: "",
    time: "",
    specialRequest: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    if (e.target.name === 'guests') {
      const value = e.target.value;
      let guestsNumber;
      if (value === "5+ People") {
        guestsNumber = 5;
      } else {
        guestsNumber = parseInt(value.match(/\d+/)[0]);
      }
      setFormData({ ...formData, [e.target.name]: guestsNumber });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      guests: formData.guests,
      date: formData.date,
      time: formData.time,
      specialRequest: formData.specialRequest,
    };

    try {
      await bookTable(payload);
      setSuccess("Table booked successfully 🎉");
      setFormData({ fullName: "", email: "", guests: "", date: "", time: "", specialRequest: "" });
      setTimeout(() => setOpenForm(false), 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Invalid booking data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-neutral-950 text-gray-300 pt-24 sm:pt-28 px-4 sm:px-6 pb-12 sm:pb-16">
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Reserve a Table
        </h1>
        <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Book your cozy spot and enjoy great drinks & music 🍸
        </p>
      </div>

      {/* Table Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {[
          { img: table1, title: "Table 1" },
          { img: table2, title: "Table 2" },
          { img: table3, title: "Table 3" },
          { img: table4, title: "Table 4" },
          { img: table5, title: "Table 5" },
          { img: table6, title: "Table 6" },
          { img: table7, title: "Table 7" },
          { img: table8, title: "Table 8" },
          { img: table9, title: "Table 9" },
        ].map((table, index) => (
          <div
            key={index}
            className="bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:scale-105 transition duration-300"
          >
            <img
              src={table.img}
              alt={table.title}
              className="w-full h-48 sm:h-56 md:h-64 object-cover"
            />

            <div className="p-4 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">
                {table.title}
              </h3>

              <button
                onClick={() => {
                  setSelectedTable(table.title);
                  setOpenForm(true);
                }}
                className="bg-amber-500 text-black px-4 sm:px-6 py-2 rounded-full hover:bg-amber-400 transition text-sm sm:text-base"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Form Modal */}
      {openForm && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
          <div className="bg-neutral-950 p-4 sm:p-6 md:p-8 rounded-lg max-w-xl w-full relative border border-gray-700">
            <button
              onClick={() => setOpenForm(false)}
              className="absolute top-2 right-3 sm:top-3 sm:right-4 text-white text-lg sm:text-xl"
            >
              ✖
            </button>

            <h2 className="text-white text-lg sm:text-xl mb-3 sm:mb-4">
              Booking for {selectedTable}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-5">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full p-2 sm:p-3 bg-transparent border border-gray-600 rounded focus:border-amber-400 outline-none text-sm sm:text-base"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 sm:p-3 bg-transparent border border-gray-600 rounded focus:border-amber-400 outline-none text-sm sm:text-base"
              />

              <select
                name="guests"
                value={formData.guests || ""}
                onChange={handleChange}
                required
                className="w-full p-2 sm:p-3 bg-transparent border border-gray-600 rounded focus:border-amber-400 outline-none text-sm sm:text-base"
              >
                <option value="">Select Guests</option>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5+ People</option>
              </select>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full p-2 sm:p-3 bg-transparent border border-gray-600 rounded focus:border-amber-400 outline-none text-sm sm:text-base"
              />

              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full p-2 sm:p-3 bg-transparent border border-gray-600 rounded focus:border-amber-400 outline-none text-sm sm:text-base"
              />

              <textarea
                name="specialRequest"
                placeholder="Special Request (Optional)"
                value={formData.specialRequest}
                onChange={handleChange}
                rows="3"
                className="w-full p-2 sm:p-3 bg-transparent border border-gray-600 rounded focus:border-amber-400 outline-none text-sm sm:text-base"
              />

              {success && <p className="text-green-400 text-xs sm:text-sm">{success}</p>}
              {error && <p className="text-red-400 text-xs sm:text-sm">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-500 text-black py-2 sm:py-3 font-semibold rounded hover:bg-amber-400 transition disabled:opacity-50 text-sm sm:text-base"
              >
                {loading ? "Booking..." : "Book Table"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reservation;
