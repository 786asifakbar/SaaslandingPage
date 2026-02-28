import CountUp from "react-countup"

const Stats = () => {
  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">

        <div>
          <h3 className="text-4xl font-bold text-primary">
            <CountUp end={5000} duration={3} />+
          </h3>
          <p className="mt-2 text-gray-400">Active Users</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-accent">
            <CountUp end={120} duration={3} />+
          </h3>
          <p className="mt-2 text-gray-400">Countries</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-secondary">
            <CountUp end={99} duration={3} />%
          </h3>
          <p className="mt-2 text-gray-400">Uptime</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-primary">
            <CountUp end={24} duration={3} />/7
          </h3>
          <p className="mt-2 text-gray-400">Support</p>
        </div>

      </div>
    </section>
  )
}

export default Stats