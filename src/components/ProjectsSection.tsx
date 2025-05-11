
import React, { useEffect, useRef } from 'react';
import { Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
}

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Sample projects data
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A fully responsive e-commerce platform built with React and Redux, featuring product filtering, cart functionality, and payment integration.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      tags: ["React", "Redux", "Stripe", "Firebase"],
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application built with TypeScript and React, featuring drag-and-drop task organization, notifications, and data visualization.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      tags: ["TypeScript", "React", "Node.js", "MongoDB"],
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "An interactive weather application that uses the OpenWeatherMap API to display current conditions and forecasts with dynamic themes based on weather.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      tags: ["JavaScript", "API", "CSS3", "Chart.js"],
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive personal portfolio website that showcases projects and skills with a modern design and smooth animations.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      githubUrl: "#",
      demoUrl: "#"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const section = sectionRef.current;
    if (section) {
      const elements = section.querySelectorAll('.reveal');
      elements.forEach(el => observer.observe(el));
    }

    return () => {
      if (section) {
        const elements = section.querySelectorAll('.reveal');
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section">
      <div className="container mx-auto">
        <h2 className="section-heading text-navy dark:text-slate-lightest">My Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative group h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-highlight text-navy px-2 py-1 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-700 dark:text-slate-lighter mb-6">{project.description}</p>
                <div className="flex space-x-4">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="main-btn text-sm py-2"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-2 text-navy dark:text-slate-lighter hover:text-highlight dark:hover:text-highlight transition-colors duration-300"
                  >
                    <Github size={18} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
