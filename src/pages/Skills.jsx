import React from 'react'
import SkillItem from '../components/SkillItem'
import {
  HtmlIcon,
  CssIcon,
  JavaScriptIcon,
  ReactIcon,
  FigmaIcon,
  NodeIcon,
  TailwindIcon,
  ExpressIcon,
  PythonIcon,
  MongoIcon,
  MySQLIcon,
  AWSIcon,
  DockerIcon,
  UbuntuIcon,
  GitIcon,
  GitHubIcon,
  PostmanIcon,
} from '../components/SkillIcons'

const Skills = () => {
  const skills = [
    // Frontend
    {
      name: 'HTML',
      icon: <HtmlIcon />,
    },
    {
      name: 'CSS',
      icon: <CssIcon />,
    },
    {
      name: 'JavaScript',
      icon: <JavaScriptIcon />,
    },
    {
      name: 'React',
      icon: <ReactIcon />,
    },
    {
      name: 'Tailwind',
      icon: <TailwindIcon />,
    },
    {
      name: 'Figma',
      icon: <FigmaIcon />,
    },

    // Backend
    {
      name: 'Node',
      icon: <NodeIcon />,
    },
    {
      name: 'Express',
      icon: <ExpressIcon />,
    },
    {
      name: 'Python',
      icon: <PythonIcon />,
    },

    // Databases
    {
      name: 'MongoDB',
      icon: <MongoIcon />,
    },
    {
      name: 'MySQL',
      icon: <MySQLIcon />,
    },

    // Cloud & DevOps
    {
      name: 'AWS',
      icon: <AWSIcon />,
    },
    {
      name: 'Docker',
      icon: <DockerIcon />,
    },
    {
      name: 'Ubuntu',
      icon: <UbuntuIcon />,
    },

    // Version Control & Tools
    {
      name: 'Git',
      icon: <GitIcon />,
    },
    {
      name: 'GitHub',
      icon: <GitHubIcon />,
    },
    {
      name: 'Postman',
      icon: <PostmanIcon />,
    },
  ]

  return (
    <div className="flex-1">
      <h3 className="text-4xl font-bold mb-4">My skills</h3>
      <p className="text-lg text-white/80 mb-8">
        My diverse technical skill set encompasses full-stack web development,
        database management, cloud technologies, and essential version control
        tools.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default Skills
