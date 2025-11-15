"use client";
import { motion } from "framer-motion";
import { services } from "../data"; 

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-24 h-24 object-contain mb-4"
              />

              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <button className="mt-auto bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition">
                {service.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
