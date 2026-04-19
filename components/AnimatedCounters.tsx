'use client';
import { useEffect, useRef, useState } from 'react';

interface Counter {
  value: number;
  label: string;
  barColor: string;
}

const counters: Counter[] = [
  { value: 50,  label: 'procesos automatizados', barColor: '#1a2560' },
  { value: 500, label: 'horas ahorradas al mes',  barColor: '#1a2560' },
  { value: 20,  label: 'empresas asesoradas',     barColor: '#1a2560' },
];

function useCount(target: number, duration = 2000, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) { setCount(target); return; }
    let start = 0;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

function CounterItem({ value, label, barColor, isLast }: Counter & { isLast: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCount(value, 2000, active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.unobserve(el); } },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex-1 flex sm:flex-col flex-row items-start p-5 sm:p-8${!isLast ? ' border-b sm:border-b-0 sm:border-r border-[#e8edf8]' : ''}`}
    >
      {/* Mobile: vertical bar 3×36px */}
      <div
        className="sm:hidden flex-shrink-0 mr-4 mt-1"
        style={{ width: 3, height: 36, background: barColor, borderRadius: 2 }}
      />
      {/* Desktop: horizontal bar 28×3px */}
      <div
        className="hidden sm:block mb-3"
        style={{ width: 28, height: 3, background: barColor, borderRadius: 2 }}
      />

      <div>
        <div
          className="tabular-nums"
          style={{ fontSize: '2.8rem', fontWeight: 700, color: '#1a2560', lineHeight: 1.1 }}
        >
          <span style={{ color: '#1a2560' }}>+</span>{count}
        </div>
        <div
          style={{
            fontSize: '0.78rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: '#6b7aa1',
            marginTop: 8,
            fontWeight: 500,
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}

export default function AnimatedCounters() {
  return (
    <section style={{ background: '#ffffff', padding: '3rem 1rem' }}>
      <div className="container mx-auto">
        <div
          className="flex flex-col sm:flex-row"
          style={{ background: '#ffffff', borderRadius: 16, overflow: 'hidden', border: '1px solid hsl(228,18%,91%)', boxShadow: '0 4px 24px rgba(26,37,96,0.06)' }}
        >
          {counters.map((c, i) => (
            <CounterItem key={c.label} {...c} isLast={i === counters.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
