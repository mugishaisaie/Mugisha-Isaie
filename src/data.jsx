import { nanoid } from 'nanoid';
import { FaBootstrap, FaHtml5, FaJs, FaPhp, FaReact } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa6';
import amazonImg from './assets/images/amazon-project.png'
import socialbookImg from './assets/images/social_book_clone.png'
import rockPaperScisImg from './assets/images/rock-paper-scissor.png'
import reviewImg from './assets/images/reviews.png'
import WorldWiseImg from './assets/images/world-wise-app.png'
import toursImg from './assets/images/tours.png'
import imagesSplashImg from './assets/images/unsplash images.png'
import questionImg from './assets/images/questions.png'
export const links = [
  { id: nanoid(), to: 'about', text: 'about' },
  { id: nanoid(), to: 'skills', text: 'skills' },
  { id: nanoid(), to: 'projects', text: 'projects' },
  { id: nanoid(), to: 'Experience', text: 'Experience' },
  { id: nanoid(), to: 'article', text: 'article' },
  { id: nanoid(), to: 'Contact', text: 'Contact' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML5',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-900' />,
    text: 'Mastering the backbone of web development, I use HTML5 to create well-structured, semantic, and accessible web pages. With expertise in implementing modern features like audio, video, and responsive design elements, I ensure every web project is both user-friendly and visually engaging. HTML5 serves as the foundation of my web development journey.',
  },
  {
    id: nanoid(),
    title: 'CSS3 & Tailwind',
    icon: <FaCss3 className='h-16 w-16 text-emerald-900 items-center text-center' />,
    text: `With CSS3 and Tailwind CSS Framework I'm Proficient in crafting responsive layouts, animations, and visually appealing designs , Expertise in Flexbox, Grid, and media queries to ensure cross-device compatibility. Skilled in optimizing styles for performance and maintainability and also Experienced in building modern, responsive and Amazingly UIs with Tailwind CSS. `,
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-900' />,
    text: `'I am proficient in JavaScript, the core language for interactive and dynamic web development. My expertise includes:
 Mastery of ES6+ features such as arrow functions, destructuring, promises, and modules.
DOM Manipulation: Building responsive, interactive user interfaces by dynamically updating and controlling HTML and CSS elements.
APIs & Asynchronous Programming: Integrating RESTful APIs, handling data fetch requests, and ensuring smooth user experiences with async/await and event-driven programming.`,
  },
  {
    id: nanoid(),
    title: 'React JS',
    icon: <FaReact className='h-16 w-16 text-emerald-900' />,
    text: `As a frontend developer, I have hands-on experience with React.js, which I use to build dynamic and interactive web applications. With React, I am proficient in creating reusable components, managing state efficiently with React hooks (such as useState, useEffect, and useContext), and handling routing with React Router for seamless navigation.

I am familiar with best practices like component-based architecture, functional components, and hooks. I have also worked with state management libraries like Redux and Context API to ensure smooth data flow across complex applications.`,
  },
  {
    id: nanoid(),
    title: 'Bootstrap',
    icon: <FaBootstrap className='h-16 w-16 text-emerald-900' />,
    text: `I have hands-on experience using Bootstrap, a powerful and popular front-end framework for building responsive, mobile-first websites. With Bootstrap, I can quickly design and customize layouts, components, and utilities, ensuring that websites look great on all devices.
With Bootstrap, I can quickly prototype and build fully responsive, visually appealing websites, boosting productivity and ensuring high-quality results.

`,
  },
  {
    id: nanoid(),
    title: 'PHP and MYSQL ',
    icon: <FaPhp className='h-16 w-16 text-emerald-900' />,
    text: `
    As a web developer with experience in PHP, I have developed a strong foundation in creating dynamic and interactive web applications. I am proficient in writing clean, maintainable, and efficient PHP code. My skills include:

Server-Side Scripting: Creating powerful back-end logic to handle user requests, interact with databases, and generate dynamic content.
Database Integration with in working with MySQL and other relational databases to create data-driven applications
Form Handling & Data Validation and Performing Create,Read,Update and Delete Data using PHP code
    `,
  },
  
  
];

export const projects = [
  {
    id: nanoid(),
    title: 'Social Book Clone',
    image: socialbookImg,
    url: 'https://isaie-social-book.netlify.app',
    github: 'https://github.com/mugishaisaie/socialbook',
    text: `Check out this Socialbook clone I've built! It’s a fully functional social media platform inspired by Facebook, complete with user authentication, posting, and real-time updates. I’d love to hear your thoughts and feedback on how I can improve it.`,
  },
  {
    id: nanoid(),
    title: 'Amazon Web Clone',
    image: amazonImg,
    url: 'https://isaie-review.netlify.app/',
    github: 'https://amazon-website-project.vercel.app/',
    text: 'I recently completed an Amazon clone project, where I recreated key features like product browsing, shopping cart, and checkout functionality. this help me to Improve Javascript Skills.',
  },
  {
    id: nanoid(),
    title: 'Rock-Paper-Scissor Game',
    image: rockPaperScisImg,
    url: 'https://isaie-rock-paper-scissor.netlify.app',
    github: 'https://github.com/mugishaisaie/Rock-Paper-and-Scissor-Game',
    text: `I recently created a clone of the classic Rock-Paper-Scissors game, where players can challenge the computer in a fun, interactive match." "This project helped me dive deeper into logic handling and user interface design, making it both functional and visually engaging." "The game is built with [mention the technologies used, e.g., HTML, CSS, and JavaScript], and it's a great example of how simple concepts can be turned into enjoyable web applications."`,
  },
  
  {
    id: nanoid(),
    title: 'tours App',
    image: toursImg,
    url: 'https://isaie-tour.netlify.app/',
    github: 'https://github.com/mugishaisaie/React-Tours-Project',
    text: `This React.js and CSS-powered application showcases a sleek and responsive interface for exploring various travel tours. The app dynamically fetches and displays tour details, including descriptions, images, and pricing. Users can interact with features like removing tours or reading more about each destination, ensuring an engaging and user-friendly experience. `,
  },
  {
    id: nanoid(),
    title: 'Unsplash images',
    image: imagesSplashImg,
    url: 'https://isaiesplash.netlify.app/',
    github: 'https://github.com/mugishaisaie/Unsplash-Images-React-Project',
    text: `This project is a visually appealing and fully functional clone of Unsplash
Dynamic Image Fetching Powered by React Query, ensuring seamless and efficient data fetching and caching.
Router Integration Enables smooth navigation between pages, enhancing user experience.
Responsive Design,
Search Functionality,
, Mimics the original Unsplash interface for familiarity`,
  },
  {
    id: nanoid(),
    title: 'WorldWise Web App',
    image: WorldWiseImg,
    url: 'https://isaie-world-wide.netlify.app',
    github: 'https://github.com/mugishaisaie/WorldWise-Application',
    text: `The WorldWise Web App is an interactive platform designed to provide users with real-time global insights and data. Built with React.js and styled using CSS Modules,The app demonstrates proficiency in handling data-driven applications, creating reusable components, and implementing advanced React concepts like state management and routing. It's a showcase of both technical expertise and an eye for user-centric design.`,
  },  
 
  
];
