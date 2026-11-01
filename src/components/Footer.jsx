import React from 'react';
import { personalInfo } from '../data';
import { 
  FaGithub, 
  FaLinkedin, 
  FaWhatsapp, 
  FaEnvelope, 
  FaDownload,
  FaArrowUp,
  FaLocationDot
} from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-100 dark:bg-stone-950 text-stone-600 dark:text-stone-400 border-t border-stone-200 dark:border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Identity & Positioning (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-tight text-stone-900 dark:text-white">
                {personalInfo.name}
              </span>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                Full-Stack Developer
              </span>
            </div>
            
            <p className="text-sm text-stone-600 dark:text-stone-300 max-w-sm leading-relaxed">
              Engineering modern web applications, high-converting digital business systems, and scalable full-stack architectures. Founder of MITECH HUB.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-stone-700 dark:text-stone-300">
              <FaLocationDot className="text-rose-500" />
              <span>Kigali, Rwanda • Available Globally</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 transition-colors"
                aria-label="GitHub profile"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-blue-600 dark:text-blue-400 border border-stone-200 dark:border-stone-700 transition-colors"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-emerald-600 dark:text-emerald-400 border border-stone-200 dark:border-stone-700 transition-colors"
                aria-label="WhatsApp chat"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-white dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 transition-colors"
                aria-label="Send Email"
              >
                <FaEnvelope className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Overview / Home
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Featured Case Studies
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Technical Competencies
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Career Experience
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Work With Me (Solutions)
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  About Mugisha Isaie
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Contact & Hiring
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact & Resources (Col 4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-white">
              Direct Contact & Documents
            </h4>
            <div className="space-y-2 text-sm">
              <p>
                Email:{' '}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-semibold text-stone-800 dark:text-stone-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {personalInfo.email}
                </a>
              </p>
              <p>
                Phone / WhatsApp:{' '}
                <a
                  href={personalInfo.whatsappUrl}
                  className="font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  {personalInfo.phoneFormatted}
                </a>
              </p>
              <p>
                Agency Platform:{' '}
                <a
                  href={personalInfo.agencyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  mitechhubhq.com
                </a>
              </p>
            </div>

            <div className="pt-2">
              <a
                href={personalInfo.resumeUrl}
                download="Mugisha_Isaie_Web_Developer_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all"
              >
                <FaDownload className="w-3.5 h-3.5" />
                <span>Download Developer Resume</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-12 pt-8 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
          <p>
            &copy; {currentYear} {personalInfo.name}. Built with React, Tailwind CSS, and Clean Component Architecture.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-200/80 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <FaArrowUp className="w-3 h-3 text-blue-500" />
          </button>
        </div>

      </div>
    </footer>
  );
}
