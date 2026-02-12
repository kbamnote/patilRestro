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
    <div className="bg-neutral-950 text-gray-300 pt-32 pb-20">
      {/* Heading */}
      <div className="section-container text-center mb-16">
        <h1 className="mb-6">
          Contact Us
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Have questions or want to plan your night? Reach out to us and we
          will be happy to assist you.
        </p>
      </div>

      {/* Contact Section */}
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Contact Info */}
          <div className="space-y-8 p-8 rounded-2xl bg-neutral-900 border border-white/5 h-full">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Visit Patil Bars Nagpur</h2>
              <div className="space-y-4">
                 <div className="flex items-start gap-4">
                   <span className="text-2xl">📍</span>
                   <div>
                     <p className="font-bold text-white mb-1">Address</p>
                     <p className="text-gray-400">Civil Lines, Nagpur, Maharashtra</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <span className="text-2xl">📞</span>
                   <div>
                     <p className="font-bold text-white mb-1">Phone</p>
                     <p className="text-gray-400 font-mono">+91 7709244142</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <span className="text-2xl">✉</span>
                   <div>
                     <p className="font-bold text-white mb-1">Email</p>
                     <p className="text-gray-400">info@patilbars.com</p>
                   </div>
                 </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
               <h3 className="font-bold text-white mb-4">Opening Hours</h3>
               <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                  <div>
                    <p className="text-amber-500 font-semibold mb-1">Happy Hours</p>
                    <p>4:00 PM – 8:00 PM</p>
                  </div>
                  <div>
                    <p className="text-amber-500 font-semibold mb-1">Open Daily</p>
                    <p>11:00 AM – 12:30 AM</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 bg-black border border-white/10 rounded-lg text-white focus:border-amber-500 outline-none transition"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className={`w-full p-4 bg-black border rounded-lg text-white outline-none transition ${
                  error && error.includes("Phone") 
                    ? "border-red-500 focus:border-red-500" 
                    : "border-white/10 focus:border-amber-500"
                }`}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 bg-black border border-white/10 rounded-lg text-white focus:border-amber-500 outline-none transition"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 bg-black border border-white/10 rounded-lg text-white focus:border-amber-500 outline-none transition resize-none"
            />

            {success && <p className="text-green-500 text-sm font-medium">{success}</p>}
            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full md:w-auto"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
