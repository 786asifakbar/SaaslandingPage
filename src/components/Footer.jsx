import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-slate-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

        <div>
          <h3 className="text-xl font-bold">SaaSify</h3>
          <p className="mt-4 text-gray-400">
            Modern SaaS solution for scaling startups.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Support</h4>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>Help Center</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Follow Us</h4>
          <div className="mt-4 flex gap-4 text-gray-400">
            <FaTwitter />
            <FaLinkedin />
            <FaGithub />
          </div>
        </div>

      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        © 2026 SaaSify. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer