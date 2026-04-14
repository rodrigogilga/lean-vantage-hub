'use client';
import { useEffect, useRef, useState } from 'react';
import { MessageSquare, Brain, Database, CheckCircle, Calendar, Bell } from 'lucide-react';

const steps = [
  { icon: MessageSquare, label: 'Cliente envía mensaje',       color: '#3d8ef0', special: false },
  { icon: Brain,         label: 'Agente procesa con IA',       color: '#3d8ef0', special: false },
  { icon: Database,      label: 'Consulta tu CRM / sistema',   color: '#8b5cf6', special: true  },
  { icon: CheckCircle,   label: 'Responde con contexto',       color: '#3d8ef0', special: false },
  { icon: Calendar,      label: 'Captura datos y agenda',      color: '#8b5cf6', special: true  },
  { icon: Bell,          label: 'Envía alerta a tu equipo',    color: '#3d8ef0', special: false },
];

const STEP_INTERVAL = 550;   // ms between each node lighting up
const PAUSE_AFTER   = 1400;  // ms all nodes stay lit before fade-out
const FADE_OUT_MS   = 700;   // ms for the fade-out CSS transition
const PAUSE_BETWEEN = 500;   // ms pause after fade completes before restart

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

    // Reset both states together so React batches them into one render.
    // Since fadingOut=false AND activeIndex=-1, every node is visually inactive —
    // no flash even if fadingOut was previously true.
    setFadingOut(false);
    setActiveIndex(-1);

    // Light up nodes one by one
    steps.forEach((_, i) => {
      addTimer(() => setActiveIndex(i), i * STEP_INTERVAL);
    });

    // After all nodes are lit + pause → trigger smooth fade-out
    const fadeStart = steps.length * STEP_INTERVAL + PAUSE_AFTER;
    addTimer(() => setFadingOut(true), fadeStart);

    // After fade-out finishes + brief pause → next cycle
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
        <div className="flex flex-col md:flex-row items-start justify-center mx-auto w-full">
          {steps.map(({ icon: Icon, label, color, special }, i) => {
            // When fading out, all nodes become visually inactive via slow transition.
            // When lighting up, each node uses a fast transition.
            const isActive = !fadingOut && activeIndex >= i;
            const dur = fadingOut ? `${FADE_OUT_MS}ms` : '350ms';

            return (
              <div key={label} className="flex flex-col md:flex-row items-center flex-1">
                {/* Node */}
                <div
                  className="flex flex-col items-center text-center mx-auto"
                  style={{ minWidth: 80, maxWidth: 96 }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-2"
                    style={{
                      background:  isActive ? color : 'hsl(228,14%,91%)',
                      boxShadow:   isActive ? `0 0 0 6px ${color}22` : '0 0 0 6px transparent',
                      // No transform/scale — prevents any size shift
                      transition: `background ${dur} ease, box-shadow ${dur} ease`,
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
                    className="text-xs leading-tight max-w-[80px]"
                    style={{
                      color:      isActive ? (special ? '#7c3aed' : '#1a2356') : 'hsl(233,18%,65%)',
                      fontWeight: isActive ? 600 : 400,
                      transition: `color ${dur} ease`,
                    }}
                  >
                    {label}
                  </p>

                  {/*
                    Always rendered (not conditional) so height stays fixed.
                    Visibility toggled only via opacity to avoid layout shifts.
                  */}
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

                {/* Connector — not after last node */}
                {i < steps.length - 1 && (
                  <div
                    className="flex-1"
                    style={{
                      height:  2,
                      minWidth: 16,
                      margin:  '0 4px 24px',
                      background: (!fadingOut && activeIndex > i)
                        ? 'linear-gradient(90deg, #3d8ef0, #8b5cf6)'
                        : 'hsl(228,14%,88%)',
                      transition: `background ${dur} ease`,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
