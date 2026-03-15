"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "CTO",
    company: "CloudForge",
    quote:
      "BridgePort changed how we ship APIs. Our developers launch integrations in hours instead of weeks.",
  },
  {
    name: "Emily Chen",
    role: "Platform Engineer",
    company: "DevCore",
    quote:
      "The documentation system is incredible. Our external developers love how simple the API is.",
  },
  {
    name: "Marcus Rivera",
    role: "Founder",
    company: "ScaleLabs",
    quote:
      "BridgePort feels like Stripe for APIs. Powerful, reliable, and developer friendly.",
  },
  {
    name: "Daniel Park",
    role: "Engineering Manager",
    company: "NovaStack",
    quote:
      "We reduced infrastructure complexity by 70% after switching to BridgePort.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(i);
  }, []);

  const t = testimonials[index];

  return (
    <section className="py-32 relative overflow-hidden">

      {/* glow background */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[600px] h-[600px] bg-purple-500/20 blur-[150px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-12">
          Trusted by modern engineering teams
        </h2>

        <div className="bg-[#0d1530] border border-white/10 rounded-2xl p-10 shadow-xl transition-all">

          <p className="text-xl text-slate-300 leading-relaxed">
            “{t.quote}”
          </p>

          <div className="mt-8">
            <p className="font-semibold text-lg">{t.name}</p>
            <p className="text-slate-400 text-sm">
              {t.role} • {t.company}
            </p>
          </div>

        </div>

        {/* dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}