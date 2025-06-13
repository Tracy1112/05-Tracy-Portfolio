import React from 'react'
import EducationEntry from '../components/EducationEntry'

const Education = () => {
  const educationEntries = [
    {
      degree: 'PhD Candidate, Computational Molecular Bioscience (dropped)',
      institution: 'University of Queensland',
      location: 'Brisbane, Australia',
      dates: 'Apr 2019 - Jun 2022',
      details: [
        'Research focus on computational molecular bioscience',
        'Advanced studies in molecular modeling and simulation',
      ],
    },
    {
      degree: 'Master of Science, Bioscience',
      institution: 'Tsinghua University',
      location: 'Beijing, China',
      dates: 'Sep 2013 - Jul 2016',
      details: [
        'GPA: 85/100',
        'Specialized in bioscience research and applications',
      ],
    },
    {
      degree: 'Bachelor of Science, Bioscience',
      institution: 'Hubei Normal University',
      location: 'Hubei, China',
      dates: 'Sep 2009 - Jul 2013',
      details: [
        'GPA: 91/100',
        'Rank: 3/125',
        'Strong foundation in biological sciences',
      ],
    },
  ]

  return (
    <div className="flex-1">
      <h3 className="text-4xl font-bold mb-8">Education</h3>
      {educationEntries.map((entry, index) => (
        <EducationEntry key={index} entry={entry} />
      ))}
    </div>
  )
}

export default Education


                                                                   
