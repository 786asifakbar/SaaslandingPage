import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`w-[95%] md:w-[80%] max-w-7xl flex justify-between items-center px-6 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-slate-900/70 backdrop-blur-xl border border-white/10 shadow-2xl"
              : "bg-white/5 backdrop-blur-md border border-white/10"
          }`}
        >
          {/* Logo */}
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent tracking-wide cursor-pointer">
            SaaSify
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
            {[
              { name: "Features", link: "#features" },
              { name: "Solutions", link: "#dashboard" },
              { name: "Pricing", link: "#pricing" },
              { name: "Resources", link: "#blog" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="relative hover:text-white transition duration-300 group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-gray-300 hover:text-white transition">
              Login
            </button>

            <button className="relative px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Icon */}
          <div className="md:hidden text-white">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 text-xl text-white"
          >
            {[
              { name: "Features", link: "#features" },
              { name: "Solutions", link: "#dashboard" },
              { name: "Pricing", link: "#pricing" },
              { name: "Resources", link: "#blog" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setMobileOpen(false)}
                className="hover:text-indigo-400 transition"
              >
                {item.name}
              </a>
            ))}

            <button className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold shadow-lg hover:scale-105 transition">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar