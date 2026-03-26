import { Link } from 'react-router-dom'
import { ArrowRight, Search, Briefcase, Plug, Bot, Zap, LayoutDashboard } from 'lucide-react'
import heroImg from '@/assets/hero-illustration.jpg'
import CTASection from '../components/CTASection'

const pillars = [
  {
    icon: Search,
    title: 'Consultoría de procesos',
    description: 'Mapeamos tu operación, detectamos cuellos de botella y definimos un plan de automatización medible.',
  },
  {
    icon: Briefcase,
    title: 'Automatización con IA',
    description: 'Flujos inteligentes para tareas repetitivas, aprobaciones, alertas y operaciones internas.',
  },
  {
    icon: Plug,
    title: 'Integraciones y APIs',
    description: 'Conectamos tus herramientas (CRM/ERP/Sheets/WhatsApp) con webhooks, APIs y bases de datos.',
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
    icon: Zap,
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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-24 px-4" style={{ background: '#F0F2F8' }}>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left space-y-7">
              <h1
                className="text-[2.1rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold leading-[1.2] tracking-[-0.01em] max-w-xl lg:max-w-[540px] mx-auto lg:mx-0 animate-fade-up"
                style={{ color: '#545469', textWrap: 'balance' }}
              >
                Transformamos procesos en{' '}
                <span className="text-brand-navy font-bold">sistemas</span>{' '}
                que trabajan por ti.
              </h1>
              <p className="text-[1.05rem] md:text-lg max-w-md lg:max-w-[480px] mx-auto lg:mx-0 leading-[1.7] text-brand-textMuted animate-fade-up delay-150">
                En Leanvan diseñamos automatizaciones, agentes de IA y aplicaciones internas para
                mejorar tiempos, control y escalabilidad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-1 animate-fade-up delay-300">
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-lg text-white font-semibold text-base bg-brand-navy transition-all duration-250 hover:scale-[1.03] hover:shadow-lg"
                >
                  Contáctanos
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/casos"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-base border-2 border-brand-navy text-brand-navy transition-all duration-250 hover:scale-[1.02] hover:bg-brand-navy/[0.04]"
                >
                  Ver casos de uso
                </Link>
              </div>
            </div>

            {/* Hero image */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none animate-fade-up delay-200">
              <div className="rounded-2xl overflow-hidden bg-white shadow-[0_20px_40px_-8px_hsl(237_35%_26%/0.12)]">
                <img
                  src={heroImg}
                  alt="Plataforma de automatización con IA — dashboards, flujos, integraciones y agentes"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px mx-auto max-w-5xl bg-brand-border" />

      {/* ¿Qué hacemos? */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-navy animate-fade-up">
              ¿Qué hacemos?
            </h2>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed text-brand-textMuted animate-fade-up delay-100">
              Tres pilares para transformar tu operación
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="rounded-2xl p-6 bg-white border border-brand-border transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5 animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-brand-navy">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 tracking-tight text-brand-navy">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-textMuted">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestros servicios */}
      <section className="py-24 px-4" style={{ background: '#F0F2F8' }}>
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-navy">
              Nuestros servicios
            </h2>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed text-brand-textMuted">
              Soluciones completas para automatizar tu operación
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, description, features }, i) => (
              <div
                key={title}
                className="rounded-2xl p-6 bg-white border border-brand-border transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-brand-navy/[0.08]">
                  <Icon size={20} className="text-brand-navy" />
                </div>
                <h3 className="font-semibold text-base mb-2 text-brand-navy">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed mb-4 text-brand-textMuted">
                  {description}
                </p>
                <ul className="space-y-1.5">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-brand-textMuted">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-brand-navy" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="¿Listo para automatizar tu operación?"
        description="Cuéntanos tu proceso y te proponemos un plan con impacto y tiempos."
      />
    </>
  )
}
