import React from 'react'

const ProjectDetails = ({ project }) => {
  return (
    <div className="w-full lg:w-1/2 p-4 text-white h-full">
      <h1 className="text-7xl font-bold mb-6 text-gray-600 opacity-80 text-stroke-white">
        {project.number}
      </h1>
      <h2 className="text-4xl font-bold mb-6">{project.title}</h2>
      <p className="text-lg text-white/80 mb-8">{project.description}</p>
      <p className="text-lg text-green-400 mb-8">
        {project.technologies.join(', ')}
      </p>
      <div className="flex space-x-6 border-t-2 border-gray-700 pt-6">
        {/* Live Link */}
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gray-800 rounded-full p-4 hover:bg-white hover:text-gray-800 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-external-link"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
        {/* GitHub Link */}
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gray-800 rounded-full p-4 hover:bg-white hover:text-gray-800 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="none"
            className="feather feather-github"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577V20.23c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.796 24 17.299 24 12c0-6.63-5.37-12-12-12Z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default ProjectDetails
