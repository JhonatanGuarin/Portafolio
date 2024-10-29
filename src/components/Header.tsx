'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Jhonatan G.</Link>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">Inicio</Link></li>
            <li><Link href="/projects" className="hover:underline">Proyectos</Link></li>
            <li><Link href="/skills" className="hover:underline">Habilidades</Link></li>
            <li><Link href="/contact" className="hover:underline">Contacto</Link></li>
          </ul>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-secondary text-secondary-foreground"
          >
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  )
}