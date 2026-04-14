'use client';
import { useEffect, useRef, useState } from 'react';
import { Search, Pencil, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Diagnóstico',
    description:
      'Entendemos tu operación actual y el objetivo del proyecto. Detectamos tareas manuales, cuellos de botella y oportunidades de automatización con mayor impacto.',
  },
  {
    icon: Pencil,
    number: '02',
    title: 'Diseño',
    description:
      'Diseñamos el flujo objetivo y construimos un primer prototipo funcional. Lo validamos contigo antes de implementar para reducir retrabajo.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Implementación y optimización',
    description:
      'Implementamos la solución, monitoreamos su funcionamiento y optimizamos según resultados reales para mejorar estabilidad, velocidad y control.',
  },
];

function TimelineStep({
  icon: Icon,
  number,
  title,
  description,
  index,
}: (typeof steps)[0] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative grid md:grid-cols-2 gap-4 md:gap-8 items-center"
    >
      {/* Content — alternates sides on desktop */}
      <div
        className={`md:text-right transition-all duration-700 ${
          visible ? 'opacity-100 translate-x-0' : isLeft ? 'opacity-0 -translate-x-8' : 'opacity-0 translate-x-8'
        } ${isLeft ? 'md:col-start-1' : 'md:col-start-2 md:row-start-1 md:text-left'}`}
        style={{ transitionDelay: `${index * 0.15}s` }}
      >
        <div
          className={`inline-block rounded-2xl p-6 border shadow-[0_2px_8px_0_hsl(237_35%_26%/0.06)] hover:scale-[1.03] hover:shadow-[0_14px_32px_-6px_rgba(61,142,240,0.18)] hover:border-[rgba(61,142,240,0.3)] transition-all duration-300`}
          style={{ background: '#ffffff', borderColor: visible ? 'rgba(61,142,240,0.3)' : 'hsl(228,14%,89%)' }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-1"
            style={{ color: 'hsl(233,18%,58%)' }}
          >
            Paso {number}
          </p>
          <h2 className="font-bold text-lg mb-2 tracking-tight" style={{ color: '#1a2356' }}>
            {title}
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'hsl(233,18%,42%)' }}>
            {description}
          </p>
        </div>
      </div>

      {/* Center node — on desktop always in col 1 or 2 depending on alignment trick */}
      <div
        className={`hidden md:flex items-center justify-center ${
          isLeft ? 'md:col-start-2 md:row-start-1' : 'md:col-start-1'
        }`}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center border-4 transition-all duration-700 z-10 relative"
          style={{
            background: visible ? '#3d8ef0' : 'hsl(228,18%,93%)',
            borderColor: visible ? '#3d8ef0' : 'hsl(228,14%,89%)',
            boxShadow: visible ? '0 0 0 8px rgba(61,142,240,0.12)' : 'none',
            transitionDelay: `${index * 0.15 + 0.1}s`,
          }}
        >
          <Icon size={22} style={{ color: visible ? '#ffffff' : 'hsl(233,18%,65%)' }} />
        </div>
      </div>

      {/* Mobile node (inline) */}
      <div className="md:hidden flex items-center gap-4">
        <div
          className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-700"
          style={{
            background: visible ? '#3d8ef0' : 'hsl(228,18%,93%)',
            boxShadow: visible ? '0 0 0 6px rgba(61,142,240,0.12)' : 'none',
          }}
        >
          <Icon size={20} style={{ color: visible ? '#ffffff' : 'hsl(233,18%,65%)' }} />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'hsl(233,18%,58%)' }}>
            Paso {number}
          </p>
          <h2 className="font-bold text-base" style={{ color: '#1a2356' }}>{title}</h2>
        </div>
      </div>
      <div className="md:hidden">
        <p className="text-sm leading-relaxed" style={{ color: 'hsl(233,18%,42%)' }}>{description}</p>
      </div>
    </div>
  );
}

export default function MethodologyTimeline() {
  return (
    <section className="py-16 md:py-24 px-4" style={{ background: '#F0F2F8' }}>
      <div className="container mx-auto max-w-4xl">
        {/* Vertical line (desktop only) */}
        <div className="relative">
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'hsl(228,14%,88%)' }}
          />
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <TimelineStep key={step.number} {...step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
