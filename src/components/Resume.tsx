import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Award, 
  Briefcase, 
  Code, 
  Calendar,
  MapPin,
  Star
} from 'lucide-react';

const Resume = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Vivekananda Institute of Management',
      period: '2022 - 2025',
      grade: 'Grade A',
      location: 'India',
    },
  ];

  const certifications = [
    {
      name: 'eJPT (eLearnSecurity Junior Penetration Tester)',
      issuer: 'INE/eLearnSecurity',
      date: '2025',
      status: 'Certified',
    },
    {
      name: 'Cisco Ethical Hacking Certificate',
      issuer: 'Cisco Networking Academy',
      date: '2025',
      status: 'Certified',
    },
  ];

  const experience = [
    {
      title: 'Cyber Security Intern',
      company: 'Pratinik Infotech',
      period: 'March 2024 - August 2024',
      location: 'Remote',
      responsibilities: [
        'Performed comprehensive vulnerability assessments on web applications and network infrastructure',
        'Conducted penetration testing using industry-standard tools and methodologies',
        'Analyzed security logs and identified potential threats and attack patterns',
        'Prepared detailed security reports with remediation recommendations',
        'Collaborated with development teams to implement security best practices',
      ],
    },
  ];

  const technicalSkills = {
    'Penetration Testing': [
      'Metasploit', 'Burp Suite', 'SQLmap', 'Hydra', 'Gobuster', 'Nikto'
    ],
    'Network Analysis': [
      'Wireshark', 'Nmap', 'Nessus', 'OpenVAS', 'Masscan'
    ],
    'Programming': [
      'Python', 'JavaScript', 'React', 'Bash', 'PowerShell'
    ],
    'Operating Systems': [
      'Kali Linux', 'Ubuntu', 'Windows', 'Parrot OS'
    ],
    'Security Frameworks': [
      'OWASP', 'NIST', 'ISO 27001', 'MITRE ATT&CK'
    ],
    'Cryptography': [
      'Hash Functions', 'Symmetric/Asymmetric Encryption', 'Digital Signatures', 'PKI'
    ],
  };

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
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-terminal-bg/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-cyber">Resume</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my education, certifications, and professional experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Education */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-3 text-cyber-green" />
              Education
            </h3>
            <div className="grid gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="card-glow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-1">{edu.degree}</h4>
                        <p className="text-cyber-blue font-medium">{edu.institution}</p>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-muted-foreground mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.period}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-1" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-cyber-green text-cyber-green">
                      <Star className="w-3 h-3 mr-1" />
                      {edu.grade}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="mr-3 text-cyber-blue" />
              Certifications
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {certifications.map((cert, index) => (
                <Card key={index} className="card-glow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-2">{cert.name}</h4>
                        <p className="text-cyber-blue font-medium mb-2">{cert.issuer}</p>
                        <p className="text-muted-foreground text-sm">{cert.date}</p>
                      </div>
                      <Badge className="bg-cyber-green/10 text-cyber-green border-cyber-green">
                        {cert.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Briefcase className="mr-3 text-cyber-purple" />
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card key={index} className="card-glow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h4>
                        <p className="text-cyber-blue font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-muted-foreground mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-cyber-green mt-2 mr-3 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Code className="mr-3 text-cyber-green" />
              Technical Skills
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(technicalSkills).map(([category, skills], index) => (
                <Card key={index} className="card-glow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-cyber-blue">{category}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="border-muted text-muted-foreground hover:border-cyber-green hover:text-cyber-green transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;