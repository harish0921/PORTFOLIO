import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import developerAvatar from "@/assets/developer-avatar.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1 }}
            className="mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse" />
              <img
                src={developerAvatar}
                alt="Developer Avatar"
                className="relative w-48 h-48 rounded-full glow-border"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Harish R
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl mb-6 gradient-text font-semibold"
          >
            Aspiring Web Developer | Salesforce Developer | Machine Learning Enthusiast
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8"
          >
            Self-motivated individual with a strong foundation in coding, Salesforce CRM, 
            frontend development, and machine learning. Passionate about solving problems 
            and building impactful projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/80 text-primary-foreground font-semibold px-8 glow-border-hover"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
