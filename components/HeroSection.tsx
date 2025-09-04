'use client';

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowDownCircle, 
  Code, 
  Database, 
  Smartphone, 
  Sparkles, 
  Zap, 
  Globe
} from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  specializations?: string[];
}

const HeroSection = ({
  name = "Your Name",
  title = "Full-Stack Developer",
  specializations = ["React", "TypeScript", "Django", "Expo", "Firebase", "Vercel"],
}: HeroSectionProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Dynamic background with mouse interaction */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl"
          animate={{
            x: mousePosition.x * 0.05,
            y: mousePosition.y * 0.05,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-cyan-400/15 to-blue-400/15 blur-2xl"
          animate={{
            x: mousePosition.x * -0.03,
            y: mousePosition.y * -0.03,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="url(#gridGradient)"
                strokeWidth="0.3"
              />
            </pattern>
            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
              <stop offset="100%" stopColor="rgba(14, 165, 233, 0.2)" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Subtle floating particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-ocean-400/30 to-electric-400/30"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0.1 + Math.random() * 0.2,
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [null, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 12 + Math.random() * 8,
              repeatType: "loop",
              ease: "easeInOut",
              delay: Math.random() * 10,
            }}
            style={{ scale: 0.3 + Math.random() * 0.7 }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl z-10 text-white w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          {/* Main heading with enhanced animations */}
          <motion.div
            className="inline-block relative mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, type: "spring", stiffness: 100 }}
          >
            <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold relative z-10 text-white leading-tight">
              <motion.span
                className="block text-gray-200 mb-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Hi, I&apos;m{" "}
              </motion.span>
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 block"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                {name}
              </motion.span>
            </motion.h1>
            
            {/* Enhanced glow effect */}
            <motion.div
              className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-ocean-500/30 via-electric-500/30 to-ocean-600/30 blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          </motion.div>

          {/* Subtitle with typewriter effect */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {title}
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              Highly motivated full stack developer with expertise in React, TypeScript, and Django. 
              Proficient in building scalable web and mobile applications using Expo and Firebase.
            </motion.p>
          </motion.div>

          {/* Enhanced tech stack badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            {specializations.map((spec, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.1, duration: 0.6, type: "spring" }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                                 <div className="px-4 sm:px-6 py-2 sm:py-3 bg-slate-800/60 backdrop-blur-sm border border-ocean-500/20 rounded-full text-gray-200 text-sm sm:text-base font-medium relative overflow-hidden shadow-lg hover:border-ocean-400/40 transition-all duration-300">
                   <motion.div
                     className="absolute inset-0 bg-gradient-to-r from-ocean-500/10 to-electric-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     initial={{ x: "-100%" }}
                     whileHover={{ x: "0%" }}
                     transition={{ duration: 0.4 }}
                   />
                   <span className="relative z-10 flex items-center gap-2">
                     {spec === "React" && <Zap className="w-4 h-4 text-ocean-400" />}
                     {spec === "TypeScript" && <Code className="w-4 h-4 text-electric-400" />}
                     {spec === "Django" && <Database className="w-4 h-4 text-ocean-500" />}
                     {spec === "Expo" && <Smartphone className="w-4 h-4 text-electric-500" />}
                     {spec === "Firebase" && <Sparkles className="w-4 h-4 text-ocean-400" />}
                     {spec === "Vercel" && <Globe className="w-4 h-4 text-electric-400" />}
                     {spec}
                   </span>
                 </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced feature cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            whileHover={{ y: -10 }}
          >
                         <div className="bg-slate-800/40 backdrop-blur-lg p-8 rounded-2xl border border-ocean-500/20 relative overflow-hidden shadow-2xl hover:border-ocean-400/40 transition-all duration-500">
               <motion.div 
                 className="absolute inset-0 bg-gradient-to-br from-ocean-500/5 to-electric-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
               />
               <div className="flex justify-center mb-6 relative z-10">
                 <motion.div
                   className="p-4 rounded-2xl bg-gradient-to-br from-ocean-500/20 to-electric-500/20 border border-ocean-400/30"
                   animate={{
                     rotate: [0, 5, -5, 0],
                     scale: [1, 1.05, 1],
                   }}
                   transition={{
                     duration: 4,
                     repeat: Infinity,
                     repeatType: "loop",
                     ease: "easeInOut",
                   }}
                 >
                   <Code size={48} className="text-ocean-400" />
                 </motion.div>
               </div>
               <h3 className="text-2xl font-bold mb-4 relative z-10 text-white text-center">
                 Frontend Development
               </h3>
               <p className="text-gray-300 relative z-10 text-center leading-relaxed">
                 Creating responsive and interactive user experiences with React, TypeScript, and modern CSS frameworks
               </p>
             </div>
          </motion.div>

          <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.6 }}
            whileHover={{ y: -10 }}
          >
                         <div className="bg-slate-800/40 backdrop-blur-lg p-8 rounded-2xl border border-electric-500/20 relative overflow-hidden shadow-2xl hover:border-electric-400/40 transition-all duration-500">
               <motion.div 
                 className="absolute inset-0 bg-gradient-to-br from-electric-500/5 to-ocean-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
               />
               <div className="flex justify-center mb-6 relative z-10">
                 <motion.div
                   className="p-4 rounded-2xl bg-gradient-to-br from-electric-500/20 to-ocean-500/20 border border-electric-400/30"
                   animate={{
                     y: [0, -8, 0],
                     scale: [1, 1.05, 1],
                   }}
                   transition={{
                     duration: 3,
                     repeat: Infinity,
                     repeatType: "loop",
                     ease: "easeInOut",
                   }}
                 >
                   <Smartphone size={48} className="text-electric-400" />
                 </motion.div>
               </div>
               <h3 className="text-2xl font-bold mb-4 relative z-10 text-white text-center">
                 Mobile Development
               </h3>
               <p className="text-gray-300 relative z-10 text-center leading-relaxed">
                 Building cross-platform mobile applications with Expo, React Native, and Firebase integration
               </p>
             </div>
          </motion.div>

          <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.6 }}
            whileHover={{ y: -10 }}
          >
                         <div className="bg-slate-800/40 backdrop-blur-lg p-8 rounded-2xl border border-ocean-500/20 relative overflow-hidden shadow-2xl hover:border-ocean-400/40 transition-all duration-500">
               <motion.div 
                 className="absolute inset-0 bg-gradient-to-br from-ocean-500/5 to-electric-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
               />
               <div className="flex justify-center mb-6 relative z-10">
                 <motion.div
                   className="p-4 rounded-2xl bg-gradient-to-br from-ocean-500/20 to-electric-500/20 border border-ocean-400/30"
                   animate={{
                     rotate: [0, 10, 0, -10, 0],
                     scale: [1, 1.05, 1],
                   }}
                   transition={{
                     duration: 5,
                     repeat: Infinity,
                     repeatType: "loop",
                     ease: "easeInOut",
                   }}
                 >
                   <Database size={48} className="text-ocean-400" />
                 </motion.div>
               </div>
               <h3 className="text-2xl font-bold mb-4 relative z-10 text-white text-center">
                 Backend Development
               </h3>
               <p className="text-gray-300 relative z-10 text-center leading-relaxed">
                 Developing robust server-side applications with Django, Python, and modern database technologies
               </p>
             </div>
          </motion.div>
        </motion.div>

        {/* Enhanced CTA button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.8 }}
        >
          <motion.a
            href="#skills"
            className="group inline-flex items-center gap-3 text-white bg-gradient-to-r from-ocean-600 to-electric-600 px-8 py-4 rounded-full border border-ocean-400/30 hover:from-ocean-500 hover:to-electric-500 transition-all duration-300 shadow-2xl relative overflow-hidden"
            whileHover={{
              y: -5,
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-ocean-400/20 to-electric-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.4 }}
            />
            <motion.span
              className="relative z-10 text-lg font-semibold"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              Explore My Skills
            </motion.span>
            <motion.div
              className="relative z-10"
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatType: "loop",
              }}
            >
              <ArrowDownCircle size={24} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
