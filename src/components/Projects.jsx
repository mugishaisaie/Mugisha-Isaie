import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { projects } from "../data";



export default function Projects() {
  return (
    <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="p-6 md:p-6 bg-gray-100 dark:bg-stone-800 dark:text-stone-100" id="projects">
      <motion.h2 
      initial={{opacity:0,y: -30}}
      animate={{opacity:1,y:0}}
      transition={{duration:1,ease:"easeInOut"}}
      className="text-3xl font-bold mb-8 text-center">Projects</motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="bg-stone-100 dark:bg-stone-800 dark:text-stone-100 rounded-2xl shadow-md overflow-hidden">
            <motion.img
                      initial={{opacity:0,y:50,scale:0}}
                      animate={{opacity:1,y:0,scale:1,}}
                      transition={{duration:1,ease:"easeInOut"}} src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="dark:text-stone-200 mb-4">{project.description}</p>
              <div className="mb-2">
                <strong className="text-blue-800">Tech:</strong>{" "}
                <span className="text-sm dark:text-stone-300">{project.tech.join(", ")}</span>
              </div>
              <ul className="list-disc  list-inside text-sm text-stone-700 dark:stroke-stone-200 mb-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="dark:text-stone-200">{feature}</li>
                ))}
              </ul>
              <div className="flex items-center gap-4">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1">
                  Live Demo <FaExternalLinkAlt />
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-stone-800 dark:bg-stone-800 dark:text-stone-100 hover:underline flex items-center gap-1">
                  GitHub <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
