'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const fullText = "Final year student at MIT, Manipal, passionate about LLMs, LangChain, and AI. Currently working as an AI Intern at TCS, developing intelligent agents and building scalable AI solutions.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'education', 'projects', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ronit Kochar
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'education', 'projects', 'skills', 'certifications', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-blue-400 ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ronit Kochar
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-8">
            <span className="text-blue-400">AI Intern at TCS</span> | <span className="text-purple-400">Data Science Student</span>
          </div>
          <div className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            {typedText}
            {isTyping && <span className="animate-pulse">|</span>}
          </div>
          <div className="flex justify-center space-x-6">
            <a href="mailto:ronitkochar2001@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              Contact Me
            </a>
            <a href="https://www.linkedin.com/in/ronit-kochar-0a70841b7/" target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Passionate AI & Data Science Student</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a final year Data Science student at Manipal Institute of Technology, currently working as an AI Intern at Tata Consultancy Services. 
                My passion lies in developing intelligent systems using LLMs, LangChain, and modern AI frameworks.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I specialize in building scalable AI solutions, developing intelligent agents, and creating full-stack applications. 
                My experience spans from deep learning and machine learning to modern web development and AI integration.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/RonitKochar" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  GitHub
                </a>
                <a href="https://leetcode.com/u/RonitKochar/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
                  LeetCode
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-white/10">
              <h4 className="text-xl font-semibold text-white mb-4">Quick Facts</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span>Pune, India</span>
                </div>
                <div className="flex justify-between">
                  <span>Education:</span>
                  <span>B.Tech Data Science</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience:</span>
                  <span>AI Intern at TCS</span>
                </div>
                <div className="flex justify-between">
                  <span>Focus:</span>
                  <span>LLMs & AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-12">
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-8 rounded-2xl border border-white/10 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold text-white">AI Intern</h3>
                <span className="text-blue-400 font-medium">May 2025 - Ongoing</span>
              </div>
              <div className="text-purple-400 font-medium mb-4">Tata Consultancy Services, Pune</div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Gained hands-on experience with Generative AI, LangChain, and various LLMs through practical projects, designing and deploying intelligent agents for data generation, modification, and analysis.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Developed and integrated advanced tools like Pinecone, React agents, and vector stores, building robust backend and frontend applications for real-time automation.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Cultivated expertise in prompt engineering, model evaluation, and modern AI frameworks, fostering creative problem-solving and scalable agent systems.
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {['LangChain', 'LLM', 'Azure Databricks', 'Chatbot Development', 'LangGraph', 'Data Pipelines'].map((skill) => (
                  <span key={skill} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-8 rounded-2xl border border-white/10 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold text-white">Bachelor of Technology in Data Science</h3>
                <span className="text-purple-400 font-medium">2022 - 2026</span>
              </div>
              <div className="text-pink-400 font-medium mb-4">Manipal Institute of Technology, Manipal</div>
              <div className="text-gray-300">
                <p className="mb-4">Relevant Coursework: Java, C, C++, Python, SQL, Data Structures and Algorithms</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 p-8 rounded-2xl border border-white/10 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold text-white">High School Diploma, PCM & CS</h3>
                <span className="text-green-400 font-medium">May 2020 - March 2022</span>
              </div>
              <div className="text-blue-400 font-medium">City Montessori School, Lucknow</div>
            </div>

            <div className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 p-8 rounded-2xl border border-white/10 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold text-white">Middle School Diploma, PCM & CS</h3>
                <span className="text-yellow-400 font-medium">Apr 2008 - March 2020</span>
              </div>
              <div className="text-orange-400 font-medium">St Francis College, Lucknow</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-8 rounded-2xl border border-white/10 hover:transform hover:scale-105 transition-all duration-300 group">
              <h3 className="text-2xl font-semibold text-white mb-4">DL Project on Image Rating Predictions</h3>
              <p className="text-gray-300 mb-6">
                Built a deep learning system to predict product image ratings using Amazon reviews. Combined DenseNet, ResNet, and a custom CNN for feature extraction and regression. Preprocessed visual and textual data to align ratings with images.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Data Preprocessing', 'Deep Learning', 'Predictive Modeling', 'Deployment', 'System Design'].map((skill) => (
                  <span key={skill} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/RonitKochar/DL-Project-on-Image-Rating-Predictions" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/ronit-kochar-0a70841b7/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-8 rounded-2xl border border-white/10 hover:transform hover:scale-105 transition-all duration-300 group">
              <h3 className="text-2xl font-semibold text-white mb-4">DataVerse Hub</h3>
              <p className="text-gray-300 mb-6">
                DataVerse-Hub is a web-based platform for accessible, interactive data science. Users can generate, analyze, and modify industry-specific datasets for learning and real-world use. Features include comprehensive data generation, Python backend, Next.js frontend, and tools for SQL review, error analysis, and real-time Q&A.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Next.js', 'LangChain', 'Cursor AI', 'VSCode', 'Python', 'ChatModels'].map((skill) => (
                  <span key={skill} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/RonitKochar/DataVerse-Hub" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/ronit-kochar-0a70841b7/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Languages</h3>
              <div className="space-y-3">
                {['C++', 'C', 'HTML', 'CSS', 'LaTeX', 'Python', 'Java', 'Next.js'].map((skill) => (
                  <div key={skill} className="flex justify-between items-center">
                    <span className="text-gray-300">{skill}</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-6 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Frameworks/Libraries</h3>
              <div className="space-y-3">
                {['Tensorflow', 'Scikit-Learn', 'NumPy', 'Pandas', 'Streamlit', 'LangChain', 'Fast API'].map((skill) => (
                  <div key={skill} className="flex justify-between items-center">
                    <span className="text-gray-300">{skill}</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 p-6 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Developer Tools</h3>
              <div className="space-y-3">
                {['Git', 'Github', 'VSCode', 'pip', 'Cursor AI', 'Pinecone', 'OpenRouter AI', 'npm'].map((skill) => (
                  <div key={skill} className="flex justify-between items-center">
                    <span className="text-gray-300">{skill}</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 p-6 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Technical Skills</h3>
              <div className="space-y-3">
                {['Full Stack Development', 'Machine Learning', 'Deep Learning', 'LLM'].map((skill) => (
                  <div key={skill} className="flex justify-between items-center">
                    <span className="text-gray-300">{skill}</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Core Java Concepts Foundation',
              'Big Data Integration and Processing',
              'Big Data Modelling and Management Systems',
              'Tableau Certified',
              'Introduction to Big Data',
              'Natural Language Processing in Tensorflow',
              'Certified Data Scientist',
              'Python Project for Data Science',
              'Tools for Data Science',
              'Python for Data Science and AI',
              'HTML, CSS and Javascript for Web Developers',
              'Core Java Made Easy',
              'LangChain - Develop LLM powered applications with LangChain'
            ].map((cert, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-2xl border border-white/10 hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-2xl border border-white/10 hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <a href="mailto:ronitkochar2001@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  ronitkochar2001@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-6 rounded-2xl border border-white/10 hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+918299313154" className="text-purple-400 hover:text-purple-300 transition-colors">
                  +91 8299313154
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 p-6 rounded-2xl border border-white/10 hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="text-3xl mb-4">💼</div>
                <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/ronit-kochar-0a70841b7/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">
                  Connect with me
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 p-6 rounded-2xl border border-white/10 hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="text-3xl mb-4">🐙</div>
                <h3 className="text-xl font-semibold text-white mb-2">GitHub</h3>
                <a href="https://github.com/RonitKochar" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  View my work
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-gray-400 mb-4">
            <p>© 2024 Ronit Kochar. All rights reserved.</p>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/RonitKochar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ronit-kochar-0a70841b7/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://leetcode.com/u/RonitKochar/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              LeetCode
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
