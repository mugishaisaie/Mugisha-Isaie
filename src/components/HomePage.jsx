import { Link } from "react-router-dom";
import homeImg from '../assets/coding.jpg'

export default function HomePage() {
  return (
    <main className="min-h-full bg-white dark:bg-stone-950 text-stone-800 dark:text-white px-6 md:px-20 py-16">
      
      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* LEFT SIDE TEXT */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm Mugisha Isaie
          </h1>
          <p className="text-lg md:text-xl text-stone-600 dark:text-stone-300">
            A passionate <span className="font-semibold text-blue-500">Frontend Developer</span> building responsive, accessible, and real-world web applications using React, JavaScript, and Tailwind CSS.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Link to="/projects">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                View Projects
              </button>
            </Link>
            <Link to="/contact">
              <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition">
                Contact Me
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex-1">
          <img
            src={homeImg} // replace with your actual image path
            alt="Mugisha Isaie"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>
      </section>
    </main>
  );
}
