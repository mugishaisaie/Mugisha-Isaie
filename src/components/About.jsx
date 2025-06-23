import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/Misaie.png'
const About = () => {
  return (
    <motion.section 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className=" w-full h-auto md:flex gap-4 bg-stone-100  dark:bg-stone-800 text-stone-700 dark:text-stone-100 px-6 py-8 ">
      <div>
        <img src={aboutImg} alt='Isaie Mugisha' className='h-auto w-auto rounded-full' />
      </div>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 border-b-4 border-blue-500 inline-block">
          About Me
        </h2>

        <p className="text-lg leading-relaxed mb-6">
        Hi Dear . ✨ I'm Mugisha Isaie — <strong>Web Developer & Instructor</strong> from Rwanda
Based in Rwanda, I’m a passionate web developer and instructor dedicated to creating engaging, responsive, and user-friendly web applications. I spend most of my time building projects with HTML, CSS, JavaScript, and diving deep into powerful tools like React, Tailwind CSS, and other modern frameworks.
 <br /> <br />
What drives me is the joy of solving real-world problems through code and the constant opportunity to learn something new in this fast-evolving tech world.

But I’m not just a developer — I’m also a teacher at heart. Through my content on YouTube and other platforms, I help aspiring developers—especially in Africa—learn practical coding skills that open doors to global opportunities.
<br /><br /> I focus on real projects, not just theory, because I believe hands-on experience is the best way to learn.

When I’m not coding or teaching, I’m exploring new technologies, improving my skills, and working on building a stronger tech community here in Rwanda..
        </p>

        <p className="text-lg leading-relaxed mb-6">
          I’ve built real-world projects such as <span className="font-medium text-blue-600 dark:text-blue-400">ISAIE-HOTEL</span> and <span className="font-medium text-blue-600 dark:text-blue-400">MY-PIZZAS_SHOP</span>, which demonstrate my skills in modern frontend frameworks and API integration. I'm passionate about writing clean, maintainable code and continuously learning new technologies to enhance user experiences.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          I thrive in collaborative environments and have strong experience using <strong>Git & GitHub</strong> for version control and team projects. I’m eager to contribute to forward-thinking teams and help build impactful, real-world frontend engineering solutions.
        </p>

        <div className="mt-8">
          <a
            href="https://github.com/mugishaisaie"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-base hover:bg-blue-700 transition-all duration-300"
          >
            View My GitHub
          </a>
        </div>
      </div>
      
    </motion.section>
  );
};

export default About;
