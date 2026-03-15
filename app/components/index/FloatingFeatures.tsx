"use client";

import { useRef } from "react";

const features = [
  {
    title: "Edge Infrastructure",
    desc: "Ultra-low latency APIs worldwide.",
  },
  {
    title: "Developer Docs",
    desc: "Auto-generated beautiful docs.",
  },
  {
    title: "Observability",
    desc: "Monitor usage and errors instantly.",
  },
];

export default function FloatingFeatures() {
  const ref = useRef<HTMLDivElement>(null);

  const move = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rx = (y / rect.height - 0.5) * -10;
    const ry = (x / rect.width - 0.5) * 10;

    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "rotateX(0) rotateY(0)";
  };

  return (
    <section className="py-32 flex justify-center">

      <div
        ref={ref}
        onMouseMove={move}
        onMouseLeave={reset}
        className="grid md:grid-cols-3 gap-8 transition-transform duration-200"
      >
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-[#0d1530] border border-white/10 p-8 rounded-xl w-[260px]"
          >
            <h3 className="font-semibold text-lg mb-3">
              {f.title}
            </h3>

            <p className="text-slate-400 text-sm">
              {f.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}