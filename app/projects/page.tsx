"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ExternalLink, 
  Terminal, 
  Code2, 
  Cpu, 
  Globe, 
  ShoppingCart, 
  Wrench, 
  Gamepad2 
} from "lucide-react";

export default function Projects() {
  useEffect(() => {
    document.title = "Projects | Wahib Portfolio";
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  const projectsData = [
    {
      title: "Game Genesis Lobby",
      description: "A secure, high-performance login portal and lobby system for an immersive gaming studio experience.",
      tech: ["Next.js", "Auth", "Tailwind"],
      link: "https://lobby.gamegenesis.studio/login",
      github: "#",
      icon: <Gamepad2 className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Motomat Auto Parts",
      description: "A specialized e-commerce platform for bike/car spare parts and high-end vehicle modifications.",
      tech: ["Next.js", "Tailwind CSS", "UI/UX"],
      link: "https://motomat-hackathon.vercel.app/",
      github: "#",
      icon: <Wrench className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Earnify AI",
      description: "A sophisticated AI agent built to handle scheduling and automated email responses using GPT-4.",
      tech: ["Next.js", "OpenAI", "TypeScript"],
      link: "https://earnify-topaz.vercel.app/",
      github: "#",
      icon: <Cpu className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Gadget Store",
      description: "A specialized electronics marketplace featuring high-end tech gadgets and seamless user experience.",
      tech: ["Next.js", "Tailwind CSS", "Vercel"],
      link: "https://gadets-hackathon.vercel.app/",
      github: "#",
      icon: <ShoppingCart className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Marketplace Nebula",
      description: "A high-performance modern storefront with real-time inventory and Stripe integration.",
      tech: ["React", "Tailwind", "Stripe"],
      link: "https://hackathon-wahib12.vercel.app/",
      github: "#",
      icon: <Globe className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Crypto Wallet UI",
      description: "A secure and sleek dashboard designed for tracking digital assets and transaction history.",
      tech: ["Tailwind CSS", "React", "Next.js"],
      link: "https://wallet-wahib-css.vercel.app/wallet",
      github: "#",
      icon: <Code2 className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Cakes & Bakes",
      description: "A beautiful, responsive landing page for a premium bakery showcasing products and orders.",
      tech: ["CSS", "HTML", "JavaScript"],
      link: "https://cakes-psi.vercel.app/",
      github: "#",
      icon: <Code2 className="w-6 h-6 text-blue-500" />
    }
  ];

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
          <Link href="/projects" className="text-blue-400 uppercase tracking-[0.2em]">Projects</Link>
          <Link href="/contact" className="hover:text-blue-400 transition-colors uppercase tracking-[0.2em]">Contact</Link>
        </nav>
      </header>

      <main className="pt-40 pb-20 px-6">
        <section className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black text-blue-500 tracking-tighter uppercase">
              Featured Work
            </h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-xl mx-auto text-sm md:text-base italic">
              "Transforming complex ideas into digital reality."
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative p-8 border border-blue-500/20 rounded-3xl bg-gray-900/40 backdrop-blur-md hover:border-blue-500/50 transition-all duration-300 shadow-xl shadow-blue-900/5"
              >
                <div className="mb-6 flex justify-between items-start">
                  <div className="p-3 bg-blue-500/10 rounded-2xl group-hover:bg-blue-500/20 transition-colors">
                    {project.icon}
                  </div>
                  <div className="flex gap-4">
                    <Link href={project.github} className="text-gray-500 hover:text-white transition-colors">
                      <Terminal className="w-5 h-5" />
                    </Link>
                    <Link href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8 h-16 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-blue-500/5 border border-blue-500/20 rounded-full text-blue-400">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>

      <footer className="text-center p-10 border-t border-blue-500/10 text-gray-600 bg-black/50">
        <p className="text-xs tracking-widest uppercase">
          © 2026 WAHIB PORTFOLIO • ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  );
}