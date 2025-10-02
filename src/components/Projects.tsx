import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Resume Builder Web Application",
      description: "A full-stack web application that allows users to create professional resumes with customizable templates. Features include real-time preview, PDF export, and cloud storage integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "PDF.js"],
      github: "#",
      demo: "#",
    },
    {
      title: "Job Recommendation System",
      description: "An intelligent ML-based system that recommends jobs based on user skills, experience, and preferences. Uses NLP for job description analysis and collaborative filtering for personalized recommendations.",
      technologies: ["Python", "Scikit-Learn", "Flask", "Pandas", "NLP"],
      github: "#",
      demo: "#",
    },
    {
      title: "E-Commerce Platform",
      description: "A comprehensive online shopping platform with cart management, payment integration, order tracking, and admin dashboard. Built with modern web technologies for optimal performance.",
      technologies: ["React", "TypeScript", "Tailwind", "Stripe", "Firebase"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and project timeline visualization. Supports drag-and-drop functionality.",
      technologies: ["Vue.js", "Node.js", "Socket.io", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Forecast Dashboard",
      description: "An interactive weather dashboard that displays current conditions, 7-day forecasts, and weather maps. Integrates with multiple weather APIs for accurate predictions.",
      technologies: ["React", "Chart.js", "OpenWeather API", "Mapbox"],
      github: "#",
      demo: "#",
    },
    {
      title: "Social Media Analytics Tool",
      description: "A powerful analytics platform that tracks social media metrics, engagement rates, and audience demographics. Provides insights through interactive visualizations and reports.",
      technologies: ["Python", "Django", "D3.js", "Redis", "Celery"],
      github: "#",
      demo: "#",
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 glow-border-hover group"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4 gradient-text">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button
                  className="flex-1 bg-primary hover:bg-primary/80 text-primary-foreground"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            onClick={() => setShowAll(!showAll)}
            className="bg-primary hover:bg-primary/80 text-primary-foreground font-semibold px-8"
          >
            {showAll ? "Show Less" : "View All Projects"}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
