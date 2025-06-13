import React from 'react'

const EducationEntry = ({ entry }) => {
  return (
    <div className="mb-8">
      <h4 className="text-2xl font-semibold text-green-400 mb-2">
        {entry.degree}
      </h4>
      <p className="text-lg text-white/70 mb-3">
        {entry.institution} | {entry.location} | {entry.dates}
      </p>
      <ul className="list-disc list-inside mt-2 text-lg text-white/90">
        {entry.details.map((detail, detailIndex) => (
          <li key={detailIndex}>{detail}</li>
        ))}
      </ul>
    </div>
  )
}

export default EducationEntry
