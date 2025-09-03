'use client';

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Code } from "lucide-react";

interface FooterProps {
  socialLinks?: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

const Footer = ({ socialLinks }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    {
      icon: <Github size={20} />,
      href: socialLinks?.github || "#",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: <Linkedin size={20} />,
      href: socialLinks?.linkedin || "#",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: <Mail size={20} />,
      href: socialLinks?.email || "#",
      label: "Email",
      color: "hover:text-red-400",
    },
  ];

  return (
    <footer className="bg-gradient-to-t from-slate-900 via-ocean-950/50 to-slate-900 border-t border-ocean-500/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-ocean-500/5 to-electric-500/5 blur-2xl"
            style={{
              width: 100 + Math.random() * 200,
              height: 100 + Math.random() * 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 20 - 10],
              y: [0, Math.random() * 20 - 10],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              repeat: Infinity,
              duration: 8 + Math.random() * 10,
              repeatType: "mirror",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-ocean-500 to-electric-500">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Portfolio</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md mx-auto md:mx-0">
              Passionate about creating innovative solutions and delivering 
              exceptional user experiences through modern web technologies.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {socialIcons.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-slate-800/50 border border-ocean-500/30 text-ocean-300 transition-all duration-300 ${social.color}`}
                whileHover={{ 
                  scale: 1.1, 
                  y: -3,
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  borderColor: "rgba(59, 130, 246, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm mb-2">
              © {currentYear} All rights reserved.
            </p>
            <p className="text-gray-500 text-xs flex items-center justify-center md:justify-end">
              Made with{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="mx-1"
              >
                <Heart size={12} className="text-red-500 fill-current" />
              </motion.span>{" "}
              and modern technologies
            </p>
          </motion.div>
        </div>

        {/* Bottom Border */}
        <motion.div
          className="mt-8 pt-8 border-t border-ocean-500/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <p className="text-gray-500 text-xs">
              Built with React, TypeScript, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
