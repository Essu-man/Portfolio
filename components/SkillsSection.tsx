'use client';

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Code,
  Database,
  Flame,
  Layers,
  Smartphone,
  Zap,
  Sparkles,
  Cpu,
  Globe,
} from "lucide-react";

interface SkillsSectionProps {
  skills?: {
    icon: React.ReactNode;
    title: string;
    level: number;
  }[];
}

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const defaultSkills = [
    { icon: <Zap size={24} className="text-blue-400" />, title: "React", level: 90 },
    { icon: <Code size={24} className="text-cyan-400" />, title: "TypeScript", level: 85 },
    { icon: <Flame size={24} className="text-blue-500" />, title: "Firebase", level: 80 },
    { icon: <Sparkles size={24} className="text-cyan-500" />, title: "Django", level: 85 },
    { icon: <Cpu size={24} className="text-blue-600" />, title: "Python", level: 90 },
    { icon: <Globe size={24} className="text-cyan-400" />, title: "Expo", level: 75 },
    { icon: <Database size={24} className="text-blue-500" />, title: "Neon DB", level: 80 },
    { icon: <Layers size={24} className="text-cyan-600" />, title: "Vercel", level: 85 },
    { icon: <Smartphone size={24} className="text-blue-400" />, title: "Git", level: 90 },
    { icon: <Code size={24} className="text-blue-500" />, title: "Next.js", level: 85 },
    { icon: <Database size={24} className="text-cyan-500" />, title: "PostgreSQL", level: 80 },
    { icon: <Globe size={24} className="text-blue-400" />, title: "Tailwind CSS", level: 90 },
  ];

  const skillsToDisplay = skills || defaultSkills;

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-12 sm:py-20 bg-gradient-to-br from-slate-900 via-blue-950/30 to-slate-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{ backgroundSize: "200% auto" }}
          >
            My Skills & Technologies
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6 rounded-full"
            animate={{
              width: [100, 120, 100],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.p 
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Here are the technologies I work with to bring ideas to life
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsToDisplay.map((skill, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="group">
                  <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:bg-slate-800/40">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30">
                          {skill.icon}
                        </div>
                        <span className="text-white font-semibold text-lg">
                          {skill.title}
                        </span>
                      </div>
                      <span className="text-blue-300 font-medium text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="relative">
                      <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: index * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                      
                      {/* Animated dots */}
                      <div className="flex justify-between mt-2">
                        {[0, 25, 50, 75, 100].map((point) => (
                          <motion.div
                            key={point}
                            className="w-1 h-1 rounded-full bg-blue-400/30"
                            animate={isInView ? { 
                              scale: [1, 1.5, 1],
                              opacity: [0.3, 0.8, 0.3]
                            } : { scale: 1, opacity: 0.3 }}
                            transition={{ 
                              duration: 2,
                              delay: (index * 0.1) + (point * 0.01),
                              repeat: Infinity,
                              repeatType: "reverse"
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-full">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-blue-300 text-sm font-medium">
                Always learning and improving
              </span>
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;