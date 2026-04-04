import type { Metadata } from 'next'
import { Bot, Workflow, Plug, LayoutDashboard } from 'lucide-react'
import CTASection from '@/components/CTASection'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Servicios – Leanvan | Agentes de IA, Automatización e Integraciones en Saltillo',
  description:
    'Agentes de IA, automatización de procesos, integraciones entre sistemas y dashboards operativos en Saltillo, Coahuila. Soluciones completas para tu operación.',
  alternates: { canonical: 'https://www.leanvan.cloud/servicios' },
  openGraph: {
    title: 'Servicios – Leanvan | Agentes de IA, Automatización e Integraciones',
    description: 'Soluciones completas de IA y automatización para empresas en Saltillo y Coahuila.',
    url: 'https://www.leanvan.cloud/servicios',
  },
}

const serviceSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Agentes de IA',
    provider: { '@type': 'LocalBusiness', name: 'Leanvan' },
    description: 'Automatizamos conversaciones y tareas con agentes entrenados para tu operación.',
    areaServed: 'Saltillo, Coahuila, México',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Automatización de procesos',
    provider: { '@type': 'LocalBusiness', name: 'Leanvan' },
    description: 'Reducimos tareas manuales en tu operación con flujos automáticos.',
    areaServed: 'Saltillo, Coahuila, México',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Integraciones entre sistemas',
    provider: { '@type': 'LocalBusiness', name: 'Leanvan' },
    description: 'Conectamos tus herramientas para que la información fluya sin capturas duplicadas.',
    areaServed: 'Saltillo, Coahuila, México',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Apps internas y dashboards',
    provider: { '@type': 'LocalBusiness', name: 'Leanvan' },
    description: 'Creamos sistemas internos para tener orden, visibilidad y control operativo.',
    areaServed: 'Saltillo, Coahuila, México',
  },
]

const services = [
  {
    icon: Bot,
    title: 'Agentes de IA',
    description: 'Automatizamos conversaciones y tareas con agentes entrenados para tu operación.',
    features: [
      'Atención al cliente y seguimiento por WhatsApp o web',
      'Respuestas con contexto, reglas y tono de tu marca',
      'Escalamiento a humano cuando se requiere',
    ],
  },
  {
    icon: Workflow,
    title: 'Automatización de procesos',
    description: 'Reducimos tareas manuales en tu operación con flujos automáticos.',
    features: [
      'Aprobaciones, recordatorios y notificaciones',
      'Generación de documentos y reportes',
      'Gestión de tareas y procesos internos',
    ],
  },
  {
    icon: Plug,
    title: 'Integraciones entre sistemas',
    description: 'Conectamos tus herramientas para que la información fluya sin capturas duplicadas.',
    features: [
      'Sincronización entre CRM, hojas de cálculo, formularios y apps',
      'Actualización automática de datos entre sistemas',
      'Integraciones vía API, webhooks y procesos ETL',
    ],
  },
  {
    icon: LayoutDashboard,
    title: 'Apps internas y dashboards',
    description: 'Creamos sistemas internos para tener orden, visibilidad y control operativo.',
    features: [
      'Dashboards operativos a la medida',
      'Inventarios, catálogos y registros',
      'Expedientes y alertas automáticas',
    ],
  },
]

export default function Servicios() {
  return (
    <>
      {serviceSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Page header */}
      <div className="text-white py-12 md:py-16 px-4" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight animate-fade-up">
            Servicios
          </h1>
          <p className="text-lg opacity-85 max-w-2xl mx-auto leading-relaxed animate-fade-up delay-150">
            Soluciones a la medida para tu operación
          </p>
        </div>
      </div>

      {/* Services section */}
      <section className="py-16 md:py-20 px-4" style={{ background: '#F0F2F8' }}>
        <div className="container mx-auto text-center mb-12">
          <Reveal>
            <h2
              className="text-2xl md:text-3xl font-bold mb-2 tracking-tight"
              style={{ color: 'hsl(237,35%,26%)' }}
            >
              Nuestros servicios
            </h2>
            <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: 'hsl(233,18%,42%)' }}>
              Soluciones completas para automatizar tu operación
            </p>
          </Reveal>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, description, features }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div
                  className="group rounded-2xl p-6 border border-[hsl(228,14%,89%)] h-full transition-all duration-300 shadow-[0_2px_8px_0_hsl(237_35%_26%/0.06)] hover:scale-[1.04] hover:border-[hsl(237,35%,26%)] hover:shadow-[0_16px_36px_-6px_hsl(237_35%_26%/0.20)]"
                  style={{ background: '#ffffff' }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: 'hsl(228,18%,93%)' }}
                  >
                    <Icon size={22} style={{ color: 'hsl(237,35%,26%)' }} />
                  </div>
                  <h2
                    className="font-bold text-base mb-2 tracking-tight"
                    style={{ color: 'hsl(237,35%,26%)' }}
                  >
                    {title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'hsl(233,18%,42%)' }}>
                    {description}
                  </p>
                  <ul className="space-y-1.5">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs" style={{ color: 'hsl(233,18%,42%)' }}>
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: 'hsl(237,35%,26%)' }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Listo para automatizar tu operación?"
        description="Cuéntanos tu proceso y te proponemos un plan con impacto y tiempos."
      />
    </>
  )
}
