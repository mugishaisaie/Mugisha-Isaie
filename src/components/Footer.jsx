import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from "react-icons/fa6";

// --- TEMPLATE DATA ---
const footerData = {
  name: "Mugisha Isaie",
  title: "Full-Stack Developer & Instructor",
  email: "mugishaisaieog1@gmail.com",
  about: "Building digital products, brands, and experiences. dedicated to teaching the next generation of developers in Rwanda.",
  socials: {
    github: "https://github.com/mugishaisaie",
    linkedin: "https://linkedin.com/in/mugisha-isaie",
    twitter: "https://twitter.com",
  },
  links: [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    // { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-400 border-t border-stone-200 dark:border-stone-800">
      
      {/* UPPER SECTION: Content Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* COLUMN 1: Brand & Pitch */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 tracking-tight">
              {footerData.name}
            </h2>
            <p className="text-sm leading-relaxed max-w-xs">
              {footerData.about}
            </p>
            <div className="flex gap-4 pt-2">
              <SocialIcon href={footerData.socials.github} icon={<FaGithub />} />
              <SocialIcon href={footerData.socials.linkedin} icon={<FaLinkedin />} />
              <SocialIcon href={footerData.socials.twitter} icon={<FaTwitter />} />
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div>
            <h3 className="text-stone-900 dark:text-stone-100 font-semibold mb-4 uppercase text-sm tracking-wider">
              Explore
            </h3>
            <ul className="space-y-2">
              {footerData.links.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Contact & CTA */}
          <div>
             <h3 className="text-stone-900 dark:text-stone-100 font-semibold mb-4 uppercase text-sm tracking-wider">
              Get in Touch
            </h3>
            <p className="text-sm mb-4">
              Have a project in mind? Let's build something amazing together.
            </p>
            <a 
              href={`mailto:${footerData.email}`} 
              className="inline-flex items-center gap-2 text-stone-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-b-2 border-transparent hover:border-blue-600"
            >
              <FaEnvelope />
              {footerData.email}
            </a>
          </div>

        </div>
      </div>

      {/* LOWER SECTION: Copyright */}
      <div className="bg-stone-200 dark:bg-stone-950 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          
          <div className="text-center md:text-left">
            &copy; {currentYear} {footerData.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-1">
             <span>Web Developer | Digital Solutionist</span>
             
          </div>

        </div>
      </div>
    </footer>
  );
}

// Helper Component for consistency
function SocialIcon({ href, icon }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer" 
      className="bg-white dark:bg-stone-800 p-2 rounded-full shadow-sm hover:scale-110 hover:text-blue-600 hover:shadow-md transition-all duration-300"
    >
      {icon}
    </a>
  );
}