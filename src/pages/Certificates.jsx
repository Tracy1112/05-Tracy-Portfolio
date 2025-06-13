import React from 'react'
import certificates from '../data/certificatesData'

const Certificates = () => {
  return (
    <div className="flex-1">
      <h3 className="text-4xl font-bold mb-4">Certificates</h3>
      <p className="text-lg text-white/80 mb-8">
        Here are some of the certifications I have earned, demonstrating my
        expertise in various areas of software development.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h4 className="text-xl font-semibold text-white mb-2">
              {cert.name}
            </h4>
            <p className="text-gray-400 mb-4">{cert.issuer}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certificates
