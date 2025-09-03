import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Shield, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/mohammed-sadiq',
      label: 'GitHub',
      color: 'hover:text-cyber-green'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/mohammed-sadiq',
      label: 'LinkedIn',
      color: 'hover:text-cyber-blue'
    },
    {
      icon: Mail,
      href: 'mailto:mohammed.sadiq@example.com',
      label: 'Email',
      color: 'hover:text-cyber-purple'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Resume', href: '#resume' },
    { name: 'Projects', href: '#projects' },
    { name: 'CTF', href: '#ctf' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-terminal-bg border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Shield className="h-8 w-8 text-cyber-green" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyber-blue rounded-full animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Mohammed Sadiq</h3>
                <p className="text-sm text-cyber-green">Cybersecurity Analyst</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Passionate about cybersecurity, ethical hacking, and protecting digital infrastructure. 
              Always ready for new challenges and collaborations.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`p-2 rounded-lg bg-muted/20 text-muted-foreground transition-all duration-300 ${link.color} hover:scale-110`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-cyber-green transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm">
                Available for cybersecurity opportunities and collaborations.
              </p>
              <div className="space-y-2">
                <a
                  href="mailto:mohammed.sadiq@example.com"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-cyber-green transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>mohammed.sadiq@example.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© {currentYear} Mohammed Sadiq. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>using React + TypeScript + Tailwind</span>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground">
              This portfolio is open source and available on{' '}
              <a
                href="https://github.com/mohammed-sadiq/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-blue hover:underline"
              >
                GitHub
              </a>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-green via-cyber-blue to-cyber-purple opacity-50" />
    </footer>
  );
};

export default Footer;