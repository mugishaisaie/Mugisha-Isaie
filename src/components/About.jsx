import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaDownload, FaCode } from "react-icons/fa6";
import aboutImg from '../assets/images/mugisha Isaie.jpg'

// --- TEMPLATE DATA ---
// Move this to data.js in a real app, but kept here for easy editing
const aboutData = {
  image: aboutImg, // Vertical portrait works best
  bio: [
    "Hello! I'm a passionate Full-Stack Web Developer and Instructor based in Rwanda. I don't just write code; I build digital solutions that solve real-world problems. My journey started with a curiosity for how things work, and it has evolved into a career of building high-performance web applications.",
    "I specialize in the MERN stack (MongoDB, Express, React, Node.js). Whether it's creating a seamless e-commerce experience or a complex management dashboard, I focus on clean architecture and user-centric design.",
    "Beyond coding, I am deeply committed to education. I create content to help aspiring developers across Africa master modern technology, believing that knowledge is the key to unlocking global opportunities."
  ],
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Students Mentored", value: "1000+" },
  ],
  education: [
    {
      year: "2025 - Present",
      degree: "Bachelor's in Information Technology",
      school: "IPRC Tumba College",
      desc: "Focusing on Software Engineering, Data Structures, and System Analysis."
    },
    {
      year: "2023",
      degree: "Full Stack Web Development Bootcamp",
      school: "Online Certification / Self-Taught",
      desc: "Intensive training in Javascript, Tailwind CSS, React, Node.js, and Modern UI/UX principles."
    },
    {
      year: "2021 - 2024",
      degree: "Software Development Diploma",
      school: "Ecole Secondaire Technique Gisenyi (ESTG)",
      desc: "Focused on Programming, Web Development, Databases, and Computer Systems, Built multiple school-based projects and participated in coding club activities"
    }
  ]
};

const About = () => {
  return (
    <section className="py-24 bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* LEFT COLUMN: Image & Stats */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main Image with decorative border */}
          <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-white dark:border-stone-800 shadow-2xl">
            <img 
              src={aboutData.image} 
              alt="Profile" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" 
            />
          </div>

          {/* Decorative Background Element */}
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-stone-300 dark:border-stone-700 rounded-2xl z-0"></div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {aboutData.stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white dark:bg-stone-800 rounded-xl shadow-md border border-stone-100 dark:border-stone-700">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</h3>
                <p className="text-xs text-stone-500 uppercase tracking-wide mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Bio & Education */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mb-8">
            <h2 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
              About Me
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Building Digital Experiences with Passion & Purpose
            </h3>
            
            <div className="space-y-4 text-stone-600 dark:text-stone-300 leading-relaxed text-lg">
              {aboutData.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Resume Download Button */}
          <div className="mb-12">
            <a 
              href="/Mugisha_Isaie_Web_Developer_Resume.pdf" // Ensure you have a file in your public folder!
              download ="/Mugisha_Isaie_Web_Developer_Resume.pdf"
              className="inline-flex items-center gap-2 bg-stone-900 dark:bg-white text-white dark:text-stone-900 px-8 py-3 rounded-full font-bold hover:bg-stone-700 dark:hover:bg-stone-200 transition-colors shadow-lg"
            >
              <FaDownload /> Download Resume
            </a>
          </div>

          {/* Education Timeline */}
          <div>
            <h4 className="flex items-center gap-2 text-2xl font-bold mb-6 border-b border-stone-200 dark:border-stone-700 pb-2">
              <FaGraduationCap className="text-blue-600" /> Education & Certifications
            </h4>
            
            <div className="space-y-8 border-l-2 border-stone-200 dark:border-stone-700 ml-3 pl-8 relative">
              {aboutData.education.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[41px] top-1 w-5 h-5 bg-blue-600 rounded-full border-4 border-white dark:border-stone-900"></span>
                  
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 block mb-1">
                    {edu.year}
                  </span>
                  <h5 className="text-xl font-bold text-stone-900 dark:text-white">
                    {edu.degree}
                  </h5>
                  <p className="text-stone-500 font-medium mb-2">{edu.school}</p>
                  <p className="text-sm text-stone-600 dark:text-stone-400">
                    {edu.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;