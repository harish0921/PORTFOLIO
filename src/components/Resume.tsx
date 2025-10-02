import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, GraduationCap, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "B.Tech in Information Technology",
      institution: "Dr. Mahalingam College of Engineering and Technology",
      period: "2022 - 2026",
      cgpa: "8.5 CGPA",
    },
    {
      degree: "HSC",
      institution: "SVES Matric Hr Sec School",
      period: "2021 - 2022",
      percentage: "91%",
    },
    {
      degree: "SSLC",
      institution: "SVES Matric Hr Sec School",
      period: "2019 - 2020",
      percentage: "85%",
    },
  ];

  return (
    <section id="resume" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Resume</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
          
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold px-8 glow-border-hover"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-primary"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary rounded-full animate-pulse" />
                  
                  <div className="glass p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                    <h4 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h4>
                    <p className="text-secondary font-semibold mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                      <span className="text-primary font-semibold">
                        {edu.cgpa || edu.percentage}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
