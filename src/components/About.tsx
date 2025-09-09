import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Bug, 
  Search, 
  Code, 
  Globe, 
  Database,
  Terminal,
  Lock
} from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Cybersecurity', icon: Shield, level: 90 },
    { name: 'Penetration Testing', icon: Bug, level: 85 },
    { name: 'Malware Analysis', icon: Search, level: 80 },
    { name: 'Python', icon: Code, level: 85 },
    { name: 'React', icon: Globe, level: 75 },
    { name: 'Network Security', icon: Database, level: 80 },
    { name: 'OSINT', icon: Terminal, level: 85 },
    { name: 'Cryptography', icon: Lock, level: 70 },
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t-0">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-cyber">Me</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dedicated cybersecurity professional with a passion for ethical hacking and digital forensics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="card-glow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyber-green to-cyber-blue p-1">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <Shield className="w-8 h-8 text-cyber-green" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Mohammed Sadiq</h3>
                    <div className="flex space-x-2 mt-2">
                      <Badge variant="outline" className="border-cyber-green text-cyber-green">
                        eJPT Certified
                      </Badge>
                      <Badge variant="outline" className="border-cyber-blue text-cyber-blue">
                        Top 3% THM
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Passionate cybersecurity professional with expertise in penetration testing, 
                    vulnerability assessment, and malware analysis. Currently pursuing BCA while 
                    gaining hands-on experience in real-world security scenarios.
                  </p>
                  <p>
                    Skilled in various security tools and frameworks, with a strong foundation 
                    in programming and system administration. Actively participating in CTF 
                    competitions and contributing to the cybersecurity community.
                  </p>
                  <p>
                    Committed to continuous learning and staying updated with the latest 
                    security trends, vulnerabilities, and defensive techniques.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">
              Technical <span className="text-cyber">Skills</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="group"
                >
                  <Card className="card-glow h-full">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 rounded-lg bg-cyber-green/10 group-hover:bg-cyber-green/20 transition-colors">
                          <skill.icon className="w-5 h-5 text-cyber-green" />
                        </div>
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-cyber-green to-cyber-blue h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                      
                      <div className="text-right mt-1">
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Achievement Badges */}
            <motion.div
              variants={itemVariants}
              className="mt-8"
            >
              <h4 className="text-lg font-semibold mb-4 text-foreground">Key Achievements</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'eJPT Certified',
                  'Cisco Ethical Hacking',
                  'Top 3% TryHackMe',
                  'CloudSEK CTF 2025',
                  '50+ CTF Boxes',
                  'Machine Learning',
                ].map((achievement) => (
                  <Badge
                    key={achievement}
                    variant="outline"
                    className="border-cyber-purple/50 text-cyber-purple hover:bg-cyber-purple/10 transition-colors"
                  >
                    {achievement}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;