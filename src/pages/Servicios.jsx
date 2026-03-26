import { Bot, Zap, Plug, LayoutDashboard } from 'lucide-react'
import CTASection from '../components/CTASection'

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

export default function Servicios() {
  return (
    <>
      <title>Servicios – Leanvan | Agentes de IA, Automatización e Integraciones</title>
      <meta
        name="description"
        content="Agentes de IA, automatización de procesos, integraciones entre sistemas y dashboards operativos. Soluciones completas para tu operación."
      />
      <link rel="canonical" href="https://www.leanvan.cloud/servicios" />

      {/* Page header */}
      <div
        className="text-white py-12 md:py-16 px-4"
        style={{ background: 'var(--gradient-hero)' }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight animate-fade-up">
            Servicios
          </h1>
          <p className="text-lg opacity-85 max-w-2xl mx-auto leading-relaxed animate-fade-up delay-150">
            Soluciones a la medida para tu operación
          </p>
        </div>
      </div>

      {/* Services grid */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map(({ icon: Icon, title, description, features }, i) => (
              <div
                key={title}
                className="rounded-2xl p-8 border transition-all duration-300 hover:shadow-[0_8px_20px_-4px_hsl(237_35%_26%/0.10)] hover:-translate-y-0.5 animate-fade-up"
                style={{
                  borderColor: 'hsl(228,14%,89%)',
                  animationDelay: `${i * 0.1}s`,
                  background: 'hsl(230,33%,97%)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: 'hsl(237 35% 26% / 0.08)' }}
                >
                  <Icon size={22} style={{ color: 'hsl(237,35%,26%)' }} />
                </div>
                <h2
                  className="font-bold text-xl mb-2 tracking-tight"
                  style={{ color: 'hsl(237,35%,26%)' }}
                >
                  {title}
                </h2>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'hsl(233,18%,42%)' }}>
                  {description}
                </p>
                <ul className="space-y-2">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: 'hsl(233,18%,42%)' }}>
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: 'hsl(237,35%,26%)' }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
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
