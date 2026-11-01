import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaXmark, 
  FaArrowUpRightFromSquare, 
  FaGithub, 
  FaCircleCheck, 
  FaLayerGroup, 
  FaGear, 
  FaBullseye, 
  FaCheck
} from 'react-icons/fa6';

export default function CaseStudyModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-stone-950/70 backdrop-blur-sm"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl shadow-2xl overflow-hidden my-auto"
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/50">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300">
                  {project.category}
                </span>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
                  project.badgeType === 'live' 
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20' 
                    : project.badgeType === 'prototype'
                    ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                    : 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20'
                }`}>
                  {project.badge}
                </span>
              </div>
              <h2 id="case-study-title" className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 mt-1">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
              aria-label="Close modal"
            >
              <FaXmark className="w-5 h-5" />
            </button>
          </div>

          {/* Action links */}
          <div className="px-6 py-3 bg-stone-100/70 dark:bg-stone-800/40 border-b border-stone-200 dark:border-stone-800 flex flex-wrap items-center gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-sm"
              >
                <span>Visit Live Application</span>
                <FaArrowUpRightFromSquare className="w-3.5 h-3.5" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 transition-colors"
              >
                <FaGithub className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            )}
          </div>

          {/* Scrollable Body */}
          <div className="p-6 overflow-y-auto space-y-6 text-stone-800 dark:text-stone-200 text-sm sm:text-base leading-relaxed">
            
            {/* The Problem & Need */}
            <div className="bg-stone-50 dark:bg-stone-800/40 p-5 rounded-xl border border-stone-200/80 dark:border-stone-800">
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                <FaBullseye className="text-rose-500" />
                <span>The Challenge / Business Need</span>
              </h3>
              <p className="text-stone-700 dark:text-stone-300">
                {project.problem}
              </p>
            </div>

            {/* What the System Does */}
            <div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">
                System Overview & Solution
              </h3>
              <p className="text-stone-600 dark:text-stone-300">
                {project.solution}
              </p>
            </div>

            {/* Role & Responsibility */}
            <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-1">
                My Role & Engineering Responsibility
              </span>
              <p className="text-stone-800 dark:text-stone-200 text-sm font-medium">
                {project.role}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-3 flex items-center gap-2">
                <FaCircleCheck className="text-emerald-500" />
                <span>Key Engineering Features</span>
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-stone-700 dark:text-stone-300">
                    <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-[10px] font-bold">
                      <FaCheck className="w-2.5 h-2.5" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Architecture */}
            <div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2 flex items-center gap-2">
                <FaLayerGroup className="text-indigo-500" />
                <span>Architecture & Technical Decisions</span>
              </h3>
              <p className="text-stone-600 dark:text-stone-300">
                {project.architecture}
              </p>
            </div>

            {/* Technical Challenges Addressed */}
            {project.challenges && (
              <div>
                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2 flex items-center gap-2">
                  <FaGear className="text-amber-500" />
                  <span>Engineering Challenges Addressed</span>
                </h3>
                <p className="text-stone-600 dark:text-stone-300">
                  {project.challenges}
                </p>
              </div>
            )}

            {/* Result & Outcome */}
            <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block mb-1">
                Outcome & Status
              </span>
              <p className="text-stone-800 dark:text-stone-200 text-sm font-medium">
                {project.outcome}
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                Technologies & Tools Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span 
                    key={idx}
                    className="text-xs font-medium px-3 py-1 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="p-4 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/50 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 text-sm font-semibold rounded-lg bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 transition-colors"
            >
              Close Case Study
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
