import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa6';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={() => setIsDark((prev) => !prev)}
      className="relative p-2.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <FaSun className="w-4 h-4 text-amber-400 transition-transform rotate-0" />
      ) : (
        <FaMoon className="w-4 h-4 text-blue-600 transition-transform -rotate-12" />
      )}
    </button>
  );
}
