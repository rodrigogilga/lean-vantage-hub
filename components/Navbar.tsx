'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const links = [
  { name: 'Inicio',       path: '/' },
  { name: 'Servicios',    path: '/servicios' },
  { name: 'Metodología',  path: '/metodologia' },
  { name: 'Casos de uso', path: '/casos-de-uso' },
  { name: 'Nosotros',     path: '/nosotros' },
  { name: 'FAQ',          path: '/faq' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const isActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path)

  const onDark = pathname === '/' && !scrolled

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_1px_3px_0_hsl(237_35%_26%/0.06)] border-b border-[hsl(228,14%,89%)]'
          : 'bg-transparent'
      }`}
      style={{ animation: 'fadeIn 0.5s cubic-bezier(0.25,0.1,0.25,1)' }}
    >
      {/* Subtle dark gradient behind nav when on dark hero */}
      {onDark && (
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(7,16,43,0.5) 0%, transparent 100%)' }} />
      )}
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center space-x-2 font-bold text-xl tracking-tight hover:opacity-80 transition-opacity ${onDark ? 'text-white' : 'text-[hsl(237,35%,26%)]'}`}
          >
            <span className={`transition-all duration-300 flex items-center justify-center ${onDark ? 'bg-white rounded-lg p-1' : ''}`}>
              <Image
                src="/logo-lv.png"
                alt="Leanvan logo"
                width={36}
                height={36}
                className={`object-contain transition-all duration-300 ${onDark ? 'h-7 w-7' : 'h-9 w-9 mix-blend-multiply'}`}
              />
            </span>
            <span>Leanvan</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive(link.path)
                    ? onDark
                      ? 'text-white bg-white/[0.12]'
                      : 'text-[hsl(237,35%,26%)] bg-[hsl(237,35%,26%)]/[0.07]'
                    : onDark
                      ? 'text-white/85 hover:text-white hover:bg-white/[0.1]'
                      : 'text-[hsl(233,18%,42%)] hover:text-[hsl(237,35%,26%)] hover:bg-[hsl(237,35%,26%)]/[0.07]'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span
                    className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
                    style={{
                      background: onDark
                        ? 'linear-gradient(90deg, rgba(255,255,255,0.4), rgba(255,255,255,0.9), rgba(255,255,255,0.4))'
                        : 'linear-gradient(90deg, hsl(237 35% 26% / 0.6), hsl(237 35% 26% / 1), hsl(237 35% 26% / 0.6))',
                    }}
                  />
                )}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="btn-primary ml-4"
              style={{ padding: '8px 20px', fontSize: '0.875rem', borderRadius: '8px' }}
            >
              Contáctanos
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${onDark ? 'text-white hover:bg-white/10' : 'hover:bg-[hsl(228,18%,93%)]'}`}
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
          className="md:hidden bg-white/95 backdrop-blur-md border-t border-[hsl(228,14%,89%)] shadow-lg"
          style={{ animation: 'fadeUp 0.3s cubic-bezier(0.25,0.1,0.25,1)' }}
        >
          <div className="container mx-auto px-4 py-4 space-y-1">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-[hsl(237,35%,26%)]/[0.08] text-[hsl(237,35%,26%)]'
                    : 'text-[hsl(233,18%,42%)] hover:bg-[hsl(228,18%,93%)]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/contacto"
                className="btn-primary w-full justify-center"
                style={{ padding: '10px 20px', fontSize: '0.875rem', borderRadius: '8px' }}
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
