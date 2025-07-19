'use client';
import { useState } from 'react';

export default function ExperienceSection() {
  const [showPDF, setShowPDF] = useState(false);

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="space-y-12">
          <div
            className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-8 rounded-2xl border border-white/10 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => setShowPDF(true)}
            title="Click to view internship details PDF"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-2xl font-semibold text-white">AI Intern</h3>
              <span className="text-blue-400 font-medium">May 2025 - July 2025</span>
            </div>
            <div className="text-purple-400 font-medium mb-4">Tata Consultancy Services, Pune</div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Gained hands-on experience with Generative AI, LangChain, and various LLMs through practical projects, designing and deploying intelligent agents for real-time data generation and analysis.
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Built and integrated backend and frontend tools like Pinecone, React agents, and vector databases for scalable automation pipelines.
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Specialized in prompt design, evaluation workflows, and system-level orchestration using modern frameworks.
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                'LangChain',
                'LLM',
                'Azure Databricks',
                'Chatbot Development',
                'LangGraph',
                'Data Pipelines'
              ].map((skill) => (
                <span key={skill} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* PDF Modal */}
          {showPDF && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4 z-50">
                <div className="bg-white rounded-lg max-w-4xl w-full h-[80vh] overflow-hidden relative">
                    <button
                    onClick={() => setShowPDF(false)}
                    aria-label="Close"
                    className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 font-bold text-xl z-10"
                    >
                    &times;
                    </button>
                    <iframe
                    src="/pdfs/A Journey through Generative AI, LangChain, and Agent Development.pdf"
                    className="w-full h-full"
                    title="AI Internship Report"
                    frameBorder="0"
                    style={{ border: 'none' }}
                    />
                </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

