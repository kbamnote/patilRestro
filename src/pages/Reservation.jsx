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
    <div className="bg-neutral-950 text-gray-300 pt-32 pb-20">
      {/* Heading */}
      <div className="section-container text-center mb-16">
        <h1 className="mb-6">
          Reserve a Table
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Book your cozy spot and enjoy great drinks & music 🍸
        </p>
      </div>

      {/* Table Cards */}
      <div className="section-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
            className="group relative bg-black rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:border-amber-500/50 transition duration-500"
          >
            <div className="overflow-hidden h-64">
               <img
                  src={table.img}
                  alt={table.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
               />
            </div>

            <div className="p-6 text-center absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-white mb-4 translate-y-4 group-hover:translate-y-0 transition duration-300">
                {table.title}
              </h3>

              <button
                onClick={() => {
                  setSelectedTable(table.title);
                  setOpenForm(true);
                }}
                className="btn-primary translate-y-4 group-hover:translate-y-0 transition duration-300 delay-75 shadow-lg shadow-amber-500/20"
              >
                Book Now
              </button>
            </div>
            
            {/* Mobile View / Always Visible Title when not hovering (Optional, for better UX on touch) */}
             <div className="p-4 bg-black border-t border-white/5 md:hidden">
                <h3 className="text-lg font-bold text-white text-center">{table.title}</h3>
                 <button
                   onClick={() => {
                      setSelectedTable(table.title);
                      setOpenForm(true);
                    }}
                   className="mt-3 w-full bg-amber-500 text-black py-2 rounded font-semibold text-sm"
                 >
                    Book Now
                 </button>
             </div>
          </div>
        ))}
      </div>

      {/* Booking Form Modal */}
      {openForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50 p-4">
          <div className="bg-neutral-900 section-padding p-8 rounded-2xl max-w-xl w-full relative border border-white/10 shadow-2xl animate-fade-in-up">
            <button
              onClick={() => setOpenForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Booking for <span className="text-amber-500">{selectedTable}</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-black border border-white/10 rounded-lg text-white focus:border-amber-500 outline-none transition"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-black border border-white/10 rounded-lg text-white focus:border-amber-500 outline-none transition"
                  />
              </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <select
                    name="guests"
                    value={formData.guests || ""}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-black border border-white/10 rounded-lg text-white focus:border-amber-500 outline-none transition appearance-none"
                  >
                    <option value="" className="text-gray-500">Select Guests</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5+ People</option>
                  </select>

                  <div className="grid grid-cols-2 gap-2">
                     <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-black border border-white/10 rounded-lg text-white focus:border-amber-500 outline-none transition text-sm"
                      />
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-black border border-white/10 rounded-lg text-white focus:border-amber-500 outline-none transition text-sm"
                      />
                  </div>
               </div>


              <textarea
                name="specialRequest"
                placeholder="Special Request (Optional)"
                value={formData.specialRequest}
                onChange={handleChange}
                rows="3"
                className="w-full p-3 bg-black border border-white/10 rounded-lg text-white focus:border-amber-500 outline-none transition resize-none"
              />

              {success && <p className="text-green-500 text-sm font-medium text-center">{success}</p>}
              {error && <p className="text-red-500 text-sm font-medium text-center">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-500 text-black py-3 font-bold rounded-lg hover:bg-amber-400 transition disabled:opacity-50 mt-2"
              >
                {loading ? "Booking in progress..." : "Confirm Booking"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reservation;
