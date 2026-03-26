import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '@/assets/logo.png'

const links = [
  { name: 'Inicio',        path: '/' },
  { name: 'Servicios',     path: '/servicios' },
  { name: 'Metodología',   path: '/metodologia' },
  { name: 'Casos de uso',  path: '/casos' },
  { name: 'FAQ',           path: '/faq' },
  { name: 'Contacto',      path: '/contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_1px_3px_0_hsl(237_35%_26%/0.06)] border-b border-brand-border'
          : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-brand-navy hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Leanvan" className="h-9 w-9 object-contain" />
            <span>Leanvan</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-brand-navy bg-brand-navy/[0.07]'
                    : 'text-brand-textMuted hover:text-brand-navy hover:bg-brand-navy/[0.04]'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span
                    className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-brand-navy/70"
                  />
                )}
              </Link>
            ))}
            <Link
              to="/contacto"
              className="ml-4 px-5 py-2 text-sm font-semibold rounded-lg text-white bg-brand-navy transition-all duration-200 hover:scale-[1.02] hover:opacity-90"
            >
              Contáctanos
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-brand-muted transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú de navegación'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden bg-white/95 backdrop-blur-md border-t border-brand-border shadow-lg"
          style={{ animation: 'fadeUp 0.3s cubic-bezier(0.25,0.1,0.25,1)' }}
        >
          <div className="container mx-auto px-4 py-4 space-y-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-brand-navy/[0.08] text-brand-navy'
                    : 'text-brand-textMuted hover:bg-brand-muted'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                to="/contacto"
                className="block w-full text-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-brand-navy transition-all"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
