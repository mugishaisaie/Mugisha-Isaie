import React from 'react';
import { 
  personalInfo, 
  languagesList 
} from '../data';
import IsaiePhoto from '../assets/images/isaie.jpg';
import { 
  FaDownload, 
  FaLanguage, 
  FaHeart, 
  FaCompass
} from 'react-icons/fa6';

export default function About({ isStandalone = false }) {
  return (
    <section 
      id="about" 
      className={`py-20 md:py-28 ${isStandalone ? 'pt-28' : ''} bg-stone-50 dark:bg-stone-900/60 text-stone-900 dark:text-stone-100 transition-colors border-t border-stone-200/80 dark:border-stone-800`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-white">
            About Mugisha Isaie
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
            Full-Stack Developer, Systems Architect, and IT student committed to engineering practical digital solutions for real-world problems.
          </p>
        </div>

        {/* Main Profile Grid: Photo + Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Photo & Quick Details (Col 5) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-6">
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border-4 border-white dark:border-stone-800 shadow-xl bg-stone-200 dark:bg-stone-800">
              <img
                src={IsaiePhoto}
                alt="Mugisha Isaie - Full-Stack Developer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                  Based in Kigali, Rwanda
                </span>
                <h3 className="text-2xl font-bold">Mugisha Isaie</h3>
                <p className="text-xs text-stone-200 mt-0.5">
                  Full-Stack Developer & Founder @ MITECH HUB
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="w-full max-w-md flex flex-wrap gap-3">
              <a
                href={personalInfo.resumeUrl}
                download="Mugisha_Isaie_Web_Developer_Resume.pdf"
                className="min-h-[44px] flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-colors"
              >
                <FaDownload className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
              <a
                href="#contact"
                className="min-h-[44px] inline-flex items-center justify-center px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-white dark:bg-stone-800 hover:bg-stone-100 dark:hover:bg-stone-700 text-stone-900 dark:text-white border border-stone-200 dark:border-stone-700 transition-colors"
              >
                Get in Touch
              </a>
            </div>

            {/* Spoken Languages Card */}
            <div className="w-full max-w-md bg-white dark:bg-stone-800/80 rounded-2xl p-6 border border-stone-200 dark:border-stone-700 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-stone-900 dark:text-white font-bold text-sm">
                <FaLanguage className="w-4 h-4 text-blue-500" />
                <span>Spoken Languages</span>
              </div>
              <div className="space-y-3">
                {languagesList.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-stone-800 dark:text-stone-200">
                      {lang.language}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 dark:bg-stone-700 text-stone-600 dark:text-stone-300">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Narrative / Biography (Col 7) */}
          <div className="lg:col-span-7 space-y-6 text-stone-700 dark:text-stone-300 leading-relaxed text-sm sm:text-base">
            
            <div className="p-6 bg-white dark:bg-stone-800/80 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-white">
                How I Found My Calling in Web Engineering
              </h3>
              
              <p>
                Growing up in Rwanda, I have always possessed a deep desire to help others and solve human problems. My father consistently encouraged me to explore and understand technology, recognizing that the future would be written in software.
              </p>

              <p>
                When the time came to specialize in secondary school at <strong>ESTG (Ecole des Sciences et Techniques Gisenyi)</strong>, I enrolled in the Software Development (SOD) stream. What began as academic study quickly became my true passion. I realized that web engineering was not just syntax; it was the most immediate, accessible way to create software that solves tangible problems for businesses and people across borders.
              </p>

              <p>
                During my time at ESTG, I served as <strong>Lead Peer Mentor in the ESTG Coding Club</strong>, mentoring over 50 junior students in HTML, CSS, JavaScript, and responsive design. Witnessing beginners build their first functioning websites confirmed my belief in developer community, structured mentorship, and pragmatic learning.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-stone-800/80 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-white">
                Founding MITECH HUB & Ongoing Technical Education
              </h3>

              <p>
                In May 2022, I founded <strong>MITECH HUB (mitechhubhq.com)</strong> to bridge the gap between technical code and commercial business value. Through MITECH HUB, I have architected and deployed production systems including <strong>InjizaSMM</strong> (a social media marketing automation platform) and <strong>Inkweto Footwear Store</strong> (a high-converting retail platform with WhatsApp-integrated checkouts tailored for East African shoppers).
              </p>

              <p>
                To fortify my software development practice with deep infrastructure and systems knowledge, I am currently pursuing an <strong>Advanced Diploma / BTech in Information Technology</strong> at <strong>Rwanda Polytechnic (IPRC Tumba)</strong>. My curriculum covers enterprise computer networking (LAN/WAN, routing and switching, TCP/IP, OSI model), database management systems, and systems analysis.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40">
                <div className="flex items-center gap-2 font-bold text-blue-900 dark:text-blue-300 text-sm mb-1">
                  <FaCompass className="w-4 h-4 text-blue-600" />
                  <span>Evidence Before Claims</span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400">
                  I demonstrate capabilities through functioning code, live platforms, and documented architecture rather than subjective percentages.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40">
                <div className="flex items-center gap-2 font-bold text-emerald-900 dark:text-emerald-300 text-sm mb-1">
                  <FaHeart className="w-4 h-4 text-emerald-600" />
                  <span>Business-Driven UX</span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400">
                  Every button, layout choice, and database query must serve the end user experience and solve real commercial bottlenecks.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
