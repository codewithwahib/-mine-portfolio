"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
// Swapped to standard icons to fix the "Export doesn't exist" errors
import { Mail, MapPin, Send, Share2, User } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | Wahib Portfolio";
  }, []);

  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-[#0a192f] text-white selection:bg-blue-500 font-sans">
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

      <main className="pt-40 pb-20 px-6">
        <motion.section initial="hidden" animate="visible" variants={fadeInVariant} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-blue-500 tracking-tighter uppercase">Get In Touch</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="p-8 border border-blue-500/20 rounded-3xl bg-gray-900/40 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-white mb-8">Contact Details</h3>
                <div className="space-y-8">
                  <div className="flex items-center gap-5">
                    <div className="p-4 bg-blue-500/10 rounded-2xl"><Mail className="text-blue-500 w-6 h-6" /></div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Email</p>
                      <p className="text-lg text-gray-200">wahibjaffer043@gmail.com</p>
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
                    <div className="flex gap-4">
                      <Link href="#" className="flex items-center gap-3 px-5 py-3 bg-blue-500/10 rounded-2xl border border-blue-500/20">
                        <User className="w-5 h-5 text-blue-400" />
                        <span className="text-sm text-blue-400 font-bold uppercase tracking-widest">LinkedIn</span>
                      </Link>
                      <Link href="https://www.instagram.com/wahibsukhera" className="flex items-center gap-3 px-5 py-3 bg-pink-500/10 rounded-2xl border border-pink-500/20">
                        <Share2 className="w-5 h-5 text-pink-400" />
                        <span className="text-sm text-pink-400 font-bold uppercase tracking-widest">Instagram</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 border border-blue-500/20 rounded-3xl bg-gray-900/40 backdrop-blur-md shadow-2xl">
              <form className="space-y-6">
                <input required className="w-full bg-black/50 border border-blue-500/20 rounded-xl p-4 text-white" placeholder="Name" />
                <input required type="email" className="w-full bg-black/50 border border-blue-500/20 rounded-xl p-4 text-white" placeholder="Email" />
                <textarea required rows={5} className="w-full bg-black/50 border border-blue-500/20 rounded-xl p-4 text-white resize-none" placeholder="Message"></textarea>
                <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="w-full bg-blue-600 text-white font-black py-4 rounded-xl flex items-center justify-center gap-3 uppercase tracking-widest text-xs">
                  Send Message <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}