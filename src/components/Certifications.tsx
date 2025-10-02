import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "Salesforce Administrator",
      issuer: "Salesforce",
      date: "2024",
      link: "#",
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      link: "#",
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera",
      date: "2023",
      link: "#",
    },
    {
      title: "Python for Data Science",
      issuer: "IBM",
      date: "2023",
      link: "#",
    },
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 glow-border-hover group text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-2">
                {cert.title}
              </h3>
              
              <p className="text-secondary font-semibold mb-2">{cert.issuer}</p>
              <p className="text-muted-foreground text-sm mb-4">{cert.date}</p>
              
              <Button
                variant="outline"
                size="sm"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Certificate
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
