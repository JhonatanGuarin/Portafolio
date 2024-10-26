import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: "Proyecto 1",
    description: "Una aplicación web para gestión de tareas utilizando React y Node.js.",
    image: "/placeholder.svg?height=300&width=400",
    github: "https://github.com/username/project1",
    demo: "https://project1-demo.com"
  },
  {
    title: "Proyecto 2",
    description: "Sistema de monitoreo de redes utilizando Python y Grafana.",
    image: "/placeholder.svg?height=300&width=400",
    github: "https://github.com/username/project2",
    demo: "https://project2-demo.com"
  },
  // Agrega más proyectos aquí
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Mis Proyectos</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={project.image} alt={project.title} width={400} height={300} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-between">
                <Link href={project.github} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                  Ver en GitHub
                </Link>
                <Link href={project.demo} className="text-green-500 hover:underline" target="_blank" rel="noopener noreferrer">
                  Demo en vivo
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}