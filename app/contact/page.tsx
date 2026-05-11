"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  // Animation settings
  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-[#0a192f] text-white selection:bg-blue-500 selection:text-white font-sans">
      
      {/* Navbar */}
      <header className="flex flex-col md:flex-row md:justify-between md:items-center px-4 py-4 md:px-10 md:py-6 border-b border-blue-500/30 bg-black/80 backdrop-blur-md fixed top-0 left-0 w-full z-50 gap-4">
        <h1 className="text-xl md:text-2xl font-extrabold tracking-tighter text-blue-500 text-center md:text-left">
          WAHIB PORTFOLIO
        </h1>
        <nav className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-8 text-xs sm:text-sm font-semibold">
          <Link href="/" className="hover:text-blue-400 transition-colors uppercase tracking-[0.2em]">Home</Link>
          <Link href="/about" className="hover:text-blue-400 transition-colors uppercase tracking-[0.2em]">About</Link>
          <Link href="/education" className="hover:text-blue-400 transition-colors uppercase tracking-[0.2em]">Education</Link>
          <Link href="/contact" className="text-blue-400 uppercase tracking-[0.2em]">Contact</Link>
          <Link href="/projects" className="text-blue-400 uppercase tracking-[0.2em]">Projects</Link>
        </nav>
      </header>

      <main className="pt-40 pb-20 px-6">
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500 tracking-tight uppercase">
              Get In Touch
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information Column */}
            <div className="space-y-8">
              <div className="p-8 border border-blue-500/20 rounded-2xl bg-gray-900/40 backdrop-blur-sm shadow-xl shadow-blue-900/10">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <Mail className="text-blue-500 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Email</p>
                      <p className="text-lg text-gray-200">wahibjaffer043@gmail.com</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <MapPin className="text-blue-500 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Location</p>
                      <p className="text-lg text-gray-200">Karachi, Pakistan</p>
                    </div>
                  </div>

                  {/* Social Media Section */}
                  <div className="pt-6 border-t border-blue-500/10">
                    <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-4">Connect with me</p>
                    <div className="flex gap-4">
                      {/* LinkedIn */}
                      <Link 
                        href="https://linkedin.com/in/your-username" 
                        target="_blank"
                        className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-xl hover:bg-blue-500/20 transition-all border border-blue-500/20 group"
                      >
                        <span className="text-blue-400 group-hover:text-blue-300 font-bold">LinkedIn</span>
                      </Link>

                      {/* Instagram */}
                      <Link 
                        href="https://instagram.com/wahibsukhera" 
                        target="_blank"
                        className="flex items-center gap-3 p-3 bg-pink-500/10 rounded-xl hover:bg-pink-500/20 transition-all border border-pink-500/20 group"
                      >
                        <span className="text-pink-400 group-hover:text-pink-300 font-bold">Instagram</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Note */}
              <div className="p-8 border border-blue-500/10 rounded-2xl bg-blue-500/5">
                <h4 className="text-blue-400 font-bold uppercase tracking-widest mb-2">Available for Work</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Currently accepting new projects in Web Development, UI/UX Design, and AI Integration.
                </p>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="p-8 border border-blue-500/20 rounded-2xl bg-gray-900/40 backdrop-blur-sm shadow-2xl shadow-blue-900/10">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Name</label>
                  <input type="text" className="w-full bg-black border border-blue-500/30 rounded-lg p-4 focus:outline-none focus:border-blue-500 transition-colors text-white" placeholder="Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                  <input type="email" className="w-full bg-black border border-blue-500/30 rounded-lg p-4 focus:outline-none focus:border-blue-500 transition-colors text-white" placeholder="Email" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                  <textarea rows={5} className="w-full bg-black border border-blue-500/30 rounded-lg p-4 focus:outline-none focus:border-blue-500 transition-colors text-white resize-none" placeholder="Message..."></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors uppercase tracking-widest text-sm"
                >
                  Send Message <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </div>

          </div>
        </motion.section>
      </main>

      <footer className="text-center p-10 border-t border-blue-500/10 text-gray-600 bg-black/50">
        <p className="text-xs tracking-widest uppercase">
          © 2026 WAHIB PORTFOLIO • ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  );
}