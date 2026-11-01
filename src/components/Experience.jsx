import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  experiences, 
  educationList, 
  certificationsList 
} from '../data';
import { 
  FaGraduationCap, 
  FaAward, 
  FaLocationDot, 
  FaCalendarDays, 
  FaArrowUpRightFromSquare
} from 'react-icons/fa6';

export default function Experience({ isStandalone = false }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section 
      id="experience" 
      className={`py-20 md:py-28 ${isStandalone ? 'pt-28' : ''} bg-stone-50 dark:bg-stone-900/60 text-stone-900 dark:text-stone-100 transition-colors border-t border-stone-200/80 dark:border-stone-800`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-white">
            Professional Experience & Education
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
            A track record of agency leadership, direct commercial client delivery, developer mentorship, and foundational academic training in software development and computer networks.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-stone-200 dark:border-stone-800 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : idx * 0.05 }}
              className="relative group"
            >
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-white dark:bg-stone-900 border-4 border-blue-600 dark:border-blue-500 group-hover:scale-125 transition-transform" />

              {/* Card Container */}
              <div className="bg-white dark:bg-stone-800/80 rounded-2xl p-6 sm:p-8 border border-stone-200 dark:border-stone-700/80 shadow-sm hover:shadow-md transition-shadow">
                
                {/* Header row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-white tracking-tight mt-0.5">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-stone-800 dark:text-stone-200 hover:text-blue-600 dark:hover:text-blue-400 inline-flex items-center gap-1.5 transition-colors"
                        >
                          <span>{exp.company}</span>
                          <FaArrowUpRightFromSquare className="w-3 h-3 text-blue-500" />
                        </a>
                      ) : (
                        <span className="font-semibold text-stone-800 dark:text-stone-200">
                          {exp.company}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium text-stone-600 dark:text-stone-400">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-700/60 text-stone-700 dark:text-stone-300">
                      <FaCalendarDays className="w-3 h-3 text-blue-500" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <FaLocationDot className="w-3 h-3 text-stone-500 dark:text-stone-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2.5 my-4">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Chips */}
                {exp.tech && exp.tech.length > 0 && (
                  <div className="pt-4 border-t border-stone-100 dark:border-stone-700/60 flex flex-wrap gap-1.5">
                    {exp.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            </motion.div>
          ))}
        </div>

        {/* Education & Certifications Subsection */}
        <div className="mt-20 pt-16 border-t border-stone-200 dark:border-stone-800">
          <div className="grid md:grid-cols-2 gap-10">
            
            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <FaGraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 dark:text-white">
                  Formal Education
                </h3>
              </div>

              <div className="space-y-6">
                {educationList.map((edu, idx) => (
                  <div 
                    key={idx}
                    className="p-6 bg-white dark:bg-stone-800/80 rounded-2xl border border-stone-200 dark:border-stone-700/80 shadow-sm"
                  >
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                      {edu.period}
                    </span>
                    <h4 className="text-lg font-bold text-stone-900 dark:text-white mt-1">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-semibold text-stone-700 dark:text-stone-300 mt-0.5">
                      {edu.institution} • {edu.location}
                    </p>
                    <div className="mt-3 text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                      <strong className="text-stone-800 dark:text-stone-200">{edu.focus}:</strong> {edu.details}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Programs */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <FaAward className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 dark:text-white">
                  Certifications & Programs
                </h3>
              </div>

              <div className="space-y-4">
                {certificationsList.map((cert, idx) => (
                  <div 
                    key={idx}
                    className="p-5 bg-white dark:bg-stone-800/80 rounded-xl border border-stone-200 dark:border-stone-700/80 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-stone-900 dark:text-white">
                        {cert.title}
                      </h4>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-700 text-stone-600 dark:text-stone-300 whitespace-nowrap">
                        {cert.date}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-stone-600 dark:text-stone-400 mt-2">
                      {cert.topics}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
