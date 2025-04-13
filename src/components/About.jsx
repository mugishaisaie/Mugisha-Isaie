import React from 'react';
import aboutImg from '../assets/Misaie.png'
const About = () => {
  return (
    <section className=" w-full h-auto md:flex gap-4 bg-stone-100  dark:bg-stone-800 text-stone-700 dark:text-stone-100 px-6  ">
      <div>
        <img src={aboutImg} alt='Isaie Mugisha' className='h-auto w-auto rounded-full' />
      </div>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 border-b-4 border-blue-500 inline-block">
          About Me
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          I'm a <strong>Mugisha Isaie </strong> <span className="font-semibold text-blue-600 dark:text-blue-400">Creative and detail-oriented Front End Engineer / JavaScript Developer</span> with solid hands-on experience in building responsive Single Page Applications (SPA) and user-friendly web applications using <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong>, <strong>React.js</strong>, <strong>React Query</strong>, <strong>Redux</strong>, <strong>Supabase</strong>, <strong>SQL</strong>, <strong>PHP</strong>, and <strong>Tailwind CSS</strong>.
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
      
    </section>
  );
};

export default About;
