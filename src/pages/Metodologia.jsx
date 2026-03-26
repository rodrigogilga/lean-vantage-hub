import { Search, Pencil, Rocket } from 'lucide-react'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'

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

export default function Metodologia() {
  return (
    <>
      <title>Metodología – Leanvan | Diagnóstico, Diseño e Implementación</title>
      <meta
        name="description"
        content="Nuestra metodología en 3 pasos: diagnóstico de procesos, diseño de solución e implementación con optimización continua."
      />
      <link rel="canonical" href="https://www.leanvan.cloud/metodologia" />

      {/* Page header */}
      <div
        className="text-white py-12 md:py-16 px-4"
        style={{ background: 'var(--gradient-hero)' }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight animate-fade-up">
            Nuestra metodología
          </h1>
          <p className="text-lg opacity-85 max-w-2xl mx-auto leading-relaxed animate-fade-up delay-150">
            Un proceso claro en 3 pasos para diseñar, validar e implementar
          </p>
        </div>
      </div>

      {/* Steps */}
      <section className="py-16 md:py-24 px-4" style={{ background: '#F0F2F8' }}>
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            {steps.map(({ icon: Icon, number, title, description }, i) => (
              <Reveal key={number} delay={i * 0.15}>
              <div
                className="rounded-2xl p-6 border border-[hsl(228,14%,89%)] flex items-start gap-5 transition-all duration-300 shadow-[0_2px_8px_0_hsl(237_35%_26%/0.06)] hover:scale-[1.02] hover:border-[hsl(237,35%,26%)] hover:shadow-[0_14px_32px_-6px_hsl(237_35%_26%/0.18)]"
                style={{ background: '#ffffff' }}
              >
                {/* Icon */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'hsl(237,35%,26%)' }}
                >
                  <Icon size={22} className="text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: 'hsl(233,18%,58%)' }}
                  >
                    Paso {number}
                  </p>
                  <h2
                    className="font-bold text-lg mb-1.5 tracking-tight"
                    style={{ color: 'hsl(237,35%,26%)' }}
                  >
                    {title}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: 'hsl(233,18%,42%)' }}>
                    {description}
                  </p>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Listo para automatizar tu operación?"
        description="Cuéntanos tu proceso y te ayudamos a identificar por dónde empezar."
      />
    </>
  )
}
