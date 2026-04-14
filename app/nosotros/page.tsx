import type { Metadata } from 'next'
import CTASection from '@/components/CTASection'
import Reveal from '@/components/Reveal'
import { Target, Lightbulb, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre Nosotros – Leanvan | Automatización con IA en Saltillo',
  description:
    'Conoce a Leanvan: agencia de automatización e IA para PYMEs en Saltillo, Coahuila. Diseñamos soluciones a la medida desde tu operación real, no desde la tecnología.',
  alternates: { canonical: 'https://www.leanvan.cloud/nosotros' },
  openGraph: {
    title: 'Sobre Nosotros – Leanvan | Automatización con IA en Saltillo',
    description: 'Conoce nuestro enfoque: partimos de tu operación real para diseñar automatizaciones que realmente se usan.',
    url: 'https://www.leanvan.cloud/nosotros',
  },
}

const pillars = [
  {
    icon: Target,
    title: '¿Por qué existimos?',
    body: 'Muchas empresas saben que necesitan automatizar, pero no saben por dónde empezar. Otras ya intentaron con herramientas genéricas y terminaron con soluciones que nadie usa.\n\nEn Leanvan partimos de tu operación real — no de la tecnología. Primero entendemos cómo trabaja tu equipo hoy, identificamos dónde hay fricción, y diseñamos soluciones que se integran a lo que ya usas.',
  },
  {
    icon: Lightbulb,
    title: 'Nuestro enfoque',
    body: 'No vendemos chatbots. Diseñamos agentes y automatizaciones que se conectan a tu CRM, calendario, WhatsApp, ERP y bases de datos para responder, capturar información y actuar dentro de tu operación.\n\nCada solución se diseña a la medida, se valida contigo antes de implementar, y se optimiza con datos reales.',
  },
  {
    icon: Users,
    title: '¿Con quién trabajamos?',
    body: 'Con PYMEs que tienen operación activa y quieren escalar sin multiplicar su equipo. Empresas que ya sienten el dolor de los procesos manuales y están listas para dar el paso.\n\nTrabajamos con empresas en Saltillo, Coahuila y toda la república mexicana.',
  },
]

export default function Nosotros() {
  return (
    <>
      {/* Page header */}
      <div className="text-white py-12 md:py-16 px-4" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight animate-fade-up">
            Sobre Leanvan
          </h1>
          <p className="text-lg opacity-85 max-w-2xl mx-auto leading-relaxed animate-fade-up delay-150">
            Partimos de tu operación real, no de la tecnología
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 md:py-24 px-4" style={{ background: '#F0F2F8' }}>
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            {pillars.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.12}>
                <div
                  className="rounded-2xl p-7 border flex gap-5 transition-all duration-300 shadow-[0_2px_8px_0_hsl(237_35%_26%/0.06)] hover:scale-[1.03] hover:shadow-[0_14px_32px_-6px_rgba(61,142,240,0.18)] hover:border-[rgba(61,142,240,0.3)]"
                  style={{ background: '#ffffff', borderColor: 'hsl(228,14%,89%)' }}
                >
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center mt-1"
                    style={{ backgroundColor: 'hsl(228,18%,93%)' }}
                  >
                    <Icon size={20} style={{ color: '#1a2356' }} />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg mb-3 tracking-tight" style={{ color: '#1a2356' }}>
                      {title}
                    </h2>
                    {body.split('\n\n').map((paragraph, j) => (
                      <p key={j} className="text-sm leading-relaxed mb-3 last:mb-0" style={{ color: 'hsl(233,18%,42%)' }}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Listo para automatizar tu operación?"
        description="Cuéntanos tu proceso y te proponemos un plan con impacto y tiempos."
        buttonText="Solicita tu diagnóstico"
      />
    </>
  )
}
