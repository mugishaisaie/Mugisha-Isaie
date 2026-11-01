import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ScrollToTopOnNavigation() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 transition-colors antialiased selection:bg-blue-600 selection:text-white">
      {/* Skip to Content for Screen Readers & Keyboard Nav */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-lg focus:outline-none"
      >
        Skip to content
      </a>

      <ScrollToTopOnNavigation />
      
      {/* Persistent Sticky Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 w-full flex flex-col">
        <Outlet />
      </main>

      {/* Persistent Footer */}
      <Footer />

      {/* Global Toast Notifications */}
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
