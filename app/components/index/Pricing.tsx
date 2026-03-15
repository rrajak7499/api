import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "Free",
    features: [
      "10k API requests",
      "Basic analytics",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$29/mo",
    features: [
      "1M API requests",
      "Advanced analytics",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited requests",
      "Dedicated infrastructure",
      "SLA + support",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          Simple pricing
        </h2>

        <p className="text-slate-400 mt-4">
          Start free and scale as you grow.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl p-8 border ${
              plan.highlight
                ? "border-blue-400 bg-[#0d1530]"
                : "border-white/10"
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">
              {plan.name}
            </h3>

            <p className="text-3xl font-bold mb-6">
              {plan.price}
            </p>

            <ul className="space-y-3 text-slate-400 mb-8">
              {plan.features.map((f) => (
                <li key={f}>✓ {f}</li>
              ))}
            </ul>

            <Link
              href="/docs"
              className="block text-center bg-white text-black py-2 rounded-full font-semibold"
            >
              Get Started
            </Link>

          </div>
        ))}

      </div>

    </section>
  );
}