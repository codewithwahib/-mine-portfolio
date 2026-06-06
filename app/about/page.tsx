"use client"; // Required for Framer Motion animations

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  // Solved: Ease configured with literal typing to satisfy Framer Motion / TS
  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" as const 
      } 
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
          <Link href="/about" className="text-blue-400 uppercase tracking-[0.2em]">About</Link>
          <Link href="/education" className="hover:text-blue-400 transition-colors uppercase tracking-[0.2em]">Education</Link>
          <Link href="/projects" className="hover:text-blue-400 transition-colors uppercase tracking-[0.2em]">Projects</Link>
          <Link href="/contact" className="hover:text-blue-400 transition-colors uppercase tracking-[0.2em]">Contact</Link>
        </nav>
      </header>

      <main className="pt-56 md:pt-40 pb-20 overflow-hidden">
        
        {/* HERO SECTION */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
          className="text-center py-12 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500 tracking-tight uppercase">
            About Me
          </h2>
          <p className="text-gray-400 mt-2 text-base md:text-lg">
            From Karachi to the digital frontier
          </p>
        </motion.section>

        <div className="max-w-4xl mx-auto px-6 space-y-24">
          
          {/* SECTION 1: ORIGINS */}
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariant}
            className="space-y-4 text-center"
          >
            <h3 className="text-xl font-bold text-blue-400 uppercase tracking-widest border-b border-blue-500/20 pb-2">
              A Journey of Growth
            </h3>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              My story began on <span className="text-white font-bold">September 18, 2010</span>, in the vibrant city of <span className="text-white font-bold">Karachi</span>. Growing up in a world transitioning into the digital age, I was fueled by an insatiable curiosity for how the world is built through code.
            </p>
          </motion.section>

          {/* SECTION 2: EARLY EDUCATION (BASS) */}
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariant}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
          >
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-bold text-blue-400 uppercase tracking-widest border-b border-blue-500/20 pb-2">
                Educational Foundation
              </h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                My academic journey started at <span className="text-white font-bold">Beacon Askari Secondary School (BASS)</span>, where I studied from <span className="text-blue-400 font-semibold">Nursery to Class 8</span>. These formative years developed my disciplined approach to learning and problem-solving.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-40 h-40 bg-gray-900/40 backdrop-blur-sm border border-blue-500/30 rounded-2xl flex items-center justify-center p-4 relative">
                <Image src="/bass-logo.png" alt="BASS Logo" width={160} height={160} className="max-w-full max-h-full object-contain" />
              </div>
            </div>
          </motion.section>

          {/* SECTION 3: SMIT */}
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariant}
            className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12"
          >
            <div className="flex-1 space-y-4 text-center md:text-right">
              <h3 className="text-xl font-bold text-blue-400 uppercase tracking-widest border-b border-blue-500/20 pb-2">
                Creative Expertise
              </h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                I completed a <span className="text-white font-bold">1-year Graphic Designing course</span> at <span className="text-white font-bold">Saylani Mass IT Training (SMIT)</span>. This certification empowered me with a deep understanding of visual communication and branding.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-40 h-40 bg-gray-900/40 backdrop-blur-sm border border-blue-500/30 rounded-2xl flex items-center justify-center p-4 relative">
                <Image src="/smit-logo.png" alt="SMIT Logo" width={160} height={160} className="max-w-full max-h-full object-contain" />
              </div>
            </div>
          </motion.section>

          {/* SECTION 4: SPECISS */}
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariant}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
          >
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-bold text-blue-400 uppercase tracking-widest border-b border-blue-500/20 pb-2">
                Secondary Excellence
              </h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                I successfully completed <span className="text-white font-bold">Class 9 and Class 10</span> at <span className="text-white font-bold">Speciss Secondary Model School</span>, refining my analytical skills for the technical world.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-40 h-40 bg-gray-900/40 backdrop-blur-sm border border-blue-500/30 rounded-2xl flex items-center justify-center p-4 relative">
                <Image src="/speciss-logo.png" alt="Speciss Logo" width={160} height={160} className="max-w-full max-h-full object-contain" />
              </div>
            </div>
          </motion.section>

          {/* SECTION 5: GIAIC */}
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariant}
            className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12"
          >
            <div className="flex-1 space-y-4 text-center md:text-right">
              <h3 className="text-xl font-bold text-blue-400 uppercase tracking-widest border-b border-blue-500/20 pb-2">
                Advanced Specialization
              </h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                I dedicated <span className="text-white font-bold">3 years</span> to Mastering <span className="text-blue-400 font-bold">AI and Web Development</span> at the <span className="text-white font-bold">Governor Initiative (GIAIC)</span>, positioning myself at the forefront of engineering.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-40 h-40 bg-gray-900/40 backdrop-blur-sm border border-blue-500/30 rounded-2xl flex items-center justify-center p-4 relative">
                <Image src="/giaic-logo.png" alt="GIAIC Logo" width={160} height={160} className="max-w-full max-h-full object-contain" />
              </div>
            </div>
          </motion.section>

          {/* FUTURE PROSPECTS */}
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariant}
            className="space-y-6 text-center pt-10"
          >
            <h3 className="text-2xl font-bold text-blue-500 uppercase tracking-[0.3em]">
              Future Prospects
            </h3>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Equipped with a solid foundation in <span className="text-white font-bold">Graphic Design, Web Architecture, and Artificial Intelligence</span>, I am now focused on building autonomous AI agents and decentralized systems. My goal is to drive innovation that simplifies complex human tasks through elegant code.
            </p>
          </motion.section>

          {/* VISION BOX */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
            className="bg-gray-900/40 backdrop-blur-md border border-blue-500/30 p-8 rounded-2xl text-center shadow-2xl shadow-blue-900/10"
          >
            <h3 className="text-xl font-bold text-white uppercase mb-4">The Vision</h3>
            <p className="text-gray-400 italic leading-relaxed">
              &ldquo;To transform abstract ideas into scalable digital products, bridging the gap between human imagination and machine execution.&rdquo;
            </p>
          </motion.div>

        </div>
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