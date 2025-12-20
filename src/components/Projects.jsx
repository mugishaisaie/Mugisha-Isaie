import React from "react";
import { FaExternalLinkAlt, FaGithub, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { projects } from "../data";

// Animation Variants for smooth entry
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // Cards appear one by one
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Projects() {
  return (
    <section className="py-24 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto text-lg"
          >
            Real-world applications built with modern architecture.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects?.map((project) => (
            <motion.div 
              key={project.id} 
              variants={cardVariants}
              className="group bg-white dark:bg-stone-800 rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-700 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              
              {/* 1. Image Area (Clickable & Zoom Effect) */}
              <div className="relative overflow-hidden h-56 bg-stone-200 dark:bg-stone-700">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                />
                
                {/* Overlay (Appears on Hover) */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                   <a 
                     href={project.live} 
                     target="_blank" 
                     rel="noreferrer"
                     className="px-6 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition transform hover:scale-105 flex items-center gap-2"
                   >
                     Live Demo <FaExternalLinkAlt size={14} />
                   </a>
                </div>
              </div>

              {/* 2. Content Body */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* 3. Tech Stack Badges (Replaces text list) */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-semibold bg-blue-50 dark:bg-stone-700 text-blue-700 dark:text-blue-200 rounded-full border border-blue-100 dark:border-stone-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 4. Footer Links */}
                <div className="flex justify-between items-center pt-4 border-t border-stone-100 dark:border-stone-700">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors text-sm font-medium"
                  >
                    <FaGithub className="text-lg" /> View Code
                  </a>
                  
                  {/* Secondary Link for details (optional) */}
                  <span className="text-xs text-stone-400 font-mono">
                    {project.year || "2024"}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}