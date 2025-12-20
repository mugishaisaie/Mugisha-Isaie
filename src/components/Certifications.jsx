import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

// --- TEMPLATE DATA ---
const certifications = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    issuer: "N@TCOM Company, Rwanda",
    date: "Dec 2023",
    link: "https://udemy.com/certificate/sample", // Link to the credential
    image: "https://placehold.co/100x100/2563eb/white?text=N@TCOM" // Logo of issuer
  },
  {
    id: 2,
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp ",
    date: "Aug 2024",
    link: "https://coursera.org/verify/sample",
    image: "https://placehold.co/100x100/0ea5e9/white?text=FCC"
  },
  {
    id: 3,
    title: "Advanced JavaScript",
    issuer: "FreeCodeCamp",
    date: "June 2025",
    link: "https://freecodecamp.org/certification/sample",
    image: "https://placehold.co/100x100/16a34a/white?text=FCC"
  }
];

export default function Certifications() {
  return (
    <section className="py-20 bg-stone-100 dark:bg-stone-900 text-stone-900 dark:text-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Certifications & Awards
          </h2>
          <p className="text-stone-600 dark:text-stone-400">
            Professional validations of my technical expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 bg-white dark:bg-stone-800 p-6 rounded-xl shadow-md border border-stone-200 dark:border-stone-700 hover:shadow-lg transition-shadow"
            >
              {/* Issuer Logo */}
              <img 
                src={cert.image} 
                alt={cert.issuer} 
                className="w-16 h-16 rounded-full object-cover border border-stone-100 dark:border-stone-600"
              />
              
              <div className="flex-1">
                <h3 className="font-bold text-lg leading-tight mb-1">{cert.title}</h3>
                <p className="text-sm text-stone-500 dark:text-stone-400 mb-2">
                  {cert.issuer} • {cert.date}
                </p>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xs font-bold text-blue-600 uppercase tracking-wide flex items-center gap-1 hover:underline"
                >
                  Verify Credential <FaExternalLinkAlt size={10} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}