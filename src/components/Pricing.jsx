import React from "react"
const plans = [
  {
    name: "Starter",
    price: "$19",
    features: ["Basic Analytics", "Email Support", "Limited Automation"]
  },
  {
    name: "Pro",
    price: "$49",
    popular: true,
    features: ["Advanced Analytics", "Priority Support", "Unlimited Automation"]
  },
  {
    name: "Enterprise",
    price: "$99",
    features: ["Custom Solutions", "Dedicated Support", "Full API Access"]
  }
]

const Pricing = () => {
  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold">
          Flexible Pricing Plans
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8">

          {plans.map((plan, i) => (
            <div key={i}
              className={`p-8 rounded-2xl border transition ${
                plan.popular
                  ? "border-primary scale-105 bg-slate-900"
                  : "border-white/10 bg-slate-900/50"
              }`}
            >
              {plan.popular && (
                <div className="mb-4 text-sm text-primary font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="text-4xl font-bold mt-4">{plan.price}</p>

              <ul className="mt-6 space-y-3 text-gray-400">
                {plan.features.map((feature, index) => (
                  <li key={index}>✔ {feature}</li>
                ))}
              </ul>

              <button className="mt-8 w-full bg-primary py-3 rounded-xl hover:bg-indigo-500 transition">
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