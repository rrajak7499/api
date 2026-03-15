"use client"

import Link from "next/link"
import CodePreview from "./CodePreview"
import GradientMesh from "./GradientMesh"

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[100dvh] md:min-h-[calc(100vh-64px)] flex items-center">

      <GradientMesh />

      {/* Glow Lights */}
      <div className="absolute top-32 left-20 w-[400px] h-[400px] bg-blue-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-20 w-[400px] h-[400px] bg-purple-500/20 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">

        {/* Text */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build APIs that developers
            <span className="block bg-gradient-to-r from-blue-400 via-emerald-300 to-purple-400 bg-clip-text text-transparent">
              love to use
            </span>
          </h1>

          <p className="mt-6 text-slate-400 text-lg max-w-xl">
            BridgePort helps teams launch production-grade APIs with
            beautiful docs, analytics and infrastructure built in.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <Link
              href="/docs"
              className="px-7 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition"
            >
              Start Building
            </Link>

            <Link
              href="/github"
              className="px-7 py-3 rounded-full border border-white/20 hover:bg-white/5"
            >
              View GitHub
            </Link>
          </div>
        </div>

        {/* Code Preview */}
        <CodePreview />

      </div>
    </section>
  )
}