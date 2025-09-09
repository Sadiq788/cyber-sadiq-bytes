import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden border-b-0">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-terminal-bg via-background to-card opacity-90" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24">
        {/* Terminal Prompt Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="terminal-text text-sm mb-4"
        >
          <span className="text-cyber-blue">visitor@portfolio:~$</span> cat introduction.txt
        </motion.div>

        {/* Name with Typing Effect */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="text-foreground">Mohammed</span>{' '}
          <span className="text-cyber bg-gradient-to-r from-cyber-green to-cyber-blue bg-clip-text text-transparent">
            Sadiq
          </span>
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-muted-foreground"
        >
          <span className="text-cyber-green">Ethical Hacker</span>
          <span className="text-foreground"> | </span>
          <span className="text-cyber-blue">CTF Player</span>
        </motion.div>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Passionate cybersecurity professional specializing in{' '}
          <span className="text-cyber-green">penetration testing</span>,{' '}
          <span className="text-cyber-blue">vulnerability assessment</span>, and{' '}
          <span className="text-cyber-purple">malware analysis</span>. 
          Ready to secure your digital infrastructure.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            onClick={scrollToContact}
            className="btn-hero group"
            size="lg"
          >
            <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Hire Me
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-cyber-green/50 text-cyber-green hover:bg-cyber-green/10 hover:border-cyber-green transition-all duration-300"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 max-w-md sm:max-w-none mx-auto"
        >
          {[
            { number: '50+', label: 'CTF Boxes Solved' },
            { number: 'Top 3%', label: 'TryHackMe Ranking' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8 + index * 0.1 }}
              className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/30"
            >
              <div className="text-2xl sm:text-3xl font-bold text-cyber-green mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
          onClick={scrollToAbout}
          className="animate-bounce hover:text-cyber-green transition-colors"
        >
          <ChevronDown className="h-8 w-8 mx-auto" />
        </motion.button>
      </div>

    </section>
  );
};

export default Hero;