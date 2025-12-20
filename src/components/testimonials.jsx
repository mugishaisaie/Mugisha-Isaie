import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../data";
import { FaQuoteLeft } from "react-icons/fa"; // Requires react-icons

const slideVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.5, ease: "easeIn" } },
};

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // New state to pause slider

  // Auto-slide logic (Runs only if not paused)
  useEffect(() => {
    if (isPaused) return; 

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000); // INCREASED to 8 seconds for readability

    return () => clearInterval(timer);
  }, [isPaused]); // Dependency on isPaused

  return (
    <section className="py-24 bg-stone-100 dark:bg-stone-900 text-stone-800 dark:text-stone-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Section Header */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-12 tracking-tight"
        >
          Success Stories
        </motion.h2>

        {/* Testimonial Card */}
        <div 
          className="relative min-h-[400px] md:min-h-[300px] flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)} // Pause when user hovers
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              {/* Decorative Quote Icon */}
              <FaQuoteLeft className="text-4xl text-blue-200 dark:text-stone-700 mb-6" />

              <p className="text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mb-8 text-stone-700 dark:text-stone-300">
                "{testimonials[index].message}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <img
                  src={
                    testimonials[index].image ||
                    `https://api.dicebear.com/9.x/initials/svg?seed=${testimonials[index].name}`
                  }
                  alt={testimonials[index].name}
                  className="w-14 h-14 rounded-full border-2 border-white dark:border-stone-700 shadow-md"
                />
                <div className="text-left">
                  <h4 className="text-lg font-bold text-stone-900 dark:text-white">
                    {testimonials[index].name}
                  </h4>
                  <p className="text-sm text-stone-500 dark:text-stone-400 font-medium">
                    {testimonials[index].role || "Client"} {/* Fallback if role is missing */}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === i 
                ? "w-8 bg-blue-600" // Active dot is wider
                : "w-3 bg-stone-300 dark:bg-stone-700 hover:bg-stone-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 