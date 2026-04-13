import type { Metadata } from 'next'
import CTASection from '@/components/CTASection'
import MethodologyTimeline from '@/components/MethodologyTimeline'

export const metadata: Metadata = {
  title: 'Metodología – Leanvan | Diagnóstico, Diseño e Implementación en Saltillo',
  description:
    'Nuestra metodología en 3 pasos: diagnóstico de procesos, diseño de solución e implementación con optimización continua. Automatización con IA en Saltillo, Coahuila.',
  alternates: { canonical: 'https://www.leanvan.cloud/metodologia' },
  openGraph: {
    title: 'Metodología – Leanvan | Diagnóstico, Diseño e Implementación',
    description: 'Proceso claro en 3 pasos para diseñar, validar e implementar automatizaciones con IA.',
    url: 'https://www.leanvan.cloud/metodologia',
  },
}

export default function Metodologia() {
  return (
    <>
      {/* Page header */}
      <div className="text-white py-12 md:py-16 px-4" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight animate-fade-up">
            Nuestra metodología
          </h1>
          <p className="text-lg opacity-85 max-w-2xl mx-auto leading-relaxed animate-fade-up delay-150">
            Un proceso claro en 3 pasos para diseñar, validar e implementar
          </p>
        </div>
      </div>

      <MethodologyTimeline />

      <CTASection
        title="¿Listo para automatizar tu operación?"
        description="Cuéntanos tu proceso y te ayudamos a identificar por dónde empezar."
        buttonText="Agenda tu diagnóstico"
      />
    </>
  )
}
