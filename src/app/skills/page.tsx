'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Tooltip } from '@/components/ui/tooltip'
import { useTheme } from 'next-themes'

type Skill = {
  name: string
  image: string
  description: string
  level: number
}

type SkillCategory = {
  name: string
  skills: Skill[]
}

const skillsData: SkillCategory[] = [
  {
    name: "Desarrollo Web",
    skills: [
      { name: "HTML", image: "/images/html.png", description: "Lenguaje de marcado para la web", level: 90 },
      { name: "CSS", image: "/images/css.png", description: "Hojas de estilo en cascada", level: 85 },
      { name: "JavaScript", image: "/images/JavaScript.png", description: "Lenguaje de programación para la web", level: 80 },
      { name: "React", image: "/images/react.png", description: "Biblioteca para interfaces de usuario", level: 75 },
      { name: "Node.js", image: "/images/node.png", description: "Entorno de ejecución para JavaScript", level: 70 },
      { name: "Express", image: "/images/express.png", description: "Framework web para Node.js", level: 65 },
    ]
  },
  {
    name: "Bases de Datos",
    skills: [
      { name: "MySQL", image: "/images/mysql.png", description: "Sistema de gestión de bases de datos relacional", level: 80 },
      { name: "MongoDB", image: "/images/mongo.png", description: "Base de datos NoSQL", level: 75 },
      { name: "PostgreSQL", image: "/images/posgress.png", description: "Sistema de base de datos relacional avanzado", level: 70 },
    ]
  },
  {
    name: "DevOps",
    skills: [
      { name: "Docker", image: "/images/doker.png", description: "Plataforma de contenedores", level: 65 },
      { name: "Kubernetes", image: "/images/kuber.png", description: "Sistema de orquestación de contenedores", level: 60 },
      { name: "Jenkins", image: "/images/jenkis.png", description: "Servidor de automatización", level: 55 },
    ]
  },
  {
    name: "Lenguajes de Programación",
    skills: [
      { name: "Python", image: "/images/python.png", description: "Lenguaje de programación de alto nivel", level: 85 },
      { name: "Java", image: "/images/java.png", description: "Lenguaje de programación orientado a objetos", level: 75 },
      { name: "C#", image: "/images/c.png", description: "Lenguaje de programación multiparadigma", level: 70 },
    ]
  },
  {
    name: "Herramientas",
    skills: [
      { name: "Git", image: "/images/git.png", description: "Sistema de control de versiones", level: 85 },
      { name: "VS Code", image: "/images/vscode.png", description: "Editor de código fuente", level: 90 },
      { name: "Postman", image: "/images/postman.png", description: "Plataforma de API para desarrolladores", level: 80 },
    ]
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillsData[0].name)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Mis Habilidades</h1>
      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {skillsData.map((category) => (
          <motion.button
            key={category.name}
            className={`px-4 py-2 rounded-full ${
              activeCategory === category.name
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            onClick={() => setActiveCategory(category.name)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.name}
          </motion.button>
        ))}
      </div>

      <motion.div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">{activeCategory}</h2>
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {skillsData
              .find((category) => category.name === activeCategory)
              ?.skills.map((skill) => (
                <Tooltip key={skill.name} content={
                  <div>
                    <p>{skill.description}</p>
                    <p>Nivel: {skill.level}%</p>
                  </div>
                }>
                  <motion.div 
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-20 h-20 relative mb-2 overflow-hidden rounded-lg">
                      <Image
                        src={skill.image}
                        alt={skill.name}
                        layout="fill"
                        objectFit="contain"
                        className="transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <span className="text-center dark:text-white">{skill.name}</span>
                  </motion.div>
                </Tooltip>
              ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="mt-8 text-center">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          Cambiar a modo {theme === 'dark' ? 'claro' : 'oscuro'}
        </button>
      </div>
    </div>
  )
}