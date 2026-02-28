import { useState } from "react"
import { FaChevronDown } from "react-icons/fa"

const faqs = [
  {
    question: "Is there a free trial available?",
    answer: "Yes, you can try our platform free for 14 days."
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Absolutely. You can upgrade anytime from your dashboard."
  },
  {
    question: "Do you offer team accounts?",
    answer: "Yes, our Pro and Enterprise plans support team members."
  }
]

const FAQ = () => {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 cursor-pointer"
              onClick={() => setOpen(open === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{faq.question}</h3>
                <FaChevronDown
                  className={`transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {open === index && (
                <p className="mt-4 text-gray-400">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ