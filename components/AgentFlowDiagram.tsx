'use client';
import { Fragment, useEffect, useRef, useState } from 'react';
import { MessageSquare, Brain, Database, CheckCircle, Calendar, Bell } from 'lucide-react';

const steps = [
  { icon: MessageSquare, label: 'Cliente envía mensaje',       color: '#3d8ef0', special: false },
  { icon: Brain,         label: 'Agente procesa con IA',       color: '#3d8ef0', special: false },
  { icon: Database,      label: 'Consulta tu CRM / sistema',   color: '#8b5cf6', special: true  },
  { icon: CheckCircle,   label: 'Responde con contexto',       color: '#3d8ef0', special: false },
  { icon: Calendar,      label: 'Captura datos y agenda',      color: '#8b5cf6', special: true  },
  { icon: Bell,          label: 'Envía alerta a tu equipo',    color: '#3d8ef0', special: false },
];

const STEP_INTERVAL = 550;
const PAUSE_AFTER   = 0;
const FADE_OUT_MS   = 500;
const PAUSE_BETWEEN = 200;

export default function AgentFlowDiagram() {
  const ref      = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [fadingOut,   setFadingOut]   = useState(false);
  const [visible,     setVisible]     = useState(false);

  const addTimer = (fn: () => void, delay: number) => {
    const t = setTimeout(fn, delay);
    timerRef.current.push(t);
  };

  const scheduleLoop = () => {
    timerRef.current.forEach(clearTimeout);
    timerRef.current = [];

    setFadingOut(false);
    setActiveIndex(-1);

    steps.forEach((_, i) => {
      addTimer(() => setActiveIndex(i), i * STEP_INTERVAL);
    });

    const fadeStart = steps.length * STEP_INTERVAL + PAUSE_AFTER;
    addTimer(() => setFadingOut(true), fadeStart);
    addTimer(() => scheduleLoop(), fadeStart + FADE_OUT_MS + PAUSE_BETWEEN);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setVisible(true);
          scheduleLoop();
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      timerRef.current.forEach(clearTimeout);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} className="py-14 px-4" style={{ background: 'rgba(255,255,255,0.75)' }}>
      {/* Pop keyframe — scoped inside the component */}
      <style>{`
        @keyframes nodePopIn {
          0%   { transform: scale(1); }
          40%  { transform: scale(1.18); }
          100% { transform: scale(1); }
        }
      `}</style>

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

        {/*
          Desktop: flat flex row.
          Nodes are flex-shrink-0 with a fixed width; connectors are flex-1.
          This gives equal gaps between all nodes regardless of position.
        */}
        <div className="hidden md:flex items-center w-full">
          {steps.map(({ icon: Icon, label, color, special }, i) => {
            const isActive        = !fadingOut && activeIndex >= i;
            const isJustActivated = !fadingOut && activeIndex === i;
            const dur = fadingOut ? `${FADE_OUT_MS}ms` : '300ms';

            return (
              <Fragment key={label}>
                {/* Node */}
                <div
                  className="flex flex-col items-center text-center flex-shrink-0"
                  style={{ width: 88 }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-2"
                    style={{
                      background: isActive ? color : 'hsl(228,14%,91%)',
                      boxShadow:  isActive ? `0 0 0 6px ${color}22` : '0 0 0 6px transparent',
                      transition: `background ${dur} ease, box-shadow ${dur} ease`,
                      // Pop when first lit; 'none' otherwise so it can replay next cycle
                      animation:  isJustActivated ? 'nodePopIn 480ms ease-out' : 'none',
                    }}
                  >
                    <Icon
                      size={22}
                      style={{
                        color: isActive ? '#ffffff' : 'hsl(233,18%,65%)',
                        transition: `color ${dur} ease`,
                      }}
                    />
                  </div>

                  <p
                    className="text-xs leading-tight"
                    style={{
                      maxWidth: 80,
                      color:      isActive ? (special ? '#7c3aed' : '#1a2356') : 'hsl(233,18%,65%)',
                      fontWeight: isActive ? 600 : 400,
                      transition: `color ${dur} ease`,
                    }}
                  >
                    {label}
                  </p>

                  {/* Always rendered — opacity-only toggle to avoid height shift */}
                  <span
                    className="mt-1 text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded"
                    style={{
                      background: '#ede9fe',
                      color:      '#7c3aed',
                      opacity:    special && isActive ? 1 : 0,
                      transition: `opacity ${dur} ease`,
                    }}
                  >
                    clave
                  </span>
                </div>

                {/* Connector — flex-1 fills the space between nodes equally */}
                {i < steps.length - 1 && (
                  <div
                    className="flex-1"
                    style={{
                      height: 2,
                      background: (!fadingOut && activeIndex > i)
                        ? 'linear-gradient(90deg, #3d8ef0, #8b5cf6)'
                        : 'hsl(228,14%,88%)',
                      transition: `background ${dur} ease`,
                    }}
                  />
                )}
              </Fragment>
            );
          })}
        </div>

        {/* Mobile: vertical list */}
        <div className="md:hidden flex flex-col gap-4">
          {steps.map(({ icon: Icon, label, color, special }, i) => {
            const isActive        = !fadingOut && activeIndex >= i;
            const isJustActivated = !fadingOut && activeIndex === i;
            const dur = fadingOut ? `${FADE_OUT_MS}ms` : '300ms';

            return (
              <div key={label} className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: isActive ? color : 'hsl(228,14%,91%)',
                    boxShadow:  isActive ? `0 0 0 5px ${color}22` : '0 0 0 5px transparent',
                    transition: `background ${dur} ease, box-shadow ${dur} ease`,
                    animation:  isJustActivated ? 'nodePopIn 480ms ease-out' : 'none',
                  }}
                >
                  <Icon
                    size={18}
                    style={{
                      color: isActive ? '#ffffff' : 'hsl(233,18%,65%)',
                      transition: `color ${dur} ease`,
                    }}
                  />
                </div>

                <div>
                  <p
                    className="text-sm leading-tight"
                    style={{
                      color:      isActive ? (special ? '#7c3aed' : '#1a2356') : 'hsl(233,18%,65%)',
                      fontWeight: isActive ? 600 : 400,
                      transition: `color ${dur} ease`,
                    }}
                  >
                    {label}
                  </p>
                  <span
                    className="text-[9px] font-semibold uppercase tracking-wider px-1 py-0.5 rounded"
                    style={{
                      background: '#ede9fe',
                      color:      '#7c3aed',
                      opacity:    special && isActive ? 1 : 0,
                      transition: `opacity ${dur} ease`,
                      display: 'inline-block',
                    }}
                  >
                    clave
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
