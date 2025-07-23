'use client';
import { useState } from 'react';
import { getBasePath } from '../utils/basePath';

export default function ExperienceSection() {
  const [activePDF, setActivePDF] = useState<null | 'journal' | 'certificate'>(null);

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Experience
        </h2>

        {/* Experience Card */}
        <div
          className="relative group bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
          title="Hover to reveal options"
        >
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-2xl font-semibold text-white">AI Intern</h3>
              <span className="text-blue-400 font-medium">May 2025 - July 2025</span>
            </div>

            <div className="text-purple-400 font-medium mb-4">Tata Consultancy Services, Pune</div>

            <ul className="space-y-3 text-gray-300 mb-6">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Worked with Generative AI, LangChain, and intelligent agents.
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Integrated tools like Pinecone, React agents, and vector databases.
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Specialized in prompt design and orchestration frameworks.
              </li>
            </ul>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {[
                'LangChain',
                'LLM',
                'Azure Databricks',
                'Chatbot Development',
                'LangGraph',
                'Data Pipelines',
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Expanded bottom section with same background, no white bg on buttons */}
          <div
            className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 px-6 py-4 flex justify-center gap-4 transition-all duration-500 max-h-0 group-hover:max-h-32 group-hover:opacity-100 opacity-0 rounded-b-2xl"
          >
            <button
              onClick={() => setActivePDF('journal')}
              className="bg-black text-white font-semibold py-2 px-5 rounded hover:bg-gray-800 transition"
            >
              📘 Journal
            </button>
            <button
              onClick={() => setActivePDF('certificate')}
              className="bg-red-600 text-white font-semibold py-2 px-5 rounded hover:bg-red-700 transition"
            >
              🎓 Certificate
            </button>
          </div>
        </div>

        {/* PDF MODAL */}
        {activePDF && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full h-[80vh] overflow-hidden relative shadow-xl">
              <button
                onClick={() => setActivePDF(null)}
                aria-label="Close"
                className="absolute top-2 right-2 text-gray-700 hover:text-black font-bold text-2xl z-10"
              >
                &times;
              </button>
              <iframe
                src={
                  activePDF === 'journal'
                    ? `${getBasePath()}/pdfs/A Journey through Generative AI, LangChain, and Agent Development.pdf`
                    : `${getBasePath()}/pdfs/Internship Completion Certificate.pdf`
                }
                className="w-full h-full"
                title={activePDF === 'journal' ? 'Journal PDF' : 'Certificate PDF'}
                frameBorder="0"
                style={{ border: 'none' }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
