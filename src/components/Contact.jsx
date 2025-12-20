import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure CSS is imported
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaSpinner } from "react-icons/fa";

// --- TEMPLATE CONFIG ---
const contactConfig = {
  email: "mugishaisaieog1@gmail.com",
  location: "Kigali, Rwanda",
  description: "I am always open to discussing new projects, creative ideas or opportunities to be part of your visions."
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Check if env variables are set (For the template user)
    if (!import.meta.env.VITE_EMAILJS_SERVICE_ID) {
      toast.error("⚠️ EmailJS keys are missing! Check .env file.");
      setIsLoading(false);
      return;
    }

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Mugisha Isaie",
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      toast.success("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setIsLoading(false);
    })
    .catch((error) => {
      console.error("Email Error:", error);
      toast.error("❌ Failed to send. Please try again later.");
      setIsLoading(false);
    });
  };

  return (
    <section className="py-24 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 min-h-screen flex items-center">
      {/* Toast Notification Container */}
      <ToastContainer position="bottom-right" theme="colored" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT SIDE: Contact Info */}
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Let's Chat.
              <br />
              <span className="text-blue-600">Tell me about your project.</span>
            </h2>
            
            <p className="text-lg text-stone-600 dark:text-stone-400 mb-12 leading-relaxed">
              {contactConfig.description}
            </p>

            <div className="space-y-8">
              {/* Email Box */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Mail Me</h4>
                  <p className="text-stone-500 dark:text-stone-400 mb-1">
                    I usually reply within 24 hours.
                  </p>
                  <a href={`mailto:${contactConfig.email}`} className="text-stone-900 dark:text-white font-semibold hover:text-blue-600 transition-colors">
                    {contactConfig.email}
                  </a>
                </div>
              </div>

              {/* Location Box */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 text-xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Location</h4>
                  <p className="text-stone-900 dark:text-white font-semibold">
                    {contactConfig.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: The Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-stone-800 p-8 md:p-10 rounded-3xl shadow-xl border border-stone-100 dark:border-stone-700"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-stone-700 dark:text-stone-300">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-stone-700 dark:text-stone-300">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-stone-700 dark:text-stone-300">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell me about your project goal..."
                  className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 px-6 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${
                  isLoading 
                    ? "bg-stone-400 cursor-not-allowed" 
                    : "bg-blue-600 hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-1"
                }`}
              >
                {isLoading ? (
                  <>Sending... <FaSpinner className="animate-spin" /></>
                ) : (
                  <>Send Message <FaPaperPlane /></>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}