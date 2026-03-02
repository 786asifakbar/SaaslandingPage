import React from "react"
import CountUp from "react-countup"
import { motion } from "framer-motion"

const stats = [
  { label: "Active Users", value: 5000, suffix: "+" },
  { label: "Countries", value: 120, suffix: "+" },
  { label: "Uptime", value: 99, suffix: "%" },
  { label: "Support", value: 24, suffix: "/7" },
]

const Stats = () => {
  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-indigo-500/40 transition duration-300"
            >
              <h3 className="text-4xl font-bold text-white">
                <CountUp end={stat.value} duration={3} />{stat.suffix}
              </h3>
              <p className="mt-2 text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Stats