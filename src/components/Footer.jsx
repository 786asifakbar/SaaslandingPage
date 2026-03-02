import React from "react"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="relative mt-32 px-6 pt-20 pb-10 bg-slate-950 border-t border-white/10 overflow-hidden">

      {/* Top Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-indigo-600/20 blur-[120px] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Brand Section */}
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            SaaSify
          </h3>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Empowering startups with intelligent SaaS solutions. 
            Scale faster with modern AI-driven infrastructure.
          </p>

          {/* Social Icons */}
          <div className="mt-6 flex gap-4">
            {[FaTwitter, FaLinkedin, FaGithub].map((Icon, i) => (
              <div
                key={i}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 cursor-pointer hover:scale-110"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-3 text-gray-400">
            {["About", "Careers", "Blog", "Press"].map((item) => (
              <li key={item} className="relative group cursor-pointer">
                <span className="hover:text-white transition">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-white mb-4">Resources</h4>
          <ul className="space-y-3 text-gray-400">
            {["Help Center", "Documentation", "API Status", "Community"].map((item) => (
              <li key={item} className="relative group cursor-pointer">
                <span className="hover:text-white transition">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-white mb-4">Stay Updated</h4>
          <p className="text-gray-400 mb-4 text-sm">
            Subscribe to get product updates & startup insights.
          </p>

          <div className="flex items-center bg-white/5 border border-white/10 rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-4 py-3 text-sm text-white focus:outline-none w-full"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-16 pt-6 border-t border-white/10 text-center text-gray-500 text-sm">
        © 2026 SaaSify. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer