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
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Seamless Integrations
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Connect your favorite tools in seconds and automate workflows with
          powerful integrations.
        </p>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-6 gap-6">
          {integrations.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:border-indigo-500/40 hover:scale-105 transition duration-300 text-center"
            >
              <span className="text-gray-200 font-medium">{item}</span>

              {/* Small Dot Indicator */}
              <div className="mt-3 flex justify-center">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Integrations