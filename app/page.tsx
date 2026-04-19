import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Bot, Plug, LayoutDashboard } from 'lucide-react'
import CTASection from '@/components/CTASection'
import Reveal from '@/components/Reveal'
import AnimatedCounters from '@/components/AnimatedCounters'
import AgentFlowDiagram from '@/components/AgentFlowDiagram'
import HeroAnimation from '@/components/HeroAnimation'

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

const FlowBranch = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <path d="M6 21V9a9 9 0 0 0 9 9" />
  </svg>
)

const pillars = [
  {
    tag: 'Eficiencia',
    tagStyle: { color: '#4f7ef8', background: 'rgba(79,126,248,0.1)' },
    iconBg: 'rgba(79,126,248,0.12)',
    iconBorder: 'rgba(79,126,248,0.2)',
    glowColor: 'rgba(79,126,248,0.18)',
    title: 'Eliminamos tareas manuales',
    description:
      'Tu equipo deja de perder tiempo en capturas, reenvíos y seguimientos repetitivos. Automatizamos lo que no necesita intervención humana.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4f7ef8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    tag: 'Integración',
    tagStyle: { color: '#1a2560', background: 'rgba(26,37,96,0.08)' },
    iconBg: 'rgba(26,37,96,0.1)',
    iconBorder: 'rgba(26,37,96,0.18)',
    glowColor: 'rgba(26,37,96,0.14)',
    title: 'Conectamos tus sistemas',
    description:
      'Tu CRM, calendario, WhatsApp, hojas de cálculo y herramientas internas trabajando en sincronía — sin recapturas ni datos duplicados.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a2560" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    tag: 'Visibilidad',
    tagStyle: { color: '#5a72c7', background: 'rgba(124,157,250,0.12)' },
    iconBg: 'rgba(124,157,250,0.15)',
    iconBorder: 'rgba(124,157,250,0.25)',
    glowColor: 'rgba(124,157,250,0.2)',
    title: 'Visibilidad en tiempo real',
    description:
      'Dashboards, alertas automáticas y reportes que llegan solos. Tomas decisiones con datos actualizados, no con intuición.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5a72c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    iconBg: '#1a2560',
    cornerColor: 'rgba(79,126,248,0.1)',
    title: 'Agentes de IA',
    description:
      'Agentes entrenados que atienden clientes, responden preguntas, gestionan tareas internas y escalan a humanos cuando se requiere.',
    tags: ['WhatsApp / web', 'Gestión interna', 'Escalamiento'],
  },
  {
    icon: FlowBranch,
    iconBg: '#0f1a40',
    cornerColor: 'rgba(26,37,96,0.08)',
    title: 'Automatización de procesos',
    description: 'Reducimos tareas manuales en tu operación con flujos automáticos y aprobaciones sin fricción.',
    tags: ['Aprobaciones', 'Documentos', 'Reportes'],
  },
  {
    icon: Plug,
    iconBg: '#2a3d8f',
    cornerColor: 'rgba(124,157,250,0.12)',
    title: 'Integraciones entre sistemas',
    description: 'Conectamos tus herramientas para que la información fluya sin capturas duplicadas.',
    tags: ['API', 'Webhooks', 'ETL'],
  },
  {
    icon: LayoutDashboard,
    iconBg: '#1a2560',
    cornerColor: 'rgba(79,126,248,0.07)',
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
      <section className="relative pt-20 pb-0 md:pt-28 px-4 overflow-hidden" style={{ background: '#ffffff' }}>
        {/* Blueprint grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(79,126,248,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(79,126,248,0.045) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        {/* Animated dot accent grid */}
        <div
          aria-hidden="true"
          className="hero-grid absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(79,126,248,0.13) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Soft color blobs — subtle on white */}
        <div
          aria-hidden="true"
          className="hero-blob-1 absolute top-[-80px] left-[10%] w-[320px] h-[280px] md:w-[750px] md:h-[550px] rounded-full blur-[80px] md:blur-[130px] pointer-events-none"
          style={{ background: 'hsl(225 85% 62% / 0.09)' }}
        />
        <div
          aria-hidden="true"
          className="hero-blob-2 absolute top-[10px] right-[0%] w-[260px] h-[240px] md:w-[560px] md:h-[460px] rounded-full blur-[70px] md:blur-[110px] pointer-events-none"
          style={{ background: 'hsl(258 70% 62% / 0.07)' }}
        />
        <div
          aria-hidden="true"
          className="hero-blob-3 absolute bottom-[40px] left-[-10%] w-[240px] h-[200px] md:w-[480px] md:h-[380px] rounded-full blur-[70px] md:blur-[120px] pointer-events-none"
          style={{ background: 'hsl(195 80% 55% / 0.06)' }}
        />

        {/* Decorative rings — desktop only */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute pointer-events-none"
          style={{
            top: '-180px', right: '-180px',
            width: 560, height: 560,
            borderRadius: '50%',
            border: '2px solid rgba(79,126,248,0.12)',
            boxShadow: 'inset 0 0 80px rgba(79,126,248,0.04)',
          }}
        />
        <div
          aria-hidden="true"
          className="hidden md:block absolute pointer-events-none"
          style={{
            top: '-80px', right: '-80px',
            width: 360, height: 360,
            borderRadius: '50%',
            border: '1px solid rgba(79,126,248,0.1)',
          }}
        />
        <div
          aria-hidden="true"
          className="hidden md:block absolute pointer-events-none"
          style={{
            top: '60px', right: '60px',
            width: 180, height: 180,
            borderRadius: '50%',
            border: '1px solid rgba(79,126,248,0.08)',
          }}
        />

        <div className="container mx-auto relative pb-20 md:pb-28 lg:pb-36 lg:min-h-[580px] lg:flex lg:items-center">
          <div className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left space-y-5 md:space-y-7">
              {/* Accent line above heading */}
              <div
                className="hidden lg:block animate-fade-up"
                style={{ width: 48, height: 4, background: 'linear-gradient(90deg, #4f7ef8, #a5beff)', borderRadius: 2 }}
              />
              <h1
                className="text-[2rem] md:text-[3rem] lg:text-[3.5rem] font-semibold max-w-xl lg:max-w-[560px] mx-auto lg:mx-0 animate-fade-up"
                style={{ color: '#0a1628', letterSpacing: '-0.025em', lineHeight: 1.15, textWrap: 'balance' } as React.CSSProperties}
              >
                Transformamos procesos en sistemas que trabajan por ti.
              </h1>
              <p
                className="text-[1rem] md:text-[1.1rem] max-w-md lg:max-w-[460px] mx-auto lg:mx-0 animate-fade-up delay-150"
                style={{ color: '#5a6b8a', lineHeight: 1.75, fontWeight: 400 }}
              >
                En Leanvan diseñamos automatizaciones, agentes de IA y aplicaciones internas para
                mejorar tiempos, control y escalabilidad.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-stretch sm:items-center pt-1 animate-fade-up delay-300">
                <Link href="/contacto" className="btn-primary justify-center">
                  Contáctanos
                  <ArrowRight size={18} />
                </Link>
                <Link href="/casos-de-uso" className="btn-secondary justify-center">
                  Ver casos de uso
                </Link>
              </div>
            </div>

            {/* Hero animation */}
            <div className="flex-1 w-full max-w-sm sm:max-w-lg lg:max-w-none animate-fade-up delay-200">
              <HeroAnimation />
            </div>
          </div>
        </div>

        {/* Subtle bottom fade to white */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #ffffff)' }}
        />
      </section>

      {/* Metrics counters */}
      <AnimatedCounters />

      {/* What we do — 3 pillars */}
      <section className="py-14 md:py-24 px-4 relative overflow-hidden" style={{ background: '#f8faff' }}>
        {/* Mesh gradient blobs */}
        <div aria-hidden="true" className="absolute pointer-events-none" style={{ top: '-60px', right: '10%', width: 500, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(79,126,248,0.07) 0%, transparent 65%)', filter: 'blur(40px)' }} />
        <div aria-hidden="true" className="absolute pointer-events-none" style={{ bottom: '-40px', left: '5%', width: 400, height: 350, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(26,37,96,0.06) 0%, transparent 65%)', filter: 'blur(40px)' }} />

        <div className="container mx-auto relative">
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
          <div className="grid md:grid-cols-3 gap-5">
            {pillars.map(({ tag, tagStyle, iconBg, iconBorder, glowColor, icon, title, description }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div
                  className="glass-card h-full relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-8px_hsl(237_35%_26%/0.14)]"
                  style={{ borderRadius: 18, padding: '1.6rem 1.4rem' }}
                >
                  {/* Corner glow */}
                  <div aria-hidden="true" className="absolute pointer-events-none" style={{ bottom: -20, right: -20, width: 90, height: 90, borderRadius: '50%', background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)` }} />

                  {/* Category tag */}
                  <span
                    className="inline-block text-[0.62rem] font-bold tracking-[0.1em] uppercase rounded-[6px] mb-4"
                    style={{ ...tagStyle, padding: '3px 8px' }}
                  >
                    {tag}
                  </span>

                  {/* Icon */}
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      background: iconBg,
                      border: `1px solid ${iconBorder}`,
                      borderRadius: 12,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                    }}
                  >
                    {icon}
                  </div>

                  <h3 className="font-semibold text-[0.9rem] mb-2 tracking-tight" style={{ color: '#1a2560' }}>
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
      <div className="px-4" style={{ background: '#ffffff' }}>
        <div className="container mx-auto">
          <hr style={{ borderColor: 'hsl(228,14%,91%)', borderTopWidth: '1px' }} />
        </div>
      </div>

      {/* Services */}
      <section className="py-14 md:py-24 px-4 relative overflow-hidden" style={{ background: '#ffffff' }}>
        {/* Mesh gradient blobs */}
        <div aria-hidden="true" className="absolute pointer-events-none" style={{ top: '-40px', left: '15%', width: 500, height: 380, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(79,126,248,0.06) 0%, transparent 65%)', filter: 'blur(40px)' }} />
        <div aria-hidden="true" className="absolute pointer-events-none" style={{ bottom: '-60px', right: '8%', width: 420, height: 340, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(26,37,96,0.05) 0%, transparent 65%)', filter: 'blur(40px)' }} />

        <div className="container mx-auto relative">
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
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map(({ icon: Icon, iconBg, cornerColor, title, description, tags }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div
                  className="glass-card flex gap-4 md:gap-5 relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-6px_hsl(237_35%_26%/0.13)]"
                  style={{ borderRadius: 18, padding: '1.25rem' }}
                >
                  {/* Corner gradient */}
                  <div aria-hidden="true" className="absolute top-0 right-0 pointer-events-none" style={{ width: 64, height: 64, borderRadius: '0 18px 0 0', background: `linear-gradient(225deg, ${cornerColor} 0%, transparent 60%)` }} />

                  <div
                    className="flex-shrink-0 relative z-10"
                    style={{
                      width: 48,
                      height: 48,
                      background: iconBg,
                      borderRadius: 12,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(26,37,96,0.2)',
                    }}
                  >
                    <Icon size={22} color="#ffffff" />
                  </div>
                  <div className="flex-1 min-w-0 relative z-10">
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
                            background: 'rgba(79,126,248,0.09)',
                            color: '#4f7ef8',
                            fontSize: '0.63rem',
                            fontWeight: 600,
                            letterSpacing: '0.04em',
                            borderRadius: 6,
                            padding: '2px 7px',
                            border: '1px solid rgba(79,126,248,0.15)',
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
