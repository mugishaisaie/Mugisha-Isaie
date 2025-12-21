import React from "react";
import { motion } from "framer-motion";
import { services } from "../data"; 
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6"; // Standard arrow icon for CTAs

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function ServicesSection() {
  return (
    // 1. CHANGED: Section bg is slightly different from card bg for contrast
    <section className="py-24 bg-stone-50 dark:bg-stone-950 text-stone-800 dark:text-stone-100 relative overflow-hidden">
      
      {/* Optional: Background decoration for "premium" feel */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            What I Can Do For You
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-stone-600 dark:text-stone-400"
          >
            High-quality services tailored to your business needs. 
            From concept to deployment, I handle the technical details so you can focus on growth.
          </motion.p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id || index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }} // Lift up effect
              className="group flex flex-col h-full bg-white dark:bg-stone-900 rounded-2xl p-8 border border-stone-100 dark:border-stone-800 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              
              {/* IMAGE / ICON CONTAINER */}
              <div className="mb-6 w-auto h-auto flex items-center justify-center bg-blue-50 dark:bg-stone-800 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {/* Check if it's an image URL or a React Icon component */}
                {typeof service.image === 'string' ? (
                   <img
                   src={service.image}
                   alt={service.title}
                   className="w-auto h-auto object-contain"
                 />
                ) : (
                  // Fallback if you decide to use React Icons in data.js later
                  <span className="text-3xl text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors">
                     {/* Render icon component here if needed */}
                  </span>
                )}
              </div>

              {/* TEXT CONTENT */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-stone-600 dark:text-stone-400 mb-8 leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* CALL TO ACTION */}
              <Link 
                to={'/contact'} 
                className="inline-flex items-center gap-2 font-semibold text-stone-800 dark:text-white group-hover:gap-4 transition-all duration-300"
              >
                {service.cta || "Start a Project"} 
                <FaArrowRight className="text-blue-600" />
              </Link>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
