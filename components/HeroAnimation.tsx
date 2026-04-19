'use client';
import { useEffect, useRef } from 'react';

// Duration per scene = last animation end + small pause
// Scene 0 (Diseño de sistemas): bars finish at 2.3s+0.6s=2.9s → 3.4s
// Scene 1 (Agentes de IA):      last tick at 3.4s+0.45s=3.85s → 4.3s
// Scene 2 (Tareas automáticas): counter ends ~4.0s             → 4.6s
const SCENE_DURS = [3400, 4300, 4600];
const LABELS = ['Diseño de sistemas', 'Agentes de IA', 'Tareas automáticas'];
const DOT_CLASSES = ['b', 'c', 'd'];

export default function HeroAnimation() {
  const scenesRef = useRef<HTMLDivElement>(null);
  const idxRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const scenesEl = scenesRef.current;
    if (!scenesEl) return;

    const scenes = Array.from(scenesEl.querySelectorAll<HTMLElement>('.ha-scene'));
    const stageText = document.getElementById('ha-stage-text');
    const stageDot = document.getElementById('ha-stage-dot');
    const progressSpans = Array.from(document.querySelectorAll<HTMLElement>('#ha-progress > span'));

    function runScene4Counters(s: HTMLElement) {
      const rows: [string, string, number][] = [
        ['row1', '1.2 s', 900],
        ['row2', '0.8 s', 1500],
        ['row3', '1.5 s', 2100],
        ['row4', '0.6 s', 2700],
      ];
      rows.forEach(([row, val, delay]) => {
        setTimeout(() => {
          const el = s.querySelector<SVGTextElement>('.s4-task.' + row + ' .s4-time');
          if (el) el.textContent = val;
        }, delay);
      });
      const counterEl = s.querySelector<SVGTextElement>('.s4-counter');
      if (counterEl) {
        let v = 0;
        counterEl.textContent = '0 h';
        const start = setTimeout(() => {
          const iv = setInterval(() => {
            v += 1;
            counterEl.textContent = v + ' h';
            if (v >= 12) clearInterval(iv);
          }, 80);
        }, 3000);
        return start;
      }
    }

    function showScene(i: number) {
      idxRef.current = i;
      document.documentElement.style.setProperty('--ha-scene-dur', (SCENE_DURS[i] / 1000) + 's');
      scenes.forEach((s, k) => {
        s.classList.toggle('active', k === i);
        s.classList.remove('play');
        if (k === i) {
          void s.offsetWidth;
          s.classList.add('play');
          if (s.classList.contains('scene-4')) runScene4Counters(s);
        }
      });
      if (stageText) stageText.textContent = LABELS[i];
      if (stageDot) stageDot.className = 'ha-dot ' + DOT_CLASSES[i];
      progressSpans.forEach((sp, k) => {
        sp.classList.remove('active', 'done');
        if (k < i) sp.classList.add('done');
        if (k === i) sp.classList.add('active');
      });
    }

    function scheduleNext() {
      const dur = SCENE_DURS[idxRef.current];
      timerRef.current = setTimeout(() => {
        showScene((idxRef.current + 1) % scenes.length);
        scheduleNext();
      }, dur);
    }

    showScene(0);
    scheduleNext();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className="ha-wrap">
      <div className="ha-dots-bg" />

      <div className="ha-progress" id="ha-progress">
        <span id="ha-p0" /><span id="ha-p1" /><span id="ha-p2" />
      </div>

      <div className="ha-scenes" ref={scenesRef}>

        {/* ── SCENE 1: Diseño de sistemas ── */}
        <div className="ha-scene scene-2">
          <svg className="stage" viewBox="0 0 480 374" preserveAspectRatio="xMidYMid meet">
            <g className="s2-part p1">
              <rect fill="#fff" stroke="#e6eaf2" strokeWidth="1" x="40" y="60" width="300" height="200" rx="10"
                style={{ filter: 'drop-shadow(0 10px 20px rgba(15,23,42,.08))' }} />
              <rect fill="#f1f5f9" x="40" y="60" width="300" height="22" rx="10" />
              <rect fill="#f1f5f9" x="40" y="75" width="300" height="7" />
              <circle cx="54" cy="71" r="3" fill="#f87171" />
              <circle cx="64" cy="71" r="3" fill="#fbbf24" />
              <circle cx="74" cy="71" r="3" fill="#34d399" />
            </g>
            <g className="s2-part p2">
              <rect fill="#0b1220" x="40" y="82" width="64" height="178" />
              <rect fill="#1e293b" x="48" y="96" width="48" height="8" rx="2" />
              <rect fill="#334155" x="48" y="112" width="40" height="6" rx="2" />
              <rect fill="#334155" x="48" y="124" width="44" height="6" rx="2" />
              <rect fill="#3b82f6" x="48" y="138" width="48" height="10" rx="3" />
              <rect fill="#334155" x="48" y="156" width="36" height="6" rx="2" />
              <rect fill="#334155" x="48" y="168" width="42" height="6" rx="2" />
            </g>
            <g className="s2-part p3">
              <rect fill="#e2e8f0" x="116" y="96" width="100" height="10" rx="3" />
              <rect fill="#cbd5e1" x="116" y="112" width="60" height="6" rx="2" />
            </g>
            <g className="s2-part p4">
              <rect fill="#fff" stroke="#e6eaf2" strokeWidth="1" x="116" y="128" width="66" height="44" rx="6"
                style={{ filter: 'drop-shadow(0 6px 12px rgba(15,23,42,.06))' }} />
              <rect fill="#3b82f6" x="122" y="136" width="20" height="4" rx="2" />
              <rect fill="#cbd5e1" x="122" y="146" width="40" height="8" rx="2" />
              <rect fill="#e2e8f0" x="122" y="160" width="30" height="4" rx="2" />
            </g>
            <g className="s2-part p5">
              <rect fill="#fff" stroke="#e6eaf2" strokeWidth="1" x="188" y="128" width="66" height="44" rx="6"
                style={{ filter: 'drop-shadow(0 6px 12px rgba(15,23,42,.06))' }} />
              <rect fill="#8b5cf6" x="194" y="136" width="20" height="4" rx="2" />
              <rect fill="#cbd5e1" x="194" y="146" width="40" height="8" rx="2" />
              <rect fill="#e2e8f0" x="194" y="160" width="30" height="4" rx="2" />
            </g>
            <g className="s2-part p6">
              <rect fill="#fff" stroke="#e6eaf2" strokeWidth="1" x="260" y="128" width="66" height="44" rx="6"
                style={{ filter: 'drop-shadow(0 6px 12px rgba(15,23,42,.06))' }} />
              <rect fill="#10b981" x="266" y="136" width="20" height="4" rx="2" />
              <rect fill="#cbd5e1" x="266" y="146" width="40" height="8" rx="2" />
              <rect fill="#e2e8f0" x="266" y="160" width="30" height="4" rx="2" />
            </g>
            <g className="s2-part p7">
              <rect fill="#fff" stroke="#e6eaf2" strokeWidth="1" x="116" y="180" width="210" height="72" rx="6"
                style={{ filter: 'drop-shadow(0 6px 12px rgba(15,23,42,.06))' }} />
              <line x1="126" y1="240" x2="316" y2="240" stroke="#e2e8f0" strokeWidth="1" />
              <rect className="ha-bar"    x="140" y="218" width="14" height="22" fill="#dbeafe" rx="2" />
              <rect className="ha-bar b2" x="170" y="206" width="14" height="34" fill="#93c5fd" rx="2" />
              <rect className="ha-bar b3" x="200" y="196" width="14" height="44" fill="#60a5fa" rx="2" />
              <rect className="ha-bar b4" x="230" y="188" width="14" height="52" fill="#3b82f6" rx="2" />
              <rect className="ha-bar b5" x="260" y="200" width="14" height="40" fill="#8b5cf6" rx="2" />
              <rect className="ha-bar b5" x="290" y="182" width="14" height="58" fill="#6366f1" rx="2" />
            </g>
            <g className="s2-part p8">
              <rect fill="#fff" stroke="#e6eaf2" strokeWidth="1" x="356" y="110" width="96" height="180" rx="14"
                style={{ filter: 'drop-shadow(0 10px 20px rgba(15,23,42,.08))' }} />
              <rect x="382" y="118" width="44" height="4" rx="2" fill="#cbd5e1" />
              <rect fill="#eef2ff" x="364" y="130" width="80" height="40" rx="6" />
              <rect x="372" y="138" width="40" height="6" rx="2" fill="#3b82f6" />
              <rect x="372" y="150" width="60" height="4" rx="2" fill="#cbd5e1" />
              <rect x="372" y="158" width="52" height="4" rx="2" fill="#e2e8f0" />
              <rect fill="#f8fafc" x="364" y="180" width="80" height="20" rx="4" />
              <circle cx="374" cy="190" r="5" fill="#93c5fd" />
              <rect x="384" y="186" width="50" height="4" rx="2" fill="#cbd5e1" />
              <rect x="384" y="194" width="40" height="3" rx="1.5" fill="#e2e8f0" />
              <rect fill="#f8fafc" x="364" y="206" width="80" height="20" rx="4" />
              <circle cx="374" cy="216" r="5" fill="#a5b4fc" />
              <rect x="384" y="212" width="50" height="4" rx="2" fill="#cbd5e1" />
              <rect x="384" y="220" width="40" height="3" rx="1.5" fill="#e2e8f0" />
              <rect fill="#3b82f6" x="364" y="234" width="80" height="18" rx="4" />
              <rect fill="#bfdbfe" x="390" y="241" width="28" height="4" rx="2" />
            </g>
            <g className="s2-part p9 ha-cursor">
              <path d="M 0 0 L 0 14 L 4 11 L 7 17 L 10 15 L 7 10 L 12 10 Z" fill="#0b1220" />
            </g>
          </svg>
        </div>

        {/* ── SCENE 2: Agentes de IA ── */}
        <div className="ha-scene scene-3">
          <svg className="stage" viewBox="0 0 480 374" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="ha-aiGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            {/* Chat panel */}
            <rect fill="#fff" stroke="#e6eaf2" strokeWidth="1" x="40" y="50" width="240" height="280" rx="14"
              style={{ filter: 'drop-shadow(0 10px 20px rgba(15,23,42,.08))' }} />
            <rect fill="#f1f5f9" x="40" y="50" width="240" height="40" rx="14" />
            <rect fill="#f1f5f9" x="40" y="78" width="240" height="12" />
            <circle cx="62" cy="70" r="11" fill="url(#ha-aiGrad)" />
            <text fill="#fff" style={{ font: "700 10px Inter" }} x="56" y="73">AI</text>
            <text fill="#0b1220" style={{ font: "600 12px Inter" }} x="80" y="68">Agente de soporte</text>
            <text fill="#10b981" style={{ font: "500 10px Inter" }} x="80" y="82">● En línea</text>

            {/* b1 — usuario (derecha, azul) */}
            <g className="s3-bubble b1">
              <rect fill="#3b82f6" x="88" y="104" width="178" height="32" rx="10" />
              <text fill="#ffffff" style={{ font: "500 11px Inter" }} x="98" y="121">Hola, ¿tienen citas</text>
              <text fill="#ffffff" style={{ font: "500 11px Inter" }} x="98" y="132">disponibles esta semana?</text>
            </g>
            {/* b3 — agente responde (izquierda, blanco) — sin burbuja de carga */}
            <g className="s3-bubble b3">
              <rect fill="#fff" stroke="#e6eaf2" strokeWidth="1" x="52" y="148" width="215" height="52" rx="10"
                style={{ filter: 'drop-shadow(0 6px 14px rgba(15,23,42,.06))' }} />
              <text fill="#0b1220" style={{ font: "500 11px Inter" }} x="62" y="166">Sí, tenemos el martes 10 am</text>
              <text fill="#0b1220" style={{ font: "500 11px Inter" }} x="62" y="180">o el miércoles 3 pm.</text>
              <text fill="#0b1220" style={{ font: "500 11px Inter" }} x="62" y="194">¿Cuál te viene mejor?</text>
            </g>
            {/* b4 — usuario (derecha, azul) */}
            <g className="s3-bubble b4">
              <rect fill="#3b82f6" x="88" y="212" width="178" height="28" rx="10" />
              <text fill="#ffffff" style={{ font: "500 11px Inter" }} x="98" y="230">El miércoles a las 3, gracias.</text>
            </g>
            <rect fill="#f1f5f9" x="52" y="290" width="216" height="28" rx="14" />
            <text fill="#94a3b8" style={{ font: "500 11px Inter" }} x="64" y="308">Escribe un mensaje…</text>
            <circle fill="#3b82f6" cx="258" cy="304" r="10" />
            <path d="M 254 304 L 262 304 M 259 301 L 262 304 L 259 307" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" />

            {/* Task panel */}
            <rect fill="#fff" stroke="#e6eaf2" strokeWidth="1" x="300" y="80" width="150" height="200" rx="12"
              style={{ filter: 'drop-shadow(0 10px 20px rgba(15,23,42,.08))' }} />
            <text fill="#0b1220" style={{ font: "700 11px Inter" }} x="314" y="104">Acciones tomadas</text>
            <rect fill="#e2e8f0" x="314" y="112" width="60" height="3" rx="1.5" />

            <g className="ha-task-row t1">
              <rect fill="#f0fdf4" x="314" y="128" width="122" height="34" rx="8" />
              <circle fill="#dcfce7" cx="328" cy="145" r="9" />
              <path className="ha-tick" d="M 324 145 L 327 148 L 333 142" />
              <text fill="#0b1220" style={{ font: "600 10px Inter" }} x="344" y="142">Disponibilidad</text>
              <text fill="#64748b" style={{ font: "500 9px Inter" }} x="344" y="155">Consultada · 0.4s</text>
            </g>
            <g className="ha-task-row t2">
              <rect fill="#f0fdf4" x="314" y="170" width="122" height="34" rx="8" />
              <circle fill="#dcfce7" cx="328" cy="187" r="9" />
              <path className="ha-tick" d="M 324 187 L 327 190 L 333 184" />
              <text fill="#0b1220" style={{ font: "600 10px Inter" }} x="344" y="184">Cita agendada</text>
              <text fill="#64748b" style={{ font: "500 9px Inter" }} x="344" y="197">Mié 3 pm · 1s</text>
            </g>
            <g className="ha-task-row t3">
              <rect fill="#f0fdf4" x="314" y="212" width="122" height="34" rx="8" />
              <circle fill="#dcfce7" cx="328" cy="229" r="9" />
              <path className="ha-tick" d="M 324 229 L 327 232 L 333 226" />
              <text fill="#0b1220" style={{ font: "600 10px Inter" }} x="344" y="226">CRM actualizado</text>
              <text fill="#64748b" style={{ font: "500 9px Inter" }} x="344" y="239">Lead → Activo</text>
            </g>
          </svg>
        </div>

        {/* ── SCENE 3: Tareas repetitivas automáticas ── */}
        <div className="ha-scene scene-4">
          <svg className="stage" viewBox="0 0 480 374" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="ha-s4rowGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <linearGradient id="ha-s4spark" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>

            {/* Window frame */}
            <rect fill="#fff" stroke="#e6eaf2" strokeWidth="1" x="36" y="40" width="408" height="300" rx="14"
              style={{ filter: 'drop-shadow(0 10px 20px rgba(15,23,42,.08))' }} />
            <rect fill="#f1f5f9" x="36" y="40" width="408" height="30" rx="14" />
            <rect fill="#f1f5f9" x="36" y="60" width="408" height="10" />
            <circle cx="52" cy="55" r="3" fill="#f87171" />
            <circle cx="62" cy="55" r="3" fill="#fbbf24" />
            <circle cx="72" cy="55" r="3" fill="#34d399" />
            <rect fill="#e2e8f0" x="200" y="51" width="80" height="8" rx="4" />

            {/* Header */}
            <text fill="#0b1220" style={{ font: "700 13px Inter" }} x="56" y="96">Cola de tareas</text>
            <g transform="translate(340 86)">
              <rect fill="#ecfdf5" width="88" height="20" rx="10" />
              <circle className="s4-live" cx="12" cy="10" r="3.5" fill="#10b981" />
              <text fill="#047857" style={{ font: "600 10px Inter" }} x="22" y="14">Auto · Activo</text>
            </g>
            <line x1="56" y1="108" x2="424" y2="108" stroke="#eef2f7" strokeWidth="1" />

            {/* Task rows */}
            {[
              { cls: 'row1', y: 120, cy: 140, title: 'Generar reporte semanal', checkD: 'M 70 140 L 74 144 L 82 136' },
              { cls: 'row2', y: 168, cy: 188, title: 'Conciliar facturas del día', checkD: 'M 70 188 L 74 192 L 82 184' },
              { cls: 'row3', y: 216, cy: 236, title: 'Responder tickets frecuentes', checkD: 'M 70 236 L 74 240 L 82 232' },
              { cls: 'row4', y: 264, cy: 284, title: 'Sincronizar inventario', checkD: 'M 70 284 L 74 288 L 82 280' },
            ].map(({ cls, y, cy, title, checkD }) => (
              <g key={cls} className={`s4-task ${cls}`}>
                <rect className="s4-row-bg" fill="#f8fafc" stroke="#eef2f7" strokeWidth="1" x="56" y={y} width="368" height="40" rx="8" />
                <rect className="s4-row-bar" fill="url(#ha-s4rowGrad)" opacity="0.08" x="56" y={y} width="0" height="40" rx="8" />
                <circle className="s4-check-bg" cx="76" cy={cy} r="10" fill="#eef2f7" />
                <path className="s4-check" d={checkD}
                  stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
                  style={{ strokeDasharray: 14, strokeDashoffset: 14 }} />
                <text className="s4-title" fill="#0b1220" style={{ font: "600 11px Inter" }} x="94" y={cy + 4}>{title}</text>
                <text className="s4-time" fill="#94a3b8" style={{ font: "600 10px Inter" }} x="412" y={cy + 4} textAnchor="end">—</text>
              </g>
            ))}

            {/* Footer counter */}
            <rect fill="#f8fafc" x="56" y="316" width="368" height="12" rx="6" />
            <text fill="#64748b" style={{ font: "500 10px Inter" }} x="64" y="325">Ahorrado hoy</text>
            <text className="s4-counter" fill="#0b1220" style={{ font: "700 10px Inter" }} x="416" y="325" textAnchor="end">0 h</text>

            {/* Magic wand */}
            <g className="s4-wand">
              <path d="M -8 -8 L 8 8" stroke="url(#ha-s4spark)" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="8" cy="8" r="5" fill="url(#ha-s4spark)" />
              <g className="s4-sparkles">
                <circle cx="-14" cy="-4" r="1.5" fill="#8b5cf6" />
                <circle cx="-6" cy="-14" r="1.8" fill="#60a5fa" />
                <circle cx="-16" cy="-12" r="1.2" fill="#c7d7fe" />
              </g>
            </g>
          </svg>
        </div>

      </div>

      {/* Stage label */}
      <div className="ha-label">
        <span className="ha-dot b" id="ha-stage-dot" />
        <span id="ha-stage-text">Diseño de sistemas</span>
      </div>
    </div>
  );
}
