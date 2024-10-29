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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Mis Habilidades
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Un conjunto de tecnologías y herramientas que domino para crear soluciones innovadoras y eficientes.
          </p>
        </motion.div>
        
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {skillsData.map((category, index) => (
            <motion.button
              key={category.name}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.name
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md'
              }`}
              onClick={() => setActiveCategory(category.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
            {activeCategory}
          </h2>
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {skillsData
                .find((category) => category.name === activeCategory)
                ?.skills.map((skill, index) => (
                  <Tooltip key={skill.name} content={
                    <div className="p-2">
                      <p className="font-medium mb-2">{skill.description}</p>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-1">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <p className="text-sm text-right">{skill.level}%</p>
                    </div>
                  }>
                    <motion.div 
                      className="group bg-gray-50 dark:bg-gray-700 rounded-xl p-4 hover:shadow-lg transition-shadow"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="w-20 h-20 relative mx-auto mb-3">
                        <Image
                          src={skill.image}
                          alt={skill.name}
                          layout="fill"
                          objectFit="contain"
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <span className="block text-center font-medium text-gray-800 dark:text-white">
                        {skill.name}
                      </span>
                      <div className="mt-2 w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1">
                        <motion.div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  </Tooltip>
                ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="px-6 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md transition-all"
          >
            Cambiar a modo {theme === 'dark' ? 'claro' : 'oscuro'}
          </button>
        </motion.div>
      </div>
    </div>
  )
}