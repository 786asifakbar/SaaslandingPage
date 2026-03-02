import React from "react"

const plans = [
  {
    name: "Starter",
    price: "$19",
    features: ["Basic Analytics", "Email Support", "Limited Automation"],
  },
  {
    name: "Pro",
    price: "$49",
    popular: true,
    features: ["Advanced Analytics", "Priority Support", "Unlimited Automation"],
  },
  {
    name: "Enterprise",
    price: "$99",
    features: ["Custom Solutions", "Dedicated Support", "Full API Access"],
  },
]

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Flexible Pricing Plans
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Choose a plan that fits your business. Upgrade anytime with full access
          to powerful SaaS tools.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`p-8 rounded-2xl border transition duration-300 ${
                plan.popular
                  ? "border-indigo-500 bg-white/5 backdrop-blur-lg scale-105"
                  : "border-white/10 bg-white/5 backdrop-blur-lg"
              }`}
            >
              {plan.popular && (
                <div className="mb-4 text-sm text-indigo-400 font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
              <p className="text-4xl font-bold text-white mt-4">{plan.price}</p>

              <ul className="mt-6 space-y-3 text-gray-400 text-sm">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-indigo-400">✔</span> {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-8 w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-xl hover:opacity-90 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Pricing