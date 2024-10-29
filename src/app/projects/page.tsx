'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Code2 } from 'lucide-react'

const projects = [
  {
    title: "Sistema de Reservas de Restaurantes",
    description: "Plataforma full-stack que permite a los usuarios hacer reservaciones en restaurantes y a los propietarios gestionar sus establecimientos. Desarrollada con React, Node.js, y MySQL.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MySQL", "Express", "Tailwind CSS"],
    github: "https://github.com/yourusername/restaurant-reservation",
    demo: "https://restaurant-reservation-demo.com",
    featured: true
  },
  {
    title: "Aplicación de Gestión de Tareas",
    description: "Aplicación web para gestionar tareas y proyectos con características como categorización, fechas límite y estadísticas de productividad.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["TypeScript", "Next.js", "MongoDB", "Prisma"],
    github: "https://github.com/yourusername/task-manager",
    demo: "https://task-manager-demo.com",
    featured: true
  },
  {
    title: "Sistema de Monitoreo de Redes",
    description: "Herramienta de monitoreo de redes que proporciona análisis en tiempo real y alertas utilizando Python y Grafana.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Python", "Grafana", "Docker", "PostgreSQL"],
    github: "https://github.com/yourusername/network-monitor",
    demo: "https://network-monitor-demo.com"
  }
]

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
            Mis Proyectos
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades en desarrollo web, 
            arquitectura de software y resolución de problemas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Destacado
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                      <span>Código</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Demo</span>
                    </motion.a>
                  </div>
                  <motion.button
                    className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Code2 className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
