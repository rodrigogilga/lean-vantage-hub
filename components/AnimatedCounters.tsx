'use client';
import { useEffect, useRef, useState } from 'react';

interface Counter { prefix?: string; value: number; suffix: string; label: string }

const counters: Counter[] = [
  { prefix: '+', value: 50,  suffix: '',   label: 'procesos automatizados' },
  { prefix: '+', value: 500, suffix: '',   label: 'horas ahorradas al mes' },
  { prefix: '+', value: 20,  suffix: '',   label: 'empresas asesoradas' },
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
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

function CounterItem({ prefix = '', value, suffix, label }: Counter) {
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
    <div ref={ref} className="text-center px-6">
      <div
        className="text-4xl md:text-5xl font-bold mb-2 tabular-nums"
        style={{ color: '#1a2356' }}
      >
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm md:text-base" style={{ color: 'hsl(233,18%,48%)' }}>
        {label}
      </div>
    </div>
  );
}

export default function AnimatedCounters() {
  return (
    <section className="py-14 px-4" style={{ background: 'rgba(255,255,255,0.7)' }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[hsl(228,14%,89%)]">
          {counters.map((c) => (
            <CounterItem key={c.label} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
