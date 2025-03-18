import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDownCircle, Code, Database, Smartphone } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  specializations?: string[];
}

const HeroSection = ({
  name = "John Doe",
  title = "Full-Stack Developer",
  specializations = ["React", "TypeScript", "Expo", "Django"],
}: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm <span className="text-blue-400">{name}</span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-4xl font-semibold mb-6 text-slate-200"
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
                className="px-4 py-2 bg-slate-700 rounded-full text-blue-300 font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, backgroundColor: "#1e40af" }}
              >
                {spec}
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
            className="bg-slate-700/50 p-6 rounded-lg text-center"
            whileHover={{
              y: -10,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex justify-center mb-4">
              <Code size={40} className="text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <p className="text-slate-300">
              Creating responsive and interactive user experiences with React
              and TypeScript
            </p>
          </motion.div>

          <motion.div
            className="bg-slate-700/50 p-6 rounded-lg text-center"
            whileHover={{
              y: -10,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex justify-center mb-4">
              <Smartphone size={40} className="text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mobile</h3>
            <p className="text-slate-300">
              Building cross-platform mobile applications with Expo and React
              Native
            </p>
          </motion.div>

          <motion.div
            className="bg-slate-700/50 p-6 rounded-lg text-center"
            whileHover={{
              y: -10,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex justify-center mb-4">
              <Database size={40} className="text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <p className="text-slate-300">
              Developing robust server-side applications with Django and RESTful
              APIs
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
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
            whileHover={{ y: 5 }}
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
