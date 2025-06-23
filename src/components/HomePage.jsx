
import { Link } from "react-router-dom";
import homeImg from '../assets/isaie.png'
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";

export default function HomePage() {
  return (
    <>
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }} 
    
    className="min-h-full bg-white dark:bg-stone-800 text-stone-800 dark:text-white px-6 md:px-10 py-10 mb-20">
      
      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* LEFT SIDE TEXT */}
        <div className="flex-1 space-y-6">
          <motion.h1 className="text-4xl md:text-6xl font-bold leading-tight"
          initial={{opacity:0,y: -30}}
          animate={{opacity:1,y:0}}
          transition={{duration:1,ease:"easeInOut"}}>
            Hi, I'm Mugisha Isaie 
          </motion.h1>
          <motion.p 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:1,ease:"easeInOut",delay:0.3}}
             
          className="text-lg md:text-xl text-stone-600 dark:text-stone-300">
            I’m a passionate Rwandan <span className="font-semibold text-blue-500 text-2xl">Web Developer and Instructor </span> who loves learning and building responsive, user-friendly applications. I specialize in   <strong>JavaScript and its frameworks like React </strong>, along with modern <strong>CSS tools such as Tailwind.</strong>, I enjoy creating projects that solve real problems and make a positive impact in my community
          </motion.p>
          <div
          
          
           className="flex flex-col gap-4 text-center justify-center sm:flex-row sm:gap-6">
            <p>Follow me here</p>
         <Link to="https://github.com/mugishaisaie"><FaGithub className="text-2xl rounded-lg"/></Link>
         <Link to="https://www.linkedin.com/in/mugisha-isaie/"><FaLinkedin className="text-2xl bg-blue-800 text-stone-50 p-1 rounded-lg"/></Link>
         <Link to="https://www.youtube.com/@mugishaisaie1"><FaYoutube className="text-2xl bg-red-600 text-stone-50 p-1 rounded-lg"/></Link>
          
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex-1">
          <img
          
            src={homeImg} 
            alt="Mugisha Isaie"
            className="w-full h-100 rounded-full shadow-lg"
          />
        </div>
      </section>
    <div>
      <h2>My Latest Blogs</h2>
    </div>
    </motion.div>

</>
  );
}
