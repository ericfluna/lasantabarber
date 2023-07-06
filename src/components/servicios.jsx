import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination';


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
      className={`overflow-hidden py-28 z-0 px-1 ${
        darkMode ? 'bg-color-dark' : 'bg-color'
      }`}
    >
      <h1
        className={`font-semibold mb-10 ${
          darkMode ? 'text-white' : 'text-black'
        }`}
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
        <div className="flex px-10">
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
              600: {
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
                className={`flex flex-col shadow-lg  ${
                  darkMode ? 'bg-color text-black' : 'bg-color-dark text-white'
                }`}
              >
                <img className="h-2/3" src="/servicio1.png" />
                <div className={`h-60 sm:h-96 md:h-80 space-y-5 p-5 `}>
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
                className={`flex flex-col shadow-lg  ${
                  !darkMode
                    ? 'bg-color-presentacion'
                    : 'bg-color-presentacion-dark'
                }`}
              >
                <img className="h-2/3" src="/servicio2.png" />
                <div
                  className={`h-60 sm:h-96 md:h-80 space-y-5 py-5 ${
                    !darkMode
                      ? 'bg-color-presentacion text-black'
                      : 'bg-color-presentacion-dark text-white'
                  }`}
                >
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
                className={`flex flex-col shadow-lg ${
                  darkMode ? 'bg-color text-black' : 'bg-color-dark text-white'
                }`}
              >
                <img className="h-2/3" src="/servicio3.png" />
                <div className={`h-60 sm:h-96 md:h-80 space-y-5 py-5`}>
                  <h1 className="font-bold">Depilación Facial</h1>
                  <h2 className="font-semibold">
                    Depilación a cera. Retirada del bello sobrante con posterior
                    aplicación de crema hidratante.
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.div>
    </div>
  )
}
