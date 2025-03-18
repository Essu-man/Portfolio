import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";

interface FooterProps {
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const Footer = ({
  socialLinks = {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:contact@example.com",
  },
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="w-full bg-slate-900 text-white py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {currentYear} Developer Portfolio. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.github && (
              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </motion.a>
            )}

            {socialLinks.linkedin && (
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
              </motion.a>
            )}

            {socialLinks.twitter && (
              <motion.a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter size={20} />
              </motion.a>
            )}

            {socialLinks.email && (
              <motion.a
                href={socialLinks.email}
                className="hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
