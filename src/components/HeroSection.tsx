
import React, { useEffect, useRef } from 'react';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    });

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

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" ref={sectionRef} className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-white to-slate-100 dark:from-navy-dark dark:to-navy">
      <div className="container mx-auto text-center md:text-left">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-8">
            <h2 className="text-lg md:text-xl text-highlight font-medium reveal">Hello, my name is</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-navy dark:text-slate-lightest mb-2 reveal">John Doe</h1>
            <h2 className="text-3xl md:text-5xl font-bold text-slate dark:text-slate-light mb-6 reveal">Front-End Web Developer</h2>
            <p className="text-lg text-slate dark:text-slate-light max-w-xl mb-8 reveal">
              I build responsive, accessible, and performant web applications with modern JavaScript frameworks and a focus on user experience.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start reveal">
              <button onClick={scrollToProjects} className="main-btn">
                View My Work
              </button>
              <a href="#contact" className="bg-transparent text-navy dark:text-slate-lighter border-2 border-navy dark:border-slate-light py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:bg-navy hover:text-white dark:hover:bg-highlight dark:hover:text-navy">
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:col-span-4 flex justify-center reveal">
            <div className="w-72 h-72 rounded-full bg-highlight/20 dark:bg-highlight/10 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full border-4 border-highlight flex items-center justify-center">
                <div className="text-6xl font-bold text-highlight">JD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
