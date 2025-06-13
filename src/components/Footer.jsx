import React from 'react'

const Footer = () => {
  const statistics = [
    { number: '1+', text: 'Years of coding experience' },
    { number: '5', text: 'Projects completed' },
    { number: '10+', text: 'Technologies explored' },
    { number: '200+', text: 'Git commits' },
  ]

  return (
    <footer className="w-full py-20 ">
      <div className="align-element flex flex-col items-center justify-between lg:flex-row">
        {/* Left: Heart Icon */}
        {/* Removed Heart Icon as requested */}

        {/* Right: Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="flex flex-row items-center gap-3 justify-center"
            >
              <span className="text-4xl font-bold text-green-400">
                {stat.number}
              </span>
              <span className="text-base text-left text-white/80">
                {stat.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
