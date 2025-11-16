import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
  export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Your EmailJS integration
      emailjs.send(
       import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: "Contact from portfolio website", 
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY      // Replace with your Public Key
      )
      .then((result) => {
        console.log(result.text);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        toast.success("✅ Message sent successfully!");
      })
      .catch((error) => {
        console.error(error.text);
        toast.error("❌ Failed to send message. Try again!");

      });
    };
  

  return (
    <div className="min-h-screen bg-white dark:bg-stone-800 text-stone-800 dark:text-white flex flex-col items-center justify-center px-4 py-10">
      <div className="max-w-xl w-full bg-white dark:bg-stone-800 text-stone-800 dark:text-white p-8 rounded-2xl shadow-lg">
        <motion.h2
        initial={{opacity:0,y: -30}}
        animate={{opacity:1,y:0}}
        transition={{duration:1,ease:"easeInOut"}}
         className="text-3xl font-bold mb-4 bg-white dark:bg-stone-800  dark:text-stone-300">Hi, Let's Connect</motion.h2>
        <motion.p
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  transition={{duration:1,ease:"easeInOut",delay:0.3}}
         className="bg-white dark:bg-stone-800 text-stone-800 dark:text-white mb-6">
          I'm open to freelance projects, job opportunities, or just a friendly chat. Just Email me I'll get back to you as soon as possible.
        </motion.p>
        <motion.form onSubmit={handleSubmit} className="space-y-5"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        >
          <div>
            <label className="block text-sm font-medium bg-white dark:bg-stone-800 text-stone-800 dark:text-white">Name</label>
            <motion.input
            placeholder="Your Name"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium bg-white dark:bg-stone-800 text-stone-800 dark:text-white">Email</label>
            <motion.input
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            placeholder="Your Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium bg-white dark:bg-stone-800 text-stone-800 dark:text-white">Message</label>
            <motion.textarea
            
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            placeholder="Some Message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></motion.textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Send Message
          </button>
          {submitted && <p className="text-green-600 mt-4">Thanks for reaching out!</p>}
        </motion.form>
      </div>
    </div>
  );
}