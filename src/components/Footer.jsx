
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-200 py-4 mt-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold">Mugisha Isaie</h2>
          <p className="text-sm text-stone-500 dark:text-stone-400">
            Full Stack Web developer and Instructor | Passionate about building real-world apps
          </p>
        </div>

        {/* Right Side - Social Links */}
        <div className="flex items-center space-x-6 text-xl">
          <a href="https://github.com/mugishaisaie" target="_blank" rel="noreferrer" className="hover:text-blue-600">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mugisha-isaie" target="_blank" rel="noreferrer" className="hover:text-blue-600">
            <FaLinkedin />
          </a>
          <a href="mailto:mugishaisaieog1@gmail.com" className="hover:text-blue-600">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center text-sm mt-6 text-stone-500 dark:text-stone-500">
        © {new Date().getFullYear()} Mugisha Isaie Fullstack Developer and Instructor. All rights reserved.
      </div>
    </footer>
  );
}
