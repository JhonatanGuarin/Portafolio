import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <p>© 2024 Jhonatan G. Todos los derechos reservados.</p>
          <div className="space-x-4">
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}