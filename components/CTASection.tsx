import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

interface CTASectionProps {
  title: string
  description: string
  buttonText?: string
  buttonLink?: string
}

export default function CTASection({
  title,
  description,
  buttonText = 'Contáctanos',
  buttonLink = '/contacto',
}: CTASectionProps) {
  return (
    <section
      className="py-20 px-4 text-white"
      style={{ background: 'var(--gradient-hero)' }}
    >
      <div className="container mx-auto text-center max-w-2xl">
        <Reveal>
          <h2
            className="text-2xl md:text-3xl font-bold mb-4 tracking-tight"
            style={{ textWrap: 'balance' } as React.CSSProperties}
          >
            {title}
          </h2>
          <p className="text-base md:text-lg opacity-80 mb-8 leading-relaxed">
            {description}
          </p>
          {buttonLink.startsWith('http') ? (
            <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
              {buttonText}
              <ArrowRight size={18} />
            </a>
          ) : (
            <Link href={buttonLink} className="btn-primary">
              {buttonText}
              <ArrowRight size={18} />
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  )
}
