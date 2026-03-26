import { useState } from 'react'
import { Mail, Phone, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react'
import Reveal from '../components/Reveal'

const WEBHOOK_URL = 'https://test-n8n.9fkt0y.easypanel.host/webhook/lovable-lead'

const needOptions = [
  'Agente de IA',
  'Automatización de procesos',
  'Integración entre sistemas',
  'App web / Dashboard',
  'Base de datos / Inventario / Expedientes',
  'No estoy seguro',
]

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: '', empresa: '', email: '', telefono: '', mensaje: '', need: '',
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.nombre, email: form.email, phone: form.telefono,
          company: form.empresa, message: form.mensaje, need: form.need,
          source: 'leanvan-web', timestamp: new Date().toISOString(),
        }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ nombre: '', empresa: '', email: '', telefono: '', mensaje: '', need: '' })
      } else setStatus('error')
    } catch { setStatus('error') }
    finally { setLoading(false) }
  }

  return (
    <>
      <title>Contacto – Leanvan | Solicita tu Diagnóstico de Automatización</title>
      <meta name="description" content="Cuéntanos qué proceso quieres automatizar y te proponemos un plan con impacto y tiempos claros. Respuesta en menos de 24 horas." />
      <link rel="canonical" href="https://www.leanvan.cloud/contacto" />

      {/* Header */}
      <div
        className="text-white py-12 md:py-16 px-4"
        style={{ background: 'var(--gradient-hero)' }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight animate-fade-up">
            Contacto
          </h1>
          <p className="text-lg opacity-85 max-w-2xl mx-auto leading-relaxed animate-fade-up delay-150">
            Cuéntanos tu proyecto y te proponemos un plan con impacto y tiempos
          </p>
        </div>
      </div>

      {/* Main */}
      <section className="py-14 md:py-20 px-4" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto max-w-3xl">
          <div className="grid md:grid-cols-5 gap-10 md:gap-14">

            {/* Form - left */}
            <Reveal className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { id: 'nombre', label: 'Nombre *', required: true },
                { id: 'empresa', label: 'Empresa', required: false },
                { id: 'email', label: 'Email *', required: true, type: 'email' },
                { id: 'telefono', label: 'Teléfono', required: false, type: 'tel', placeholder: '+52 844 461 5458' },
              ].map(({ id, label, required, type, placeholder }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-sm font-medium mb-1.5" style={{ color: '#1a2252' }}>
                    {label}
                  </label>
                  <input
                    id={id} name={id} type={type || 'text'} value={form[id]}
                    onChange={handleChange} required={required} placeholder={placeholder}
                    className="w-full px-4 py-2.5 text-sm rounded-lg border outline-none transition-all focus:ring-2 focus:ring-[#1a2252]/15 focus:border-[#1a2252]"
                    style={{ borderColor: '#d1d5e0', background: 'white', color: '#1a2252' }}
                  />
                </div>
              ))}

              {/* Dropdown */}
              <div>
                <label htmlFor="need" className="block text-sm font-medium mb-1.5" style={{ color: '#1a2252' }}>
                  ¿Qué necesitas?
                </label>
                <div className="relative">
                  <select
                    id="need" name="need" value={form.need} onChange={handleChange}
                    className="w-full px-4 py-2.5 pr-10 text-sm rounded-lg border outline-none transition-all focus:ring-2 focus:ring-[#1a2252]/15 focus:border-[#1a2252] appearance-none cursor-pointer"
                    style={{ borderColor: '#d1d5e0', background: 'white', color: form.need ? '#1a2252' : '#8890a4' }}
                  >
                    <option value="" disabled>Selecciona una opción</option>
                    {needOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ color: '#8890a4' }}
                  />
                </div>
              </div>

              {/* Textarea */}
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium mb-1.5" style={{ color: '#1a2252' }}>
                  ¿Qué quieres automatizar? *
                </label>
                <textarea
                  id="mensaje" name="mensaje" value={form.mensaje} onChange={handleChange}
                  required rows={4} placeholder="Describe el proceso o tarea que quieres automatizar..."
                  className="w-full px-4 py-2.5 text-sm rounded-lg border outline-none transition-all focus:ring-2 focus:ring-[#1a2252]/20 focus:border-[#1a2252]/40 resize-none"
                  style={{ borderColor: '#d1d5e0', background: 'white', color: '#1a2252' }}
                />
              </div>

              {/* Status */}
              {status === 'success' && (
                <div className="flex items-center gap-2.5 p-3.5 rounded-lg bg-green-50 text-green-700 text-sm">
                  <CheckCircle size={16} className="flex-shrink-0" />
                  Listo, recibimos tu solicitud. Te contactaremos pronto.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2.5 p-3.5 rounded-lg bg-red-50 text-red-600 text-sm">
                  <AlertCircle size={16} className="flex-shrink-0" />
                  Hubo un error al enviar. Intenta de nuevo o contáctanos por WhatsApp.
                </div>
              )}

              <button
                type="submit" disabled={loading}
                className="w-full py-3 rounded-lg font-semibold text-sm text-white transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#1a2252' }}
              >
                {loading ? 'Enviando...' : 'Contáctanos'}
              </button>
            </form>
            </Reveal>

            {/* Info - right */}
            <Reveal delay={0.15} className="md:col-span-2">
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-bold tracking-tight" style={{ color: '#1a2252' }}>
                Información de contacto
              </h2>

              {[
                { icon: Mail, title: 'Email', text: 'contacto@leanvan.cloud' },
                { icon: Phone, title: 'Teléfono', text: '+52 844 461 5458' },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#1a2252' }}
                  >
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: '#1a2252' }}>{title}</p>
                    <p className="text-sm" style={{ color: '#5a6178' }}>{text}</p>
                  </div>
                </div>
              ))}

              <div
                className="rounded-xl p-5 border transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_20px_-4px_hsl(237_35%_26%/0.14)]"
                style={{ background: '#e8ebf2', borderColor: '#d1d5e0' }}
              >
                <p className="text-sm font-semibold mb-1" style={{ color: '#1a2252' }}>
                  Tiempo de respuesta
                </p>
                <p className="text-sm" style={{ color: '#5a6178' }}>
                  Respondemos en menos de 24 horas hábiles.
                </p>
              </div>
            </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
