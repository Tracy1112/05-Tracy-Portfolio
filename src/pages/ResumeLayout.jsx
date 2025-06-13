import React from 'react'
import { Outlet } from 'react-router-dom'
import ResumeLinks from '../components/ResumeLinks'

const ResumeLayout = () => {
  return (
    <section className="align-element py-6 lg:py-10">
      <div className="flex flex-col lg:flex-row gap-20">
        <ResumeLinks />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </section>
  )
}

export default ResumeLayout
