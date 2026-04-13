import type { Metadata } from 'next'
import { Bot, Zap, Plug, BarChart3 } from 'lucide-react'
import CTASection from '@/components/CTASection'
import Reveal from '@/components/Reveal'
import BeforeAfter from '@/components/BeforeAfter'

export const metadata: Metadata = {
  title: 'Casos de Uso – Leanvan | Ejemplos de Automatización con IA en Saltillo',
  description:
    'Ejemplos reales de automatización en Saltillo: agentes de WhatsApp, onboarding automatizado, sincronización CRM/ERP y reportes operativos con IA.',
  alternates: { canonical: 'https://www.leanvan.cloud/casos-de-uso' },
  openGraph: {
    title: 'Casos de Uso – Leanvan | Ejemplos de Automatización con IA',
    description: 'Casos reales de automatización e IA aplicados a atención, operación y control en empresas de Saltillo.',
    url: 'https://www.leanvan.cloud/casos-de-uso',
  },
}

const casos = [
  {
    icon: Bot,
    title: 'Agente de atención en WhatsApp',
    problema:
      'Una empresa recibía +80 mensajes al día en WhatsApp. El equipo tardaba horas en responder, perdía prospectos y no había seguimiento sistemático.',
    solucion:
      'Se implementó un agente de IA que responde en segundos con el contexto del negocio, califica prospectos según reglas definidas, agenda citas automáticamente y escala a una persona solo cuando es necesario.',
    resultado: 'Tiempo de primera respuesta de 4 horas a menos de 30 segundos. Aumento del 40% en citas agendadas.',
    before: {
      title: 'Antes',
      points: ['Respuesta en 4+ horas', 'Prospectos perdidos sin seguimiento', 'Equipo saturado respondiendo manualmente'],
    },
    after: {
      title: 'Después',
      points: ['Respuesta en menos de 30 segundos', 'Calificación y agenda automática', '40% más citas confirmadas'],
    },
  },
  {
    icon: Zap,
    title: 'Onboarding de clientes automatizado',
    problema:
      'El alta de cada cliente nuevo requería 6-8 correos, recopilar documentos manualmente, crear registros en 3 sistemas distintos y asignar tareas al equipo. El proceso tardaba de 3 a 5 días.',
    solucion:
      'Se diseñó un flujo automático que envía la documentación requerida, recopila información del cliente, crea los registros necesarios y notifica al equipo cuando todo está listo para iniciar.',
    resultado: 'El onboarding pasó de 5 días a 4 horas. Cero seguimientos manuales.',
    before: {
      title: 'Antes',
      points: ['5 días de proceso por cliente', '6-8 correos manuales por alta', 'Datos en 3 sistemas diferentes sin sincronía'],
    },
    after: {
      title: 'Después',
      points: ['Onboarding completo en 4 horas', 'Cero seguimientos manuales', 'Registros creados automáticamente en todos los sistemas'],
    },
  },
  {
    icon: Plug,
    title: 'Sincronización de ventas y operación',
    problema:
      'El equipo de ventas registraba pedidos en un sistema y operaciones usaba hojas de cálculo. Los datos no coincidían, había duplicados y errores de captura que generaban retrabajos semanales.',
    solucion:
      'Se conectaron los sistemas de ventas y operación para que los datos se sincronicen automáticamente. Cada venta registrada genera los registros operativos sin intervención manual.',
    resultado: 'Eliminación del 95% de errores por recaptura. 6 horas semanales recuperadas del equipo.',
    before: {
      title: 'Antes',
      points: ['Datos duplicados entre ventas y operación', 'Errores de captura semanales', '6+ horas de retrabajo por semana'],
    },
    after: {
      title: 'Después',
      points: ['Datos sincronizados en tiempo real', '95% menos errores de recaptura', '6 horas semanales recuperadas'],
    },
  },
  {
    icon: BarChart3,
    title: 'Reportes automáticos de operación',
    problema:
      'Cada lunes, un coordinador pasaba 2-3 horas recopilando datos de distintas fuentes para armar el reporte semanal. A veces llegaba tarde o con datos desactualizados.',
    solucion:
      'Se automatizó la recopilación de datos y la generación del reporte. Se envía automáticamente por correo y WhatsApp cada lunes a las 8am con las métricas clave actualizadas.',
    resultado: 'De 3 horas de trabajo manual a 0. Reportes siempre puntuales y con datos en tiempo real.',
    before: {
      title: 'Antes',
      points: ['3 horas manuales cada lunes', 'Reportes a veces tardíos o desactualizados', 'Coordinador dedicado a recopilar datos'],
    },
    after: {
      title: 'Después',
      points: ['Reporte automático cada lunes a las 8am', 'Datos en tiempo real siempre actualizados', '0 horas de trabajo manual'],
    },
  },
]

export default function Casos() {
  return (
    <>
      {/* Page header */}
      <div className="text-white py-12 md:py-16 px-4" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight animate-fade-up">
            Casos de uso
          </h1>
          <p className="text-lg opacity-85 max-w-2xl mx-auto leading-relaxed animate-fade-up delay-150">
            Ejemplos reales de automatización e IA aplicados a operaciones de empresas
          </p>
        </div>
      </div>

      {/* Cases */}
      <section className="py-16 md:py-24 px-4" style={{ background: '#F0F2F8' }}>
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {casos.map(({ icon: Icon, title, problema, solucion, resultado, before, after }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div
                  className="rounded-2xl overflow-hidden border h-full flex flex-col transition-all duration-300 shadow-[0_2px_8px_0_hsl(237_35%_26%/0.06)] hover:scale-[1.02] hover:shadow-[0_14px_32px_-6px_rgba(61,142,240,0.18)] hover:border-[rgba(61,142,240,0.3)]"
                  style={{ background: '#ffffff', borderColor: 'hsl(228,14%,89%)' }}
                >
                  <div className="p-6 pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'hsl(228,18%,93%)' }}
                      >
                        <Icon size={18} style={{ color: '#1a2356' }} />
                      </div>
                      <h2 className="font-bold text-base tracking-tight leading-snug" style={{ color: '#1a2356' }}>
                        {title}
                      </h2>
                    </div>

                    {/* Problema */}
                    <div className="mb-4">
                      <p className="text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: '#ef4444' }}>
                        El problema
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: 'hsl(233,18%,42%)' }}>
                        {problema}
                      </p>
                    </div>

                    {/* Solución */}
                    <div className="mb-4">
                      <p className="text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: '#3d8ef0' }}>
                        La solución
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: 'hsl(233,18%,42%)' }}>
                        {solucion}
                      </p>
                    </div>

                    {/* Resultado */}
                    <div
                      className="rounded-lg p-3 mb-4"
                      style={{ background: '#f0fdf4', borderLeft: '3px solid #22c55e' }}
                    >
                      <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#16a34a' }}>
                        El resultado
                      </p>
                      <p className="text-sm font-medium leading-relaxed" style={{ color: '#15803d' }}>
                        {resultado}
                      </p>
                    </div>

                    {/* Before / After */}
                    <BeforeAfter before={before} after={after} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Quieres algo similar para tu operación?"
        description="Cuéntanos tu proceso y te ayudamos a identificar una automatización con mayor impacto."
        buttonText="¿Quieres algo similar? Platiquemos"
      />
    </>
  )
}
