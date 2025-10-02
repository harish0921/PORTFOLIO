import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profileImage from "@/assets/profile-image.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <img
              src={profileImage}
              alt="Harish R"
              className="relative rounded-2xl w-full h-auto object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
              style={{ transform: "perspective(1000px) rotateY(0deg)" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl">
              <p className="text-lg leading-relaxed text-foreground">
                I'm <span className="text-primary font-semibold">Harish R</span>, currently pursuing{" "}
                <span className="text-secondary font-semibold">B.Tech in Information Technology</span> at{" "}
                Dr. Mahalingam College of Engineering and Technology (2022-2026).
              </p>
              
              <p className="text-lg leading-relaxed text-foreground mt-4">
                I specialize in <span className="text-accent font-semibold">Machine Learning</span>,{" "}
                <span className="text-primary font-semibold">Frontend Development</span>,{" "}
                <span className="text-secondary font-semibold">Salesforce CRM</span> (Apex, Lightning), and{" "}
                <span className="text-accent font-semibold">DevOps</span>.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground mt-4">
                I am passionate about learning new technologies and building real-world solutions that make a difference.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-6 rounded-xl text-center glow-border-hover">
                <div className="text-4xl font-bold gradient-text mb-2">2+</div>
                <div className="text-muted-foreground">Years Learning</div>
              </div>
              <div className="glass p-6 rounded-xl text-center glow-border-hover">
                <div className="text-4xl font-bold gradient-text mb-2">10+</div>
                <div className="text-muted-foreground">Projects</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
