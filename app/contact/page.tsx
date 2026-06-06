"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Share2, User } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | Wahib Portfolio";
  }, []);

  // Fixed: Explicitly typed ease as a literal string to satisfy Framer Motion / TS
  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" as const } 
    }
  };

  // Fixed: Added a standard client-side submission handler stub
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form logic here (e.g., API route call or Formspree)
    console.log("Form submitted!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-[#0a192f] text-white selection:bg-blue-500 font-sans">
      
      {/* Navbar */}
      <header className="flex flex-col md:flex-row md:justify-between md:items-center px-4 py-4 md:px-10 md:py-6 border-b border-blue-500/30 bg-black/80 backdrop-blur-md fixed top-0 left-0 w-full z-50 gap-4">
        <h1 className="text-xl md:text-2xl font-extrabold tracking-tighter text-blue-500 text-center md:text-left">
          WAHIB PORTFOLIO
        </h1>
        <nav className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-8 text-xs sm:text-sm font-semibold">
          <Link href="/" className="hover:text-blue-400 transition-colors uppercase tracking-[0.2em]">Home</Link>
          <Link href="/about" className="hover:text-blue-400 transition-colors uppercase tracking-[0.2em]">About</Link>
          <Link href="/education" className="hover:text-blue-400 transition-colors uppercase tracking-[0.2em]">Education</Link>
          <Link href="/projects" className="hover:text-blue-400 transition-colors uppercase tracking-[0.2em]">Projects</Link>
          <Link href="/contact" className="text-blue-400 uppercase tracking-[0.2em]">Contact</Link>
        </nav>
      </header>

      {/* Main Content Area */}
      {/* Fixed: Shifted mobile top padding to pt-56 to prevent Fixed Navbar clipping content */}
      <main className="pt-56 md:pt-40 pb-20 px-6">
        <motion.section initial="hidden" animate="visible" variants={fadeInVariant} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-blue-500 tracking-tighter uppercase">Get In Touch</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Block: Contact Details */}
            <div className="space-y-8">
              <div className="p-8 border border-blue-500/20 rounded-3xl bg-gray-900/40 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-white mb-8">Contact Details</h3>
                <div className="space-y-8">
                  <div className="flex items-center gap-5">
                    <div className="p-4 bg-blue-500/10 rounded-2xl"><Mail className="text-blue-500 w-6 h-6" /></div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Email</p>
                      <p className="text-lg text-gray-200 break-all sm:break-normal">wahibjaffer043@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="p-4 bg-blue-500/10 rounded-2xl"><MapPin className="text-blue-500 w-6 h-6" /></div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Location</p>
                      <p className="text-lg text-gray-200">Karachi, Pakistan</p>
                    </div>
                  </div>
                  <div className="pt-8 border-t border-blue-500/10">
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-6">Digital Presence</p>
                    <div className="flex flex-wrap gap-4">
                      <Link href="#" className="flex items-center gap-3 px-5 py-3 bg-blue-500/10 rounded-2xl border border-blue-500/20 hover:bg-blue-500/20 transition-all">
                        <User className="w-5 h-5 text-blue-400" />
                        <span className="text-sm text-blue-400 font-bold uppercase tracking-widest">LinkedIn</span>
                      </Link>
                      <Link href="https://www.instagram.com/wahibsukhera" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-5 py-3 bg-pink-500/10 rounded-2xl border border-pink-500/20 hover:bg-pink-500/20 transition-all">
                        <Share2 className="w-5 h-5 text-pink-400" />
                        <span className="text-sm text-pink-400 font-bold uppercase tracking-widest">Instagram</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Block: Contact Form */}
            <div className="p-8 border border-blue-500/20 rounded-3xl bg-gray-900/40 backdrop-blur-md shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input id="name" name="name" type="text" required className="w-full bg-black/50 border border-blue-500/20 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Name" />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input id="email" name="email" type="email" required className="w-full bg-black/50 border border-blue-500/20 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Email" />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea id="message" name="message" required rows={5} className="w-full bg-black/50 border border-blue-500/20 rounded-xl p-4 text-white resize-none focus:outline-none focus:border-blue-500 transition-colors" placeholder="Message"></textarea>
                </div>
                <motion.button type="submit" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="w-full bg-blue-600 text-white font-black py-4 rounded-xl flex items-center justify-center gap-3 uppercase tracking-widest text-xs hover:bg-blue-700 transition-colors cursor-pointer">
                  Send Message <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="text-center p-10 border-t border-blue-500/10 text-gray-600 bg-black/50">
        <p className="text-xs tracking-widest uppercase">
          © 2026 WAHIB PORTFOLIO • ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  );
}