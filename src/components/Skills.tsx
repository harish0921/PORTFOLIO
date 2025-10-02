import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Cloud, Briefcase } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "C", level: 75 },
      ],
    },
    {
      title: "Frontend Development",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "React.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      title: "Machine Learning",
      icon: <Briefcase className="w-8 h-8" />,
      skills: [
        { name: "Scikit-Learn", level: 85 },
        { name: "Pandas", level: 90 },
        { name: "Matplotlib", level: 80 },
        { name: "Scipy", level: 75 },
      ],
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
      ],
    },
    {
      title: "DevOps Tools",
      icon: <Cloud className="w-8 h-8" />,
      skills: [
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Jenkins", level: 75 },
      ],
    },
    {
      title: "Salesforce CRM",
      icon: <Briefcase className="w-8 h-8" />,
      skills: [
        { name: "Apex", level: 85 },
        { name: "Lightning", level: 80 },
        { name: "Salesforce Admin", level: 85 },
        { name: "Workflow & Automation", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass p-6 rounded-2xl glow-border-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-primary">{category.icon}</div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-semibold">{skill.name}</span>
                      <span className="text-primary font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        style={{ boxShadow: "0 0 10px hsl(var(--primary))" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
