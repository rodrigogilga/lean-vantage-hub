import { Bot, Zap, Plug, BarChart3 } from 'lucide-react'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'

const casos = [
  {
    icon: Bot,
    title: 'Agente de atención en WhatsApp',
    description:
      'Agente de IA que responde consultas, califica prospectos y agenda citas por WhatsApp con reglas personalizadas y escalamiento a una persona cuando se requiere.',
    result: 'Menor tiempo de respuesta y mejor seguimiento comercial.',
  },
  {
    icon: Zap,
    title: 'Onboarding de clientes',
    description:
      'Flujo automatizado que envía documentos, solicita información, crea registros y activa notificaciones al equipo para iniciar el servicio más rápido y con menos seguimiento manual.',
    result: 'Menos retrasos y mejor arranque de cada cliente.',
  },
  {
    icon: Plug,
    title: 'Sincronización de ventas y operación',
    description:
      'Integración entre CRM, hojas de cálculo y otros sistemas para mantener datos de clientes, pedidos y seguimiento actualizados sin recaptura manual.',
    result: 'Menos errores y datos consistentes entre áreas.',
  },
  {
    icon: BarChart3,
    title: 'Reportes automáticos de operación',
    description:
      'Generación y envío automático de reportes diarios o semanales con métricas clave de operación para seguimiento interno y toma de decisiones más rápida.',
    result: 'Más visibilidad sin trabajo manual recurrente.',
  },
]

export default function Casos() {
  return (
    <>
      <title>Casos de Uso – Leanvan | Ejemplos de Automatización con IA</title>
      <meta
        name="description"
        content="Ejemplos reales de automatización: agentes de WhatsApp, onboarding automatizado, sincronización CRM/ERP y reportes operativos."
      />
      <link rel="canonical" href="https://www.leanvan.cloud/casos" />

      {/* Page header */}
      <div
        className="text-white py-12 md:py-16 px-4"
        style={{ background: 'var(--gradient-hero)' }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight animate-fade-up">
            Casos de uso
          </h1>
          <p className="text-lg opacity-85 max-w-2xl mx-auto leading-relaxed animate-fade-up delay-150">
            Ejemplos de automatización e IA aplicados a atención, operación y control
          </p>
        </div>
      </div>

      {/* Cases grid */}
      <section className="py-16 md:py-24 px-4" style={{ background: '#F0F2F8' }}>
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {casos.map(({ icon: Icon, title, description, result }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div
                  className="rounded-2xl overflow-hidden border h-full flex flex-col transition-all duration-300 shadow-[0_2px_8px_0_hsl(237_35%_26%/0.06)] hover:scale-[1.03] hover:shadow-[0_14px_32px_-6px_hsl(237_35%_26%/0.18)]"
                  style={{ background: '#ffffff', borderColor: 'hsl(228,14%,89%)' }}
                >
                  {/* Image placeholder */}
                  <div
                    className="w-full flex items-center justify-center"
                    style={{ background: '#E8EAF0', height: '180px' }}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: 'hsl(237,35%,26%)', opacity: 0.15 }}
                    />
                    <Icon
                      size={40}
                      style={{ color: 'hsl(237,35%,26%)', position: 'absolute', opacity: 0.5 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'hsl(228,18%,93%)' }}
                      >
                        <Icon size={15} style={{ color: 'hsl(237,35%,26%)' }} />
                      </div>
                      <h2
                        className="font-bold text-base tracking-tight leading-snug"
                        style={{ color: 'hsl(237,35%,26%)' }}
                      >
                        {title}
                      </h2>
                    </div>

                    <p className="text-sm leading-relaxed flex-1" style={{ color: 'hsl(233,18%,42%)' }}>
                      {description}
                    </p>

                    <p
                      className="mt-4 text-sm italic"
                      style={{ color: 'hsl(237,35%,36%)' }}
                    >
                      → {result}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Quieres algo similar para tu operación?"
        description="Cuéntanos tu proceso y te ayudamos a identificar una automatización o solución de IA con mayor impacto."
      />
    </>
  )
}
