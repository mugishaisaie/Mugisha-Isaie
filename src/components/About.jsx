import React from "react";
import { motion } from "framer-motion";
import AboutImg from '../assets/images/Isaie_blessing.jpg'
import { 
  FaGraduationCap, 
  FaDownload, 
  FaRocket, 
  FaCode, 
  FaLaptopCode 
} from "react-icons/fa6";
import { 
  SiMongodb, 
  SiExpress, 
  SiReact, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiTypescript,
  SiPhp,
  SiMysql
} from "react-icons/si";

// --- STRATEGIC DATA ---
const aboutData = {
  image: AboutImg,
  headline: "Turning Complex Problems into Simple Digital Solutions.",
  subHeadline: "Full-Stack Developer | Instructor | Tech Mentor",
  bio: [
    "I am Mugisha Isaie, a developer who bridges the gap between 'learning code' and 'building products'. Based in Rwanda, I specialize in the MERN stack and modern web technologies.",
    "My philosophy is simple: Technology is a tool to solve human problems. Whether I'm teaching a student how to center a div or building a scalable backend for a client, I focus on clarity, performance, and impact.",
    "Currently finishing my degree at IPRC Tumba, I combine academic rigor with real-world agility. I don't just write code; I engineer solutions."
  ],
  stats: [
    { label: "Students Taught", value: "1000+", icon: <FaLaptopCode /> },
    { label: "Projects Shipped", value: "100+", icon: <FaCode /> },
    { label: "Years Coding", value: "4+", icon: <FaRocket /> },
  ],
  techStack: [
    { icon: <SiMongodb size={24} />, name: "MongoDB", color: "text-green-500" },
    { icon: <SiExpress size={24} />, name: "Express", color: "text-gray-500" },
    { icon: <SiReact size={24} />, name: "React", color: "text-blue-400" },
    { icon: <SiNodedotjs size={24} />, name: "Node.js", color: "text-green-600" },
    { icon: <SiTailwindcss size={24} />, name: "Tailwind", color: "text-teal-400" },
    { icon: <SiTypescript size={24} />, name: "TypeScript", color: "text-blue-600" },
  ],
  education: [
    {
      year: "20204 - Present",
      role: "Bachelor's in IT",
      institution: "IPRC Tumba",
      description: "specializing in Software Engineering, DevOps, Machine Learning & System Analysis."
    },
    {
      year: "2021 - 2024",
      role: "Diploma in Software Development",
      institution: "Ecole Secondaire Technique Gisenyi (ESTG)",
      description: "Focused on Programming, Web Development, Databases, and Computer Systems, Built multiple school-based projects and participated in coding club activities"
    },
    {
      year: "2022 - Present",
      role: "Certified Full Stack Web Developer",
      institution: "Online Certification / Self-Taught",
      description: "Intensive training in Javascript, Tailwind CSS, React, Node.js, and Modern UI/UX principles."
    },
    {
      year: "2023",
      role: "Full-Stack Web Development",
      institution: "N@TCOM Company, Rwanda /Internship",
      description: "Learned HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL Built foundational web projects in a collaborative learning environment"
    }
  ]
};

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

const About = () => {
  return (
    <section className="py-24 bg-stone-50 dark:bg-stone-950 text-stone-800 dark:text-stone-200 overflow-hidden relative">
      
      {/* Background Decorative Blob for depth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        {/* LEFT COLUMN: Visual Authority (Image + Stack) (Span 5) */}
        <motion.div 
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Image Container */}
          <div className="relative rounded-3xl overflow-hidden border-[6px] border-white dark:border-stone-800 shadow-2xl z-10">
            <img 
              src={aboutData.image} 
              alt="Mugisha Isaie" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 ease-out" 
            />
            
            {/* Overlay Gradient for Text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
            
            {/* Floating Badge (Glassmorphism) */}
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">Current Focus</p>
              <p className="font-bold text-lg">Building Problem SOlving  Digital Products </p>
            </div>
          </div>

          {/* Decorative Back Drop (Offset Box) */}
          <div className="absolute top-4 -left-4 w-full h-full border-2 border-stone-200 dark:border-stone-800 rounded-3xl -z-10"></div>

          {/* Tech Stack Grid - MOVED here for visual proximity to the developer */}
          <div className="mt-8">
            <h4 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-4 text-center lg:text-left">Tech Stack</h4>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {aboutData.techStack.map((tech, idx) => (
                <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-stone-900 rounded-lg shadow-sm border border-stone-100 dark:border-stone-800 text-sm font-medium hover:border-blue-500 transition-colors cursor-default">
                  <span className={tech.color}>{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>


        {/* RIGHT COLUMN: The Pitch (Span 7) */}
        <motion.div 
          className="lg:col-span-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
              <span className="w-8 h-[2px] bg-blue-600 dark:bg-blue-400"></span>
              About Me
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-stone-900 dark:text-white">
              {aboutData.headline}
            </h3>
            <p className="text-xl text-stone-500 dark:text-stone-400 font-medium">
              {aboutData.subHeadline}
            </p>
          </motion.div>

          {/* Bio Text */}
          <motion.div variants={itemVariants} className="space-y-4 text-stone-600 dark:text-stone-300 leading-relaxed text-lg mb-10">
            {aboutData.bio.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </motion.div>

          {/* Interactive Stats Row */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 mb-10">
            {aboutData.stats.map((stat, idx) => (
              <div key={idx} className="p-4 bg-white dark:bg-stone-900 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-800 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="flex justify-center text-blue-600 dark:text-blue-400 mb-2 text-2xl">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-stone-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-stone-500 uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Education & Action Area */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-8 md:items-start border-t border-stone-200 dark:border-stone-800 pt-8">
            
            {/* Timeline */}
            <div className="flex-1">
               <h4 className="flex items-center gap-2 text-lg font-bold mb-6 text-stone-900 dark:text-white">
                <FaGraduationCap className="text-blue-500" /> Education
              </h4>
              <div className="space-y-6">
                {aboutData.education.map((edu, idx) => (
                  <div key={idx} className="pl-4 border-l-2 border-stone-200 dark:border-stone-700 relative">
                    <span className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">{edu.year}</span>
                    <h5 className="font-bold text-stone-900 dark:text-stone-100">{edu.role}</h5>
                    <p className="text-sm text-stone-500">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4 min-w-[200px]">
              <a 
                href="/resume.pdf"
                className="group flex items-center justify-center gap-3 bg-stone-900 dark:bg-white text-white dark:text-stone-900 px-6 py-4 rounded-xl font-bold hover:bg-stone-800 dark:hover:bg-stone-200 transition-all shadow-lg hover:shadow-xl"
              >
                <FaDownload className="group-hover:translate-y-1 transition-transform" /> 
                Download CV
              </a>
              <button className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold border-2 border-stone-200 dark:border-stone-800 hover:border-blue-500 text-stone-600 dark:text-stone-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                View My Work!
              </button>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;