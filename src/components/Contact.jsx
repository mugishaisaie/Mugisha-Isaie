import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import { personalInfo } from '../data';
import { 
  FaEnvelope, 
  FaWhatsapp, 
  FaLocationDot, 
  FaGithub, 
  FaLinkedin, 
  FaPaperPlane, 
  FaSpinner, 
  FaDownload,
  FaArrowUpRightFromSquare,
  FaCheck
} from 'react-icons/fa6';

export default function Contact({ isStandalone = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Full-time Employment',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.warning('Please fill in your name, email, and message.');
      return;
    }

    setIsLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.info('Direct email client opening as fallback...');
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(`[${formData.inquiryType}] from ${formData.name}`)}&body=${encodeURIComponent(formData.message + `\n\nContact: ${formData.email}`)}`;
      setIsLoading(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.inquiryType,
          message: `Inquiry Type: ${formData.inquiryType}\n\n${formData.message}`,
          to_name: 'Mugisha Isaie'
        },
        publicKey
      );

      toast.success('Thank you! Your message has been sent successfully.');
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        inquiryType: 'Full-time Employment',
        message: ''
      });
    } catch (err) {
      console.error('Email send failed:', err);
      toast.error('Unable to send via automated gateway. Opening direct email client...');
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(`[${formData.inquiryType}] from ${formData.name}`)}&body=${encodeURIComponent(formData.message + `\n\nContact: ${formData.email}`)}`;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section 
      id="contact" 
      className={`py-20 md:py-28 ${isStandalone ? 'pt-28' : ''} bg-stone-50 dark:bg-stone-900/60 text-stone-900 dark:text-stone-100 transition-colors border-t border-stone-200/80 dark:border-stone-800`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-4">
            <FaEnvelope className="w-3.5 h-3.5" />
            <span>Start a Conversation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-white">
            Have a Project, Opportunity or Technical Challenge? Let's Talk.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
            Whether you want to interview me for an engineering role, discuss a freelance contract, or build a digital platform for your business, reach out through your preferred channel.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Verified Channels (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white dark:bg-stone-800/80 rounded-2xl p-6 sm:p-8 border border-stone-200 dark:border-stone-700 shadow-sm space-y-6">
              
              <h3 className="text-xl font-bold text-stone-900 dark:text-white">
                Direct Contact Channels
              </h3>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                    Email (Primary)
                  </h4>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm sm:text-base font-bold text-stone-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                    Responses within 24 hours
                  </p>
                </div>
              </div>

              {/* WhatsApp & Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <FaWhatsapp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                    WhatsApp & Phone
                  </h4>
                  <a 
                    href={personalInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1.5"
                  >
                    <span>{personalInfo.phoneFormatted}</span>
                    <FaArrowUpRightFromSquare className="w-3 h-3" />
                  </a>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                    Direct chat for commercial inquiries & urgent collaboration
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <FaLocationDot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                    Location & Timezone
                  </h4>
                  <p className="text-sm sm:text-base font-bold text-stone-900 dark:text-white">
                    {personalInfo.location}
                  </p>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                    Central Africa Time (CAT / UTC+2) • Open to remote worldwide
                  </p>
                </div>
              </div>

              {/* Download CV */}
              <div className="pt-4 border-t border-stone-100 dark:border-stone-700">
                <a
                  href={personalInfo.resumeUrl}
                  download="Mugisha_Isaie_Web_Developer_Resume.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-stone-100 hover:bg-stone-200 dark:bg-stone-700 dark:hover:bg-stone-600 text-stone-900 dark:text-white transition-colors"
                >
                  <FaDownload className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Download Mugisha Isaie Resume (PDF)</span>
                </a>
              </div>

            </div>

            {/* Social / Professional Profiles Card */}
            <div className="bg-white dark:bg-stone-800/80 rounded-2xl p-6 border border-stone-200 dark:border-stone-700 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-4">
                Verified Online Profiles
              </h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-stone-100 dark:bg-stone-700 text-stone-800 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-600 transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-stone-100 dark:bg-stone-700 text-stone-800 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-600 transition-colors"
                >
                  <FaLinkedin className="w-4 h-4 text-blue-600" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.agencyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-stone-100 dark:bg-stone-700 text-stone-800 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-600 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span>MITECH HUB</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (Col 7) */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-stone-800/80 rounded-2xl p-6 sm:p-9 border border-stone-200 dark:border-stone-700 shadow-sm">
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-stone-900 dark:text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1">
                  Fill in your details below and I will get back to you promptly.
                </p>
              </div>

              {isSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 flex items-center gap-3 text-sm font-semibold">
                  <FaCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Message delivered! I appreciate your message and will reply shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                    Your Name / Company *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. John Doe / Tech Rwanda"
                    className="w-full px-4 py-3 rounded-xl text-sm bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl text-sm bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* Inquiry Type */}
                <div>
                  <label htmlFor="inquiryType" className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                    Purpose of Contact
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  >
                    <option value="Full-time Employment">Full-time Developer Hiring (Junior Full-Stack / Frontend / React)</option>
                    <option value="Freelance Web App">Freelance Web Application / SPA</option>
                    <option value="E-Commerce & WhatsApp">E-Commerce Store & WhatsApp Checkout System</option>
                    <option value="Commercial Business Site">Commercial Website or SMM Platform</option>
                    <option value="IT & Networking Consulting">IT Systems, Networking & Cloud Setup</option>
                    <option value="Other Opportunity">Other Collaboration / Inquiries</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                    Project Details or Role Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Describe your project, timeline, target role, or engineering challenge..."
                    className="w-full px-4 py-3 rounded-xl text-sm bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-y"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 transition-all disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01]"
                >
                  {isLoading ? (
                    <>
                      <FaSpinner className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
