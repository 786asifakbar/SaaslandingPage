import React from "react"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const features = [
  "AI-powered automation for smarter workflows",
  "Real-time analytics and insights dashboard",
  "Secure cloud infrastructure with 99.9% uptime",
  "Team collaboration and project management tools",
  "API integration for scalable business solutions",
  "Custom reports and data visualization",
]

const Features = () => {
  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Powerful Features for Modern Teams
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Everything you need to scale, automate, and grow your business
            with next-generation SaaS technology.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/40 transition"
            >
              <div className="flex items-center gap-3">
                <CheckCircle className="text-indigo-400" size={22} />
                <h3 className="text-white font-semibold">{feature}</h3>
              </div>
              <p className="mt-3 text-gray-400 text-sm">
                Seamless integration and powerful tools built for scale.
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Features