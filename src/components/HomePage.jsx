
import { Link } from "react-router-dom";
import homeImg from '../assets/coding.jpg'
import React from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-full bg-white dark:bg-stone-800 text-stone-800 dark:text-white px-6 md:px-10 py-10">
      
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
            A passionate <span className="font-semibold text-blue-500">Frontend Developer</span> building responsive, accessible, and real-world web applications using React, JavaScript, and Tailwind CSS.
          </motion.p>
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}
          variants={{visible:{
            transition:{staggerChildren:0.1}
          }}}
          
           className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Link to="/projects">
              <motion.button variants={{hidden:{
            opacity:0,
            y:30
          },
          visible:{
            opacity:1,y:0
          }
        }}className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                View Projects
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button variants={{hidden:{
            opacity:0,
            y:30
          },
          visible:{
            opacity:1,y:0
          }
        }} className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition">
                Contact Me
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex-1">
          <motion.img
          initial={{opacity:0,y:50,scale:0,}}
          animate={{opacity:1,y:0,scale:1,}}
          transition={{duration:1.3,ease:"easeInOut"}}
            src={homeImg} 
            alt="Mugisha Isaie"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}
