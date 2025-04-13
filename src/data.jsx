import { nanoid } from 'nanoid';
import IsaieHotelImg from './assets/images/isaie-hotel.png';
import MyPizzasShopImg from './assets/images/my-pizzas-shop.png';
import WorldWiseImg from './assets/images/worldwise-ap.png';
export const links = [
  { id: nanoid(), to: 'about', text: 'about' },
  { id: nanoid(), to: 'skills', text: 'skills' },
  { id: nanoid(), to: 'projects', text: 'projects' },
  { id: nanoid(), to: 'article', text: 'article' },
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