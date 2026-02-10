import { useState } from "react";
import { sendContact } from "../utils/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
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

    try {
      await sendContact(formData);
      setSuccess("Message sent successfully!");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-neutral-950 text-gray-300 pt-24 sm:pt-28 px-4 sm:px-6 pb-12 sm:pb-16">
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Contact Us
        </h1>
        <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Have questions or want to plan your night? Reach out to us and we
          will be happy to assist you.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
        {/* Contact Info */}
        <div className="bg-black p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border border-gray-800 space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-2xl text-white mb-3 sm:mb-4">Get In Touch</h2>
          <p className="text-sm sm:text-base">📍 MG Road, Nagpur</p>
          <p className="text-sm sm:text-base">📞 +91 9999999999</p>
          <p className="text-sm sm:text-base">✉ sixthsense@email.com</p>
          <p className="text-gray-400 mt-3 sm:mt-4 text-xs sm:text-sm">
            Opening Hours: 6:00 PM – 2:00 AM
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-black p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border border-gray-800 space-y-4 sm:space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 sm:p-3 bg-transparent border border-gray-600 rounded focus:border-amber-400 outline-none transition text-sm sm:text-base"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number (10 digits)"
            value={formData.phone}
            onChange={handleChange}
            required
            className={`w-full p-2 sm:p-3 bg-transparent border rounded focus:outline-none transition text-sm sm:text-base ${
              error && error.includes("Phone") 
                ? "border-red-500 focus:border-red-500" 
                : "border-gray-600 focus:border-amber-400"
            }`}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 sm:p-3 bg-transparent border border-gray-600 rounded focus:border-amber-400 outline-none transition text-sm sm:text-base"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 sm:p-3 bg-transparent border border-gray-600 rounded focus:border-amber-400 outline-none transition text-sm sm:text-base"
          />

          {success && <p className="text-green-400 text-xs sm:text-sm">{success}</p>}
          {error && <p className="text-red-400 text-xs sm:text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-500 text-black py-2 sm:py-3 font-semibold rounded hover:bg-amber-400 transition disabled:opacity-50 text-sm sm:text-base"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
