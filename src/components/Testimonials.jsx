import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

const testimonials = [
  {
    name: "John Carter",
    review:
      "This SaaS template completely transformed our workflow. Modern UI and great performance!",
    role: "Startup Founder",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Sarah Williams",
    review:
      "Clean UI, modern animations, and perfect responsiveness. Exactly what we needed!",
    role: "Product Manager",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Michael Brown",
    review:
      "Highly professional design and great performance. Our conversion rate improved!",
    role: "SaaS Entrepreneur",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
  },
]

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-bold text-white">
          What Our Clients Say
        </h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="mt-12"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-16 h-16 rounded-full mx-auto object-cover"
                />

                <p className="mt-4 text-gray-400">
                  “{item.review}”
                </p>

                <h4 className="mt-4 font-semibold text-white">{item.name}</h4>
                <span className="text-sm text-gray-500">{item.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  )
}

export default Testimonials