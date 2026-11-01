import IsaieHotelImg from './assets/project-images/isaie_Hotel.png';
import MyPizzasShopImg from './assets/project-images/pizza-app-img.png';
import WorldWiseImg from './assets/project-images/world-wise-app.png';

// Tech Icons from react-icons/fa6 and react-icons/si
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaPhp, 
  FaPython, 
  FaGithub, 
  FaWordpress,
  FaNetworkWired,
  FaServer,
  FaShieldHalved,
  FaRoute,
  FaLaptopCode,
  FaLayerGroup,
  FaWhatsapp,
  FaCartShopping
} from 'react-icons/fa6';

import { 
  SiTailwindcss, 
  SiRedux, 
  SiReactquery, 
  SiSupabase, 
  SiPostgresql, 
  SiMysql, 
  SiMongodb, 
  SiVite, 
  SiVercel, 
  SiStyledcomponents 
} from 'react-icons/si';

import { TbBrandVscode } from 'react-icons/tb';

export const personalInfo = {
  name: "Mugisha Isaie",
  title: "Full-Stack Web Developer",
  subTitle: "Building Modern Web Applications & Digital Business Solutions",
  location: "Kigali, Rwanda",
  email: "mugishaisaieog1@gmail.com",
  phone: "+250 790 025 794",
  phoneFormatted: "+250 790 025 794",
  whatsappUrl: "https://wa.me/250790025794",
  github: "https://github.com/mugishaisaie",
  linkedin: "https://linkedin.com/in/mugisha-isaie",
  agencyUrl: "https://mitechhubhq.com",
  agencyName: "MITECH HUB",
  resumeUrl: "/Mugisha_Isaie_Web_Developer_Resume.pdf",
  bio: "Results-driven Full-Stack Web Developer, Systems Architect, and IT student based in Kigali, Rwanda. With 4+ years of hands-on experience, I build high-performance Single Page Applications, commercial SaaS platforms, and reliable digital business systems. I pair modern frontend engineering (React, Tailwind CSS, TanStack Query) with solid backend and database architectures (Supabase, Node.js, PostgreSQL) and foundational computer networking competencies."
};

export const navLinks = [
  { id: 'home', to: '/', text: 'Home' },
  { id: 'projects', to: '/projects', text: 'Projects' },
  { id: 'skills', to: '/skills', text: 'Skills' },
  { id: 'experience', to: '/experience', text: 'Experience' },
  { id: 'about', to: '/about', text: 'About' },
  { id: 'contact', to: '/contact', text: 'Contact' },
];

export const credibilityPoints = [
  {
    title: "Agency Founder & Lead Architect",
    subtitle: "MITECH HUB (mitechhubhq.com)",
    description: "Architecting live commercial platforms, e-commerce storefronts, and digital business solutions.",
    icon: FaLayerGroup
  },
  {
    title: "Commercial & Live Platforms",
    subtitle: "InjizaSMM, Inkweto, ISAIE-HOTEL",
    description: "Proven track record deploying real-world web applications with live users and commercial workflows.",
    icon: FaLaptopCode
  },
  {
    title: "IT & Computer Networking",
    subtitle: "IPRC Tumba IT & Huawei ICT Track",
    description: "Rigorous systems foundation spanning TCP/IP, routing, switching, VLANs, DNS, and server infrastructure.",
    icon: FaNetworkWired
  },
  {
    title: "Technical Mentorship",
    subtitle: "ESTG Coding Club & Tech Tutorials",
    description: "Mentored 50+ junior developers in web fundamentals and authored 20+ practical engineering video tutorials.",
    icon: FaShieldHalved
  }
];

export const projectCategories = [
  "All",
  "Flagship & Commercial",
  "Full-Stack Web Apps",
  "E-Commerce & Retail"
];

export const projects = [
  {
    id: "injizasmm",
    title: "InjizaSMM",
    subtitle: "Social Media Marketing & Digital Promotion Platform",
    category: "Flagship & Commercial",
    badge: "Live Commercial Platform",
    badgeType: "live",
    isFeatured: true,
    summary: "Commercial web platform architected for automated digital marketing campaigns, order dispatching, and audience growth fulfillment across East Africa.",
    problem: "Content creators, brands, and businesses across East Africa lacked a secure, automated local platform to configure, purchase, and track digital promotion campaigns without excessive service friction.",
    solution: "Engineered a high-performance commercial web portal featuring service catalog filtering, dynamic campaign configuration, order status tracking, and automated service workflows.",
    role: "Lead Full-Stack Developer & Systems Architect — designed the architecture, front-facing UI, order flow workflows, and managed custom domain DNS and SSL configuration.",
    tech: ["JavaScript (ES6+)", "Full-Stack Web Architecture", "Responsive UI/UX", "REST API", "DNS & SSL"],
    features: [
      "Dynamic social media service catalog and pricing tiers",
      "Automated order placement and fulfillment workflows",
      "Mobile-first responsive user interface optimized for regional connectivity",
      "Custom domain, SSL/TLS, and DNS record management on Namecheap",
      "Real-time campaign status tracking and customer request handling"
    ],
    architecture: "Structured around a modular full-stack client-server model with optimized client payload delivery, minimal bundle overhead for fast mobile loading, and secure API endpoints handling order dispatches.",
    challenges: "Ensuring near-instant page responsiveness across varying mobile network speeds in East Africa, addressed through aggressive asset compression and semantic HTML caching.",
    outcome: "Live in active commercial production at injizasmm.com, serving businesses and digital creators.",
    live: "https://injizasmm.com/",
    github: null,
    image: null,
    previewType: "branded-mockup",
    brandColor: "#0284c7"
  },
  {
    id: "inkweto",
    title: "Inkweto Online Footwear Store",
    subtitle: "Mobile-First Footwear Retail E-Commerce",
    category: "E-Commerce & Retail",
    badge: "Live Production Store",
    badgeType: "live",
    isFeatured: true,
    summary: "High-converting online footwear retail platform featuring interactive shoe catalog filtering, real-time cart calculations, and a frictionless WhatsApp-integrated checkout workflow.",
    problem: "Traditional Rwandan retail shoe merchants face steep cart abandonment when using foreign credit card checkout gateways that local shoppers do not use.",
    solution: "Engineered a frictionless retail store where customers filter shoes by size and style, assemble a real-time cart, and complete orders via an automated WhatsApp dispatch format.",
    role: "Frontend & E-Commerce Developer — engineered the complete shopping experience, interactive filtering, state management, and WhatsApp payload generation.",
    tech: ["React.js", "Tailwind CSS", "WhatsApp Business API", "Context API", "Local Storage", "Vercel"],
    features: [
      "Dynamic shoe catalog with category, style, and size filtering",
      "Real-time shopping cart with quantity adjustments and instant price calculation",
      "Automated WhatsApp checkout pre-filling order specs, item SKU, and delivery request",
      "100% mobile-first responsive layout with touch-friendly navigation",
      "Zero-latency client state synchronization using local persistence"
    ],
    architecture: "Single Page Application built on React.js and Tailwind CSS with centralized cart state, responsive grid layouts, and custom utility functions generating encoded WhatsApp URI strings.",
    challenges: "Eliminating complex authentication barriers while preventing order confusion. Solved by formatting customer cart items, selected sizes, and item codes into clean WhatsApp message templates.",
    outcome: "Successfully deployed and operational at inkweto.vercel.app with high customer completion rates.",
    live: "https://inkweto.vercel.app/",
    github: "https://github.com/mugishaisaie",
    image: null,
    previewType: "branded-mockup",
    brandColor: "#ea580c"
  },
  {
    id: "isaie-hotel",
    title: "ISAIE-HOTEL",
    subtitle: "Full-Stack Cabin & Hospitality Management System",
    category: "Full-Stack Web Apps",
    badge: "Live Full-Stack App",
    badgeType: "live",
    isFeatured: true,
    summary: "End-to-end hotel booking and operations management application integrating a Supabase PostgreSQL backend, authentication, and optimistic server-state synchronization with React Query.",
    problem: "Hospitality managers need an intuitive, responsive operations dashboard to manage cabin inventory, monitor reservations, handle guest check-ins/check-outs, and analyze occupancy without complex enterprise software.",
    solution: "Built an end-to-end full-stack dashboard and booking application integrating Supabase authentication, PostgreSQL tables with Row-Level Security, and automated state caching via React Query.",
    role: "Full-Stack Engineer — built the UI architecture, state management layer, Supabase database schemas, and data mutation pipelines.",
    tech: ["React.js", "Supabase", "PostgreSQL", "React Query", "Redux Toolkit", "Styled Components", "React Router"],
    features: [
      "Cabin CRUD operations with image uploads and pricing policies",
      "Guest check-in, check-out, and payment status tracking",
      "Real-time server-state caching, pre-fetching, and background refetching via TanStack Query",
      "Role-based authentication with secure session persistence",
      "Dynamic statistical dashboards for occupancy rates and operational metrics"
    ],
    architecture: "Clean component architecture utilizing custom React hooks for data mutations, Styled Components for design tokens, and TanStack React Query for declarative, cached server synchronization.",
    challenges: "Managing stale server data across concurrent edits. Solved by implementing optimistic cache invalidation and query keys structure in React Query.",
    outcome: "Production-grade management system deployed at isaie-hotel.vercel.app with open-source repository on GitHub.",
    live: "https://isaie-hotel.vercel.app",
    github: "https://github.com/mugishaisaie/isaie-hotel",
    image: IsaieHotelImg,
    previewType: "screenshot",
    brandColor: "#4f46e5"
  },
  {
    id: "tura-system",
    title: "Tura System",
    subtitle: "Real Estate & Property Discovery Platform",
    category: "Flagship & Commercial",
    badge: "Interactive Prototype",
    badgeType: "prototype",
    isFeatured: true,
    summary: "Modern real estate discovery platform tailored for Rwandan property seekers and landlords, featuring multi-parameter property filtering and direct inquiry workflows.",
    problem: "Finding verified rental apartments, commercial spaces, and residential homes in Rwanda typically relies on fragmented informal agents with zero pricing transparency.",
    solution: "Designed and built a centralized discovery platform showcasing verified properties with granular specs, location filters, price comparisons, and direct landlord inquiry options.",
    role: "Frontend Architect & Product Designer — structured the UI/UX design, filtering engine, component hierarchy, and responsive layout.",
    tech: ["React.js", "Tailwind CSS", "Modern State Management", "Responsive UI/UX", "Component Architecture"],
    features: [
      "Dynamic property search filtered by location, price bracket, and property category",
      "Comprehensive property listing views with detailed amenities and image galleries",
      "Direct inquiry and booking lead generation forms",
      "Mobile-optimized grid and list views for low-bandwidth browsing"
    ],
    architecture: "Modular React component system with localized filter state, reusable card components, and accessible modal overlays for in-depth property inspection.",
    challenges: "Building an intuitive, high-performance filtering mechanism that provides instantaneous updates without lag on low-power devices.",
    outcome: "High-fidelity real estate platform prototype engineered for Rwanda's property market.",
    live: "https://github.com/mugishaisaie",
    github: "https://github.com/mugishaisaie",
    image: null,
    previewType: "branded-mockup",
    brandColor: "#059669"
  },
  {
    id: "ambara-electrohub",
    title: "Ambara Store & ElectroHub",
    subtitle: "Multi-Vertical Fashion & Electronics E-Commerce",
    category: "E-Commerce & Retail",
    badge: "Live Production Stores",
    badgeType: "live",
    isFeatured: false,
    summary: "Mobile-first digital storefronts engineered for retail fashion (Ambara Store) and consumer electronics (ElectroHub) with product spec comparisons and instant WhatsApp order dispatch.",
    problem: "Niche merchants selling clothes and electronics require distinct product presentation formats (apparel sizing vs electronic specs) without paying recurring high SaaS fees.",
    solution: "Developed lightweight, high-speed storefronts with tailored catalog views, real-time cart calculations, and WhatsApp checkout integration.",
    role: "Full-Stack Developer — built both storefront systems, custom product comparison cards, and frictionless checkout flows.",
    tech: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Context API", "WhatsApp Business Integration"],
    features: [
      "Tailored product specification sheets for electronics and apparel",
      "Real-time cart state management with instant discount and total calculations",
      "One-click WhatsApp order generation with formatted purchase details",
      "Ultra-fast loading with zero bloated external scripts"
    ],
    architecture: "State management handled via React Context API, modular component libraries, and utility helper functions for currency formatting and order compilation.",
    challenges: "Optimizing image rendering and load speeds for image-dense catalogs on mobile connections.",
    outcome: "Successfully deployed multi-vertical stores providing immediate digital sales channels.",
    live: "https://ambara-store.vercel.app",
    github: "https://github.com/mugishaisaie",
    image: null,
    previewType: "branded-mockup",
    brandColor: "#8b5cf6"
  },
  {
    id: "my-pizzas-shop",
    title: "MY-PIZZAS SHOP",
    subtitle: "Real-Time Food Ordering & Cart System",
    category: "Full-Stack Web Apps",
    badge: "Live Web App",
    badgeType: "live",
    isFeatured: false,
    summary: "Real-time pizza ordering application built with React and Redux Toolkit, featuring dynamic cart management, order preview, and responsive checkout workflows.",
    problem: "Food delivery interfaces require robust, predictable state handling for complex multi-item orders, customized toppings, and real-time total updates.",
    solution: "Engineered an interactive ordering system using Redux Toolkit slices to manage global cart state, item customizations, and order previews.",
    role: "Frontend Developer — built the state slices, UI interactions, and responsive cart interface.",
    tech: ["React.js", "Redux Toolkit", "React Router", "Tailwind CSS / CSS3", "State Management"],
    features: [
      "Dynamic pizza catalog with ingredient lists and price breakdowns",
      "Global cart state managed with Redux Toolkit (add, remove, quantity adjustments)",
      "Real-time checkout preview and automated delivery calculations",
      "Responsive layout optimized for smartphones and tablets"
    ],
    architecture: "Centralized Redux store with sliced state architecture for cart and user preferences, decoupled presentation components, and client-side routing via React Router.",
    challenges: "Maintaining immutable state updates during rapid cart additions and deletions.",
    outcome: "Deployed live at my-pizzas-shop.vercel.app with verified source code on GitHub.",
    live: "https://my-pizzas-shop.vercel.app",
    github: "https://github.com/mugishaisaie/my-pizzas-shop",
    image: MyPizzasShopImg,
    previewType: "screenshot",
    brandColor: "#dc2626"
  },
  {
    id: "world-wise",
    title: "WorldWise Geo-Tracking App",
    subtitle: "Interactive Global Travel & City Logging SPA",
    category: "Full-Stack Web Apps",
    badge: "Interactive SPA",
    badgeType: "showcase",
    isFeatured: false,
    summary: "Interactive global travel logging application integrating Leaflet maps, geolocation, and dynamic useReducer state management to record visited cities across the world.",
    problem: "Travel enthusiasts need an intuitive, map-centric interface to log their trips, record notes on visited locations, and visualize travel history geographically.",
    solution: "Developed an interactive single-page application with map markers, automatic location coordinate detection, and a fluid cities/countries tracking workflow.",
    role: "Frontend Developer — implemented map integration, geolocation APIs, and state architecture.",
    tech: ["React.js", "Context API & useReducer", "Leaflet Maps", "React Router", "Geolocation API"],
    features: [
      "Interactive map navigation with custom coordinate-based pin placement",
      "City and country tracking with automatic flag and date attribution",
      "Comprehensive trip notes and itinerary management",
      "URL-driven state management for bookmarkable map positions"
    ],
    architecture: "Context API coupled with useReducer for deterministic state transitions, integrated with Leaflet for declarative map rendering and geolocation services.",
    challenges: "Synchronizing URL route parameters with map center coordinates and active popup states without performance degradation.",
    outcome: "Polished showcase application highlighting spatial data integration and advanced React hooks.",
    live: "https://github.com/mugishaisaie",
    github: "https://github.com/mugishaisaie",
    image: WorldWiseImg,
    previewType: "screenshot",
    brandColor: "#0284c7"
  }
];

export const skillCategories = [
  {
    name: "Frontend Architecture & UI",
    description: "Engineering responsive, accessible, and high-performance user interfaces.",
    skills: [
      { name: "React.js", icon: FaReact, color: "text-cyan-500", highlight: true },
      { name: "JavaScript (ES6+)", icon: FaJs, color: "text-yellow-500", highlight: true },
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400", highlight: true },
      { name: "Styled Components", icon: SiStyledcomponents, color: "text-pink-400" },
      { name: "Component Architecture", icon: FaLayerGroup, color: "text-indigo-400" },
      { name: "Responsive & Mobile-First", icon: FaLaptopCode, color: "text-blue-400" },
    ]
  },
  {
    name: "State Management & APIs",
    description: "Managing complex asynchronous state and declarative data pipelines.",
    skills: [
      { name: "TanStack React Query", icon: SiReactquery, color: "text-rose-500", highlight: true },
      { name: "Redux Toolkit", icon: SiRedux, color: "text-purple-500", highlight: true },
      { name: "Context API", icon: FaReact, color: "text-cyan-400" },
      { name: "Custom React Hooks", icon: FaReact, color: "text-blue-400" },
      { name: "RESTful API Integration", icon: FaServer, color: "text-emerald-500", highlight: true },
      { name: "Asynchronous Pipelines", icon: FaRoute, color: "text-amber-500" }
    ]
  },
  {
    name: "Backend, Database & Cloud BaaS",
    description: "Designing reliable backends, authentication, and database schemas.",
    skills: [
      { name: "Supabase (Auth & Realtime)", icon: SiSupabase, color: "text-emerald-500", highlight: true },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-500", highlight: true },
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500", highlight: true },
      { name: "PHP", icon: FaPhp, color: "text-indigo-400" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "Python", icon: FaPython, color: "text-yellow-400" },
      { name: "C / C++ (MinGW)", icon: FaServer, color: "text-blue-600" }
    ]
  },
  {
    name: "Computer Networking & IT Systems",
    description: "Foundational infrastructure, enterprise networking, and security.",
    skills: [
      { name: "TCP/IP & OSI Model", icon: FaNetworkWired, color: "text-blue-500", highlight: true },
      { name: "Routing & Switching", icon: FaRoute, color: "text-cyan-500", highlight: true },
      { name: "IPv4 & IPv6 Subnetting", icon: FaNetworkWired, color: "text-emerald-500" },
      { name: "LAN / WAN Architecture", icon: FaServer, color: "text-indigo-500" },
      { name: "VLAN Configuration", icon: FaLayerGroup, color: "text-purple-500" },
      { name: "DNS & DHCP Protocols", icon: FaServer, color: "text-amber-500", highlight: true },
      { name: "HTTP / HTTPS & SSL/TLS", icon: FaShieldHalved, color: "text-green-500" },
      { name: "Network Diagnostics", icon: FaNetworkWired, color: "text-rose-500" }
    ]
  },
  {
    name: "DevOps, Tools & Hosting",
    description: "Modern developer tooling, version control, and cloud continuous deployment.",
    skills: [
      { name: "Git & GitHub", icon: FaGithub, color: "text-stone-800 dark:text-stone-200", highlight: true },
      { name: "Vercel CI/CD", icon: SiVercel, color: "text-stone-900 dark:text-white", highlight: true },
      { name: "Vite & NPM", icon: SiVite, color: "text-purple-400" },
      { name: "VS Code", icon: TbBrandVscode, color: "text-blue-500" },
      { name: "GitHub Copilot Pro", icon: FaLaptopCode, color: "text-emerald-400", highlight: true },
      { name: "DNS & Domain Management", icon: FaServer, color: "text-amber-500" },
      { name: "WordPress (Custom Themes)", icon: FaWordpress, color: "text-sky-600" }
    ]
  },
  {
    name: "Digital Business & Conversion Systems",
    description: "Turning business requirements into frictionless, revenue-generating tools.",
    skills: [
      { name: "WhatsApp-First Checkout", icon: FaWhatsapp, color: "text-green-500", highlight: true },
      { name: "E-Commerce Optimization", icon: FaCartShopping, color: "text-orange-500", highlight: true },
      { name: "SaaS & SMM Architecture", icon: FaLayerGroup, color: "text-blue-500" },
      { name: "Technical SEO & Web Vitals", icon: FaServer, color: "text-teal-400" },
      { name: "Technical Mentorship", icon: FaLaptopCode, color: "text-indigo-400" }
    ]
  }
];

export const experiences = [
  {
    id: "mitech-hub",
    role: "Founder, Lead Full-Stack Developer & Systems Architect",
    company: "MITECH HUB",
    companyUrl: "https://mitechhubhq.com",
    period: "May 2022 – Present",
    location: "Kigali, Rwanda",
    type: "Founder & Lead Engineer",
    highlights: [
      "Founded and scaled MITECH HUB into a full-service software agency and tech academy, architecting live commercial web systems including InjizaSMM (injizasmm.com) and Inkweto Online Store (inkweto.vercel.app).",
      "Engineered mobile-first web applications and frictionless WhatsApp-integrated checkout workflows that eliminate complex payment barriers, increasing local customer trust and order completion rates across East Africa.",
      "Configured end-to-end production hosting, SSL/TLS security, custom domain DNS records (A, CNAME, TXT via Namecheap), and CI/CD pipelines on Vercel for high-availability client platforms.",
      "Standardized modern development workflows using React.js, Tailwind CSS, Supabase, and GitHub Copilot Pro in VS Code, accelerating feature delivery while publishing 20+ practical software engineering tutorials on YouTube."
    ],
    tech: ["React.js", "Tailwind CSS", "Supabase", "Node.js", "Vercel", "DNS & Namecheap", "REST APIs"]
  },
  {
    id: "freelance",
    role: "Full-Stack & Frontend Web Developer (Freelance Consultant)",
    company: "Upwork & Direct Commercial Clients",
    companyUrl: null,
    period: "Feb 2025 – Present",
    location: "Kigali, Rwanda (Remote)",
    type: "Freelance & Consulting",
    highlights: [
      "Architect, develop, and deploy responsive, pixel-perfect web applications, SMM service portals, and digital storefronts using React.js, JavaScript (ES6+), Tailwind CSS, Supabase, and WordPress.",
      "Execute semantic HTML5 structuring, meta-tag optimization, asset compression, and Core Web Vitals tuning to elevate search visibility and page load speeds across mobile and desktop devices.",
      "Develop custom WordPress themes, plugins, and third-party REST API integrations tailored to client branding, inventory management, and automated service fulfillment.",
      "Maintain modular, reusable component libraries via Git/GitHub and collaborate directly with business owners from requirement discovery through production launch."
    ],
    tech: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "WordPress", "Supabase", "SEO & Performance"]
  },
  {
    id: "estg-mentor",
    role: "Web Developer Trainee & Lead Peer Mentor",
    company: "ESTG School Coding Club",
    companyUrl: null,
    period: "Jul 2021 – Aug 2024",
    location: "Gisenyi, Rwanda",
    type: "Leadership & Mentorship",
    highlights: [
      "Mentored and trained 50+ junior developers and UI designers in HTML5, CSS3, JavaScript, and responsive web design fundamentals.",
      "Co-organized hands-on coding bootcamps, pair-programming sessions, and structured code reviews, significantly improving student capstone project completion rates."
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Peer Mentorship"]
  },
  {
    id: "natcom",
    role: "Web Development & IT Intern",
    company: "N@TCOM Company",
    companyUrl: null,
    period: "May 2022 – Apr 2023",
    location: "Rwanda",
    type: "Internship",
    highlights: [
      "Developed and maintained dynamic client websites utilizing JavaScript, PHP, CSS3, and MySQL database back-ends, increasing production website loading speed by 30%.",
      "Assisted in local network connectivity troubleshooting, client system configuration, agile UI/UX planning meetings, and collaborative code debugging."
    ],
    tech: ["JavaScript", "PHP", "MySQL", "CSS3", "IT & Network Troubleshooting"]
  },
  {
    id: "busigari",
    role: "Data Entry & Digital Records Specialist",
    company: "BUSIGARI Health Center",
    companyUrl: null,
    period: "Aug 2022 – Jan 2023",
    location: "Rwanda",
    type: "Contract",
    highlights: [
      "Managed digital patient records, material supply inventories, and civic registration datasets with high accuracy, generating daily audit logs and monthly operational summaries."
    ],
    tech: ["Digital Record Systems", "Database Management", "Data Integrity", "Audit Reporting"]
  }
];

export const educationList = [
  {
    degree: "Advanced Diploma / BTech in Information Technology (IT)",
    institution: "Rwanda Polytechnic — IPRC Tumba",
    period: "2025 – Present (Expected 2028)",
    location: "Rwanda",
    focus: "Core IT & Networking Coursework",
    details: "Computer Networking (LAN/WAN, Routing & Switching, TCP/IP, OSI Model), Software Engineering, Object-Oriented Programming (C/C++), Database Management Systems, Electronics, and Systems Analysis."
  },
  {
    degree: "Advanced General Certificate of Education (A-Level) — Software Development",
    institution: "ESTG (Ecole des Sciences et Techniques Gisenyi)",
    period: "Graduated 2024",
    location: "Gisenyi, Rwanda",
    focus: "Software Development & Systems Architecture",
    details: "Programming, Full-Stack Web Development, Relational Databases, Computer Systems Architecture. Served as Lead Peer Mentor in the ESTG Coding Club."
  }
];

export const certificationsList = [
  {
    title: "JavaScript Algorithms and Data Structures Certification",
    issuer: "freeCodeCamp.org",
    date: "Issued 2025",
    topics: "ES6+, Functional Programming, Object-Oriented Programming, Recursion, and Algorithmic Problem Solving."
  },
  {
    title: "Responsive Web Design Certification",
    issuer: "freeCodeCamp.org",
    date: "Issued 2024",
    topics: "Semantic HTML5, CSS3, Modern Flexbox, CSS Grid, and Mobile-First Accessibility."
  },
  {
    title: "Web Development Training Certificates",
    issuer: "N@TCOM Company & CryptoTech Company, Rwanda",
    date: "Issued 2023",
    topics: "Full-Stack HTML, CSS, Bootstrap, JavaScript, PHP, and MySQL."
  },
  {
    title: "Huawei ICT Competition Participant",
    issuer: "Huawei ICT Academy",
    date: "2026–2027 Track",
    topics: "Networking & IT Infrastructure track (Routing, Switching, Network Security)."
  },
  {
    title: "HNG Internship 12 Program Participant",
    issuer: "HNG Tech",
    date: "2024 / 2025",
    topics: "Fast-paced software engineering collaboration, code reviews, and remote agile workflows."
  }
];

export const languagesList = [
  { language: "Kinyarwanda", level: "Native", description: "Native mother tongue" },
  { language: "English", level: "Professional Working", description: "Technical documentation, client communication, team collaboration" },
  { language: "French", level: "Professional / Conversational", description: "Working and conversational proficiency" },
  { language: "Kiswahili", level: "Conversational", description: "Conversational proficiency across East Africa" }
];

export const businessServices = [
  {
    id: "ecommerce",
    title: "E-Commerce & WhatsApp Ordering",
    badge: "High Conversion",
    description: "Mobile-first digital storefronts engineered for East African and global commerce. Integrates frictionless WhatsApp checkouts that eliminate credit card drop-offs, dynamic product filtering, and instant order dispatch.",
    deliverables: ["Product Catalog & Filtering", "Real-time Shopping Cart", "WhatsApp Order Dispatch", "Mobile-Optimized Checkout"]
  },
  {
    id: "web-apps",
    title: "Full-Stack Web Applications",
    badge: "Scalable Architecture",
    description: "Custom Single Page Applications (SPAs) and internal management dashboards (such as hotel, cabin, and property systems). Built with React, Supabase, PostgreSQL, and robust cached server-state management.",
    deliverables: ["Authentication & RBAC", "Relational Database Schemas", "Optimistic Server Caching", "Responsive Admin Dashboards"]
  },
  {
    id: "business-sites",
    title: "Business Websites & SaaS Portals",
    badge: "Brand & Growth",
    description: "Modern, high-performance web platforms (like InjizaSMM) tailored to commercial operations, service automation, technical SEO, and Core Web Vitals optimization.",
    deliverables: ["Commercial Web Platforms", "Custom Domain & DNS Setup", "Technical SEO Tuning", "Fast Mobile Loading"]
  },
  {
    id: "it-networking",
    title: "IT Systems & Networking Consulting",
    badge: "Reliable Infrastructure",
    description: "Leveraging formal IT engineering training to assist businesses with network configurations, local LAN/WAN setups, DNS and SSL certificates, and cloud deployments.",
    deliverables: ["DNS & SSL Configuration", "Network Troubleshooting", "Vercel / Cloud CI/CD", "Security Fundamentals"]
  }
];
