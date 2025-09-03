import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Flag, 
  Trophy, 
  Target, 
  FileText, 
  ExternalLink,
  Search,
  Radio,
  Database,
  Shield,
  Award,
  TrendingUp
} from 'lucide-react';

const CTF = () => {
  const ctfStats = [
    {
      platform: 'TryHackMe',
      rank: 'Top 3% Globally',
      achievement: 'Gold Rank',
      boxes: '50+',
      icon: Shield,
      color: 'cyber-green'
    },
    {
      platform: 'HackTheBox',
      rank: 'Active Member',
      achievement: 'Multiple Boxes',
      boxes: '25+',
      icon: Target,
      color: 'cyber-blue'
    }
  ];

  const cloudSEKChallenges = [
    {
      title: 'OSINT Investigation',
      description: 'Utilized Epieos platform for comprehensive Open Source Intelligence gathering. Tracked digital footprints across multiple platforms and social media to uncover critical information.',
      tool: 'Epieos',
      category: 'OSINT',
      icon: Search,
      skills: ['Social Media Investigation', 'Digital Footprinting', 'Data Correlation', 'Information Gathering'],
      difficulty: 'Medium'
    },
    {
      title: 'Audio Steganography',
      description: 'Decoded hidden Morse code messages embedded within audio files. Applied audio analysis techniques and Morse code decryption to extract concealed flags.',
      tool: 'Audio Analysis Tools',
      category: 'Steganography',
      icon: Radio,
      skills: ['Audio Forensics', 'Morse Code', 'Steganography', 'Signal Processing'],
      difficulty: 'Hard'
    },
    {
      title: 'GraphQL Exploitation',
      description: 'Exploited GraphQL endpoints to retrieve sensitive information and flags. Demonstrated understanding of API security vulnerabilities and injection techniques.',
      tool: 'GraphQL',
      category: 'Web Exploitation',
      icon: Database,
      skills: ['API Security', 'GraphQL', 'Web Exploitation', 'Injection Attacks'],
      difficulty: 'Hard'
    }
  ];

  const achievements = [
    { name: 'CloudSEK CTF 2025 Participant', icon: Flag },
    { name: 'TryHackMe Gold Rank', icon: Award },
    { name: 'Top 3% Global Ranking', icon: TrendingUp },
    { name: '50+ CTF Boxes Completed', icon: Trophy },
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
    <section id="ctf" className="py-20 px-4 sm:px-6 lg:px-8 bg-terminal-bg/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            CTF <span className="text-cyber">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-green to-cyber-blue mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Capture The Flag competitions and cybersecurity challenges showcase
          </p>
        </motion.div>

        {/* CTF Platform Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 mb-16"
        >
          {ctfStats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="card-glow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-lg bg-${stat.color}/10`}>
                      <stat.icon className={`w-8 h-8 text-${stat.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{stat.platform}</h3>
                      <p className={`text-${stat.color} font-semibold`}>{stat.rank}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyber-green">{stat.boxes}</div>
                      <div className="text-sm text-muted-foreground">Boxes Solved</div>
                    </div>
                    <div className="text-center">
                      <Badge variant="outline" className={`border-${stat.color} text-${stat.color}`}>
                        {stat.achievement}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CloudSEK CTF 2025 Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="card-glow bg-gradient-to-br from-cyber-green/5 to-cyber-blue/5 border-cyber-green/30">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-cyber-green/10">
                  <Flag className="w-8 h-8 text-cyber-green" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold">
                CloudSEK CTF 2025 Participation
              </CardTitle>
              <p className="text-muted-foreground">
                Successfully participated in CloudSEK CTF 2025, demonstrating advanced cybersecurity skills
              </p>
            </CardHeader>
            
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                {cloudSEKChallenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-cyber-blue/10">
                        <challenge.icon className="w-5 h-5 text-cyber-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{challenge.title}</h4>
                        <Badge variant="outline" className="text-xs border-cyber-purple text-cyber-purple">
                          {challenge.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {challenge.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Primary Tool:</span>
                        <Badge variant="outline" className="text-xs">
                          {challenge.tool}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Difficulty:</span>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            challenge.difficulty === 'Hard' 
                              ? 'border-red-500 text-red-500' 
                              : 'border-yellow-500 text-yellow-500'
                          }`}
                        >
                          {challenge.difficulty}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <span className="text-xs text-muted-foreground">Skills Applied:</span>
                      <div className="flex flex-wrap gap-1">
                        {challenge.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex}
                            variant="outline" 
                            className="text-xs border-muted text-muted-foreground"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button className="btn-hero">
                  <FileText className="w-4 h-4 mr-2" />
                  Read Full CTF Write-up
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            CTF <span className="text-cyber">Achievements</span>
          </h3>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="card-glow text-center">
                  <CardContent className="p-6">
                    <achievement.icon className="w-8 h-8 text-cyber-green mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground">{achievement.name}</h4>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="card-cyber max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Trophy className="w-12 h-12 text-cyber-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">
                Want to Collaborate on CTFs?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always looking for team members and new challenges. Let's solve some flags together!
              </p>
              <Button variant="outline" className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10">
                <ExternalLink className="w-4 h-4 mr-2" />
                Connect for CTF Teams
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default CTF;