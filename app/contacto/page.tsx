import type { Metadata } from 'next'
import ContactoForm from '@/components/ContactoForm'

export const metadata: Metadata = {
  title: 'Contacto – Leanvan | Solicita tu Diagnóstico de Automatización en Saltillo',
  description:
    'Cuéntanos qué proceso quieres automatizar y te proponemos un plan con impacto y tiempos claros. Respuesta en menos de 24 horas. Leanvan, Saltillo Coahuila.',
  alternates: { canonical: 'https://www.leanvan.cloud/contacto' },
  openGraph: {
    title: 'Contacto – Leanvan | Solicita tu Diagnóstico de Automatización',
    description: 'Cuéntanos tu proceso y te proponemos un plan con impacto y tiempos claros.',
    url: 'https://www.leanvan.cloud/contacto',
  },
}

export default function Contacto() {
  return <ContactoForm />
}
