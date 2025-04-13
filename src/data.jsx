import React from 'react';

import { nanoid } from 'nanoid';
import IsaieHotelImg from './assets/images/isaie-hotel.png';
import MyPizzasShopImg from './assets/images/my-pizzas-shop.png';
import WorldWiseImg from './assets/images/worldwise-ap.png';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaGitAlt, FaGithub, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiSupabase, SiMysql, SiReactquery } from 'react-icons/si';
export const links = [
  { id: nanoid(), to: '/', text: 'home' },
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
  {
    title: "WorldWise Web App",
    description: "A travel companion app to track your visited places on a map and store travel notes.",
    tech: ["React.js", "Context API", "React Router", "Leaflet"],
    features: [
      "Interactive map with location markers",
      "Add/edit/delete visited places",
      "State management with Context API"
    ],
    live: "https://worldwise-app.vercel.app",
    github: "https://github.com/mugishaisaie/worldwise",
    image: WorldWiseImg,
  }
];

export const techSkills = [
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
  { name: 'NODE JS', icon: <FaNodeJs className="text-indigo-600" />, level: 'Intermediate' },
  { name: 'PYTHON', icon: <FaPython className="text-blue-500" />, level: 'Intermediate' },
  { name: 'Git', icon: <FaGitAlt className="text-red-600" />, level: 'Advanced' },
  { name: 'GitHub', icon: <FaGithub className="text-gray-800 dark:text-white" />, level: 'Advanced' },
];
