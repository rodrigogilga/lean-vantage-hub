import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Bot, Zap, Plug, LayoutDashboard } from 'lucide-react'
import CTASection from '@/components/CTASection'
import Reveal from '@/components/Reveal'
import AnimatedCounters from '@/components/AnimatedCounters'
import AgentFlowDiagram from '@/components/AgentFlowDiagram'

export const metadata: Metadata = {
  title: 'Leanvan - Automatización y Agentes de IA en Saltillo',
  description:
    'En Leanvan diseñamos automatizaciones, agentes de IA y aplicaciones internas para empresas en Saltillo y Coahuila. Mejora tiempos, control y escalabilidad de tu operación.',
  alternates: { canonical: 'https://www.leanvan.cloud' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Servicios de Leanvan',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Agentes de IA' },
    { '@type': 'ListItem', position: 2, name: 'Automatización de procesos' },
    { '@type': 'ListItem', position: 3, name: 'Integraciones entre sistemas' },
    { '@type': 'ListItem', position: 4, name: 'Apps internas y dashboards' },
  ],
}

const pillars = [
  {
    accentColor: '#4f7ef8',
    title: 'Eliminamos tareas manuales',
    description:
      'Tu equipo deja de perder tiempo en capturas, reenvíos y seguimientos repetitivos. Automatizamos lo que no necesita intervención humana.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f7ef8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    accentColor: '#1a2560',
    title: 'Conectamos tus sistemas',
    description:
      'Tu CRM, calendario, WhatsApp, hojas de cálculo y herramientas internas trabajando en sincronía — sin recapturas ni datos duplicados.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a2560" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    accentColor: '#7c9dfa',
    title: 'Visibilidad en tiempo real',
    description:
      'Dashboards, alertas automáticas y reportes que llegan solos. Tomas decisiones con datos actualizados, no con intuición.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c9dfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 10l3 3 2-4 3 3 2-2" />
      </svg>
    ),
  },
]

const services = [
  {
    icon: Bot,
    title: 'Agentes de IA',
    description:
      'Agentes entrenados que atienden clientes, responden preguntas, gestionan tareas internas y escalan a humanos cuando se requiere.',
    tags: ['WhatsApp / web', 'Gestión interna', 'Escalamiento'],
  },
  {
    icon: Zap,
    title: 'Automatización de procesos',
    description: 'Reducimos tareas manuales en tu operación con flujos automáticos y aprobaciones sin fricción.',
    tags: ['Aprobaciones', 'Documentos', 'Reportes'],
  },
  {
    icon: Plug,
    title: 'Integraciones entre sistemas',
    description: 'Conectamos tus herramientas para que la información fluya sin capturas duplicadas.',
    tags: ['API', 'Webhooks', 'ETL'],
  },
  {
    icon: LayoutDashboard,
    title: 'Apps internas y dashboards',
    description: 'Creamos sistemas internos para tener orden, visibilidad y control operativo.',
    tags: ['Dashboards', 'Inventarios', 'Expedientes'],
  },
]

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 px-4 overflow-hidden" style={{ background: '#F0F2F8' }}>
        {/* Animated dot grid */}
        <div
          aria-hidden="true"
          className="hero-grid absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(79,126,248,0.13) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Animated blobs */}
        <div
          aria-hidden="true"
          className="hero-blob-1 absolute top-[-80px] left-[20%] w-[700px] h-[500px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: 'hsl(237 35% 26% / 0.09)' }}
        />
        <div
          aria-hidden="true"
          className="hero-blob-2 absolute top-[60px] right-[10%] w-[500px] h-[400px] rounded-full blur-[100px] pointer-events-none"
          style={{ background: 'hsl(228 80% 65% / 0.08)' }}
        />
        <div
          aria-hidden="true"
          className="hero-blob-3 absolute bottom-[-60px] left-[5%] w-[400px] h-[350px] rounded-full blur-[110px] pointer-events-none"
          style={{ background: 'hsl(220 70% 70% / 0.07)' }}
        />

        <div className="container mx-auto relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left space-y-5 md:space-y-7">
              <h1
                className="text-[1.85rem] md:text-[3rem] lg:text-[3.5rem] font-semibold max-w-xl lg:max-w-[560px] mx-auto lg:mx-0 animate-fade-up"
                style={{ color: '#1a2560', letterSpacing: '-0.025em', lineHeight: 1.15, textWrap: 'balance' } as React.CSSProperties}
              >
                Transformamos procesos en sistemas que trabajan por ti.
              </h1>
              <p
                className="text-[1.05rem] md:text-[1.1rem] max-w-md lg:max-w-[460px] mx-auto lg:mx-0 animate-fade-up delay-150"
                style={{ color: '#6b7aa1', lineHeight: 1.75, fontWeight: 400 }}
              >
                En Leanvan diseñamos automatizaciones, agentes de IA y aplicaciones internas para
                mejorar tiempos, control y escalabilidad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-1 animate-fade-up delay-300">
                <Link href="/contacto" className="btn-primary">
                  Contáctanos
                  <ArrowRight size={18} />
                </Link>
                <Link href="/casos-de-uso" className="btn-secondary">
                  Ver casos de uso
                </Link>
              </div>
            </div>

            {/* Hero image */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none animate-fade-up delay-200">
              <div
                className="rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_20px_40px_-8px_hsl(237_35%_26%/0.15)] hover:scale-[1.03] hover:shadow-[0_28px_52px_-8px_hsl(237_35%_26%/0.28)]"
                style={{ background: '#E8EBF2' }}
              >
                <Image
                  src="/hero-illustration.jpg"
                  alt="Plataforma de automatización con IA, dashboards y agentes de Leanvan"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics counters */}
      <AnimatedCounters />

      {/* What we do — 3 pillars */}
      <section className="py-14 md:py-24 px-4 relative" style={{ background: '#F0F2F8' }}>
        <div className="container mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-16 space-y-3">
              <h2
                className="text-2xl md:text-[2.6rem] font-semibold"
                style={{ color: '#1a2560', letterSpacing: '-0.03em', lineHeight: 1.1 }}
              >
                ¿Qué hacemos?
              </h2>
              <p className="text-base md:text-lg max-w-xl mx-auto" style={{ color: '#6b7aa1', lineHeight: 1.7 }}>
                Lo que cambia cuando automatizas
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map(({ accentColor, icon, title, description }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div
                  className="h-full transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_14px_32px_-6px_hsl(237_35%_26%/0.18)]"
                  style={{
                    background: '#ffffff',
                    borderTop: `3px solid ${accentColor}`,
                    borderRight: '1px solid #e8edf8',
                    borderBottom: '1px solid #e8edf8',
                    borderLeft: '1px solid #e8edf8',
                    borderRadius: 16,
                    padding: '2rem 1.5rem',
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      background: '#eef2ff',
                      borderRadius: 12,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                    }}
                  >
                    {icon}
                  </div>
                  <h3 className="font-semibold text-base mb-2 tracking-tight" style={{ color: '#1a2560' }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b7aa1' }}>
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-4" style={{ background: '#F0F2F8' }}>
        <div className="container mx-auto">
          <hr style={{ borderColor: 'hsl(228,14%,89%)', borderTopWidth: '1px' }} />
        </div>
      </div>

      {/* Services */}
      <section className="py-14 md:py-24 px-4" style={{ background: '#F0F2F8' }}>
        <div className="container mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-16 space-y-3">
              <h2
                className="text-2xl md:text-[2.6rem] font-semibold"
                style={{ color: '#1a2560', letterSpacing: '-0.03em', lineHeight: 1.1 }}
              >
                Nuestros servicios
              </h2>
              <p className="text-base md:text-lg max-w-xl mx-auto" style={{ color: '#6b7aa1', lineHeight: 1.7 }}>
                Soluciones completas para automatizar tu operación
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map(({ icon: Icon, title, description, tags }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div
                  className="flex gap-4 md:gap-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_14px_32px_-6px_hsl(237_35%_26%/0.18)]"
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e8edf8',
                    borderRadius: 16,
                    padding: '1.25rem',
                  }}
                >
                  <div
                    className="flex-shrink-0"
                    style={{
                      width: 48,
                      height: 48,
                      background: '#1a2560',
                      borderRadius: 12,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={22} color="#ffffff" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base mb-1.5" style={{ color: '#1a2560' }}>
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: '#6b7aa1' }}>
                      {description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            background: '#eef2ff',
                            color: '#4f7ef8',
                            fontSize: '0.7rem',
                            borderRadius: 20,
                            padding: '3px 10px',
                            fontWeight: 500,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Agent flow diagram */}
      <AgentFlowDiagram />

      {/* CTA */}
      <div id="contacto">
        <CTASection
          title="¿Listo para automatizar tu operación?"
          description="Cuéntanos tu proceso y te proponemos un plan con impacto y tiempos."
          buttonText="Cuéntanos tu proceso"
        />
      </div>
    </>
  )
}
