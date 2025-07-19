'use client';
import { useState } from 'react';

export default function CertificationsSection() {
  const [showPDF, setShowPDF] = useState(false);
  const [pdfSrc, setPdfSrc] = useState('');

  const certifications = [
    { name: 'Core Java Concepts Foundation', pdf: 'Core Java Concepts_Foundation.pdf' },
    { name: 'Big Data Integration and Processing', url: 'https://www.coursera.org/account/accomplishments/verify/G5X2LDN5O6EM' },
    { name: 'Big Data Modelling and Management Systems', url: 'https://www.coursera.org/account/accomplishments/verify/KV88FOJZTXPH' },
    { name: 'Tableau Certified', pdf: 'TNX TABLEAU COURSE Completion Certificate _ Ronit Kochar .pdf' },
    { name: 'Introduction to Big Data', url: 'https://www.coursera.org/account/accomplishments/verify/MKX4YAI6UWYS' },
    { name: 'Natural Language Processing in Tensorflow', url: 'https://www.coursera.org/account/accomplishments/verify/VXQVKA4P23K3' },
    { name: 'Certified Data Scientist', pdf: 'Teachnook COURSE Completion Certificate _ Ronit Kochar.pdf' },
    { name: 'Python Project for Data Science', url: 'https://www.coursera.org/account/accomplishments/verify/UTTAJXMGMUAZ' },
    { name: 'Tools for Data Science', url: 'https://www.coursera.org/account/accomplishments/verify/883VQZ844SQ6' },
    { name: 'Python for Data Science and AI', url: 'https://www.credly.com/badges/9508ddfe-966f-4d39-8ad2-e789dac34020/linked_in_profile' },
    { name: 'HTML, CSS and Javascript for Web Developers', url: 'https://www.coursera.org/account/accomplishments/verify/WA8EMJSPSQBB' },
    { name: 'Core Java Made Easy', url: 'https://tcsglobal.udemy.com/certificate/UC-0dbcb04b-4702-489e-800f-75f466099169/' },
    { name: 'LangChain - Develop LLM powered applications with LangChain', url: 'https://www.udemy.com/certificate/UC-2bed0a6f-8730-42e4-a864-54b59ce50535/' },
  ];

  const handlePdfOpen = (pdf: string) => {
    setPdfSrc(`/pdfs/${pdf}`);
    setShowPDF(true);
  };

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Certifications
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map(({ name, url, pdf }, index) =>
            url ? (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-2xl border border-white/10 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-blue-600"
              >
                <h3 className="text-lg font-semibold text-white">{name}</h3>
              </a>
            ) : (
              <button
                key={index}
                onClick={() => handlePdfOpen(pdf!)}
                className="w-full text-left bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-2xl border border-white/10 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-blue-600"
              >
                <h3 className="text-lg font-semibold text-white">{name}</h3>
              </button>
            )
          )}
        </div>
      </div>

      {/* PDF Modal */}
      {showPDF && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
          <div className="relative bg-white w-full max-w-4xl h-[80vh] rounded-lg overflow-hidden">
            <button
              onClick={() => setShowPDF(false)}
              className="absolute top-2 right-4 text-gray-700 text-2xl font-bold z-10 hover:text-gray-900"
            >
              &times;
            </button>
            <iframe
              src={pdfSrc}
              className="w-full h-full"
              title="Certification PDF"
              frameBorder="0"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

