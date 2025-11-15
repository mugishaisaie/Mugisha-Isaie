
import { Link } from "react-router-dom";
// import homeImg from '../assets/images'
import homeImg from '../assets/images/Isaie_blessing.jpg'
// import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";
import Services from "./services";
import Testimonials from "./testimonials";

export default function HomePage() {
  return (
    <>
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }} 
    
    className="min-h-full bg-white dark:bg-stone-800 text-stone-800 dark:text-white px-6 md:px-10 py-10">
      
      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* LEFT SIDE TEXT */}
        <div className="flex-1 space-y-6">
          <motion.h1 className="text-4xl md:text-6xl font-bold leading-tight"
          initial={{opacity:0,y: -30}}
          animate={{opacity:1,y:0}}
          transition={{duration:1,ease:"easeInOut"}}>
            Hi, I'm Mugisha Isaie  Full-Stack Web Developer | Instructor | Mentor
          </motion.h1>
          <motion.p 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:1,ease:"easeInOut",delay:0.3}}
             
          className="text-lg md:text-xl text-stone-600 dark:text-stone-300">
          Hey I'm  a Full-Stack Web Developer and Instructor focused on building modern, high-performance web applications and teaching a modern web development in a clear, practical way. I specialize in React, JavaScript, Node.js, and Tailwind CSS, with a strong emphasis on clean architecture, real-world logic, and problem-solving.

I’m committed to helping beginners — especially in Rwanda and across Africa — understand programming deeply, not by memorizing code, but by learning how to think like developers. My teaching style is simple, structured, and highly appreciated by students.

My mission is to help people build skills, create opportunities, and grow in the digital world — from building their first website to starting a tech career.
          </motion.p>
         
        </div>

        
        <div className="flex-1 border-5 ">
          <img
          
            src={homeImg} 
            alt="Mugisha Isaie"
            className=" px-4 w-md h-100 rounded-full shadow-lg border-4 border-white-900 "
          />
{/* Follow me section */}
            <div
          
          
           className="flex  gap-2 text-center mt-4 justify-center sm:flex-row sm:gap-2">
            <p className="font-medium sm: text-sm">Follow me here</p> 
          <Link to="https://github.com/mugishaisaie"><FaGithub className="text-2xl rounded-lg"/></Link> 
         <Link to="https://www.linkedin.com/in/mugisha-isaie/"><FaLinkedin className="text-2xl bg-blue-800 text-stone-50 p-1 rounded-lg"/></Link>
         <Link to="https://www.youtube.com/@MITECH_Rwanda"><FaYoutube className="text-2xl bg-red-600 text-stone-50 p-1 rounded-lg"/></Link> 
          
           </div> 
        </div>
      </section>
    </motion.div>
    
    <Services />
    <Testimonials />

</>
  );
}
