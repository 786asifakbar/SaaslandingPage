import React from "react"

const blogs = [
  {
    title: "How to Scale Your SaaS Startup in 2026",
    category: "SaaS Growth",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
    desc: "Discover proven strategies to grow your SaaS business faster with modern tools.",
  },
  {
    title: "AI Automation for Modern Businesses",
    category: "AI & Automation",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    desc: "Leverage AI to automate workflows and boost productivity across your team.",
  },
  {
    title: "Building High-Converting SaaS Landing Pages",
    category: "Design & Marketing",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    desc: "Learn design principles that convert visitors into paying customers.",
  },
]

const BlogSection = () => {
  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-bold text-center text-white">
          Latest Blog Articles
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-slate-950 rounded-2xl overflow-hidden border border-white/10 hover:-translate-y-2 transition duration-300"
            >
              {/* Image */}
              <div className="h-48">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-indigo-400 text-sm font-medium">
                  {blog.category}
                </span>

                <h3 className="mt-4 text-xl font-semibold text-white">
                  {blog.title}
                </h3>

                <p className="mt-4 text-gray-400 text-sm">
                  {blog.desc}
                </p>

                <button className="mt-4 text-indigo-400 hover:underline">
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