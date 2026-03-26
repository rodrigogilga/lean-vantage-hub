import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import logo from '@/assets/logo.png'

export default function Footer() {
  return (
    <footer style={{ background: '#1a2252' }} className="text-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Leanvan" className="h-8 w-8 object-contain brightness-0 invert" />
              <span className="text-xl font-bold tracking-tight">Leanvan</span>
            </div>
            <p className="text-sm opacity-65 leading-relaxed">
              Consultoría y automatización con IA a la medida.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-80">
              Enlaces
            </h3>
            <ul className="space-y-2.5">
              {[
                { to: '/servicios',   label: 'Servicios' },
                { to: '/metodologia', label: 'Metodología' },
                { to: '/casos',       label: 'Casos de uso' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm opacity-60 hover:opacity-100 transition-opacity duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-80">
              Recursos
            </h3>
            <ul className="space-y-2.5">
              {[
                { to: '/faq',      label: 'FAQ' },
                { to: '/contacto', label: 'Contacto' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm opacity-60 hover:opacity-100 transition-opacity duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-80">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm opacity-60">
                <Mail size={15} />
                <span>contacto@leanvan.cloud</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm opacity-60">
                <Phone size={15} />
                <span>+52 844 461 5458</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col items-center justify-center gap-1 text-sm opacity-45">
          <p>© 2025 Leanvan. Todos los derechos reservados.</p>
          <p>Saltillo, Coahuila, México</p>
        </div>
      </div>
    </footer>
  )
}
