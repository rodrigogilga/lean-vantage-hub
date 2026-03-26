import { Link } from 'react-router-dom'
import { ArrowRight, Bot, Zap, Plug, LayoutDashboard, Search, Pencil, Rocket } from 'lucide-react'
import CTASection from '../components/CTASection'

const pillars = [
  {
    icon: Search,
    title: 'Consultoría de procesos',
    description:
      'Mapeamos tu operación, detectamos cuellos de botella y definimos un plan de automatización medible.',
  },
  {
    icon: Zap,
    title: 'Automatización con IA',
    description:
      'Flujos inteligentes para tareas repetitivas, aprobaciones, alertas y operaciones internas.',
  },
  {
    icon: Plug,
    title: 'Integraciones y APIs',
    description:
      'Conectamos tus herramientas (CRM/ERP/Sheets/WhatsApp) con webhooks, APIs y bases de datos.',
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

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Diagnóstico',
    description:
      'Entendemos tu operación actual y el objetivo del proyecto. Detectamos tareas manuales, cuellos de botella y oportunidades de automatización con mayor impacto.',
  },
  {
    icon: Pencil,
    number: '02',
    title: 'Diseño',
    description:
      'Diseñamos el flujo objetivo y construimos un primer prototipo funcional. Lo validamos contigo antes de implementar para reducir retrabajo.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Implementación y optimización',
    description:
      'Implementamos la solución, monitoreamos su funcionamiento y optimizamos según resultados reales para mejorar estabilidad, velocidad y control.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-24 px-4 overflow-hidden">
        {/* Ambient blobs */}
        <div
          className="absolute top-[-80px] left-[20%] w-[700px] h-[500px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: 'hsl(237 35% 26% / 0.07)' }}
        />
        <div
          className="absolute top-[60px] right-[10%] w-[500px] h-[400px] rounded-full blur-[100px] pointer-events-none"
          style={{ background: 'hsl(228 40% 60% / 0.06)' }}
        />

        <div className="container mx-auto relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left space-y-7">
              <h1
                className="text-[2.1rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold leading-[1.2] tracking-[-0.01em] max-w-xl lg:max-w-[540px] mx-auto lg:mx-0 animate-fade-up"
                style={{
                  color: 'hsl(237, 35%, 26%)',
                  textWrap: 'balance',
                }}
              >
                Transformamos procesos en sistemas{' '}
                <span className="font-semibold" style={{ color: '#545469' }}>
                  que trabajan por ti.
                </span>
              </h1>
              <p
                className="text-[1.05rem] md:text-lg max-w-md lg:max-w-[480px] mx-auto lg:mx-0 leading-[1.7] animate-fade-up delay-150"
                style={{ color: 'hsl(233, 18%, 42%)' }}
              >
                En Leanvan diseñamos automatizaciones, agentes de IA y aplicaciones internas para
                mejorar tiempos, control y escalabilidad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-1 animate-fade-up delay-300">
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-lg text-white font-semibold text-base transition-all duration-250 hover:scale-[1.03] hover:shadow-lg"
                  style={{ background: 'hsl(237,35%,26%)' }}
                >
                  Contáctanos
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/casos"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-base border-2 transition-all duration-250 hover:scale-[1.02] hover:bg-[hsl(237,35%,26%)]/[0.04]"
                  style={{
                    borderColor: 'hsl(237,35%,26%)',
                    color: 'hsl(237,35%,26%)',
                  }}
                >
                  Ver casos de uso
                </Link>
              </div>
            </div>

            {/* Hero visual */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none animate-fade-up delay-200">
              <div
                className="rounded-2xl overflow-hidden shadow-[0_20px_40px_-8px_hsl(237_35%_26%/0.15)]"
                style={{ background: 'var(--gradient-hero)', minHeight: '320px' }}
              >
                <div className="p-8 space-y-4">
                  {/* Mock dashboard UI */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-white/30" />
                    <div className="w-3 h-3 rounded-full bg-white/30" />
                    <div className="w-3 h-3 rounded-full bg-white/30" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-white/20 rounded-full w-3/4" />
                    <div className="h-3 bg-white/15 rounded-full w-1/2" />
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {[
                      { label: 'Agente IA', color: 'bg-white/15' },
                      { label: 'Flujos', color: 'bg-white/10' },
                      { label: 'Integraciones', color: 'bg-white/10' },
                      { label: 'Reportes', color: 'bg-white/15' },
                    ].map(({ label, color }) => (
                      <div key={label} className={`${color} rounded-xl p-4`}>
                        <p className="text-white/80 text-xs font-medium">{label}</p>
                        <div className="mt-2 h-2 bg-white/20 rounded-full w-full" />
                        <div className="mt-1.5 h-2 bg-white/15 rounded-full w-2/3" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 space-y-2">
                    {[85, 62, 91].map((w, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-white/50 flex-shrink-0" />
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-white/40 rounded-full"
                            style={{ width: `${w}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="h-px mx-auto max-w-5xl" style={{ background: 'hsl(228,14%,89%)' }} />

      {/* What we do — 3 pillars */}
      <section className="py-24 px-4 bg-white relative">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight animate-fade-up"
              style={{ color: 'hsl(237,35%,26%)' }}
            >
              ¿Qué hacemos?
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto leading-relaxed animate-fade-up delay-100"
              style={{ color: 'hsl(233,18%,42%)' }}
            >
              Tres pilares para transformar tu operación
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="rounded-2xl p-6 border transition-all duration-300 hover:shadow-[0_8px_20px_-4px_hsl(237_35%_26%/0.10)] hover:-translate-y-0.5 animate-fade-up"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  background: 'hsl(230,33%,97%)',
                  borderColor: 'hsl(228,14%,89%)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'hsl(237,35%,26%)/0.08', backgroundColor: 'hsl(237 35% 26% / 0.08)' }}
                >
                  <Icon size={20} style={{ color: 'hsl(237,35%,26%)' }} />
                </div>
                <h3
                  className="font-semibold text-lg mb-2 tracking-tight"
                  style={{ color: 'hsl(237,35%,26%)' }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'hsl(233,18%,42%)' }}>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        className="py-24 px-4"
        style={{ background: 'linear-gradient(180deg, hsl(230,33%,96%) 0%, hsl(230,33%,98%) 100%)' }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight"
              style={{ color: 'hsl(237,35%,26%)' }}
            >
              Soluciones completas para automatizar tu operación
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, description, features }, i) => (
              <div
                key={title}
                className="rounded-2xl p-6 bg-white border transition-all duration-300 hover:shadow-[0_8px_20px_-4px_hsl(237_35%_26%/0.10)] hover:-translate-y-0.5"
                style={{
                  borderColor: 'hsl(228,14%,89%)',
                  animationDelay: `${i * 0.08}s`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'hsl(237 35% 26% / 0.08)' }}
                >
                  <Icon size={20} style={{ color: 'hsl(237,35%,26%)' }} />
                </div>
                <h3
                  className="font-semibold text-base mb-2"
                  style={{ color: 'hsl(237,35%,26%)' }}
                >
                  {title}
                </h3>
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
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm border-2 transition-all duration-200 hover:scale-[1.02]"
              style={{
                borderColor: 'hsl(237,35%,26%)',
                color: 'hsl(237,35%,26%)',
              }}
            >
              Ver todos los servicios
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Methodology preview */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight"
              style={{ color: 'hsl(237,35%,26%)' }}
            >
              Nuestra metodología
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: 'hsl(233,18%,42%)' }}
            >
              Un proceso claro en 3 pasos para diseñar, validar e implementar
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map(({ icon: Icon, number, title, description }, i) => (
              <div key={number} className="text-center space-y-4">
                <div className="flex justify-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-[0_4px_14px_-3px_hsl(237_35%_26%/0.18)]"
                    style={{ background: 'var(--gradient-hero)' }}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                </div>
                <div
                  className="text-4xl font-bold opacity-15"
                  style={{ color: 'hsl(237,35%,26%)' }}
                >
                  {number}
                </div>
                <h3
                  className="font-semibold text-lg tracking-tight"
                  style={{ color: 'hsl(237,35%,26%)' }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'hsl(233,18%,42%)' }}>
                  {description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/metodologia"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm border-2 transition-all duration-200 hover:scale-[1.02]"
              style={{
                borderColor: 'hsl(237,35%,26%)',
                color: 'hsl(237,35%,26%)',
              }}
            >
              Conoce nuestra metodología
              <ArrowRight size={16} />
            </Link>
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
