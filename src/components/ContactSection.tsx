
import React, { useEffect, useRef, useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission - replace with actual form handling
      // For example, using Formspree:
      // await fetch("https://formspree.io/f/your-form-id", {
      //   method: "POST",
      //   body: JSON.stringify(formData),
      //   headers: { "Content-Type": "application/json" },
      // });

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="section bg-slate-50 dark:bg-navy-light py-20">
      <div className="container mx-auto">
        <h2 className="section-heading text-navy dark:text-slate-lightest">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div className="space-y-8 reveal">
            <div>
              <h3 className="text-2xl font-bold text-navy dark:text-slate-lightest mb-4">Contact Information</h3>
              <p className="text-slate-700 dark:text-slate-lighter mb-6">
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-highlight/20 dark:bg-highlight/10 flex items-center justify-center">
                  <Mail className="text-highlight" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-navy dark:text-slate-lighter">Email</h4>
                  <a href="mailto:john.doe@example.com" className="text-slate-700 dark:text-slate-light hover:text-highlight dark:hover:text-highlight transition-colors duration-300">
                    john.doe@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6 mt-8">
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-navy dark:bg-highlight/20 flex items-center justify-center hover:bg-highlight dark:hover:bg-highlight transition-colors duration-300"
                >
                  <Github className="text-white dark:text-navy" />
                </a>
                <a 
                  href="https://linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-navy dark:bg-highlight/20 flex items-center justify-center hover:bg-highlight dark:hover:bg-highlight transition-colors duration-300"
                >
                  <Linkedin className="text-white dark:text-navy" />
                </a>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="bg-white dark:bg-navy shadow-lg rounded-lg p-8">
              <h3 className="text-2xl font-bold text-navy dark:text-slate-lightest mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-light dark:text-slate-lighter mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact-input"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-light dark:text-slate-lighter mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-input"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-navy-light dark:text-slate-lighter mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="contact-input"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-light dark:text-slate-lighter mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="contact-input"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full main-btn py-3 px-6 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
