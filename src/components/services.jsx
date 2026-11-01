import React from 'react';
import { motion } from 'framer-motion';
import { businessServices, personalInfo } from '../data';
import { 
  FaArrowRight, 
  FaCircleCheck, 
  FaWhatsapp, 
  FaHandshake 
} from 'react-icons/fa6';

export default function Services({ isStandalone = false }) {
  return (
    <section 
      id="services" 
      className={`py-20 md:py-28 ${isStandalone ? 'pt-28' : ''} bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 transition-colors border-t border-stone-200 dark:border-stone-800`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-4">
            <FaHandshake className="w-3.5 h-3.5" />
            <span>Work With Me — Digital Business Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-white">
            Practical Solutions for Businesses & Founders
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
            Beyond writing code, I understand business goals. I build digital systems that convert visitors into paying customers, streamline daily operations, and eliminate payment bottlenecks.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businessServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col bg-stone-50 dark:bg-stone-800/60 rounded-2xl p-7 sm:p-9 border border-stone-200/90 dark:border-stone-700/80 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  {service.badge}
                </span>
                <span className="text-xs font-mono font-bold text-stone-400">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-stone-900 dark:text-white tracking-tight mb-3">
                {service.title}
              </h3>

              <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Deliverables checklist */}
              <div className="mt-auto pt-6 border-t border-stone-200/80 dark:border-stone-700/60">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-3">
                  Key Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs font-medium text-stone-700 dark:text-stone-200">
                      <FaCircleCheck className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={`https://wa.me/250790025794?text=${encodeURIComponent(`Hello Isaie, I am interested in discussing a project for ${service.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600 text-stone-800 dark:text-stone-100 transition-colors"
                  >
                    <span>Request Proposal</span>
                    <FaArrowRight className="w-3 h-3 text-blue-500" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Agency Callout Box (MITECH HUB) */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-900/10 via-stone-100 to-indigo-900/10 dark:from-blue-950/40 dark:via-stone-800/40 dark:to-indigo-950/40 border border-blue-200 dark:border-blue-900/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Agency & Technology Hub
            </span>
            <h3 className="text-2xl font-black text-stone-900 dark:text-white mt-1">
              Need End-to-End Delivery? MITECH HUB is Ready.
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-300 mt-2 leading-relaxed">
              Through my agency, MITECH HUB (mitechhubhq.com), I partner with commercial businesses and startups to deliver full-cycle software architecture, custom e-commerce stores, and cloud deployments across East Africa.
            </p>
          </div>
          <div className="flex-shrink-0 flex gap-3">
            <a
              href={personalInfo.agencyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all inline-flex items-center gap-2"
            >
              <span>Visit Agency Site</span>
              <FaArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
