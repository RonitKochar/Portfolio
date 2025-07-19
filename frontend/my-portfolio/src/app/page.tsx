'use client';

import { useState, useEffect } from 'react';
import ExperienceSection from './sections/experience'
import CertificationsSection from './sections/certifications';

export default function Home() {
  const [showResume, setShowResume] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const fullText = "Final year Data Science student at Manipal Institute of Technology, passionate about cutting-edge AI technologies including Large Language Models and LangChain. Experienced in designing intelligent agents and building scalable AI-powered solutions. Dedicated to advancing AI innovation with practical skills in prompt engineering, machine learning, and full-stack development. Explore my journey through impactful projects, certifications, and technical expertise.";

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
              {[
                'home',
                'about',
                'experience',
                'education',
                'projects',
                'skills',
                'certifications',
                'contact',
              ].map((section) => (
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

              {/* Resume Button */}
              <button
                onClick={() => setShowResume(true)}
                className="capitalize transition-all duration-300 hover:text-blue-400 text-gray-300"
              >
                Resume
              </button>
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
            <span className="text-purple-400">Data Science Student</span>
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
                Final year Data Science student at Manipal Institute of Technology, deeply passionate about artificial intelligence, language models, and intelligent agents. I have hands-on experience designing and deploying scalable AI solutions, with a focus on workflow automation, prompt engineering, and leveraging modern frameworks like LangChain.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My expertise bridges deep learning, machine learning, and end-to-end application development, combining technical depth with a strong drive to apply AI for impactful real-world solutions. I am committed to continuous learning and innovation in the rapidly evolving field of artificial intelligence.
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
                  <span>Manipal, India</span>
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
      <ExperienceSection />

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
                {[
                  { name: 'C++', level: '70%' },
                  { name: 'C', level: '70%' },
                  { name: 'HTML', level: '65%' },
                  { name: 'CSS', level: '65%' },
                  { name: 'Javascript', level: '45%'},
                  { name: 'Python', level: '95%' },
                  { name: 'SQL', level: '70%'},
                  { name: 'Java', level: '95%' },
                ].map(({ name, level }) => (
                  <div key={name} className="flex justify-between items-center">
                    <span className="text-gray-300">{name}</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-400 h-2 rounded-full"
                        style={{ width: level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-6 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Frameworks/Libraries</h3>
              <div className="space-y-3">
                {[
                  { name: 'Tensorflow', level: '80%' },
                  { name: 'Scikit-Learn', level: '80%' },
                  { name: 'NumPy', level: '95%' },
                  { name: 'Pandas', level: '95%' },
                  { name: 'Streamlit', level: '65%' },
                  { name: 'LangChain', level: '98%' },
                  { name: 'LangGraph', level: '80%' },
                  { name: 'python-dotenv', level: '85%' },
                  { name: 'Fast API', level: '65%' },
                  { name: 'Next.js', level: '65%' }, 
                ].map(({ name, level }) => (
                  <div key={name} className="flex justify-between items-center">
                    <span className="text-gray-300">{name}</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-purple-400 h-2 rounded-full"
                        style={{ width: level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 p-6 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Developer Tools</h3>
              <div className="space-y-3">
                {[
                  { name: 'Git', level: '90%' },
                  { name: 'Github', level: '94%' },
                  { name: 'VSCode', level: '100%' },
                  { name: 'Cursor AI', level: '96%' },
                  { name: 'Mermaid Live', level: '85%' },
                  { name: 'Pinecone', level: '75%' },
                  { name: 'OpenRouter AI', level: '95%' },
                  { name: 'npm', level: '60%' },
                ].map(({ name, level }) => (
                  <div key={name} className="flex justify-between items-center">
                    <span className="text-gray-300">{name}</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-green-400 h-2 rounded-full"
                        style={{ width: level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 p-6 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Technical Skills</h3>
              <div className="space-y-3">
                {[
                  { name: 'Full Stack Development', level: '75%' },
                  { name: 'Machine Learning', level: '85%' },
                  { name: 'Deep Learning', level: '75%' },
                  { name: 'LLM', level: '90%' },
                ].map(({ name, level }) => (
                  <div key={name} className="flex justify-between items-center">
                    <span className="text-gray-300">{name}</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <CertificationsSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Email */}
            <a
              href="mailto:ronitkochar2001@gmail.com"
              className="block bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-2xl border border-white/10 hover:scale-105 transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-blue-400">ronitkochar2001@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+918299313154"
              className="block bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-6 rounded-2xl border border-white/10 hover:scale-105 transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-purple-400">+91 8299313154</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ronit-kochar-0a70841b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-green-600/10 to-blue-600/10 p-6 rounded-2xl border border-white/10 hover:scale-105 transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-3xl mb-4">💼</div>
                <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
                <p className="text-green-400">Connect with me</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/RonitKochar"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-yellow-600/10 to-orange-600/10 p-6 rounded-2xl border border-white/10 hover:scale-105 transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-3xl mb-4">🐙</div>
                <h3 className="text-xl font-semibold text-white mb-2">GitHub</h3>
                <p className="text-yellow-400">View my work</p>
              </div>
            </a>

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
            <a
              href="https://github.com/RonitKochar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ronit-kochar-0a70841b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/RonitKochar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LeetCode
            </a>
            {/* Resume link triggers modal */}
            <button
              onClick={() => setShowResume(true)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Resume
            </button>
          </div>
        </div>
      </footer>

      {showResume && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white w-full max-w-4xl h-[80vh] rounded-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setShowResume(false)}
              className="absolute top-2 right-4 text-2xl font-bold text-gray-700 hover:text-gray-900 z-10"
            >
              &times;
            </button>

            {/* Resume PDF Iframe */}
            <iframe
              src="/pdfs/Resume_RonitKochar.pdf"  
              title="Ronit Kochar Resume"
              className="w-full h-full"
              frameBorder="0"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
