import React, { useState, useEffect } from 'react';
import { 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Github, 
  Facebook,
  Twitter,
  Instagram,
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  User, 
  Code, 
  Briefcase, 
  MessageSquare,
  ExternalLink,
  Download,
  ChevronRight,
  Star
} from 'lucide-react';

const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSkillImage, setCurrentSkillImage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Skill images that rotate every 4 seconds
  const skillImages = [
    'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop'
  ];

  // Auto-rotate skill images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillImage((prev) => (prev + 1) % skillImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Apply dark mode to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Add loading effect
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const skills = [
    { name: 'React.js', level: 90, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
    { name: 'Node.js', level: 80, color: 'bg-green-500' },
    { name: 'Python', level: 75, color: 'bg-blue-600' },
    { name: 'MongoDB', level: 70, color: 'bg-green-600' },
    { name: 'Tailwind CSS', level: 88, color: 'bg-cyan-500' },
    { name: 'Flutter', level: 78, color: 'bg-black' }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
      tech: ['React', 'Firebase', 'Material-UI'],
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with location-based forecasts',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop',
      tech: ['React', 'OpenWeather API', 'Chart.js'],
      link: '#'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission with toast notification
    const toast = document.createElement('div');
    toast.className = `fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300 transform translate-x-full ${
      darkMode ? 'bg-green-600 text-white' : 'bg-green-500 text-white'
    }`;
    toast.textContent = 'Message sent successfully!';
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.remove('translate-x-full');
    }, 100);
    
    setTimeout(() => {
      toast.classList.add('translate-x-full');
      setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
    
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500">
          <div className="absolute inset-0">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-400 opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-purple-400 opacity-20 animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-10 animate-spin" style={{ animationDuration: '10s' }}></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mb-8 mx-auto"></div>
          <h1 className="text-4xl font-bold text-white mb-2">Albert Irasubiza</h1>
          <p className="text-white text-lg font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 animate-pulse ${
          darkMode ? 'bg-purple-500' : 'bg-blue-300'
        }`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20 animate-pulse delay-1000 ${
          darkMode ? 'bg-blue-500' : 'bg-purple-300'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 animate-spin ${
          darkMode ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gradient-to-r from-blue-300 to-purple-300'
        }`} style={{ animationDuration: '20s' }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        darkMode ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-white/95 backdrop-blur-sm'
      } border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full ${
                darkMode ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gradient-to-r from-blue-500 to-purple-500'
              } flex items-center justify-center`}>
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold">Albert Irasubiza</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg mr-2 transition-colors ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className={`md:hidden py-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex flex-col space-y-4">
                <a href="#home" className="hover:text-blue-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</a>
                <a href="#about" className="hover:text-blue-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
                <a href="#projects" className="hover:text-blue-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Projects</a>
                <a href="#contact" className="hover:text-blue-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="relative inline-block mb-8">
              <img
                src="test.jpg"
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg"
              />
              <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full ${
                darkMode ? 'bg-green-400' : 'bg-green-500'
              } border-4 ${darkMode ? 'border-gray-900' : 'border-white'}`}></div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className={`bg-gradient-to-r ${
                darkMode ? 'from-purple-400 to-blue-400' : 'from-blue-600 to-purple-600'
              } bg-clip-text text-transparent`}>Rutwe mudenge</span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Full Stack Developer & UI/UX Designer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                darkMode 
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
              } text-white shadow-lg hover:shadow-xl`}>
                <Download className="w-5 h-5 inline mr-2" />
                Download CV
              </button>
              <a
                href="#contact"
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 border-2 ${
                  darkMode 
                    ? 'border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white' 
                    : 'border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white'
                }`}
              >
                <MessageSquare className="w-5 h-5 inline mr-2" />
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 relative z-10 ${
        darkMode ? 'bg-gray-800/50' : 'bg-gray-50/50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Passionate developer with 3+ years of experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative mb-8">
                <img
                  src={skillImages[currentSkillImage]}
                  alt="Skills"
                  className="w-full h-80 object-cover rounded-lg shadow-lg transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
              <div className="flex justify-center space-x-2">
                {skillImages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSkillImage 
                        ? (darkMode ? 'bg-purple-500' : 'bg-blue-500')
                        : (darkMode ? 'bg-gray-600' : 'bg-gray-300')
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            <div>
              <p className={`text-lg mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm a passionate full-stack developer with expertise in modern web technologies. 
                I love creating beautiful, functional applications that solve real-world problems. 
                My journey in tech started 3 years ago, and I've been constantly learning and 
                evolving ever since.
              </p>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full h-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div
                        className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">My Projects</h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Here are some of my recent works
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 text-sm rounded-full ${
                          darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className={`inline-flex items-center text-sm font-medium transition-colors ${
                      darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-blue-600 hover:text-blue-500'
                    }`}
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 relative z-10 ${
        darkMode ? 'bg-gray-800/50' : 'bg-gray-50/50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Let's work together on your next project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className={`w-6 h-6 mr-4 ${darkMode ? 'text-purple-400' : 'text-blue-600'}`} />
                  <span>albertirasubiza@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className={`w-6 h-6 mr-4 ${darkMode ? 'text-purple-400' : 'text-blue-600'}`} />
                  <span>+25 0784100051</span>
                </div>
                <div className="flex items-center">
                  <MapPin className={`w-6 h-6 mr-4 ${darkMode ? 'text-purple-400' : 'text-blue-600'}`} />
                  <span>Kigali,Rwanda</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-bold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                      darkMode ? 'bg-gray-700 hover:bg-purple-600' : 'bg-gray-100 hover:bg-blue-600 hover:text-white'
                    }`}
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                      darkMode ? 'bg-gray-700 hover:bg-purple-600' : 'bg-gray-100 hover:bg-blue-600 hover:text-white'
                    }`}
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                    <a
                    href="#"
                    className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                      darkMode ? 'bg-gray-700 hover:bg-purple-600' : 'bg-gray-100 hover:bg-blue-600 hover:text-white'
                    }`}
                  >
                    <Twitter className="w-6 h-6" />
                  </a>

                    <a
                    href="#"
                    className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                      darkMode ? 'bg-gray-700 hover:bg-purple-600' : 'bg-gray-100 hover:bg-blue-600 hover:text-white'
                    }`}
                  >
                    <Instagram className="w-6 h-6" />
                  </a>

                    <a
                    href="/"
                    className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                      darkMode ? 'bg-gray-700 hover:bg-purple-600' : 'bg-gray-100 hover:bg-blue-600 hover:text-white'
                    }`}
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:ring-2 focus:ring-offset-2 ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 focus:ring-purple-500 focus:border-purple-500'
                        : 'bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:ring-2 focus:ring-offset-2 ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 focus:ring-purple-500 focus:border-purple-500'
                        : 'bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+25 0784100051"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:ring-2 focus:ring-offset-2 ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 focus:ring-purple-500 focus:border-purple-500'
                        : 'bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:ring-2 focus:ring-offset-2 resize-none ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 focus:ring-purple-500 focus:border-purple-500'
                        : 'bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                    }`}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`w-full px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                    darkMode 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                  } text-white shadow-lg hover:shadow-xl`}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 sm:px-6 lg:px-8 border-t ${
        darkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'
      } relative z-10`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2025 Albert Irasubiza. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;