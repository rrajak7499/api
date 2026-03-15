import Link from "next/link"

export default function CTA() {

  return (
    <section className="text-center py-32 relative">

      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-400/10 blur-3xl"/>

      <div className="relative">

        <h2 className="text-5xl font-bold">
          Start building today
        </h2>

        <p className="text-slate-400 mt-6 mb-10">
          Launch your first production API in minutes.
        </p>

        <Link
          href="/docs"
          className="bg-gradient-to-r from-blue-400 to-emerald-300 text-black px-8 py-4 rounded-full font-semibold"
        >
          Get Started
        </Link>

      </div>

    </section>
  )
}