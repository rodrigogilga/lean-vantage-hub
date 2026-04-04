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

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_1px_3px_0_hsl(237_35%_26%/0.06)] border-b border-[hsl(228,14%,89%)]'
          : 'bg-transparent'
      }`}
      style={{ animation: 'fadeIn 0.5s cubic-bezier(0.25,0.1,0.25,1)' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 font-bold text-xl tracking-tight text-[hsl(237,35%,26%)] hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo-lv.png"
              alt="Leanvan logo"
              width={36}
              height={36}
              className="h-9 w-9 object-contain mix-blend-multiply"
            />
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
                    ? 'text-[hsl(237,35%,26%)] bg-[hsl(237,35%,26%)]/[0.07]'
                    : 'text-[hsl(233,18%,42%)] hover:text-[hsl(237,35%,26%)] hover:bg-[hsl(237,35%,26%)]/[0.07]'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span
                    className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
                    style={{
                      background:
                        'linear-gradient(90deg, hsl(237 35% 26% / 0.6), hsl(237 35% 26% / 1), hsl(237 35% 26% / 0.6))',
                    }}
                  />
                )}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 text-[hsl(233,18%,42%)] hover:text-[hsl(237,35%,26%)] hover:bg-[hsl(237,35%,26%)]/[0.07]"
            >
              Contacto
            </Link>
            <Link
              href="/contacto"
              className="ml-4 px-5 py-2 text-sm font-semibold rounded-lg text-white transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_4px_14px_-2px_hsl(237_35%_26%/0.45)]"
              style={{ background: 'hsl(237,35%,26%)' }}
            >
              Contáctanos
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[hsl(228,18%,93%)] transition-colors"
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
            <Link
              href="/contacto"
              className="block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors text-[hsl(233,18%,42%)] hover:bg-[hsl(228,18%,93%)]"
            >
              Contacto
            </Link>
            <div className="pt-2">
              <Link
                href="/contacto"
                className="block w-full text-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-all"
                style={{ background: 'hsl(237,35%,26%)' }}
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
