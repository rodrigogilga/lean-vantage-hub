import type { Metadata } from 'next'
import { Bot, Workflow, Plug, LayoutDashboard, CheckCircle, XCircle } from 'lucide-react'
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

const services = [
  {
    icon: Bot,
    title: 'Agentes de IA',
    description: 'Automatizamos conversaciones y tareas con agentes entrenados para tu operación.',
    escenario:
      'Imagina que un cliente te escribe a las 11pm preguntando por disponibilidad. En lugar de esperar al día siguiente, tu agente responde en segundos, consulta tu agenda, ofrece horarios disponibles y confirma la cita — todo sin intervención humana.',
    incluye: [
      'Diseño del flujo conversacional',
      'Entrenamiento con el contexto de tu negocio',
      'Conexión a tus sistemas (CRM, calendario, base de datos)',
      'Reglas de escalamiento a humano',
      'Monitoreo y ajustes post-lanzamiento',
    ],
    noIncluye: [
      'Spam masivo o mensajes no solicitados',
      'Respuestas genéricas sin contexto de tu negocio',
      'Reemplazo total del equipo humano',
    ],
  },
  {
    icon: Workflow,
    title: 'Automatización de procesos',
    description: 'Reducimos tareas manuales en tu operación con flujos automáticos.',
    escenario:
      'Tu equipo dedica 2 horas al día reenviando aprobaciones por correo y actualizando hojas de cálculo. Con automatización, cada solicitud se enruta automáticamente, se aprueba con un clic y se registra sin captura manual.',
    incluye: [
      'Mapeo del proceso actual',
      'Diseño del flujo automatizado',
      'Implementación de triggers, aprobaciones y notificaciones',
      'Generación automática de documentos y reportes',
      'Pruebas y ajustes',
    ],
    noIncluye: [
      'Rediseño organizacional',
      'Consultoría de recursos humanos',
    ],
  },
  {
    icon: Plug,
    title: 'Integraciones entre sistemas',
    description: 'Conectamos tus herramientas para que la información fluya sin capturas duplicadas.',
    escenario:
      'Cada que llega un pedido, alguien copia los datos del CRM a una hoja de cálculo y después al sistema de facturación. Con una integración, los datos fluyen automáticamente entre los tres sistemas.',
    incluye: [
      'Análisis de sistemas actuales',
      'Diseño de la arquitectura de integración',
      'Desarrollo de conexiones vía API/webhooks',
      'Validación de datos y manejo de errores',
      'Documentación técnica',
    ],
    noIncluye: [
      'Migración completa de sistemas',
      'Desarrollo de ERPs desde cero',
    ],
  },
  {
    icon: LayoutDashboard,
    title: 'Apps internas y dashboards',
    description: 'Creamos sistemas internos para tener orden, visibilidad y control operativo.',
    escenario:
      'Tu equipo usa 4 hojas de cálculo para rastrear inventario, clientes y tareas pendientes. Con un dashboard centralizado, todo está en un solo lugar con alertas automáticas cuando algo requiere atención.',
    incluye: [
      'Diseño de la interfaz a la medida',
      'Desarrollo de la aplicación',
      'Conexión a tus fuentes de datos',
      'Alertas y notificaciones automáticas',
      'Capacitación del equipo',
    ],
    noIncluye: [
      'Hosting ilimitado',
      'Soporte 24/7 fuera del periodo de estabilización',
    ],
  },
]

export default function Servicios() {
  return (
    <>
      {/* Page header */}
      <div className="text-white py-12 md:py-16 px-4" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight animate-fade-up">
            Servicios
          </h1>
          <p className="text-lg opacity-85 max-w-2xl mx-auto leading-relaxed animate-fade-up delay-150">
            Soluciones a la medida — diseñadas desde tu operación, no desde la tecnología
          </p>
        </div>
      </div>

      {/* Services — detailed cards */}
      <section className="py-16 md:py-20 px-4" style={{ background: '#F0F2F8' }}>
        <div className="container mx-auto max-w-5xl space-y-8">
          {services.map(({ icon: Icon, title, description, escenario, incluye, noIncluye }, i) => (
            <Reveal key={title} delay={i * 0.07}>
              <div
                className="rounded-2xl border overflow-hidden transition-all duration-300 shadow-[0_2px_8px_0_hsl(237_35%_26%/0.06)] hover:shadow-[0_14px_32px_-6px_rgba(61,142,240,0.15)] hover:border-[rgba(61,142,240,0.25)]"
                style={{ background: '#ffffff', borderColor: 'hsl(228,14%,89%)' }}
              >
                {/* Header */}
                <div className="p-6 pb-4 border-b" style={{ borderColor: 'hsl(228,14%,93%)' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'hsl(228,18%,93%)' }}
                    >
                      <Icon size={20} style={{ color: '#1a2356' }} />
                    </div>
                    <div>
                      <h2 className="font-bold text-lg tracking-tight" style={{ color: '#1a2356' }}>
                        {title}
                      </h2>
                      <p className="text-sm" style={{ color: 'hsl(233,18%,48%)' }}>{description}</p>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 grid md:grid-cols-3 gap-6">
                  {/* Escenario */}
                  <div className="md:col-span-1">
                    <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#3d8ef0' }}>
                      Imagínalo así
                    </p>
                    <p className="text-sm leading-relaxed italic" style={{ color: 'hsl(233,18%,42%)' }}>
                      "{escenario}"
                    </p>
                  </div>

                  {/* Qué incluye */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#16a34a' }}>
                      Qué incluye
                    </p>
                    <ul className="space-y-1.5">
                      {incluye.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm" style={{ color: 'hsl(233,18%,42%)' }}>
                          <CheckCircle size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Qué NO incluye */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#ef4444' }}>
                      Qué no incluye
                    </p>
                    <ul className="space-y-1.5">
                      {noIncluye.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm" style={{ color: 'hsl(233,18%,42%)' }}>
                          <XCircle size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#ef4444' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        title="¿Listo para automatizar tu operación?"
        description="Cuéntanos tu proceso y te proponemos un plan con impacto y tiempos."
        buttonText="Solicita una propuesta"
      />
    </>
  )
}
