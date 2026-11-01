import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data';
import { 
  FaCode, 
  FaBolt, 
  FaMobileScreen, 
  FaLock, 
  FaNetworkWired 
} from 'react-icons/fa6';

export default function Skills({ isStandalone = false }) {
  return (
    <section 
      id="skills" 
      className={`py-20 md:py-28 ${isStandalone ? 'pt-28' : ''} bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 transition-colors border-t border-stone-200 dark:border-stone-800`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-4">
            <FaCode className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-white">
            Core Technical Competencies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
            Organized by engineering domain. Grounded in 4+ years of hands-on application building, formal IT coursework at Rwanda Polytechnic, and live production deployments.
          </p>
        </div>

        {/* 6 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex flex-col bg-stone-50 dark:bg-stone-800/60 rounded-2xl p-6 sm:p-7 border border-stone-200/90 dark:border-stone-700/80 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Category Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-stone-900 dark:text-white tracking-tight">
                  {cat.name}
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1">
                  {cat.description}
                </p>
              </div>

              {/* Skills List */}
              <div className="mt-auto grid grid-cols-2 gap-2.5 pt-3 border-t border-stone-200/70 dark:border-stone-700/60">
                {cat.skills.map((skill, sIdx) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={sIdx}
                      className={`flex items-center gap-2.5 p-2 rounded-xl text-xs font-semibold transition-colors ${
                        skill.highlight
                          ? 'bg-white dark:bg-stone-700/80 text-stone-900 dark:text-white border border-stone-200 dark:border-stone-600 shadow-sm'
                          : 'bg-stone-100/70 dark:bg-stone-800/70 text-stone-700 dark:text-stone-300 border border-transparent'
                      }`}
                    >
                      <Icon className={`w-4 h-4 flex-shrink-0 ${skill.color}`} />
                      <span className="truncate">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Engineering Standards / Principles Bar */}
        <div className="mt-16 bg-stone-50 dark:bg-stone-800/40 rounded-2xl p-8 border border-stone-200 dark:border-stone-800">
          <div className="max-w-2xl mb-6">
            <h3 className="text-xl font-bold text-stone-900 dark:text-white">
              Engineering Mindset & Production Standards
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
              Code is a business asset. Here are the principles that guide every application I architect.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <FaBolt className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900 dark:text-white">Core Web Vitals & Speed</h4>
                <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                  Semantic structuring, asset minification, and code splitting for snappy mobile load times.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <FaMobileScreen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900 dark:text-white">Mobile-First UI/UX</h4>
                <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                  Touch-friendly layouts designed from 320px screens up to ultrawide desktop monitors.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <FaNetworkWired className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900 dark:text-white">Network & DB Reliability</h4>
                <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                  Deep understanding of DNS, routing, TCP/IP, and resilient PostgreSQL relational models.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <FaLock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900 dark:text-white">Security & Clean Code</h4>
                <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                  SSL/TLS encryption, Row-Level Security on Supabase, and maintainable Git version control.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
