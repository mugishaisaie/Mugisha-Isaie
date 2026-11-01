import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  projects, 
  projectCategories 
} from '../data';
import CaseStudyModal from './CaseStudyModal';
import { 
  FaArrowUpRightFromSquare, 
  FaGithub, 
  FaCircleCheck, 
  FaLaptopCode, 
  FaMagnifyingGlass,
  FaFileLines
} from 'react-icons/fa6';

export default function Projects({ isStandalone = false }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section 
      id="projects" 
      className={`py-20 md:py-28 ${isStandalone ? 'pt-28' : ''} bg-stone-50 dark:bg-stone-900/60 text-stone-900 dark:text-stone-100 transition-colors border-t border-stone-200/80 dark:border-stone-800`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-4">
            <FaLaptopCode className="w-3.5 h-3.5" />
            <span>Proven Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-white">
            Engineering Case Studies & Platforms
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
            Every project represents an engineered solution to an actual business or technical problem. Explore the architecture, technical decisions, and live deployments below.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-stone-200 dark:border-stone-800">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <FaMagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech or project..."
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group flex flex-col bg-white dark:bg-stone-800/90 rounded-2xl border border-stone-200 dark:border-stone-700/80 shadow-sm hover:shadow-xl hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-300 overflow-hidden"
            >
              {/* Media / Visual Representation */}
              <div className="relative h-52 sm:h-56 bg-stone-100 dark:bg-stone-900 overflow-hidden border-b border-stone-200 dark:border-stone-700">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div 
                    className="w-full h-full flex flex-col justify-between p-6"
                    style={{
                      background: `linear-gradient(135deg, ${project.brandColor}15 0%, rgba(15, 23, 42, 0.05) 100%)`
                    }}
                  >
                    <div className="flex justify-between items-start">
                      <span className="font-mono text-xs px-2.5 py-1 rounded bg-white/80 dark:bg-stone-800/80 backdrop-blur font-semibold text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700">
                        {project.category}
                      </span>
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/90 dark:bg-stone-800/90 shadow-sm">
                        <FaLaptopCode style={{ color: project.brandColor }} />
                      </div>
                    </div>
                    <div>
                      <div className="text-xl font-black tracking-tight text-stone-900 dark:text-white">
                        {project.title}
                      </div>
                      <p className="text-xs font-medium text-stone-500 dark:text-stone-400 mt-1 line-clamp-2">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold backdrop-blur-md shadow-sm ${
                    project.badgeType === 'live'
                      ? 'bg-emerald-500/90 text-white'
                      : project.badgeType === 'prototype'
                      ? 'bg-amber-500/90 text-white'
                      : 'bg-blue-600/90 text-white'
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 dark:text-white tracking-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-stone-500 dark:text-stone-400 mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-4 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-stone-100 dark:border-stone-700/60">
                    {project.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-stone-600 dark:text-stone-300">
                        <FaCircleCheck className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.slice(0, 4).map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300 border border-stone-200/80 dark:border-stone-600"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-700 text-stone-500 dark:text-stone-400">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-stone-100 dark:border-stone-700 flex flex-wrap items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-800 dark:text-stone-200 hover:text-blue-600 dark:hover:text-blue-400 py-1.5 px-2.5 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors"
                  >
                    <FaFileLines className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>Case Study</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors"
                        title="View Source Code"
                        aria-label={`View ${project.title} source code`}
                      >
                        <FaGithub className="w-4 h-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all hover:scale-[1.02]"
                      >
                        <span>Live</span>
                        <FaArrowUpRightFromSquare className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty state if search yields nothing */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 p-8">
            <p className="text-stone-600 dark:text-stone-400 font-medium">
              No projects matched your filter criteria "{searchQuery}".
            </p>
            <button
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              className="mt-4 px-4 py-2 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Case Study Deep-Dive Modal */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
