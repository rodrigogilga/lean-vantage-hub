'use client';
import { useEffect, useRef, useState } from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

interface BeforeAfterProps {
  before: { title: string; points: string[] };
  after:  { title: string; points: string[] };
}

export default function BeforeAfter({ before, after }: BeforeAfterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [beforeVisible, setBeforeVisible] = useState(false);
  const [afterVisible, setAfterVisible]   = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBeforeVisible(true);
          setTimeout(() => setAfterVisible(true), 500);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
      {/* ANTES */}
      <div
        className="rounded-xl p-4 transition-all duration-500"
        style={{
          background: '#fef2f2',
          border: '1px solid #fecaca',
          opacity: beforeVisible ? 1 : 0,
          transform: beforeVisible ? 'translateY(0)' : 'translateY(12px)',
        }}
      >
        <p className="text-xs font-bold uppercase tracking-widest mb-2.5" style={{ color: '#dc2626' }}>
          ✗ Antes
        </p>
        <ul className="space-y-1.5">
          {before.points.map((p) => (
            <li key={p} className="flex items-start gap-2 text-xs" style={{ color: '#7f1d1d' }}>
              <XCircle size={13} className="flex-shrink-0 mt-0.5" style={{ color: '#ef4444' }} />
              {p}
            </li>
          ))}
        </ul>
      </div>

      {/* DESPUÉS */}
      <div
        className="rounded-xl p-4 transition-all duration-500"
        style={{
          background: '#f0fdf4',
          border: '1px solid #bbf7d0',
          opacity: afterVisible ? 1 : 0,
          transform: afterVisible ? 'translateY(0)' : 'translateY(12px)',
        }}
      >
        <p className="text-xs font-bold uppercase tracking-widest mb-2.5" style={{ color: '#16a34a' }}>
          ✓ Después
        </p>
        <ul className="space-y-1.5">
          {after.points.map((p) => (
            <li key={p} className="flex items-start gap-2 text-xs" style={{ color: '#14532d' }}>
              <CheckCircle size={13} className="flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
