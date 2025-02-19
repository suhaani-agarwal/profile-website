

'use client'
import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaPlayCircle, FaDownload, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from 'framer-motion';
import Image from 'next/image';



const TypewriterText = ({ text = "" }) => {
  const words = text.split('');
  return (
    <motion.div className="inline-block">
      {words.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Rest of the components remain the same as before, just updating their styling...

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  // const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home','view', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId = "") => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };


  const skills = [
    {
      category: "Frontend Development",
      items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "JavaScript (ES6+)"]
    },
    {
      category: "Backend Development",
      items: ["Node.js", "Python", "Express.js", "MongoDB", "PostgreSQL", "RESTful APIs"]
    },
    {
      category: "AI & Machine Learning",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "Natural Language Processing", "Computer Vision"]
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "Github", "AWS", "Figma", "VS Code", "Postman"]
    }
  ];

  // Projects data
  const projects = [
    {
      title: "AASRA",
      description: "An AI-powered platform developed to support PG students with healthy eating and emotional well-being.",
      techStack: ["Next.js", "Node.js", "OpenAI API", "MongoDB", "RecipeDB API", "Gemini AI API"],
      githubLink: "https://github.com/suhaani-agarwal/aasra-v1",
      liveLink: "https://ai-image-generator.demo"
    },
    {
      title: "Smart Task Manager",
      description: "An AI-powered task management system that helps prioritize and organize tasks using natural language processing.",
      techStack: ["Next.js", "Python", "PostgreSQL", "Machine Learning"],
      githubLink: "https://github.com/yourusername/smart-task-manager",
      liveLink: "https://smart-task-manager.demo"
    },
    {
      title: "E-Learning Platform",
      description: "A comprehensive learning management system with real-time collaboration features and interactive content delivery.",
      techStack: ["React", "Firebase", "Node.js", "Express"],
      githubLink: "https://github.com/yourusername/e-learning-platform",
      liveLink: "https://e-learning-platform.demo"
    }
  ];

  return (
    <div className="flex relative bg-gradient-to-br from-[#0a0a1f] to-[#1a1a3a]">
      {/* Sidebar */}
      
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="bg-[#0d0d2b] sidebar h-screen sticky top-0 left-0 w-[35%] border-r border-indigo-900/30 flex flex-col justify-center items-center gap-10"
      >
        <div className="p-8">
          {/* Profile Photo with glow effect */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="photo mb-8 rounded-full overflow-hidden size-72 border-4 border-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.3)]"
          >
            {/* <Img src="/profile3.jpeg" alt="Suhaani Agarwal" className="w-full h-full object-cover" /> */}
            <Image src="/profile3.jpeg" alt="Suhaani Agarwal" width={100} height={100} className="w-full h-full object-cover" />
          </motion.div>

          {/* Social Icons with improved hover effects */}
          <div className="flex gap-8 mb-12 text-white justify-center">
            {[
              { icon: <FaLinkedin size="30" />, href: "https://www.linkedin.com/in/suhaani-agarwal-010a0a280/", color: "#0077b5" },
              { icon: <FaPlayCircle size="30" />, href: "/demo", color: "#ff0000" },
              { icon: <FaGithub size="30" />, href: "https://github.com/suhaani-agarwal", color: "#ffffff" },
              { icon: <FaDownload size="30" />, href: "/ResumeSuhaaniAgarwalSEM1.pdf", color: "#4CAF50" }
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ 
                  scale: 1.2,
                  color: social.color,
                  y: -5,
                }}
                initial={{ y: 0 }}
                className="hover:shadow-lg transition-all duration-300"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Interactive Navigation */}
          <nav className="flex flex-col gap-6 text-gray-400 text-lg">
            {[
              { id: 'home', label: 'Home' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' }
            ].map(({ id, label }) => (
              <motion.button
                key={id}
                whileHover={{ scale: 1.1, x: 10 }}
                className={`flex items-center gap-3 px-6 py-2 rounded-lg transition-colors ${
                  activeSection === id ? 'text-white bg-indigo-600/20 border-l-4 border-indigo-600' : 'hover:text-white'
                }`}
                onClick={() => scrollToSection(id)}
              >
                <span className="text-indigo-400 opacity-60">#</span>
                {label}
              </motion.button>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="w-full">
        {/* Enhanced Home Section */}
        <section id="home" className="h-screen bg-gradient-to-b from-[#0d0d2b] to-[#1a1a3a] text-white flex flex-col items-center justify-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-indigo-400 mb-4 text-2xl"
            >
              Hello World! I am
            </motion.p>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
              <TypewriterText text="<Suhaani Agarwal/>" />
            </h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mb-8 text-2xl text-gray-300"
            >
              Full Stack Developer & AI Enthusiast
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="max-w-xl text-xl mx-auto text-gray-400 leading-relaxed mb-8"
            >
              Crafting digital experiences through code. Specialized in building exceptional 
              websites, applications, and everything in between. Currently focused on building 
              AI-powered web applications and exploring new technologies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="flex gap-6 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-indigo-600 rounded-full hover:bg-indigo-600/20 transition-colors"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* Skills Section  */}
        {/* <section id="skills" className="min-h-screen bg-gradient-to-b from-[#1a1a3a] to-[#0d0d2b] text-white flex flex-col items-center py-16">
          {/* ... Skills section content remains the same ... */}

        {/* </section> */} 
        <section id="skills" className="min-h-screen bg-gradient-to-b from-[#1a1a3a] to-[#0d0d2b] text-white flex flex-col items-center py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl w-full px-8"
        >
          <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillCategory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#0d0d2b] p-6 rounded-xl border border-indigo-900/30"
              >
                <h3 className="text-xl font-semibold mb-4 text-indigo-400">
                  {skillCategory.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-indigo-600/20 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

        {/* Projects Section with updated styling */}
        {/* <section id="projects" className="min-h-screen bg-gradient-to-b from-[#0d0d2b] to-[#1a1a3a] text-white flex flex-col items-center py-16"> */}
          {/* ... Projects section content remains the same ... */}
        {/* </section> */}
        <section id="projects" className="min-h-screen bg-gradient-to-b from-[#0d0d2b] to-[#1a1a3a] text-white flex flex-col items-center py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl w-full px-8"
        >
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#0d0d2b] p-6 rounded-xl border border-indigo-900/30 hover:border-indigo-600 transition-all"
              >
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-indigo-600/20 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <FaGithub /> View Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-indigo-600 rounded-lg hover:bg-indigo-600/20 transition-colors"
                  >
                    <FaPlayCircle /> Live Demo
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>


        {/* Contact Section */}
        <section id="contact" className="min-h-screen bg-gradient-to-b from-[#1a1a3a] to-[#0d0d2b] text-white flex flex-col items-center py-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-4xl w-full px-8"
          >
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-400 mb-12 max-w-xl">
              I am currently looking for new opportunities! Whether you have a question
              or just want to say hi, I will try my best to get back to you!
            </p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-indigo-400" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold">Email</h3>
                    <p className="text-gray-400">suhaaniagarwal07@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-indigo-400" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold">Location</h3>
                    <p className="text-gray-400">Delhi, India</p>
                  </div>
                </div>
              </motion.div>

              <motion.form 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 bg-[#0d0d2b] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 bg-[#0d0d2b] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    className="w-full p-4 bg-[#0d0d2b] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 py-4 rounded-lg text-white font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all"
                >
                  Send Message
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}