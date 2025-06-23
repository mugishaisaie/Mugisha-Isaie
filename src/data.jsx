import React from 'react';

import { nanoid } from 'nanoid';
import IsaieHotelImg from './assets/images/isaie_Hotel.png';
import MyPizzasShopImg from './assets/images/pizza-app-img.png';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaGitAlt, FaGithub, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiSupabase, SiMysql, SiReactquery } from 'react-icons/si';
export const links = [
  
  { id: nanoid(), to: 'about', text: 'about' },
  { id: nanoid(), to: 'skills', text: 'skills' },
  { id: nanoid(), to: 'projects', text: 'projects' },
  { id: nanoid(), to: 'Contact', text: 'Contact' },
];


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
