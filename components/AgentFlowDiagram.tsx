'use client';
import { useEffect, useRef, useState } from 'react';
import { MessageSquare, Brain, Database, CheckCircle, Calendar, Bell } from 'lucide-react';

const steps = [
  { icon: MessageSquare, label: 'Cliente envía mensaje',       color: '#3d8ef0' },
  { icon: Brain,         label: 'Agente procesa con IA',       color: '#3d8ef0' },
  { icon: Database,      label: 'Consulta tu CRM / sistema',   color: '#8b5cf6' },
  { icon: CheckCircle,   label: 'Responde con contexto',       color: '#3d8ef0' },
  { icon: Calendar,      label: 'Captura datos y agenda',      color: '#8b5cf6' },
  { icon: Bell,          label: 'Envía alerta a tu equipo',    color: '#3d8ef0' },
];

export default function AgentFlowDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [started, setStarted] = useState(false);

  const runAnimation = () => {
    setActiveIndex(-1);
    setStarted(true);
    steps.forEach((_, i) => {
      setTimeout(() => setActiveIndex(i), i * 800);
    });
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) runAnimation();
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  return (
    <div ref={ref} className="py-14 px-4" style={{ background: 'rgba(255,255,255,0.75)' }}>
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#3d8ef0' }}>
            Así funciona un agente de IA
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: '#1a2356' }}>
            Más que un chatbot — actúa dentro de tu operación
          </h2>
          <p className="mt-3 text-sm max-w-xl mx-auto leading-relaxed" style={{ color: 'hsl(233,18%,48%)' }}>
            El agente no solo responde — consulta tus sistemas, captura información y alerta a tu equipo.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center gap-0 md:gap-0 justify-between">
          {steps.map(({ icon: Icon, label, color }, i) => {
            const isActive = activeIndex >= i;
            const isSpecial = color === '#8b5cf6'; // diferenciador Leanvan
            return (
              <div key={label} className="flex flex-col md:flex-row items-center flex-1">
                {/* Node */}
                <div className="flex flex-col items-center text-center" style={{ minWidth: 80 }}>
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-2 transition-all duration-500"
                    style={{
                      background: isActive ? color : 'hsl(228,14%,91%)',
                      boxShadow: isActive ? `0 0 0 6px ${color}22` : 'none',
                      transform: isActive ? 'scale(1.08)' : 'scale(1)',
                    }}
                  >
                    <Icon
                      size={22}
                      style={{ color: isActive ? '#ffffff' : 'hsl(233,18%,65%)' }}
                    />
                  </div>
                  <p
                    className="text-xs leading-tight max-w-[80px] transition-all duration-500"
                    style={{
                      color: isActive ? (isSpecial ? '#7c3aed' : '#1a2356') : 'hsl(233,18%,65%)',
                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    {label}
                  </p>
                  {isSpecial && isActive && (
                    <span
                      className="mt-1 text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded"
                      style={{ background: '#ede9fe', color: '#7c3aed' }}
                    >
                      clave
                    </span>
                  )}
                </div>

                {/* Connector (not after last) */}
                {i < steps.length - 1 && (
                  <div
                    className="flex-1 transition-all duration-700"
                    style={{
                      height: 2,
                      minWidth: 16,
                      background: activeIndex > i
                        ? 'linear-gradient(90deg, #3d8ef0, #8b5cf6)'
                        : 'hsl(228,14%,88%)',
                      margin: '0 4px 24px',
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Repeat button */}
        <div className="text-center mt-8">
          <button
            onClick={runAnimation}
            className="text-sm font-medium px-4 py-2 rounded-lg border transition-all duration-200 hover:bg-[rgba(61,142,240,0.06)]"
            style={{ borderColor: '#3d8ef0', color: '#3d8ef0' }}
          >
            ↺ Repetir animación
          </button>
        </div>
      </div>
    </div>
  );
}
