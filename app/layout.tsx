import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ParticleBackground from '@/components/ParticleBackground'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.leanvan.cloud'),
  title: 'Leanvan - Automatización y Agentes de IA en Saltillo',
  description:
    'Leanvan: consultoría de automatización con IA en Saltillo, Coahuila. Agentes de IA, flujos automáticos, integraciones CRM/ERP y dashboards operativos para empresas en México.',
  keywords: [
    'automatización con IA Saltillo',
    'agentes de IA Saltillo',
    'automatización de procesos Coahuila',
    'consultoría IA México',
    'integraciones CRM ERP Saltillo',
    'Leanvan',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://www.leanvan.cloud',
    siteName: 'Leanvan',
    title: 'Leanvan - Automatización y Agentes de IA en Saltillo',
    description:
      'Consultoría de automatización con IA en Saltillo, Coahuila. Transformamos procesos en sistemas que trabajan por ti.',
    images: [
      {
        url: '/hero-illustration.jpg',
        width: 1200,
        height: 630,
        alt: 'Leanvan - Automatización con IA en Saltillo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leanvan - Automatización y Agentes de IA en Saltillo',
    description:
      'Consultoría de automatización con IA en Saltillo, Coahuila. Transformamos procesos en sistemas que trabajan por ti.',
    images: ['/hero-illustration.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/logo-lv.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.leanvan.cloud',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Leanvan',
  description:
    'Consultoría y automatización con IA a la medida. Agentes de IA, automatización de procesos, integraciones entre sistemas y dashboards operativos.',
  url: 'https://www.leanvan.cloud',
  telephone: '+52 844 461 5458',
  email: 'contacto@leanvan.cloud',
  priceRange: '$$',
  areaServed: [
    { '@type': 'City', name: 'Saltillo' },
    { '@type': 'State', name: 'Coahuila' },
    { '@type': 'Country', name: 'México' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Saltillo',
    addressRegion: 'Coahuila',
    addressCountry: 'MX',
  },
  sameAs: ['https://www.leanvan.cloud'],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        <ParticleBackground />
        <div style={{ position: 'relative', zIndex: 1 }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  )
}
