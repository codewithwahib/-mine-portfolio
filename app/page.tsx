"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, 
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" as const } 
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: -30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" as const } 
    },
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white overflow-x-hidden font-sans">
      
      {/* Navbar */}
      <header className="flex flex-col md:flex-row md:justify-between md:items-center px-4 py-4 md:px-10 md:py-6 border-b border-blue-500/30 bg-black/90 backdrop-blur-md fixed top-0 left-0 w-full z-50 gap-4">
        <h1 className="text-xl md:text-2xl font-extrabold tracking-tighter text-blue-500 text-center md:text-left">
          WAHIB PORTFOLIO
        </h1>
        <nav className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-8 text-xs sm:text-sm font-semibold">
          <Link href="/" className="text-blue-400 uppercase tracking-[0.2em]">Home</Link>
          <Link href="/about" className="hover:text-blue-400 transition-colors uppercase tracking-[0.2em]">About</Link>
          <Link href="/education" className="hover:text-blue-400 transition-colors uppercase tracking-[0.2em]">Education</Link>
          <Link href="/projects" className="hover:text-blue-400 transition-colors uppercase tracking-[0.2em]">Projects</Link>
          <Link href="/contact" className="hover:text-blue-400 transition-colors uppercase tracking-[0.2em]">Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen w-full pt-52 pb-16 md:pt-20 flex items-center justify-center bg-gradient-to-b from-black via-gray-950 to-black px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto gap-12 lg:gap-24">
          
          {/* LEFT SIDE - Profile Image */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="w-full flex-1 flex justify-center md:justify-end order-2 md:order-1"
          >
            <div className="relative group max-w-[260px] sm:max-w-[320px] md:max-w-[380px] w-full aspect-[4/5]">
              <div className="w-full h-full rounded-2xl border-[4px] md:border-[6px] border-blue-500 
                              shadow-[0_0_30px_rgba(59,130,246,0.4),inset_0_0_15px_rgba(59,130,246,0.2)] 
                              flex items-center justify-center overflow-hidden 
                              transition-all duration-700 
                              group-hover:shadow-[0_0_60px_rgba(59,130,246,0.7)] relative">
                <Image 
                  src="/profile.jpg" 
                  alt="Wahib" 
                  fill
                  priority
                  sizes="(max-w-768px) 260px, 380px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="absolute inset-[-8px] rounded-3xl border border-blue-500/10 animate-pulse pointer-events-none"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 md:w-16 md:h-16 border-b-4 border-l-4 border-blue-500 group-hover:border-blue-300 transition-colors"></div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Typography */}
          <motion.div 
            className="w-full flex-1 text-center md:text-left order-1 md:order-2"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black uppercase leading-[0.9] tracking-tighter"
            >
              Hi, I&apos;m <br />
              <span className="text-blue-500 inline-block mt-2 md:mt-4">
                Wahib
              </span>
            </motion.h2>

            <motion.div 
              variants={itemVariants}
              className="mt-6 md:mt-10 max-w-lg mx-auto md:mx-0"
            >
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-400 leading-relaxed border-l-2 md:border-l-4 border-blue-500 pl-4 md:pl-6 py-1">
                <span className="text-white font-bold uppercase block mb-1">Web Developer • UI/UX Designer</span> 
                Graphic Designer • Web3 &amp; <br className="hidden sm:block" />
                Metaverse Explorer • AI Developer <br className="hidden sm:block" />
                <span className="text-blue-400 font-semibold italic">Prompt Engineering &amp; AI Agents</span>
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 px-4 border-t border-blue-500/10 text-gray-600 text-[10px] md:text-xs tracking-[0.3em] uppercase bg-black">
        © 2026 WAHIB PORTFOLIO • ALL RIGHTS RESERVED
      </footer>
    </div>
  );
}