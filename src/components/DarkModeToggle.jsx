import React, { useEffect, useState } from 'react';

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className={`flex-1 text-left transition-colors font-semibold text-2xl duration-300 ease-in-out ${isDark? 'bg-dark' :'bg-light'}` }
    >
      {isDark ? '☀' : '🌙'}
    </button>
  );
}

export default DarkModeToggle;