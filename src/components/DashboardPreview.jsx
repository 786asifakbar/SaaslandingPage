import React from "react"
const DashboardPreview = () => {
  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold">
          Powerful Analytics Dashboard
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Track performance, monitor growth and make smarter business decisions.
        </p>

        {/* Big Dashboard Mockup */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="h-96 bg-slate-800 flex items-center justify-center text-gray-500">
            Dashboard Image Here
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {["Analytics", "Automation", "Collaboration"].map((item, i) => (
            <div key={i} className="bg-slate-900/50 p-8 rounded-2xl border border-white/10 hover:scale-105 transition">
              <h3 className="text-xl font-semibold">{item}</h3>
              <p className="mt-4 text-gray-400">
                Advanced tools designed to scale with your growing SaaS business.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default DashboardPreview