import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import CTASection from '../components/CTASection'

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

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="border rounded-xl overflow-hidden transition-all duration-300 shadow-[0_1px_6px_0_hsl(237_35%_26%/0.05)] hover:scale-[1.02] hover:shadow-[0_8px_20px_-4px_hsl(237_35%_26%/0.14)]"
      style={{ borderColor: 'hsl(228,14%,89%)' }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 p-5 text-left transition-colors duration-150 hover:bg-[hsl(230,33%,97%)]"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span
          className="font-semibold text-sm md:text-base"
          style={{ color: 'hsl(237,35%,26%)' }}
        >
          {question}
        </span>
        <ChevronDown
          size={18}
          className="flex-shrink-0 transition-transform duration-300"
          style={{
            color: 'hsl(233,18%,42%)',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>
      {open && (
        <div
          className="px-5 pb-5 text-sm leading-relaxed"
          style={{ color: 'hsl(233,18%,42%)' }}
        >
          {answer}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <>
      <title>FAQ – Leanvan | Preguntas Frecuentes sobre Automatización e IA</title>
      <meta
        name="description"
        content="Respuestas a las preguntas más frecuentes sobre automatización, agentes de IA, integraciones, cotización y soporte de Leanvan."
      />
      <link rel="canonical" href="https://www.leanvan.cloud/faq" />

      {/* JSON-LD FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map(({ question, answer }) => ({
            '@type': 'Question',
            name: question,
            acceptedAnswer: { '@type': 'Answer', text: answer },
          })),
        })}
      </script>

      {/* Page header */}
      <div
        className="text-white py-12 md:py-16 px-4"
        style={{ background: 'var(--gradient-hero)' }}
      >
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
              <div
                key={item.question}
                className="animate-fade-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <FAQItem {...item} />
              </div>
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
