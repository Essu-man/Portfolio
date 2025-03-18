import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

const Header = ({ onNavigate = () => {} }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (section: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(section);
  };

  const navItems = [
    { name: "Home", section: "home" },
    { name: "Skills", section: "skills" },
    { name: "Projects", section: "projects" },
    { name: "Contact", section: "contact" },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:contact@example.com",
      label: "Email",
    },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 bg-background ${isScrolled ? "shadow-md bg-opacity-90 backdrop-blur-sm" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          className="text-xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-primary">Dev</span>Portfolio
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item, index) => (
              <motion.li
                key={item.section}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <button
                  onClick={() => handleNavigation(item.section)}
                  className="text-foreground hover:text-primary transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </button>
              </motion.li>
            ))}
          </ul>

          <div className="flex space-x-3">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + 0.1 * index }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-background border-t"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.section}>
                  <button
                    onClick={() => handleNavigation(item.section)}
                    className="text-foreground hover:text-primary transition-colors w-full text-left py-2"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex space-x-4 mt-6 pt-6 border-t">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
