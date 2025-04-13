import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiSupabase, SiMysql, SiReactquery } from 'react-icons/si';

const techSkills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" />, level: 'Expert' },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" />, level: 'Expert' },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-500" />, level: 'Advanced' },
  { name: 'React.js', icon: <FaReact className="text-cyan-400" />, level: 'Advanced' },
  { name: 'React Query', icon: <SiReactquery className="text-pink-500" />, level: 'Advanced' },
  { name: 'Redux', icon: <SiRedux className="text-purple-500" />, level: 'Advanced' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" />, level: 'Advanced' },
  { name: 'Supabase', icon: <SiSupabase className="text-green-600" />, level: 'Advanced' },
  { name: 'PHP', icon: <FaPhp className="text-indigo-600" />, level: 'Advanced' },
  { name: 'MySQL', icon: <SiMysql className="text-blue-500" />, level: 'Advanced' },
  { name: 'Git', icon: <FaGitAlt className="text-red-600" />, level: 'Advanced' },
  { name: 'GitHub', icon: <FaGithub className="text-gray-800 dark:text-white" />, level: 'Advanced' },
];

const softSkills = ['Problem Solving', 'Teamwork & Collaboration', 'Adaptability', 'Communication', 'Time Management', 'Continuous Learning'];

const Skills = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-stone-900 px-6 md:px-20 py-16 text-stone-800 dark:text-stone-100">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6 border-b-4 border-blue-500 inline-block"
        >
          My Skills
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.3 }}
          className="text-lg mb-10 max-w-3xl mx-auto"
        >
          As a creative and detail-oriented Front End Engineer, I use the latest technologies to build responsive and user-friendly web applications.
        </motion.p>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-16"
          initial="hidden" 
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {techSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center gap-2 p-4 shadow-md rounded-xl bg-stone-100 dark:bg-stone-800 hover:scale-105 transition-transform duration-300"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            >
              <div className="text-4xl">{skill.icon}</div>
              <p className="font-medium ">{skill.name}</p>
              <p className="text-sm text-stone-100 bg-blue-600 py-1 px-2 rounded-full dark:text-stone-100">{skill.level}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
            {softSkills.map((skill, idx) => (
              <motion.li 
                key={idx} 
                initial={{ opacity: 0, x: -20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ delay: idx * 0.1 }}
                className="bg-stone-200 dark:bg-stone-700 px-4 py-2 rounded"
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
