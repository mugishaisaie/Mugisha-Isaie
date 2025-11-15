"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../data";

const slideVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, x: -40, transition: { duration: 0.6 } },
};

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Testimonials
        </h2>

        <div className="relative h-56">
          <AnimatePresence>
            <motion.div
              key={index}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0 flex flex-col items-center"
            >
              <img
                src={
                  testimonials[index].image ||
                  `https://api.dicebear.com/9.x/adventurer/svg?seed=${testimonials[index].name}`
                }
                alt={testimonials[index].name}
                className="w-20 h-20 rounded-full mb-4"
              />

              <p className="text-lg text-gray-700 italic mb-3">
                “{testimonials[index].message}”
              </p>

              <h4 className="text-xl font-semibold">
                {testimonials[index].name}
              </h4>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* navigation dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                index === i ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
