import { useState } from 'react'
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react'

const WEBHOOK_URL = 'https://test-n8n.9fkt0y.easypanel.host/webhook/lovable-lead'

const needOptions = [
  'Agente de IA',
  'Automatización de procesos',
  'Integración entre sistemas',
  'App web / Dashboard',
  'Base de datos / Inventario / Expedientes',
  'No estoy seguro',
]

const fields = [
  { id: 'nombre',   label: 'Nombre *',  required: true },
  { id: 'empresa',  label: 'Empresa',   required: false },
  { id: 'email',    label: 'Email *',   required: true, type: 'email' },
  { id: 'telefono', label: 'Teléfono',  required: false, type: 'tel', placeholder: '+52 844 461 5458' },
]

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: '', empresa: '', email: '', telefono: '', mensaje: '', need: '',
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null) // 'success' | 'error'

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
          name: form.nombre,
          email: form.email,
          phone: form.telefono,
          company: form.empresa,
          message: form.mensaje,
          need: form.need,
          source: 'leanvan-web',
          timestamp: new Date().toISOString(),
        }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ nombre: '', empresa: '', email: '', telefono: '', mensaje: '', need: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <title>Contacto – Leanvan | Solicita tu Diagnóstico de Automatización</title>
      <meta
        name="description"
        content="Cuéntanos qué proceso quieres automatizar y te proponemos un plan con impacto y tiempos claros. Respuesta en menos de 24 horas."
      />
      <link rel="canonical" href="https://www.leanvan.cloud/contacto" />

      {/* Page header */}
      <div
        className="text-white py-12 md:py-16 px-4"
        style={{ background: 'var(--gradient-hero)' }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight animate-fade-up">
            Cuéntanos tu proyecto
          </h1>
          <p className="text-lg opacity-85 max-w-2xl mx-auto leading-relaxed animate-fade-up delay-150">
            Te proponemos un plan con impacto y tiempos
          </p>
        </div>
      </div>

      {/* Form + info */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14">
            {/* Contact info */}
            <div className="space-y-6 md:space-y-8 order-2 md:order-1">
              <div>
                <h2
                  className="text-xl md:text-2xl font-bold mb-4 md:mb-6 tracking-tight"
                  style={{ color: 'hsl(237,35%,26%)' }}
                >
                  Información de contacto
                </h2>
                <div className="space-y-4 md:space-y-5">
                  {[
                    { icon: Mail,    text: 'contacto@leanvan.cloud' },
                    { icon: Phone,   text: '+52 844 461 5458' },
                    { icon: MapPin,  text: 'Saltillo, Coahuila, México' },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'hsl(237 35% 26% / 0.08)' }}
                      >
                        <Icon size={18} style={{ color: 'hsl(237,35%,26%)' }} />
                      </div>
                      <span className="text-sm" style={{ color: 'hsl(233,18%,42%)' }}>
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-xl p-5 border"
                style={{
                  background: 'hsl(230,33%,97%)',
                  borderColor: 'hsl(228,14%,89%)',
                }}
              >
                <p className="text-sm font-medium mb-1" style={{ color: 'hsl(237,35%,26%)' }}>
                  Tiempo de respuesta
                </p>
                <p className="text-sm" style={{ color: 'hsl(233,18%,42%)' }}>
                  Respondemos en menos de 24 horas hábiles.
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5 order-1 md:order-2">
              {fields.map(({ id, label, required, type, placeholder }) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className="block text-sm font-medium mb-1.5"
                    style={{ color: 'hsl(237,35%,26%)' }}
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    name={id}
                    type={type || 'text'}
                    value={form[id]}
                    onChange={handleChange}
                    required={required}
                    placeholder={placeholder}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border outline-none transition-all duration-200 focus:ring-2 focus:ring-[hsl(237,35%,26%)]/20 focus:border-[hsl(237,35%,26%)]/40"
                    style={{
                      borderColor: 'hsl(228,14%,85%)',
                      background: 'white',
                      color: 'hsl(237,35%,26%)',
                    }}
                  />
                </div>
              ))}

              {/* Need dropdown */}
              <div>
                <label
                  htmlFor="need"
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: 'hsl(237,35%,26%)' }}
                >
                  ¿Qué necesitas?
                </label>
                <select
                  id="need"
                  name="need"
                  value={form.need}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border outline-none transition-all duration-200 focus:ring-2 focus:ring-[hsl(237,35%,26%)]/20 focus:border-[hsl(237,35%,26%)]/40 appearance-none"
                  style={{
                    borderColor: 'hsl(228,14%,85%)',
                    background: 'white',
                    color: form.need ? 'hsl(237,35%,26%)' : 'hsl(233,18%,60%)',
                  }}
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  {needOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message textarea */}
              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: 'hsl(237,35%,26%)' }}
                >
                  ¿Qué quieres automatizar? *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Describe el proceso o tarea que quieres automatizar..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border outline-none transition-all duration-200 focus:ring-2 focus:ring-[hsl(237,35%,26%)]/20 focus:border-[hsl(237,35%,26%)]/40 resize-none"
                  style={{
                    borderColor: 'hsl(228,14%,85%)',
                    background: 'white',
                    color: 'hsl(237,35%,26%)',
                  }}
                />
              </div>

              {/* Status messages */}
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

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg font-semibold text-sm text-white transition-all duration-200 hover:scale-[1.01] hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: 'hsl(237,35%,26%)' }}
              >
                {loading ? 'Enviando...' : 'Contáctanos'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
