'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.section 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              className="mb-8 relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/images/IMG_1585.JPG" 
                alt="Jhonatan G."
                width={250}
                height={250}
                className="rounded-full shadow-2xl border-4 border-white dark:border-gray-700"
              />
              <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-3 rounded-full shadow-lg">
                <span className="text-2xl">👨‍💻</span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              ¡Hola! Soy Jhonatan
            </motion.h1>
            
            <motion.p 
              className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Un apasionado ingeniero de sistemas especializado en desarrollo web, redes y seguridad.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link 
                href="/contact" 
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl"
              >
                Contáctame
              </Link>
            </motion.div>
          </div>
        </motion.section>
        
        {/* About Section */}
        <motion.section 
          className="mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Sobre mí</h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              Con más de 5 años de experiencia en el campo de la ingeniería de sistemas, me apasiona crear soluciones 
              innovadoras y eficientes. Mi experiencia abarca desde el desarrollo de aplicaciones web hasta la 
              implementación de sistemas de seguridad robustos.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Siempre estoy buscando nuevos desafíos y oportunidades para aprender y crecer profesionalmente. 
              ¡Explora mi portafolio para ver algunos de mis proyectos más recientes!
            </p>
          </div>
        </motion.section>
        
        {/* Technologies Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Tecnologías destacadas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'JavaScript', icon: '⚡' },
              { name: 'React', icon: '⚛️' },
              { name: 'Node.js', icon: '🚀' },
              { name: 'Python', icon: '🐍' },
              { name: 'AWS', icon: '☁️' },
              { name: 'Docker', icon: '🐳' },
              { name: 'Git', icon: '📚' },
              { name: 'SQL', icon: '💾' }
            ].map((tech) => (
              <motion.div
                key={tech.name}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="font-semibold text-gray-800 dark:text-white">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
