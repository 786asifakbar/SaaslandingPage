import React from "react"
const BlogSection = () => {
  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center">
          Latest Blog Articles
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8">

          {[1,2,3].map((item) => (
            <div key={item} className="bg-slate-950 rounded-2xl overflow-hidden border border-white/10 hover:-translate-y-2 transition">

              <div className="h-48 bg-slate-800"></div>

              <div className="p-6">
                <span className="text-primary text-sm">SaaS Growth</span>

                <h3 className="mt-4 text-xl font-semibold">
                  How to Scale Your SaaS Startup in 2026
                </h3>

                <p className="mt-4 text-gray-400 text-sm">
                  Discover proven strategies to grow your SaaS business faster.
                </p>

                <button className="mt-4 text-primary hover:underline">
                  Read More →
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default BlogSection