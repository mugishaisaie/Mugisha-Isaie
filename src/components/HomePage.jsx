import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { personalInfo, credibilityPoints } from '../data';
import IsaiePhoto from '../assets/images/isaie.jpg';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Services from './services';
import About from './About';
import Contact from './Contact';
import { 
  FaGithub, 
  FaLinkedin, 
  FaWhatsapp, 
  FaDownload, 
  FaArrowRight, 
  FaLocationDot
} from 'react-icons/fa6';

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col w-full">
      
      {/* 1. HERO SECTION */}
      <section 
        id="hero" 
        className="relative min-h-[92vh] flex items-center pt-24 pb-16 sm:pb-24 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 overflow-hidden"
      >
        {/* Subtle engineering background grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Positioning & CTAs (Col 7) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Availability Indicator */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Available for Engineering Roles & Digital Solutions</span>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.1 }}
                className="space-y-3"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-stone-900 dark:text-white">
                  I Build Modern Web Applications That Solve Real-World Problems.
                </h1>
                <p className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400">
                  Full-Stack Web Developer & Systems Architect
                </p>
              </motion.div>

              {/* Supporting Bio */}
              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.2 }}
                className="text-base sm:text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                I am <strong>Mugisha Isaie</strong>, based in Kigali, Rwanda. I engineer high-performance web applications, commercial SaaS platforms, and e-commerce systems with modern React and reliable backends.
              </motion.p>

              {/* Dual Calls to Action (Hire Me & Work With Me) */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
              >
                {/* Primary: View Projects */}
                <a
                  href="#projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 transition-colors"
                >
                  <span>Explore Case Studies</span>
                  <FaArrowRight className="w-3.5 h-3.5" />
                </a>

                {/* Secondary: Contact / Hire */}
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold bg-stone-900 hover:bg-stone-800 text-white dark:bg-stone-800 dark:hover:bg-stone-700 dark:text-white border border-stone-800 dark:border-stone-700 transition-colors"
                >
                  <span>Hire / Work With Me</span>
                  <FaArrowRight className="w-3.5 h-3.5 text-blue-400" />
                </a>

                {/* CV Action */}
                <a
                  href={personalInfo.resumeUrl}
                  download="Mugisha_Isaie_Web_Developer_Resume.pdf"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold bg-stone-100 hover:bg-stone-200 dark:bg-stone-800/80 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 transition-colors"
                >
                  <FaDownload className="w-3.5 h-3.5 text-blue-500" />
                  <span>Resume (PDF)</span>
                </a>
              </motion.div>

              {/* Verified Quick Links */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.4 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-4 text-xs font-semibold text-stone-500 dark:text-stone-400"
              >
                <div className="flex items-center gap-1.5 text-stone-700 dark:text-stone-300">
                  <FaLocationDot className="text-rose-500" />
                  <span>Kigali, Rwanda</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 inline-flex items-center gap-1.5 transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <span className="hidden sm:inline">•</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 inline-flex items-center gap-1.5 transition-colors"
                >
                  <FaLinkedin className="w-4 h-4 text-blue-600" />
                  <span>LinkedIn</span>
                </a>
                <span className="hidden sm:inline">•</span>
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 inline-flex items-center gap-1.5 transition-colors"
                >
                  <FaWhatsapp className="w-4 h-4 text-emerald-500" />
                  <span>WhatsApp</span>
                </a>
              </motion.div>

            </div>

            {/* Right Column: Visual Portrait Treatment (Col 5) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.2 }}
                className="relative w-72 sm:w-80 md:w-96"
              >
                {/* Subtle back decorative frame */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 rounded-3xl blur-xl" />

                {/* Portrait card */}
                <div className="relative rounded-3xl overflow-hidden border-4 border-white dark:border-stone-800 shadow-2xl bg-stone-100 dark:bg-stone-800">
                  <img
                    src={IsaiePhoto}
                    alt="Mugisha Isaie - Full-Stack Developer"
                    className="w-full aspect-[4/5] object-cover object-center"
                    loading="eager"
                  />
                  
                  {/* Bottom caption overlay */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-950/90 via-stone-950/50 to-transparent p-6 text-white">
                    <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                      Mugisha Isaie
                    </div>
                    <div className="text-lg font-bold">
                      Full-Stack & Systems Developer
                    </div>
                    <p className="text-xs text-stone-300 mt-1">
                      Founder @ MITECH HUB • BTech IT Student
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CREDIBILITY SECTION */}
      <section 
        id="credibility"
        className="py-12 bg-stone-100 dark:bg-stone-800/50 border-y border-stone-200/80 dark:border-stone-800 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credibilityPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-stone-800 rounded-2xl p-6 border border-stone-200/80 dark:border-stone-700/80 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-stone-900 dark:text-white">
                    {point.title}
                  </h3>
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                    {point.subtitle}
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-2 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS SECTION */}
      <Projects />

      {/* 4. TECHNICAL SKILLS SECTION */}
      <Skills />

      {/* 5. PROFESSIONAL EXPERIENCE TIMELINE */}
      <Experience />

      {/* 6. BUSINESS SOLUTIONS & SERVICES ("WORK WITH ME") */}
      <Services />

      {/* 7. ABOUT ME & AUTHENTIC STORY */}
      <About />

      {/* 8. CONTACT & HIRE ME SECTION */}
      <Contact />

    </div>
  );
}
