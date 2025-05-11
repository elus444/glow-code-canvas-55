
import React, { useEffect, useRef } from 'react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  const skills = [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 85 },
    { name: 'TypeScript', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'Bootstrap', level: 90 },
    { name: 'Tailwind CSS', level: 85 },
  ];

  return (
    <section id="about" ref={sectionRef} className="section bg-slate-50 dark:bg-navy-light py-20">
      <div className="container mx-auto">
        <h2 className="section-heading text-navy dark:text-slate-lightest">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">
          <div className="reveal">
            <div className="relative">
              {/* Profile image with border effect */}
              <div className="relative z-10 rounded-lg overflow-hidden border-4 border-white dark:border-navy shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="John Doe" 
                  className="w-full h-auto object-cover aspect-ratio-1"
                />
              </div>
              {/* Background decorator */}
              <div className="absolute w-full h-full bg-highlight/20 rounded-lg top-6 left-6 -z-0"></div>
            </div>
          </div>
          
          <div className="space-y-6 reveal">
            <p className="text-lg text-slate-700 dark:text-slate-lighter leading-relaxed">
              I'm a passionate Front-End Web Developer with over 5 years of experience creating beautiful, responsive and user-friendly websites. I specialize in modern JavaScript frameworks and have a strong focus on creating accessible and performant web applications.
            </p>
            
            <p className="text-lg text-slate-700 dark:text-slate-lighter leading-relaxed">
              I have a Bachelor's degree in Computer Science and continuously stay updated with the latest web technologies and best practices. I enjoy solving complex problems and turning ideas into reality through clean and efficient code.
            </p>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4 text-navy dark:text-slate-lightest">Skills</h3>
              
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium text-navy-light dark:text-slate-lighter">{skill.name}</span>
                      <span className="text-highlight">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-navy rounded-full h-2.5">
                      <div 
                        className="bg-highlight h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
