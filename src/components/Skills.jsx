import React from 'react';
import { motion } from 'framer-motion';
import { techSkills } from '../data';
import { FaCheckCircle } from "react-icons/fa"; // Requires react-icons

// We move soft skills to a constant here, or better yet, to data.js
const softSkills = [
  'Problem Solving', 
  'Team Collaboration', 
  'Adaptability', 
  'Communication', 
  'Time Management', 
  'Continuous Learning'
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <section className="py-24 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Technical Expertise
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-stone-600 dark:text-stone-400 max-w-3xl mx-auto leading-relaxed"
          >
            I combine creativity with logic to build robust full-stack applications. 
            Here are the tools and technologies I use to bring ideas to life.
          </motion.p>
        </div>

        {/* TECH SKILLS GRID */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden" 
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {techSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, borderColor: "#3b82f6" }} // Hover turns border blue
              className="flex flex-col items-center justify-center p-6 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              {/* Icon Container with colored hover effect */}
              <div className="text-5xl mb-4 text-stone-600 dark:text-stone-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {skill.icon}
              </div>
              
              <h4 className="font-semibold text-stone-700 dark:text-stone-200 group-hover:text-stone-900 dark:group-hover:text-white transition-colors">
                {skill.name}
              </h4>
            </motion.div>
          ))}
        </motion.div>

        {/* SOFT SKILLS SECTION */}
        <div className="bg-stone-100 dark:bg-stone-900 rounded-3xl p-8 md:p-12 text-center shadow-inner">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8"
          >
            Professional Capabilities
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.8 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-white dark:bg-stone-800 px-6 py-3 rounded-full shadow-sm border border-stone-200 dark:border-stone-700"
              >
                <FaCheckCircle className="text-green-500 text-lg" />
                <span className="font-medium text-stone-700 dark:text-stone-300">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;