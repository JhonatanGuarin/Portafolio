'use client'

import { useState } from 'react'
import Image from 'next/image'

type Skill = {
  name: string
  image: string
}

type SkillCategory = {
  name: string
  skills: Skill[]
}

const skillsData: SkillCategory[] = [
  {
    name: "Desarrollo Web",
    skills: [
      { name: "HTML", image: "/placeholder.svg?height=50&width=50" },
      { name: "CSS", image: "/placeholder.svg?height=50&width=50" },
      { name: "JavaScript", image: "/placeholder.svg?height=50&width=50" },
      { name: "React", image: "/placeholder.svg?height=50&width=50" },
      { name: "Node.js", image: "/placeholder.svg?height=50&width=50" },
      { name: "Express", image: "/placeholder.svg?height=50&width=50" },
    ]
  },
  {
    name: "Bases de Datos",
    skills: [
      { name: "MySQL", image: "/placeholder.svg?height=50&width=50" },
      { name: "MongoDB", image: "/placeholder.svg?height=50&width=50" },
      { name: "PostgreSQL", image: "/placeholder.svg?height=50&width=50" },
    ]
  },
  {
    name: "DevOps",
    skills: [
      { name: "Docker", image: "/placeholder.svg?height=50&width=50" },
      { name: "Kubernetes", image: "/placeholder.svg?height=50&width=50" },
      { name: "Jenkins", image: "/placeholder.svg?height=50&width=50" },
    ]
  },
  {
    name: "Lenguajes de Programación",
    skills: [
      { name: "Python", image: "/placeholder.svg?height=50&width=50" },
      { name: "Java", image: "/placeholder.svg?height=50&width=50" },
      { name: "C#", image: "/placeholder.svg?height=50&width=50" },
    ]
  },
  {
    name: "Herramientas",
    skills: [
      { name: "Git", image: "/placeholder.svg?height=50&width=50" },
      { name: "VS Code", image: "/placeholder.svg?height=50&width=50" },
      { name: "Postman", image: "/placeholder.svg?height=50&width=50" },
    ]
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillsData[0].name)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Mis Habilidades</h1>
      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {skillsData.map((category) => (
          <button
            key={category.name}
            className={`px-4 py-2 rounded-full ${
              activeCategory === category.name
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => setActiveCategory(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">{activeCategory}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skillsData
            .find((category) => category.name === activeCategory)
            ?.skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                <div className="w-20 h-20 relative mb-2">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <span className="text-center">{skill.name}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}