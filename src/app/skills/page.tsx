'use client'

import { useState } from 'react'

const skills = [
  { category: "Desarrollo Web", items: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express"] },
  { category: "Bases de Datos", items: ["MySQL", "MongoDB", "PostgreSQL"] },
  { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD"] },
  { category: "Lenguajes de Programación", items: ["Python", "Java", "C++"] },
  { category: "Herramientas", items: ["Git", "VS Code", "Postman", "Jira"] }
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skills[0].category)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Mis Habilidades</h1>
      <div className="flex flex-wrap mb-8">
        {skills.map((skill) => (
          <button
            key={skill.category}
            className={`mr-2 mb-2 px-4 py-2 rounded ${
              activeCategory === skill.category ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setActiveCategory(skill.category)}
          >
            {skill.category}
          </button>
        ))}
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">{activeCategory}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.find(skill => skill.category === activeCategory)?.items.map((item) => (
            <div key={item} className="bg-gray-100 p-3 rounded">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}