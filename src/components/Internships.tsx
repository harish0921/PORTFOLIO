import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const Internships = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const internships = [
    {
      title: "Salesforce Developer Intern",
      company: "Tech Solutions Inc.",
      period: "June 2024 - August 2024",
      description: "Worked on Salesforce CRM customization, Apex development, and Lightning component development. Implemented workflow automation and integrated third-party APIs.",
    },
    {
      title: "Machine Learning Intern",
      company: "AI Innovations Lab",
      period: "January 2024 - May 2024",
      description: "Developed ML models for predictive analytics, worked with large datasets using Pandas and Scikit-Learn, and deployed models using Flask.",
    },
    {
      title: "Full Stack Developer Intern",
      company: "WebTech Solutions",
      period: "June 2023 - December 2023",
      description: "Built responsive web applications using React.js and Node.js, implemented RESTful APIs, and worked with MongoDB for database management.",
    },
  ];

  return (
    <section id="internships" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Internships</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {internships.map((internship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className="relative pl-8 border-l-2 border-primary"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary rounded-full animate-pulse" />
                
                <div className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 glow-border-hover">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{internship.title}</h3>
                      <p className="text-secondary font-semibold mb-2">{internship.company}</p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{internship.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {internship.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;
