import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ExternalLink, 
  Github, 
  Brain, 
  Heart, 
  Shield,
  Code,
  Database,
  Zap
} from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Malware Detection Using Machine Learning',
      description: 'Advanced malware detection system that analyzes PE (Portable Executable) files using machine learning algorithms. Implements Random Forest classifier with feature extraction from executable files to identify malicious software with high accuracy.',
      longDescription: 'This project focuses on developing an intelligent malware detection system using machine learning techniques. The system extracts various features from PE files including file headers, section information, imports, and behavioral patterns. Uses Random Forest algorithm for classification with over 95% accuracy.',
      icon: Shield,
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'PE File Analysis', 'Random Forest'],
      features: [
        'PE file header analysis',
        'Feature extraction from executable files',
        'Random Forest ML model',
        'Real-time malware detection',
        'High accuracy classification',
        'Detailed threat reports'
      ],
      github: 'https://github.com/Sadiq788/malware-detection-ml',
      demo: '#',
      status: 'Completed',
      color: 'cyber-green'
    },
    {
      title: 'Emotion Detection from Text',
      description: 'Natural Language Processing project that analyzes text sentiment and emotion classification. Features emoji-enhanced output for better visualization of detected emotions and sentiment analysis results.',
      longDescription: 'A comprehensive NLP solution for emotion detection and sentiment analysis. The system processes text input and identifies emotional states using advanced machine learning models. Includes emoji integration for intuitive emotion representation.',
      icon: Heart,
      tech: ['Python', 'NLTK', 'TensorFlow', 'Keras', 'NLP', 'Emotion AI'],
      features: [
        'Multi-emotion classification',
        'Sentiment polarity analysis',
        'Emoji-enhanced output',
        'Real-time text processing',
        'Pre-trained language models',
        'Interactive web interface'
      ],
      github: 'https://github.com/Sadiq788/emotion-detection-nlp',
      demo: '#',
      status: 'Completed',
      color: 'cyber-blue'
    },
    {
      title: 'Cybersecurity Toolkit',
      description: 'Collection of custom cybersecurity tools and scripts for penetration testing, vulnerability assessment, and security automation. Includes network scanners, payload generators, and exploitation frameworks.',
      longDescription: 'A comprehensive toolkit designed for cybersecurity professionals. Features custom-built tools for various security testing scenarios including network reconnaissance, vulnerability scanning, and automated exploitation.',
      icon: Code,
      tech: ['Python', 'Bash', 'Nmap', 'Metasploit', 'Custom Scripts', 'Automation'],
      features: [
        'Network reconnaissance tools',
        'Automated vulnerability scanning',
        'Custom payload generators',
        'Report generation system',
        'Multi-platform compatibility',
        'Modular architecture'
      ],
      github: 'https://github.com/Sadiq788/cybersecurity-toolkit',
      demo: '#',
      status: 'In Progress',
      color: 'cyber-purple'
    },
    {
      title: 'Secure Web Application',
      description: 'Full-stack web application built with security-first approach. Implements OWASP best practices, secure authentication, input validation, and comprehensive logging for security monitoring.',
      longDescription: 'A demonstration of secure web development practices. This project showcases implementation of security controls, secure coding practices, and defensive programming techniques in a real-world application.',
      icon: Database,
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'OWASP'],
      features: [
        'Secure authentication system',
        'Input validation & sanitization',
        'SQL injection prevention',
        'XSS protection mechanisms',
        'Security headers implementation',
        'Comprehensive audit logging'
      ],
      github: 'https://github.com/Sadiq788/secure-web-app',
      demo: '#',
      status: 'Completed',
      color: 'cyber-green'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-cyber">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-green to-cyber-blue mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcase of cybersecurity and development projects demonstrating technical expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <Card className="card-glow h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-${project.color}/10`}>
                      <project.icon className={`w-6 h-6 text-${project.color}`} />
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`border-${project.color}/50 text-${project.color}`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-cyber-green transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="border-muted text-muted-foreground hover:border-cyber-blue hover:text-cyber-blue transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <Zap className="w-3 h-3 mr-2 text-cyber-green flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-cyber-green/50 text-cyber-green hover:bg-cyber-green/10"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-cyber-blue/50 text-cyber-blue hover:bg-cyber-blue/10"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Projects Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Card className="card-cyber max-w-3xl mx-auto">
            <CardContent className="p-8">
              <Brain className="w-12 h-12 text-cyber-purple mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">
                More Projects Coming Soon
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm constantly working on new cybersecurity tools and applications. 
                Check out my GitHub for the latest updates and experimental projects.
              </p>
              <Button className="btn-hero" onClick={() => window.open('https://github.com/Sadiq788', '_blank')}>
                <Github className="w-4 h-4 mr-2" />
                View All Projects
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;