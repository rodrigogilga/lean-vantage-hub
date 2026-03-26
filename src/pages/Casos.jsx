import { Bot, Zap, Plug, BarChart3 } from 'lucide-react'
import CTASection from '../components/CTASection'

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

      {/* Cases */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-10">
            {casos.map(({ icon: Icon, title, description, result }, i) => (
              <div
                key={title}
                className={`flex flex-col md:flex-row gap-8 items-start animate-${i % 2 === 0 ? 'slide-left' : 'slide-right'}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Visual card */}
                <div
                  className="flex-shrink-0 w-full md:w-56 rounded-2xl overflow-hidden shadow-[0_4px_14px_-3px_hsl(237_35%_26%/0.12)]"
                  style={{ background: 'var(--gradient-hero)', minHeight: '160px' }}
                >
                  <div className="p-6 h-full flex flex-col justify-between">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/20"
                    >
                      <Icon size={20} className="text-white" />
                    </div>
                    <div className="space-y-2 mt-4">
                      <div className="h-2 bg-white/20 rounded-full w-full" />
                      <div className="h-2 bg-white/15 rounded-full w-3/4" />
                      <div className="h-2 bg-white/10 rounded-full w-1/2" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className="flex-1 rounded-2xl p-6 border"
                  style={{
                    background: 'hsl(230,33%,97%)',
                    borderColor: 'hsl(228,14%,89%)',
                  }}
                >
                  <h2
                    className="font-bold text-xl mb-3 tracking-tight"
                    style={{ color: 'hsl(237,35%,26%)' }}
                  >
                    {title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'hsl(233,18%,42%)' }}>
                    {description}
                  </p>
                  <div
                    className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-lg"
                    style={{
                      background: 'hsl(237 35% 26% / 0.08)',
                      color: 'hsl(237,35%,26%)',
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: 'hsl(237,35%,26%)' }}
                    />
                    {result}
                  </div>
                </div>
              </div>
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
