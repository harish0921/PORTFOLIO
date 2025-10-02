import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Code2, Award } from "lucide-react";

const CodingProfiles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const profiles = [
    {
      name: "GitHub",
      icon: <Github className="w-12 h-12" />,
      link: "https://github.com",
      stats: "50+ Repositories",
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-12 h-12" />,
      link: "https://linkedin.com",
      stats: "500+ Connections",
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "LeetCode",
      icon: <Code2 className="w-12 h-12" />,
      link: "https://leetcode.com",
      stats: "200+ Problems Solved",
      color: "from-orange-500 to-orange-700",
    },
    {
      name: "HackerRank",
      icon: <Award className="w-12 h-12" />,
      link: "https://hackerrank.com",
      stats: "5 Star Badge",
      color: "from-green-500 to-green-700",
    },
  ];

  return (
    <section id="coding-profiles" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Coding Profiles</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass p-8 rounded-2xl hover:scale-110 transition-all duration-300 glow-border-hover group text-center"
            >
              <div className={`w-24 h-24 mx-auto mb-4 bg-gradient-to-r ${profile.color} rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}>
                <div className="text-white">{profile.icon}</div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {profile.name}
              </h3>
              
              <p className="text-muted-foreground font-semibold">{profile.stats}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
