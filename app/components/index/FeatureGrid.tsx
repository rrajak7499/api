const features = [
  {
    title: "Instant API Deployments",
    desc: "Ship new APIs globally in seconds.",
  },
  {
    title: "Beautiful Documentation",
    desc: "Auto-generated docs developers love.",
  },
  {
    title: "Real-time Analytics",
    desc: "Track requests, errors and latency.",
  },
  {
    title: "Built-in Security",
    desc: "Auth, rate limits and monitoring.",
  },
  {
    title: "Global Edge Network",
    desc: "Ultra-low latency infrastructure.",
  },
  {
    title: "Developer First",
    desc: "CLI, SDKs and playgrounds included.",
  },
]

export default function FeatureGrid() {

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <h2 className="text-4xl font-bold text-center mb-16">
        Everything you need to scale APIs
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {features.map((f) => (

          <div
            key={f.title}
            className="bg-[#0d1530] border border-white/10 p-8 rounded-xl hover:border-blue-400/40 transition"
          >
            <h3 className="text-xl font-semibold mb-3">
              {f.title}
            </h3>

            <p className="text-slate-400">
              {f.desc}
            </p>
          </div>

        ))}

      </div>

    </section>
  )
}