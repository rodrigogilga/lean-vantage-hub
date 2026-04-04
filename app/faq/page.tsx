import type { Metadata } from 'next'
import CTASection from '@/components/CTASection'
import Reveal from '@/components/Reveal'
import FAQList from '@/components/FAQList'

export const metadata: Metadata = {
  title: 'FAQ – Leanvan | Preguntas Frecuentes sobre Automatización e IA en Saltillo',
  description:
    'Respuestas a las preguntas más frecuentes sobre automatización, agentes de IA, integraciones, cotización y soporte de Leanvan en Saltillo, Coahuila.',
  alternates: { canonical: 'https://www.leanvan.cloud/faq' },
  openGraph: {
    title: 'FAQ – Leanvan | Preguntas Frecuentes sobre Automatización e IA',
    description: 'Resolvemos tus dudas sobre automatización con IA, cotización, integraciones y soporte.',
    url: 'https://www.leanvan.cloud/faq',
  },
}

const faqs = [
  {
    question: '¿Cómo calculan la cotización?',
    answer:
      'Se basa en la complejidad del proceso, número de integraciones y tiempo estimado. Después del diagnóstico inicial, enviamos una propuesta con costos transparentes.',
  },
  {
    question: '¿Qué necesito para empezar?',
    answer:
      'Solo necesitas contarnos qué proceso quieres automatizar. Nosotros evaluamos tus herramientas actuales y proponemos la mejor solución.',
  },
  {
    question: '¿Trabajan con mi CRM/ERP actual?',
    answer:
      'Sí. Trabajamos con la mayoría de CRMs y ERPs mediante APIs y webhooks. Si tu sistema permite integraciones, lo conectamos.',
  },
  {
    question: '¿Qué tipo de agentes de IA pueden construir?',
    answer:
      'Agentes de atención al cliente, calificación de leads, seguimiento automatizado, soporte interno y más. Todos configurados con las reglas y tono de tu marca.',
  },
  {
    question: '¿Qué soporte incluyen?',
    answer:
      'Todos los proyectos incluyen soporte post-lanzamiento. Después, ofrecemos planes de mantenimiento con monitoreo y mejoras continuas.',
  },
  {
    question: '¿Cómo manejan seguridad y datos?',
    answer:
      'Seguimos mejores prácticas: HTTPS, autenticación segura en APIs, cifrado de datos sensibles y acceso restringido. Cumplimos con normativas de protección de datos.',
  },
  {
    question: '¿Pueden firmar NDA?',
    answer:
      'Sí. Firmamos acuerdos de confidencialidad antes de iniciar proyectos que lo requieran.',
  },
  {
    question: 'Ya uso Zapier o Make, ¿pueden complementar?',
    answer:
      'Sí. Podemos complementar tus automatizaciones existentes o migrarlas a soluciones con mayor control y menores costos.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
}

export default function FAQ() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Page header */}
      <div className="text-white py-12 md:py-16 px-4" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight animate-fade-up">
            Preguntas frecuentes
          </h1>
          <p className="text-lg opacity-85 max-w-2xl mx-auto leading-relaxed animate-fade-up delay-150">
            Respuestas claras a las dudas más comunes
          </p>
        </div>
      </div>

      {/* FAQ list */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <Reveal key={item.question} delay={i * 0.05}>
                <FAQList question={item.question} answer={item.answer} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Tienes otra pregunta?"
        description="Escríbenos directamente y te respondemos en menos de 24 horas hábiles."
      />
    </>
  )
}
