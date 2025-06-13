import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const ResumeLinks = () => {
  const location = useLocation()
  const currentPath = location.pathname

  const links = [
    { to: '/resume', text: 'Experience' },
    { to: '/resume/education', text: 'Education' },
    { to: '/resume/skills', text: 'Skills' },
    { to: '/resume/certificates', text: 'Certificates' },
  ]

  return (
    <nav className="mb-8 w-56">
      <ul className="flex flex-col gap-4">
        {links.map((link) => {
          const isActive =
            currentPath === link.to ||
            (currentPath === '/resume' && link.to === '/resume')
          const linkClasses = `block text-center px-6 py-2 rounded-md transition-colors duration-200 ${
            isActive
              ? 'bg-green-400 text-black font-bold'
              : 'bg-gray-800 text-white/80 hover:bg-gray-700'
          }`

          return (
            <li key={link.to}>
              <Link to={link.to} className={linkClasses}>
                {link.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default ResumeLinks
