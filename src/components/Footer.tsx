
import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy dark:bg-navy-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold">
              <span className="text-highlight">J</span>D
            </span>
          </div>

          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-slate-light">&copy; {year} John Doe. All rights reserved.</p>
          </div>

          <div>
            <ul className="flex space-x-4">
              <li>
                <a 
                  href="#home"
                  className="text-slate-light hover:text-highlight transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about"
                  className="text-slate-light hover:text-highlight transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#projects"
                  className="text-slate-light hover:text-highlight transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact"
                  className="text-slate-light hover:text-highlight transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
