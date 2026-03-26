import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection({ title, description, buttonText = 'Contáctanos', buttonLink = '/contacto' }) {
  return (
    <section
      className="py-20 px-4 text-white"
      style={{ background: 'var(--gradient-hero)' }}
    >
      <div className="container mx-auto text-center max-w-2xl">
        <h2
          className="text-2xl md:text-3xl font-bold mb-4 tracking-tight animate-fade-up"
          style={{ textWrap: 'balance' }}
        >
          {title}
        </h2>
        <p className="text-base md:text-lg opacity-80 mb-8 leading-relaxed animate-fade-up delay-100">
          {description}
        </p>
        <Link
          to={buttonLink}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-white font-semibold transition-all duration-200 hover:scale-[1.03] hover:shadow-lg text-[hsl(237,35%,26%)] animate-fade-up delay-200"
        >
          {buttonText}
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}
