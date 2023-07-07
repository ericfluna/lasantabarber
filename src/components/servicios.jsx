import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Servicios({ darkMode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView])

  return (
    <div
      id="servicios"
      className={`py-5 ${
        darkMode ? 'bg-color-dark' : 'bg-color'
      }`}
    >
      <div className="flex pt-24">
        <h1
          className={`font-semibold m-auto ${darkMode ? 'text-white' : 'text-black'}`}
        >
          Nuestros{' '}
          <span
            className={`${
              darkMode
                ? 'bg-color-presentacion text-black '
                : 'bg-color-presentacion-dark text-white '
            }px-2`}
          >
            Servicios
          </span>
        </h1>
      </div>

      <div className='px-5 lg:px-20 scale-90 '>
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              650: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1300: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            navigation
            modules={[Pagination, Navigation]}
          >
            <SwiperSlide>
              <div
                className={`flex flex-col shadow-lg m-auto ${
                  darkMode ? 'bg-color text-black' : 'bg-color-dark text-white'
                }`}
              >
                <img src="/servicio1.png" />
                <div className={`space-y-5 p-5 pb-10 h-96 sm:h-96 md:h-80 lg:h-72 `}>
                  <h1 className="font-bold">Cuidado De La Barba</h1>
                  <h2 className="font-semibold">
                    Usamos la navaja según preferencia del cliente. Toalla
                    caliente, masaje y aplicación de aceite.
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`flex flex-col shadow-lg m-auto ${
                  darkMode ? 'bg-color text-black' : 'bg-color-dark text-white'
                }`}
              >
                <img src="/servicio2.png" />
                <div className={`space-y-5 p-5 pb-10 h-96 sm:h-96 md:h-80 lg:h-72 `}>
                  <h1 className="font-bold">Corte De Cabello</h1>
                  <h2 className="font-semibold">
                    Asesoramiento basado en el estudio de cada cabello, forma
                    craneal y rasgos faciales.
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`flex flex-col shadow-lg m-auto ${
                  darkMode ? 'bg-color text-black' : 'bg-color-dark text-white'
                }`}
              >
                <img src="/servicio3.png" />
                <div className={`space-y-5 p-5 pb-10 h-96 sm:h-96 md:h-80 lg:h-72 `}>
                  <h1 className="font-bold">Depilación Facial</h1>
                  <h2 className="font-semibold">
                    Depilación a cera. Retirada del bello sobrante con posterior
                    aplicación de crema hidratante.
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </div>
  )
}
