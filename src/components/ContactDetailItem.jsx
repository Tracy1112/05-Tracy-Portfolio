import React from 'react'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

const ContactDetailItem = ({ item }) => {
  const Icon = {
    FaEnvelope: FaEnvelope,
    FaPhoneAlt: FaPhoneAlt,
  }[item.icon]

  return (
    <div className="flex items-center text-white text-xl">
      {Icon && <Icon className="text-green-400 text-2xl mr-4" />}
      <a
        href={item.link}
        className="hover:text-green-400 transition-colors duration-300"
      >
        {item.value}
      </a>
    </div>
  )
}

export default ContactDetailItem
