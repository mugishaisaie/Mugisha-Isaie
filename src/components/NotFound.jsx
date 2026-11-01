import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-28 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100">
      <div className="max-w-md mx-auto space-y-6">
        <span className="text-6xl font-black text-blue-600 dark:text-blue-400">404</span>
        <h1 className="text-3xl font-extrabold tracking-tight">Page Not Found</h1>
        <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
          The requested page does not exist or has been relocated. Return to the developer portfolio overview below.
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all"
          >
            <FaArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
