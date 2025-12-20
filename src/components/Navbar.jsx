import React, { useState } from 'react';
import { links } from '../data'; // Ensure this file exists in your template!
import { Link, NavLink } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

// --- TEMPLATE CONFIG ---
const navConfig = {
  logoText: "M. Isaie",
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open (UX Best Practice)
  // useEffect(() => {
  //   if (isOpen) document.body.style.overflow = 'hidden';
  //   else document.body.style.overflow = 'unset';
  // }, [isOpen]); 

  return (
    <nav className='w-full sticky top-0 z-50 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md shadow-sm border-b border-stone-200 dark:border-stone-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>

          {/* 1. LOGO (Merged directly here) */}
          <div className='flex-shrink-0'>
            <Link to="./" className='text-2xl font-bold text-stone-900 dark:text-stone-100 tracking-tighter'>
              {navConfig.logoText}
            </Link>
          </div>

          {/* 2. DESKTOP NAVIGATION */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-8'>
              {links.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 font-bold px-3 py-2 rounded-md text-sm transition-colors'
                      : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors'
                  }
                >
                  {link.text}
                </NavLink>
              ))}
            </div>
          </div>

          {/* 3. RIGHT SIDE ACTIONS (Dark Mode & Mobile Toggle) */}
          <div className='flex items-center gap-4'>
            <DarkModeToggle />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='md:hidden p-2 rounded-md text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 focus:outline-none'
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 4. MOBILE MENU (Fixed Animation Logic) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white dark:bg-stone-900 overflow-hidden border-b border-stone-200 dark:border-stone-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {links.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.to}
                  onClick={() => setIsOpen(false)} // Close menu on click
                  className={({ isActive }) =>
                    isActive
                      ? 'block w-full text-center px-3 py-3 rounded-md text-base font-bold text-white bg-blue-600'
                      : 'block w-full text-center px-3 py-3 rounded-md text-base font-medium text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800'
                  }
                >
                  {link.text}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;