import { Link, useLocation } from 'react-router-dom'
import { FaBarsStaggered } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Resume', path: '/resume' },
  { name: 'Work', path: '/work' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full py-12 bg-transparent align-element">
      <div className="align-element flex items-baseline justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-5xl font-bold text-green-400 leading-none font-title-big"
        >
          Tracy
        </NavLink>

        {/* Navigation Links (Desktop) */}
        <div className="flex items-center gap-8 relative">
          <ul className="hidden md:flex items-center justify-end gap-4 text-xl font-sans text-right">
            {navLinks.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  aria-current={pathname === path ? 'page' : undefined}
                  className={`px-2 pb-1 border-b-2 transition-colors duration-200 ${
                    pathname === path
                      ? 'text-green-400 border-green-400'
                      : 'text-white border-transparent hover:text-green-400 hover:border-green-400'
                  }`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-green-400 text-3xl focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Open menu"
          >
            <FaBarsStaggered />
          </button>

          {/* CTA Button (Desktop only) */}
          <Link
            to="/contact"
            className="ml-8 px-4 py-2 h-10 min-w-fit font-bold text-base font-sans border border-green-400 bg-green-400 text-black rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-green-600 active:bg-green-700 hidden md:flex"
          >
            Hire me
          </Link>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="md:hidden absolute right-0 top-full mt-2 w-40 bg-black shadow-lg rounded-xl py-4 z-50">
              <ul className="flex flex-col items-center gap-1">
                {navLinks.map(({ name, path }) => (
                  <li key={name}>
                    <Link
                      to={path}
                      onClick={() => setMenuOpen(false)}
                      className={`block px-4 py-1 text-xl font-sans transition-colors duration-200 ${
                        pathname === path
                          ? 'text-green-400'
                          : 'text-white hover:text-green-400'
                      }`}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="block w-11/12 mx-auto mt-4 px-4 py-2 h-10 font-bold text-base font-sans border border-green-400 bg-green-400 text-black rounded-full text-center transition-colors duration-200 hover:bg-green-600 active:bg-green-700"
              >
                Hire me
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
