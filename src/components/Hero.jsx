import React from "react"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 py-20 overflow-hidden bg-slate-950">

      {/* Background Glow Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-indigo-600/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-600/30 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-block mb-6 px-4 py-2 text-sm rounded-full bg-white/5 border border-white/10 text-indigo-400">
            🚀 AI Powered SaaS Platform
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Build, Scale & Automate
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Your Modern SaaS Business
            </span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl">
            Boost productivity, streamline workflows, and unlock powerful AI-driven
            automation tools built for fast-growing startups and modern teams.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300">
              Start Free Trial
            </button>

            <button className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300">
              View Live Demo
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 flex gap-12 text-gray-400 text-sm">
            <div>
              <h3 className="text-2xl font-bold text-white">10K+</h3>
              Active Users
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">98%</h3>
              Customer Satisfaction
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">24/7</h3>
              Support
            </div>
          </div>
        </motion.div>

        {/* Right Mockup with Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 blur-3xl rounded-3xl"></div>

          <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-6 hover:scale-[1.02] transition duration-500">
            <div className="h-80 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80"
                alt="SaaS Dashboard Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero