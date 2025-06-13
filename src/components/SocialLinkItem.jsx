import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const SocialLinkItem = ({ item }) => {
  const Icon = {
    FaLinkedin: FaLinkedin,
    FaGithub: FaGithub,
  }[item.icon]

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-green-400 transition-colors duration-300"
    >
      {Icon && <Icon className="text-4xl" />}
    </a>
  )
}

export default SocialLinkItem
