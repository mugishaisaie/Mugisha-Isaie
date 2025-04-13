import { useEffect, useState } from 'react';

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
      className="ml-4 px-2 py-1 rounded bg-stone-700 text-black dark:bg-stone-700 dark:text-stone-100 transition-colors duration-300 ease-in-out"
    >
      {isDark ? '☀' : '🌙'}
    </button>
  );
}

export default DarkModeToggle;