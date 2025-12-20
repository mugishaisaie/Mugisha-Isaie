import React from "react";
import { Link } from "react-router-dom"; // Keep for internal links (like to /contact)
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa6";
import Services from "./services";
import Testimonials from "./testimonials";
import HomeImg from '../assets/images/Isaie_blessing.jpg'

// --- TEMPLATE CONFIGURATION ---
// Ideally, this data would come from a separate data file, but for the template, 
// we keep it here so the user sees exactly where to edit.
const portfolioContent = {
  name: "Mugisha Isaie",
  title: "Full-Stack Web Developer | Content Creator| Instructor",
  bio: "I am a passionate developer focused on building modern, high-performance web applications. I specialize in React, Node.js, and clean architecture. My mission is to help businesses grow in the digital world through scalable and efficient code.",
  // Use a placeholder image or instruction on how to import their own
  imagePath: HomeImg, 
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    youtube: "https://youtube.com/",
  }
};

export default function HomePage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-screen flex flex-col justify-center bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 px-6 md:px-16 py-12"
      >
        {/* HERO SECTION */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto w-full">
          
          {/* LEFT SIDE: TEXT & CTA */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-xl text-stone-500 dark:text-stone-400 font-medium mb-2">
                Hello, I am
              </h2>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
                {portfolioContent.name}
              </h1>
              <h3 className="text-2xl md:text-3xl text-stone-600 dark:text-stone-300 font-semibold mt-2">
                {portfolioContent.title}
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
              className="text-lg md:text-xl text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl mx-auto md:mx-0"
            >
              {portfolioContent.bio}
            </motion.p>

            {/* CALL TO ACTION BUTTONS (Crucial for Business) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"
            >
              <Link to="/projects" className="px-8 py-3 bg-stone-800 dark:bg-white text-white dark:text-stone-900 font-bold rounded-full hover:scale-105 transition-transform shadow-lg">
                View My Work
              </Link>
              <Link to="/contact" className="px-8 py-3 border-2 border-stone-800 dark:border-white font-bold rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors">
                Contact Me
              </Link>
            </motion.div>

            {/* SOCIAL PROOF */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.8 }}
               className="flex gap-4 mt-8 justify-center md:justify-start items-center"
            >
              <span className="text-sm font-medium uppercase tracking-wider text-stone-500">Connect:</span>
              <div className="flex gap-3">
                <a href={portfolioContent.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-stone-100 dark:bg-stone-800 rounded-lg hover:text-blue-600 transition-colors">
                  <FaGithub className="text-2xl" />
                </a>
                <a href={portfolioContent.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-stone-100 dark:bg-stone-800 rounded-lg hover:text-blue-700 transition-colors">
                  <FaLinkedin className="text-2xl" />
                </a>
                <a href={portfolioContent.socials.youtube} target="_blank" rel="noopener noreferrer" className="p-2 bg-stone-100 dark:bg-stone-800 rounded-lg hover:text-red-600 transition-colors">
                  <FaYoutube className="text-2xl" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: IMAGE */}
          <div className="flex-1 flex justify-center md:justify-end relative">
             {/* Decorative blob behind image */}
            <div className="absolute top-0 right-10 w-72 h-72 bg-blue-200 dark:bg-stone-700 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
            
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src={portfolioContent.imagePath}
              alt={portfolioContent.name}
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 border-4 border-white dark:border-stone-800"
            />
          </div>
        </section>
      </motion.div>

      <Services />
      <Testimonials />
    </>
  );
}