'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function StickyMobileCTA() {
  const pathname = usePathname();
  // Hide on /contacto — the user is already there
  if (pathname === '/contacto') return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 md:hidden z-40 px-4 py-3"
      style={{
        background: 'rgba(255,255,255,0.96)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
      }}
    >
      <Link
        href="/contacto"
        className="btn-primary w-full justify-center"
        style={{ padding: '12px 20px', fontSize: '0.9rem', borderRadius: '10px' }}
      >
        Agenda tu diagnóstico
      </Link>
    </div>
  );
}
