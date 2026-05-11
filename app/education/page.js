"use client"; // Required for Framer Motion

import Link from "next/link";
import { motion } from "framer-motion";

export default function Education() {
  // Variants for the main page title
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  // Variants for the container (staggering the reveal)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  const educationData = [
    {
      title: "Educational Foundation (1 to 8 Class)",
      institution: "Beacon Askari Secondary School",
      date: "2013 - 2025",
    },
    {
      title: "Graphic Designing Course (1 Year)",
      institution: "Saylani Mass IT Training (SMIT)",
      date: "2023 - 2024",
    },
    {
      title: "Secondary Excellence (Class 9 & 10)",
      institution: "Speciss Secondary School",
      date: "2026 - 2027",
    },
    {
      title: "AI & Web Development (3 Years)",
      institution: "Governor Initiative For Cloud Applied AI",
      date: "2023 - 2026",
    },
  ];

  const skillsData = [
    "Next.js", "React", "JavaScript",
    "Tailwind CSS", "Node.js", "HTML & CSS",
    "MongoDB", "Git & GitHub", "AI Development",
    "Graphic Designing", "Prompt Engineering", "AI Agents"
  ];

  return (
    /* GRADIENT BACKGROUND APPLIED HERE */
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-[#0a192f] text-white selection:bg-blue-500/30 font-sans">
      <header className="flex flex-col md:flex-row md:justify-between md:items-center px-4 py-4 md:px-10 md:py-6 border-b border-blue-500/30 bg-black/80 backdrop-blur-md fixed top-0 left-0 w-full z-50 gap-4">
        <h1 className="text-xl md:text-2xl font-extrabold tracking-tighter text-blue-500 text-center md:text-left">
          WAHIB PORTFOLIO
        </h1>
        <nav className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-8 text-xs sm:text-sm font-semibold">
          <Link href="/" className="hover:text-blue-400 transition-colors uppercase tracking-[0.2em]">Home</Link>
          <Link href="/about" className="text-blue-400 uppercase tracking-[0.2em]">About</Link>
          <Link href="/education" className="hover:text-blue-400 transition-colors uppercase tracking-[0.2em]">Education</Link>
          <Link href="/contact" className="hover:text-blue-400 transition-colors uppercase tracking-[0.2em]">Contact</Link>
           <Link href="/projects" className="hover:text-blue-400 transition-colors uppercase tracking-[0.2em]">Projects</Link>
        </nav>
      </header>

      <main className="pt-32 pb-20 px-6">
        
        {/* Animated Heading Section */}
        <section className="text-center mb-12 overflow-hidden">
          <motion.h2 
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-black text-blue-500 tracking-tight uppercase"
          >
            Education & Skills
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-gray-400 mt-4 text-sm max-w-md mx-auto"
          >
            My academic journey and professional technical stack
          </motion.p>
        </section>

        {/* Education Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-2"
          >
            <span>🎓</span> Education
          </motion.h3>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6"
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 border border-blue-500/20 rounded-xl bg-gray-900/40 backdrop-blur-sm hover:border-blue-500/60 transition-all duration-300 shadow-xl shadow-blue-900/10"
              >
                <h4 className="text-sm font-medium text-gray-400 uppercase tracking-widest">
                  {edu.title}
                </h4>
                <p className="text-blue-400 text-xl font-black mt-1">
                  {edu.institution}
                </p>
                <p className="text-xs text-gray-500 mt-2 italic font-mono">{edu.date}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="max-w-4xl mx-auto">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-2"
          >
            <span>⚡</span> Skills
          </motion.h3>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {skillsData.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                className="p-4 border border-blue-500/20 rounded-lg bg-gray-900/30 text-center text-xs font-bold uppercase tracking-wider hover:border-blue-500 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>

      <footer className="text-center p-10 border-t border-blue-500/10 text-gray-600 bg-black/50">
        <p className="text-xs tracking-widest uppercase">
          © 2026 Wahib PORTFOLIO • ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  );
}