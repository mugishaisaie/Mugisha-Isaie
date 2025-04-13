import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../data";



export default function Projects() {
  return (
    <section className="p-6 md:p-12 bg-gray-100 dark:bg-stone-800 dark:text-stone-100" id="projects">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="bg-stone-100 dark:bg-stone-800 dark:text-stone-100 rounded-2xl shadow-md overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-stone-200 mb-4">{project.description}</p>
              <div className="mb-2">
                <strong className="text-blue-800">Tech:</strong>{" "}
                <span className="text-sm text-stone-300">{project.tech.join(", ")}</span>
              </div>
              <ul className="list-disc list-inside text-sm text-stone-200 mb-4">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <div className="flex items-center gap-4">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1">
                  Live Demo <FaExternalLinkAlt />
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="dark:bg-stone-800 dark:text-stone-100 hover:underline flex items-center gap-1">
                  GitHub <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
