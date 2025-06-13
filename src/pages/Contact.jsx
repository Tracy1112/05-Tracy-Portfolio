import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt } from 'react-icons/fa'
// Assuming you have a profile image in your assets
import profilePic from '../assets/images/tk-1.png' // Placeholder: Update this path to your actual professional headshot
import { contactDetails, socialLinks } from '../data/contactData'
import ContactDetailItem from '../components/ContactDetailItem'
import SocialLinkItem from '../components/SocialLinkItem'

const Contact = () => {
  return (
    <div className="align-element flex flex-col items-center justify-start pt-12 min-h-screen text-white">
      <p className="text-xl text-white/70 font-sans tracking-wide mb-12 max-w-2xl text-center">
        I'm always eager to connect! Whether you have a project idea, a job
        opportunity, or just want to chat about tech, feel free to reach out.
        I'm excited to hear from you.
      </p>

      <div className="w-full bg-gray-800 p-8 rounded-xl shadow-lg max-w-2xl mx-auto flex flex-col items-center gap-8">
        {/* Profile Picture */}
        <div className="flex-shrink-0 mb-6">
          <img
            src={profilePic}
            alt="Your Profile"
            className="w-32 h-32 rounded-full object-cover border-2 border-green-400 shadow-md"
          />
        </div>

        {/* Direct Contact & Social Links */}
        <div className="flex-grow">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Reach Out Directly
          </h2>
          <p className="text-white/70 text-base mb-4">
            I typically respond to inquiries within 1-2 business days. Looking
            forward to connecting!
          </p>
          <div className="space-y-6">
            {contactDetails.map((item, index) => (
              <ContactDetailItem key={index} item={item} />
            ))}

            {/* Social Media Links */}
            <div className="flex space-x-6 pt-4">
              {socialLinks.map((item, index) => (
                <SocialLinkItem key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm text-white/50 mt-12 text-center">
        &copy; {new Date().getFullYear()} Tracy Kong. All rights reserved.
      </p>
    </div>
  )
}

export default Contact
