import React, { useState } from 'react';
import {
  Code,
  Download,
  Send,
  Wand2,
  Github,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Calendar,
  Building,
  GraduationCap,
  Briefcase,
  LucideMail
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import heroPic from './assets/heroPic.png';
import chatAppImg from "./assets/chatapp.jpeg";
import loginAuthImg from "./assets/login-authentication.jpg";
import carRentImg from "./assets/carrent.jpg";
import libraryImg from "./assets/library.jpeg";
import animalHospitalImg from "./assets/animalHospital.png";
import posImg from "./assets/pos.png";
import cropImg from "./assets/crop.jpg";
import medicareWebImg from "./assets/medicareWeb.jpg";
import medicareMobileImg from "./assets/medicareMobile.jpg";
import threadsImg from './assets/threads.png';
import gitImg from './assets/git.jpeg';
import serializeImg from './assets/serialize.jpg';
import resume from './assets/Sameera Madushan.pdf';

function App() {
  const [activeSkillTab, setActiveSkillTab] = useState('frontend');
  const [activeProjectTab, setActiveProjectTab] = useState('web');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {

    const serviceId = 'service_9bsvbix';
    const templateId = 'template_5pwh07k';
    const publicKey = 'VDd9I0ZeOSjHE89gm';

    const formData = {
      name: name,
      email: email,
      message: message
    };

    emailjs.send(serviceId, templateId, formData, publicKey)
        .then((response) => {
          alert('Email sent successfully!');
          setName('');
          setEmail('');
          setMessage('');
        })
        .catch((error) => {
          console.error('Email sending failed:', error);
          alert('Failed to send email. Please try again.');
        });

  };

  const filteredSkills = activeSkillTab === 'all'
      ? skills
      : skills.filter(skill => skill.category === activeSkillTab);

  const filteredProjects = activeProjectTab === 'all'
      ? projects
      : projects.filter(project => project.category === activeProjectTab);

  return (
      <div className="min-h-screen relative bg-[#040f26]">
        {/* Navigation */}
        <nav className="fixed top-6 left-0 right-0 bg-white/10 backdrop-blur-lg z-50 mx-8 rounded-full">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-white transition-transform hover:scale-125 cursor-pointer">SAMEERA</h1>
              <div className="hidden md:flex space-x-8">
                {["home", "about", "projects", "contact"].map((item) => (
                    <a
                        key={item}
                        href={`#${item}`}
                        className="text-white hover:text-purple-200 transition-all transform hover:scale-110"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                ))}
              </div>

              <div className="flex items-center text-purple-100 gap-4 md:gap-4 lg:gap-8">
                <a href="http://www.linkedin.com/in/sameera-madushan-61ba9a278">
                  <Linkedin className="w-6 h-6 transition-transform hover:scale-125 cursor-pointer"/>
                </a>
                <a href="https://github.com/SameeraMS">
                  <Github className="w-6 h-6 transition-transform hover:scale-125 cursor-pointer"/>
                </a>
                <a href="mailto:madushansameera499@gmail.com">
                  <LucideMail className="w-6 h-6 transition-transform hover:scale-125 cursor-pointer"/>
                </a>
              </div>
            </div>
          </div>
        </nav>


        <main className="container mx-auto px-6">
          {/* Hero Section */}
          <section id="home" className="flex flex-col md:flex-row items-center justify-between min-h-screen pt-28">
            <div className="md:w-1/2">
              <div className="text-white">
                <span className="text-purple-200">👋 Hi, I'm</span>
                <h1 className="text-[3.2rem] font-extrabold mt-2 mb-4">Sameera Madushan</h1>
                <h2 className="text-3xl mb-6">Full Stack Developer</h2>
                <p className="text-purple-100 text-lg mb-8">
                  I'm passionate software engineer and full-stack developer crafting dynamic, responsive, and accessible
                  web and mobile apps.
                </p>
                <div className="flex space-x-4">
                  <a
                      href="#projects"
                      className="bg-white text-dark-blue px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition-colors flex items-center">
                  <Code className="mr-2"/> View Work
                  </a>
                  <a
                      href={resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center"
                  >
                    <Download className="mr-2"/> Resume
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
              <img
                  src={heroPic}
                  alt="Developer"
                  className="rounded-tl rounded-br object-cover w-80 h-100 md:w-96 md:h-100"
              />
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Technical Skills</h2>
              <p className="text-purple-100 mb-8">
                Building innovative solutions with modern technologies
              </p>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-12 mx-10 md:mx-14 lg:mx-24">
                {["frontend", "backend", "mobile", "database", "other"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => {
                          setActiveSkillTab(tab);
                        }}
                        className={`py-2 rounded-full font-semibold transition-colors ${
                            activeSkillTab === tab
                                ? "bg-white text-dark-blue"
                                : "bg-white/10 text-white hover:bg-white/20"
                        }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}

              </div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {filteredSkills.map((skill) => (
                  <div
                      key={skill.name}
                      className="bg-white/10 backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition-all"
                  >
                    <div className="flex items-center flex-col">
                      <img src={skill.icon} alt={skill.name} className="w-8 h-8 mb-2"/>
                      <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                    </div>
                  </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Work Experience</h2>
              <p className="text-purple-100 mb-12">
                My professional journey and contributions in the tech industry.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              {experiences.map((exp) => (
                  <div key={exp.company} className="relative pl-8 pb-12 last:pb-0">
                    {/* Timeline line */}
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-purple-400/30">
                      <div
                          className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-400"></div>
                    </div>
                    <div
                        className="bg-white/10 backdrop-blur-lg rounded-lg p-6 ml-8 transform hover:scale-102 transition-all">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                        <span className="text-purple-200 flex items-center">
                      <Calendar className="w-4 h-4 mr-2"/>
                          {exp.period}
                    </span>
                      </div>
                      <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-purple-200 mb-4"
                      >
                        <Building className="w-4 h-4 mr-2"/>
                        {exp.company}
                      </a>
                      <p className="text-purple-100 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm"
                            >
                        {tech}
                      </span>
                        ))}
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="py-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Education</h2>
              <p className="text-purple-100 mb-12">
                My academic background and qualifications.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {education.map((edu) => (
                  <div key={edu.degree}
                       className="bg-white/10 backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <GraduationCap className="text-purple-400 w-8 h-8"/>
                      <span className="text-purple-200 text-sm">{edu.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                    <div className="text-dark-blue font-semibold mb-2">{edu.institution}</div>
                    <p className="text-purple-100">{edu.description}</p>
                    {edu.achievements && (
                        <ul className="mt-4 space-y-2">
                          {edu.achievements.map((achievement, index) => (
                              <li key={index} className="text-purple-200 text-sm flex items-start">
                                <span className="mr-2">•</span>
                                {achievement}
                              </li>
                          ))}
                        </ul>
                    )}
                  </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Recent Projects</h2>
              <p className="text-purple-100 mb-8">
                Here are some of my recent works that showcase my skills and experience.
              </p>
              <div className="flex justify-center gap-4 mb-12">
                {['web', 'mobile', 'desktop'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveProjectTab(tab)}
                        className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                            activeProjectTab === tab
                                ? 'bg-white text-dark-blue'
                                : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                  <div key={project.title}
                       className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-purple-100 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm"
                            >
                        {tech}
                      </span>
                        ))}
                      </div>
                      <div className="flex space-x-4">
                        <a
                            href={project.github}
                            className="text-white hover:text-purple-200 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                          <Github className="w-6 h-6"/>
                        </a>
                        { project.live == "" ? null :
                            <a
                              href={project.live}
                              className="text-white hover:text-purple-200 transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                            <ExternalLink className="w-6 h-6"/>
                            </a>
                        }

                    </div>
                    </div>
                  </div>
              ))}
            </div>
          </section>

          {/* Blog Section */}
          <section id="blog" className="py-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Latest Blog Posts</h2>
              <p className="text-purple-100 mb-12">
                Sharing my thoughts and experiences in technology.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                  <div key={post.title}
                       className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all"
                  >
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                    <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                        <span className="text-purple-200 text-sm">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{post.title}</h3>
                      <p className="text-purple-100 mb-4">{post.excerpt}</p>
                      <a
                          href={post.link}
                          className="text-purple-200 hover:text-white transition-colors inline-flex items-center ml-auto"
                      >
                        Read More <ExternalLink className="w-4 h-4 ml-2"/>
                      </a>
                    </div>
                  </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
                <p className="text-purple-100 mb-8">
                  Let's discuss your project and see how I can help bring your ideas to life.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center text-purple-100">
                      <Mail className="w-5 h-5 mr-3"/>
                      <span>madushansameera499@gmail.com</span>
                    </div>
                    <div className="flex items-center text-purple-100">
                      <Phone className="w-5 h-5 mr-3"/>
                      <span>+94 779 582 592</span>
                    </div>
                    <div className="flex items-center text-purple-100">
                      <MapPin className="w-5 h-5 mr-3"/>
                      <span>Panadura, Sri Lanka</span>
                    </div>
                    <div className="flex items-center text-purple-100 gap-8 pt-8">
                      <a href="http://www.linkedin.com/in/sameera-madushan-61ba9a278">
                        <Linkedin className="w-6 h-6 transition-transform hover:scale-125 cursor-pointer"/>
                      </a>
                      <a href="https://github.com/SameeraMS">
                        <Github className="w-6 h-6 transition-transform hover:scale-125 cursor-pointer"/>
                      </a>
                      <a href="mailto:madushansameera499@gmail.com">
                        <LucideMail className="w-6 h-6 transition-transform hover:scale-125 cursor-pointer"/>
                      </a>
                    </div>
                  </div>
                </div>
                <form className="space-y-4">
                  <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-200 focus:outline-none focus:border-purple-400"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                  />
                  <input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-200 focus:outline-none focus:border-purple-400"
                      onChange={(e) => setEmail(e.target.value)}
                  />
                  <textarea
                      placeholder="Your Message"
                      rows={4}
                      value={message}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-200 focus:outline-none focus:border-purple-400"
                      onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <button
                      className="ml-auto bg-white text-royal-blue px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition-colors flex items-center"
                      onClick={handleSubmit}
                  >
                    <Send className="mr-2"/> Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>

        {/* Footer Section */}
        <footer className="bg-white/5 backdrop-blur-lg py-8 ">
          <div className="container mx-auto px-6">
            <div className="border-t border-white/10 pt-8 text-center">
              <p className="text-purple-100">
                © {new Date().getFullYear()} Sameera Madushan. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
  );
}

const skills = [
  {
    "name": "HTML",
    "category": "frontend",
    "icon": "https://skillicons.dev/icons?i=html"
  },
  {
    "name": "CSS",
    "category": "frontend",
    "icon": "https://skillicons.dev/icons?i=css"
  },
  {
    "name": "JavaScript",
    "category": "frontend",
    "icon": "https://skillicons.dev/icons?i=javascript"
  },
  {
    "name": "TypeScript",
    "category": "frontend",
    "icon": "https://skillicons.dev/icons?i=typescript"
  },
  {
    "name": "Bootstrap",
    "category": "frontend",
    "icon": "https://skillicons.dev/icons?i=bootstrap"
  },
  {
    "name": "Tailwind",
    "category": "frontend",
    "icon": "https://skillicons.dev/icons?i=tailwind"
  },
  {
    "name": "React",
    "category": "frontend",
    "icon": "https://skillicons.dev/icons?i=react"
  },
  {
    "name": "Vite",
        "category": "frontend",
        "icon": "https://skillicons.dev/icons?i=vite"
      },
      {
        "name": "Vue.js",
        "category": "frontend",
        "icon": "https://skillicons.dev/icons?i=vuejs"
      },
      {
        "name": "Next.js",
        "category": "frontend",
        "icon": "https://skillicons.dev/icons?i=nextjs"
      },
      {
        "name": "jQuery",
        "category": "frontend",
        "icon": "https://skillicons.dev/icons?i=jquery"
      },
      {
        "name": "Flask",
        "category": "frontend",
        "icon": "https://skillicons.dev/icons?i=flask"
      },
      {
        "name": "Java",
        "category": "backend",
        "icon": "https://skillicons.dev/icons?i=java"
      },
      {
        "name": "NestJS",
        "category": "backend",
        "icon": "https://skillicons.dev/icons?i=nestjs"
      },
      {
        "name": "Spring",
        "category": "backend",
        "icon": "https://skillicons.dev/icons?i=spring"
      },
      {
        "name": "Python",
        "category": "backend",
        "icon": "https://skillicons.dev/icons?i=python"
      },
      {
        "name": "C++",
        "category": "backend",
        "icon": "https://skillicons.dev/icons?i=cpp"
      },
      {
        "name": "C#",
        "category": "backend",
        "icon": "https://skillicons.dev/icons?i=cs"
      },
      {
        "name": "Node.js",
        "category": "backend",
        "icon": "https://skillicons.dev/icons?i=nodejs"
      },
      {
        "name": "Express.js",
        "category": "backend",
        "icon": "https://skillicons.dev/icons?i=express"
      },
      {
        "name": "MySQL",
        "category": "database",
        "icon": "https://skillicons.dev/icons?i=mysql"
      },
      {
        "name": "MongoDB",
        "category": "database",
        "icon": "https://skillicons.dev/icons?i=mongodb"
      },
      {
        "name": "Supabase",
        "category": "database",
        "icon": "https://skillicons.dev/icons?i=supabase"
      },
      {
        "name": "PostgreSQL",
        "category": "database",
        "icon": "https://skillicons.dev/icons?i=postgresql"
      },
      {
        "name": "Gradle",
        "category": "automation",
        "icon": "https://skillicons.dev/icons?i=gradle"
      },
      {
        "name": "Maven",
        "category": "automation",
        "icon": "https://skillicons.dev/icons?i=maven"
      },
      {
        "name": "Hibernate",
        "category": "orm",
        "icon": "https://skillicons.dev/icons?i=hibernate"
      },
      {
        "name": "Git",
        "category": "other",
        "icon": "https://skillicons.dev/icons?i=git"
      },
      {
        "name": "GitHub",
        "category": "other",
        "icon": "https://skillicons.dev/icons?i=github"
      },
      {
        "name": "GitLab",
        "category": "other",
        "icon": "https://skillicons.dev/icons?i=gitlab"
      },
      {
        "name": "Postman",
        "category": "other",
        "icon": "https://skillicons.dev/icons?i=postman"
      },
      {
        "name": "Regex",
        "category": "other",
        "icon": "https://skillicons.dev/icons?i=regex"
      },
      {
        "name": "CodePen",
        "category": "other",
        "icon": "https://skillicons.dev/icons?i=codepen"
      },
      {
        "name": "Discord",
        "category": "other",
        "icon": "https://skillicons.dev/icons?i=discord"
      },
      {
        "name": "Figma",
        "category": "other",
        "icon": "https://skillicons.dev/icons?i=figma"
      },
      {
        "name": "Firebase",
        "category": "database",
        "icon": "https://skillicons.dev/icons?i=firebase"
      },
      {
        "name": "NPM",
        "category": "other",
        "icon": "https://skillicons.dev/icons?i=npm"
      },
      {
        "name": "Photoshop",
        "category": "other",
        "icon": "https://skillicons.dev/icons?i=ps"
      },
      {
        "name": "Wordpress",
        "category": "other",
        "icon": "https://skillicons.dev/icons?i=wordpress"
      },
      {
        "name": "AWS",
        "category": "other",
        "icon": "https://skillicons.dev/icons?i=aws"
      },
      {
        "name": "Heroku",
        "category": "other",
        "icon": "https://skillicons.dev/icons?i=heroku"
      },
      {
        "name": "Vercel",
        "category": "other",
        "icon": "https://skillicons.dev/icons?i=vercel"
      },
      {
        "name": "Stack Overflow",
        "category": "other",
        "icon": "https://skillicons.dev/icons?i=stackoverflow"
      },
      {
        "name": "Rect Native",
        "category": "mobile",
        "icon": "https://skillicons.dev/icons?i=react"
      },
    ]
;

const projects = [
  {
    title: "Chat Application",
    description: "A real-time chat system for fast and responsive communication.",
    image: chatAppImg,
    technologies: ["Next.js", "WebSocket", "NestJS", "TypeScript", "Supabase"],
    github: "https://github.com/SameeraMS/Chat-App-Backend.git",
    live: "https://www.linkedin.com/posts/sameera-madushan-61ba9a278_webdevelopment-nextjs-nestjs-activity-7248976398713831424-Hz5Q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPK1_cBMHUQOXKGG318iDpjfvHlNaZibOA",
    category: "web"
  },
  {
    title: "User-Authentication System",
    description: "A platform for secure user login, password management, and sessions.",
    image: loginAuthImg,
    technologies: ["HTML", "JavaScript", "Java", "Spring Boot", "Firebase"],
    github: "https://github.com/SameeraMS/Springboot-Login.git",
    live: "",
    category: "web"
  },
  {
    title: "Car Rental Website",
    description: "A website for viewing available vehicles, booking options, and pricing.",
    image: carRentImg,
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://sameerams.github.io/Car-Rental/",
    live: "https://www.linkedin.com/posts/sameera-madushan-61ba9a278_carrental-webdevelopment-html-activity-7218549804765757440-B_Uv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPK1_cBMHUQOXKGG318iDpjfvHlNaZibOA",
    category: "web"
  },
  {
    title: "Library Management System",
    description: "A desktop application for managing books, members, and transactions.",
    image: libraryImg,
    technologies: ["JavaFX", "MySQL", "Hibernate ORM"],
    github: "https://github.com/SameeraMS/Library-Management-System.git",
    live: "https://www.linkedin.com/posts/sameera-madushan-61ba9a278_java-javafx-css-activity-7203362284339933184-E6gS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPK1_cBMHUQOXKGG318iDpjfvHlNaZibOA",
    category: "desktop"
  },
  {
    title: "Animal Hospital Management System",
    description: "A system for managing animals, appointments, and medical records.",
    image: animalHospitalImg,
    technologies: ["JavaFX", "Layered Architecture", "MySQL", "SMTP", "Sarox Webcam Library"],
    github: "https://github.com/SameeraMS/Animal-Hospital-System-With-Layered.git",
    live: "https://www.linkedin.com/posts/sameera-madushan-61ba9a278_ijse-java-mysql-activity-7155242163335757824-zYx9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPK1_cBMHUQOXKGG318iDpjfvHlNaZibOA",
    category: "desktop"
  },
  {
    title: "Shop Billing System",
    description: "A system for managing products, inventory, sales, and customer data.",
    image: posImg,
    technologies: ["HTML", "JavaScript", "Java Spring", "MySQL", "Hibernate"],
    github: "https://github.com/SameeraMS/Pos-System-FrontEnd.git",
    live: "",
    category: "web"
  },
  {
    title: "Crop Monitoring System",
    description: "A system for managing crops and monitoring agricultural activities.",
    image: cropImg,
    technologies: ["Java", "Spring Boot", "MySQL", "Hibernate", "HTML", "CSS", "Ajax", "JWT"],
    github: "https://github.com/SameeraMS/Crop-Monitoring-System-Backend.git",
    live: "",
    category: "web"
  },
  {
    title: "MediCare",
    description: "An application for booking and managing doctor appointments.",
    image: medicareWebImg,
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Redux"],
    github: "https://github.com/SameeraMS/Medi-Care-React.git",
    live: "",
    category: "web"
  },
  {
    title: "MediCare Mobile App",
    description: "A mobile app for doctor appointment booking and management.",
    image: medicareMobileImg,
    technologies: ["MongoDB", "Express.js", "React Native", "JWT", "Redux"],
    github: "https://github.com/SameeraMS/MediCare-Mobile.git",
    live: "",
    category: "mobile"
  }
];


const experiences = [
  {
    "role": "Freelancer",
    "company": "OS Solutions",
    "url": "https://ossolutions.vercel.app",
    "period": "2024 - Present",
    "description": "Developing scalable web and standalone applications while optimizing performance and user experience.",
    "technologies": ["React", "Node.js", "MongoDB", "AWS", "Springboot", "Wordpress"]
  },
];

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Bolton',
    period: '2025 - Present',
    description: 'Specialized in Artificial Intelligence and Machine Learning',
    achievements: [],
  },
  {
    degree: 'Higher National Diploma in Software Engineering',
    institution: 'Institute of Java and Software Engineering',
    period: '2023 - 2025',
    description: 'Focus on Software Development and System Design',
    achievements: [],
  },
  {
    degree: 'Diploma in English',
    institution: 'ESOFT Metro Campus',
    period: '2022 - 2023',
    description: '',
    achievements: [],
  },
  {
    degree: 'A-Levels in Physical Science',
    institution: 'Ananda College Colombo',
    period: '2021',
    description: '3 Cs in Physics, Chemistry and Mathematics',
    achievements: [],
  },
];

const blogPosts = [
  {
    title: 'A Guide to Threads in Java',
    excerpt: 'The world of threads in Java, exploring their creation, lifecycle, synchronization mechanisms, and best practices.',
    image: threadsImg,
    category: 'Java',
    date: 'Apr 07, 2024',
    link: 'https://sameerams.medium.com/mastering-concurrency-a-guide-to-threads-in-java-f44843c87ebc',
  },
  {
    title: 'Git: A Comprehensive Guide to Version',
    excerpt: 'Git, a distributed version control system, has revolutionized the way teams collaborate and manage code.',
    image: gitImg,
    category: 'GIT',
    date: 'Apr 08, 2024',
    link: 'https://sameerams.medium.com/demystifying-git-a-comprehensive-guide-to-version-control-463515b5eef4',
  },
  {
    title: 'JAVA Serialization and Deserialization',
    excerpt: 'comprehensive understanding of how to effectively serialize and deserialize objects in Java, enabling you to store and transfer data with ease and efficiency in your Java projects.',
    image: serializeImg,
    category: 'Java',
    date: 'Jul 18, 2024',
    link: 'https://medium.com/@sameerams/java-serialization-and-deserialization-b8b1deb7eeb8',
  },
];

export default App;