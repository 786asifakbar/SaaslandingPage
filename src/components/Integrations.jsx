import React from "react"
const integrations = [
  "Slack",
  "Stripe",
  "Shopify",
  "Zapier",
  "Google Analytics",
  "Notion"
]

const Integrations = () => {
  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold">
          Seamless Integrations
        </h2>

        <p className="mt-4 text-gray-400">
          Connect your favorite tools in seconds.
        </p>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-6 gap-8">
          {integrations.map((item, i) => (
            <div key={i} className="bg-slate-800 p-6 rounded-xl border border-white/10 opacity-70 hover:opacity-100 transition text-center">
              <span className="text-gray-400">{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Integrations