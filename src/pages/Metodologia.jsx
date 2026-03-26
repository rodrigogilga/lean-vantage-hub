import { Search, Pencil, Rocket } from 'lucide-react'
import CTASection from '../components/CTASection'

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
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            {steps.map(({ icon: Icon, number, title, description }, i) => (
              <div
                key={number}
                className="flex flex-col md:flex-row gap-8 items-start animate-fade-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {/* Icon + number */}
                <div className="flex-shrink-0 flex flex-col items-center gap-3">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-[0_4px_14px_-3px_hsl(237_35%_26%/0.18)]"
                    style={{ background: 'var(--gradient-hero)' }}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                  <span
                    className="text-3xl font-bold opacity-20"
                    style={{ color: 'hsl(237,35%,26%)' }}
                  >
                    {number}
                  </span>
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
                  <p className="text-sm leading-relaxed" style={{ color: 'hsl(233,18%,42%)' }}>
                    {description}
                  </p>
                </div>
              </div>
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
