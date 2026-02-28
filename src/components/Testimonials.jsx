import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-darkBg">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold">What Our Clients Say</h2>

        <Swiper spaceBetween={30} slidesPerView={1} autoplay>
          <SwiperSlide>
            <div className="mt-12 p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
              <p className="text-gray-400">
                This SaaS template completely transformed our workflow!
              </p>
              <h4 className="mt-4 font-semibold">John Carter</h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="mt-12 p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
              <p className="text-gray-400">
                Clean UI, modern animations and perfect responsiveness.
              </p>
              <h4 className="mt-4 font-semibold">Sarah Williams</h4>
            </div>
          </SwiperSlide>
        </Swiper>

      </div>
    </section>
  )
}

export default Testimonials