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

  const backgroundColors = [
    "from-purple-700 via-indigo-600 to-blue-700",
    "from-pink-600 via-purple-600 to-indigo-700",
    "from-blue-600 via-cyan-500 to-emerald-600",
  ];

  const randomColor =
    backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

  return (
    <section
      ref={scope}
      className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden"
    >
      {/* Animated background */}
      <div
        id="background-gradient"
        className={`absolute inset-0 bg-gradient-to-br ${randomColor} opacity-0 z-0`}
      />

      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/20"
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

      <div className="container mx-auto max-w-4xl z-10 text-white">
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
            <motion.h1 className="text-4xl md:text-6xl font-bold relative z-10">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
                {name}
              </span>
            </motion.h1>
            <motion.div
              className="absolute -inset-1 rounded-lg bg-gradient-to-r from-pink-500 to-violet-500 opacity-30 blur-xl"
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
            className="text-2xl md:text-4xl font-semibold mb-6 text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {title}
          </motion.h2>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {specializations.map((spec, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium relative overflow-hidden group"
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center border border-white/20 relative overflow-hidden group"
            whileHover={{
              y: -10,
              boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.5)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
            <h3 className="text-xl font-semibold mb-2 relative z-10">
              Frontend
            </h3>
            <p className="text-white/80 relative z-10">
              Creating responsive and interactive user experiences with React
              and TypeScript
            </p>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center border border-white/20 relative overflow-hidden group"
            whileHover={{
              y: -10,
              boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.5)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
            <h3 className="text-xl font-semibold mb-2 relative z-10">Mobile</h3>
            <p className="text-white/80 relative z-10">
              Building cross-platform mobile applications with Expo and React
              Native
            </p>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center border border-white/20 relative overflow-hidden group"
            whileHover={{
              y: -10,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
            <h3 className="text-xl font-semibold mb-2 relative z-10">
              Backend
            </h3>
            <p className="text-white/80 relative z-10">
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
            className="inline-flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300"
            whileHover={{
              y: 5,
              boxShadow: "0 5px 15px rgba(255, 255, 255, 0.2)",
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
