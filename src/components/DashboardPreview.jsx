import React from "react"
import { motion } from "framer-motion"

const DashboardPreview = () => {
  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Powerful Analytics Dashboard
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Track performance, monitor growth, and make smarter business decisions
          with real-time analytics.
        </p>

        {/* Dashboard Mockup with Premium Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
        >
          <div className="h-96 relative">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80"
              alt="Analytics Dashboard Preview"
              className="w-full h-full object-cover"
            />

            {/* Glass Overlay */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center text-white text-lg">
              Dashboard Preview
            </div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {["Analytics", "Automation", "Collaboration"].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-indigo-500/40 hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-white">{item}</h3>
              <p className="mt-4 text-gray-400">
                Advanced tools designed to scale with your growing SaaS business.
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default DashboardPreview