import React from 'react'

const Experience = () => {
  const workExperience = [
    {
      title: 'Scientific Programmer & Data Analyst',
      company:
        'International Institute for Biomedical Research, Shenzhen, China.',
      dates: 'Aug 2020 - Jun 2021 ',
      duties: [
        'Built Python scripts to automate 3D microscopy data processing.',
        'Streamlined structural modelling workflows and authored SOPs.',
        'Collaborated with cross-functional teams to support protocol validation.',
      ],
      technologies: ['Python', 'Linux', 'Bash', 'Git', 'COOT', 'PHENIX'],
    },
    {
      title: 'Technical Project Coordinator',
      company: 'Janich Medical Technology Co., LTD, Hangzhou, China',
      dates: 'Dec 2017 - Jul 2018',
      duties: [
        'Led communication across teams to align product and digital goals.',
        'Managed client updates, technical support, and product rollouts.',
        'Improved sales by 20% through process automation.',
      ],
      technologies: ['PowerPoint', 'Excel', 'Agile tools'],
    },
    {
      title: 'Data Engineer - Manufacturing Analytics',
      company: 'Ruiyi Biotechnology Co., LTD, Shanghai, China',
      dates: 'Jul 2016 - Dec 2017',
      duties: [
        'Created PowerBI dashboards and Excel macros for real-time manufacturing insights.',
        'Automated data cleaning and reporting workflows with custom scripts.',
        'Delivered technical presentations to enhance data-driven decisions.',
      ],
      technologies: ['PowerBI', 'Excel', 'Python'],
    },
  ]

  return (
    <div className="flex-1">
      <h3 className="text-4xl font-bold mb-8">Work&nbsp;&nbsp;Experience</h3>
      {workExperience.map((job, index) => (
        <div key={index} className="mb-8">
          <h4 className="text-2xl font-semibold text-green-400">{job.title}</h4>
          <p className="text-lg text-white/70">
            {job.company} | {job.dates}
          </p>
          <ul className="list-disc list-inside mt-2 text-lg text-white/90">
            {job.duties.map((duty, dutyIndex) => (
              <li key={dutyIndex}>{duty}</li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="text-lg text-white/90 font-semibold mb-2">
              Technologies:
            </p>
            <div className="flex flex-wrap gap-2">
              {job.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Experience
