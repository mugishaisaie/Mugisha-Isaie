import React from 'react';

import { nanoid } from 'nanoid';
import IsaieHotelImg from './assets/project-images/isaie_Hotel.png';
import MyPizzasShopImg from './assets/project-images/pizza-app-img.png';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaGitAlt, FaGithub, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiSupabase, SiMysql, SiReactquery } from 'react-icons/si';



// services images
import webdeveloper from '../src/assets/images/Full-Stack Web & App Development.png'
import webdevInstructor from '../src/assets/images/Web & App Development Instructor.jpg'
import webMentor from '../src/assets/images/Mentorship & Tech Consulting.png'
export const links = [
  
  { id: nanoid(), to: 'about', text: 'about' },
  { id: nanoid(), to: 'skills', text: 'skills' },
  { id: nanoid(), to: 'projects', text: 'projects' },
  { id: nanoid(), to: 'Contact', text: 'Contact' },
  { id: nanoid(), to: 'blogs', text: 'Blogs' },
];



export const   services = [
  {
    id: 1,
    title: "Web & App Development",
    image: webdeveloper,
    description:
      "I build modern, fast, and responsive web applications using React, Tailwind, Node.js, and cloud technologies. My focus is clean code, performance, and real problem solving.",
    cta: "See Projects"
  },

  {
    id: 2,
    title: "Web Development Instructor",
    image: webdevInstructor,
    description:
      "I teach HTML, CSS, JavaScript, and modern frameworks with a clear step-by-step approach that helps beginners understand not just code — but real programming logic. that helps in real world solving problems",
    cta: "Start Learning"
  },

  {
    id: 3,
    title: "Mentorship & Tech Consulting",
    image: webMentor,
    description:
      "I guide new developers in building strong web development Skills, choosing the right learning paths, and How to Learn Perfect and Get Job(How to be SUccessful in web development) ",
    cta: "Book a Session"
  },
];


export const testimonials = [
  {
    id:1,
    image:"",
    name: "Patric",
    message:"Mugisha, the way you explain coding makes everything simple!",
  },
  
  {
    id:2,
    image:"",
    name: "Light Roger",
    message:"Mugisha, the way you explain coding makes everything simple!",
  },
  {
    id:1,
    image:"",
    name: "Obalde Ishimwe",
    message:"Your videos changed my confidence as a beginner."
  },
  {
    id:1,
    image:"",
    name: "Empunga Mwangi",
    message:"I finally understood JavaScript because of your teaching style."
  },
  {
    id:1,
    image:"",
    name: "Irakoze From Youtube" ,
    message:"Thank you for helping me build my first real website!"
  },
  {
    id:1,
    image:"",
    name: "Vumbura Student" ,
    message:"Your guidance showed me how to start making money with my skills."
  },
  {
    id:1,
    image:"",
    name: "AbduNour " ,
    message:"Ewana boy komereza aho ngaho kabisa nanjye nk'umuntu wize computer science ibi ni ibintu uvuga nkabyumva gatanu kandi kandi ukomeje kumfasha man💯💯💯💯💯💯"
  },
  {
    id:1,
    image:"",
    name: "Nelson Jude" ,
    message:"I love how you teach step-by-step; you make coding feel possible."},
  {
    id:1,
    image:"",
    name: "ElSodja" ,
    message:" Thanks For Your Training Sir! 🙏, Ni Ibyagaciro Kukugira Kbs"
  },

  
]

export const projects = [
  {
    title: "ISAIE-HOTEL",
    description: "A hotel booking app that allows users to browse and book available cabins with custom check-in and check-out dates.",
    tech: ["React.js", "Styled-components", "React Router"],
    features: [
      "Browse cabins with prices and amenities",
      "Filter and sort bookings",
      "Interactive date selection and booking flow"
    ],
    live: "https://isaie-hotel.vercel.app",
    github: "https://github.com/mugishaisaie/isaie-hotel",
    image: IsaieHotelImg,
  },
  {
    title: "MY-PIZZAS_SHOP",
    description: "An online pizza ordering app with real-time updates and cart management functionality.",
    tech: ["React.js", "CSS3", "React Router"],
    features: [
      "Add/remove pizzas to cart",
      "Real-time order preview",
      "Smooth UI interactions and animations"
    ],
    live: "https://my-pizzas-shop.vercel.app",
    github: "https://github.com/mugishaisaie/my-pizzas-shop",
    image: MyPizzasShopImg,
  },
  
];

export const techSkills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" />,  },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" />,  },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-500" />,  },
  { name: 'React.js', icon: <FaReact className="text-cyan-400" />, },
  { name: 'React Query', icon: <SiReactquery className="text-pink-500" />, },
  { name: 'Redux', icon: <SiRedux className="text-purple-500" />, },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" />, },
  { name: 'Git', icon: <FaGitAlt className="text-red-600" />, },
  { name: 'GitHub', icon: <FaGithub className="text-gray-800 dark:text-white" />, },
  { name: 'Supabase', icon: <SiSupabase className="text-green-600" />,  },
  { name: 'NODE JS', icon: <FaNodeJs className="text-indigo-600" />, },
];
