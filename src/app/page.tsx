import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">¡Hola! Soy Jhonatan</h1>
        <p className="text-xl mb-8">Un apasionado ingeniero de sistemas especializado en desarrollo web, redes y seguridad.</p>
        <Image
          src="/placeholder.svg?height=200&width=200"
          alt="Jhonatan G."
          width={200}
          height={200}
          className="rounded-full mx-auto mb-8"
        />
        <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Contáctame
        </Link>
      </section>
      
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Sobre mí</h2>
        <p className="mb-4">
          Con más de X años de experiencia en el campo de la ingeniería de sistemas, me apasiona crear soluciones 
          innovadoras y eficientes. Mi experiencia abarca desde el desarrollo de aplicaciones web hasta la 
          implementación de sistemas de seguridad robustos.
        </p>
        <p>
          Siempre estoy buscando nuevos desafíos y oportunidades para aprender y crecer profesionalmente. 
          ¡Explora mi portafolio para ver algunos de mis proyectos más recientes!
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">Tecnologías destacadas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'Git', 'SQL'].map((tech) => (
            <div key={tech} className="bg-white p-4 rounded shadow text-center">
              {tech}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}