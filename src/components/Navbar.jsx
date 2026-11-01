import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { personalInfo } from '../data';
import DarkModeToggle from './DarkModeToggle';
import { 
  FaBars, 
  FaXmark, 
  FaDownload, 
  FaWhatsapp
} from 'react-icons/fa6';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const handleNavClick = (e, targetId, routePath) => {
    setIsOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(routePath);
      }
    } else {
      // If we are on another route and want to jump to anchor or route
      navigate(routePath);
    }
  };

  const navItems = [
    { label: 'Overview', targetId: 'hero', route: '/' },
    { label: 'Projects', targetId: 'projects', route: '/projects' },
    { label: 'Skills', targetId: 'skills', route: '/skills' },
    { label: 'Experience', targetId: 'experience', route: '/experience' },
    { label: 'Services', targetId: 'services', route: '/#services' },
    { label: 'About', targetId: 'about', route: '/about' },
    { label: 'Contact', targetId: 'contact', route: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 dark:bg-stone-900/85 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2.5">
            <Link 
              to="/" 
              className="text-lg sm:text-xl font-extrabold tracking-tight text-stone-900 dark:text-white flex items-center gap-1.5"
            >
              <span>{personalInfo.name}</span>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                Full-Stack
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = 
                (location.pathname === item.route) || 
                (item.route === '/' && location.pathname === '/');

              return (
                <a
                  key={item.label}
                  href={item.route}
                  onClick={(e) => handleNavClick(e, item.targetId, item.route)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50/70 dark:bg-blue-950/40'
                      : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Download CV, Theme Toggle, Mobile Menu Button */}
          <div className="flex items-center gap-3">
            
            {/* Download CV Action */}
            <a
              href={personalInfo.resumeUrl}
              download="Mugisha_Isaie_Web_Developer_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-stone-900 hover:bg-stone-800 text-white dark:bg-white dark:text-stone-900 dark:hover:bg-stone-100 shadow-sm transition-colors"
              title="Download Mugisha Isaie Resume (PDF)"
            >
              <FaDownload className="w-3.5 h-3.5 text-blue-400 dark:text-blue-600" />
              <span>Resume</span>
            </a>

            {/* Dark Mode Switch */}
            <DarkModeToggle />

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              type="button"
              className="lg:hidden min-h-[44px] min-w-[44px] p-2.5 flex items-center justify-center rounded-xl border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <FaXmark className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            className="lg:hidden bg-white/95 dark:bg-stone-900/95 backdrop-blur-xl border-b border-stone-200 dark:border-stone-800 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.route}
                  onClick={(e) => handleNavClick(e, item.targetId, item.route)}
                  className="min-h-[44px] flex items-center px-4 py-2.5 rounded-xl text-sm font-semibold text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                >
                  {item.label}
                </a>
              ))}

              <div className="pt-4 border-t border-stone-200 dark:border-stone-800 space-y-2">
                <a
                  href={personalInfo.resumeUrl}
                  download="Mugisha_Isaie_Web_Developer_Resume.pdf"
                  className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold bg-blue-600 text-white shadow-sm transition-colors hover:bg-blue-700"
                >
                  <FaDownload className="w-3.5 h-3.5" />
                  <span>Download Resume (PDF)</span>
                </a>
                
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold bg-emerald-600 text-white shadow-sm transition-colors hover:bg-emerald-700"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
