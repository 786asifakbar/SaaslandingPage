import React from "react"
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            All-in-One SaaS Platform for Modern Teams
          </h1>

          <p className="mt-6 text-gray-400 text-lg">
            Boost productivity, automate workflows, and scale your business
            with our powerful SaaS solution.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-primary hover:bg-indigo-500 px-6 py-3 rounded-xl font-semibold transition">
              Get Started Free
            </button>
            <button className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition">
              View Demo
            </button>
          </div>
        </div>

        {/* Right Dashboard Mockup */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-8">
          <div className="h-80 bg-slate-800 rounded-xl flex items-center justify-center">
            <span className="text-gray-400">Dashboard Preview</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero