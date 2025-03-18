import React, { useEffect } from "react";
import { motion, useAnimate, useInView } from "framer-motion";
import {
  ArrowDownCircle,
  Code,
  Database,
  Smartphone,
  Sparkles,
} from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  specializations?: string[];
}

const HeroSection = ({
  name = "John Doe",
  title = "Full-Stack Developer",
  specializations = ["React", "TypeScript", "Expo", "FastAPI"],
}: HeroSectionProps) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    if (isInView) {
      animate("#background-gradient", { opacity: [0, 1] }, { duration: 1.5 });
    }
  }, [isInView, animate]);

  // Removed background colors as we're using SVG patterns now

  return (
    <section
      ref={scope}
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 relative overflow-hidden bg-gray-900"
    >
      {/* Animated background patterns */}
      <div id="background-gradient" className="absolute inset-0 opacity-0 z-0">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="dots"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="rgba(108, 99, 255, 0.1)" />
            </pattern>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(108, 99, 255, 0.05)" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0.05)" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
          <rect width="100%" height="100%" fill="url(#grad1)" />
        </svg>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#6c63ff]/20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.2 + Math.random() * 0.5,
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [null, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5 + Math.random() * 10,
              repeatType: "loop",
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
            style={{ scale: 0.5 + Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-4xl z-10 text-white w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <motion.div
            className="inline-block relative mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.h1 className="text-3xl sm:text-4xl md:text-6xl font-bold relative z-10 text-white">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c63ff] to-pink-500">
                {name}
              </span>
            </motion.h1>
            <motion.div
              className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#6c63ff] to-pink-500 opacity-30 blur-xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          </motion.div>

          <motion.h2
            className="text-xl sm:text-2xl md:text-4xl font-semibold mb-6 text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {title}
          </motion.h2>

          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {specializations.map((spec, index) => (
              <motion.span
                key={index}
                className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-800 border border-gray-700 rounded-full text-gray-200 text-sm sm:text-base font-medium relative overflow-hidden group shadow-sm"
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-[#6c63ff] to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">{spec}</span>
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            className="bg-gray-800 p-6 rounded-xl text-center border border-gray-700 relative overflow-hidden group shadow-md"
            whileHover={{
              y: -10,
              boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.5)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div className="absolute inset-0 bg-gradient-to-br from-[#6c63ff]/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="flex justify-center mb-4 relative z-10">
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <Code size={40} className="text-pink-400" />
              </motion.div>
            </div>
            <h3 className="text-xl font-semibold mb-2 relative z-10 text-white">
              Frontend
            </h3>
            <p className="text-gray-300 relative z-10">
              Creating responsive and interactive user experiences with React
              and TypeScript
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded-xl text-center border border-gray-700 relative overflow-hidden group shadow-md"
            whileHover={{
              y: -10,
              boxShadow: "0 10px 25px -5px rgba(108, 99, 255, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div className="absolute inset-0 bg-gradient-to-br from-[#6c63ff]/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="flex justify-center mb-4 relative z-10">
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <Smartphone size={40} className="text-violet-400" />
              </motion.div>
            </div>
            <h3 className="text-xl font-semibold mb-2 relative z-10 text-white">
              Mobile
            </h3>
            <p className="text-gray-300 relative z-10">
              Building cross-platform mobile applications with Expo and React
              Native
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded-xl text-center border border-gray-700 relative overflow-hidden group shadow-md"
            whileHover={{
              y: -10,
              boxShadow: "0 10px 25px -5px rgba(108, 99, 255, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div className="absolute inset-0 bg-gradient-to-br from-[#6c63ff]/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="flex justify-center mb-4 relative z-10">
              <motion.div
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <Sparkles size={40} className="text-blue-400" />
              </motion.div>
            </div>
            <h3 className="text-xl font-semibold mb-2 relative z-10 text-white">
              Backend
            </h3>
            <p className="text-gray-300 relative z-10">
              Developing robust server-side applications with FastAPI and modern
              Python
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <motion.a
            href="#skills"
            className="inline-flex items-center gap-2 text-white bg-[#6c63ff] px-6 py-3 rounded-full border border-[#6c63ff]/20 hover:bg-[#5b54e0] transition-colors duration-300 shadow-md"
            whileHover={{
              y: 5,
              boxShadow: "0 5px 15px rgba(108, 99, 255, 0.4)",
            }}
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatType: "loop",
            }}
          >
            <span>Explore my skills</span>
            <ArrowDownCircle size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
