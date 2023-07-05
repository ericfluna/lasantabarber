import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, A11y } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

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
      className={` overflow-hidden py-28 z-0 px-1 ${
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
        <div className="flex xl:hidden">
          <Swiper
            // install Swiper modules
            modules={[Navigation, A11y]}
            spaceBetween={10}
            slidesPerView={1.3}
            navigation
          >
            <SwiperSlide>
              <div
                className={`flex flex-col shadow-lg ${
                  !darkMode
                    ? 'bg-color-presentacion'
                    : 'bg-color-presentacion-dark'
                }`}
              >
                <img className="h-2/3" src="/servicio1.png" />
                <div
                  className={` h-1/3  p-10 space-y-10 ${
                    darkMode
                      ? 'bg-color text-black'
                      : 'bg-color-dark text-white'
                  }`}
                >
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
                className={`flex flex-col shadow-lg ${
                  !darkMode
                    ? 'bg-color-presentacion'
                    : 'bg-color-presentacion-dark'
                }`}
              >
                <img className="h-2/3" src="/servicio2.png" />
                <div
                  className={` h-1/3  p-10 space-y-10 ${
                    darkMode
                      ? 'bg-color text-black'
                      : 'bg-color-dark text-white'
                  }`}
                >
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
                className={`flex flex-col shadow-lg ${
                  !darkMode
                    ? 'bg-color-presentacion'
                    : 'bg-color-presentacion-dark'
                }`}
              >
                <img className="h-2/3" src="/servicio3.png" />
                <div
                  className={` h-1/3  p-10 space-y-10 ${
                    darkMode
                      ? 'bg-color text-black'
                      : 'bg-color-dark text-white'
                  }`}
                >
                  <h1 className="font-bold">Cuidado De La Barba</h1>
                  <h2 className="font-semibold">
                    Usamos la navaja según preferencia del cliente. Toalla
                    caliente, masaje y aplicación de aceite.
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="hidden xl:flex">
          <Swiper
            // install Swiper modules
            modules={[Navigation, A11y]}
            spaceBetween={30}
            slidesPerView={2.3}
            navigation
          >
            <SwiperSlide>
              <div
                className={`flex flex-col shadow-lg ${
                  !darkMode
                    ? 'bg-color-presentacion'
                    : 'bg-color-presentacion-dark'
                }`}
              >
                <img className="h-2/3" src="/servicio1.png" />
                <div
                  className={` h-1/3  p-10 space-y-10 ${
                    darkMode
                      ? 'bg-color text-black'
                      : 'bg-color-dark text-white'
                  }`}
                >
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
                className={`flex flex-col shadow-lg ${
                  !darkMode
                    ? 'bg-color-presentacion'
                    : 'bg-color-presentacion-dark'
                }`}
              >
                <img className="h-2/3" src="/servicio2.png" />
                <div
                  className={` h-1/3  p-10 space-y-10 ${
                    darkMode
                      ? 'bg-color text-black'
                      : 'bg-color-dark text-white'
                  }`}
                >
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
                className={`flex flex-col shadow-lg ${
                  !darkMode
                    ? 'bg-color-presentacion'
                    : 'bg-color-presentacion-dark'
                }`}
              >
                <img className="h-2/3" src="/servicio3.png" />
                <div
                  className={` h-1/3  p-10 space-y-10 ${
                    darkMode
                      ? 'bg-color text-black'
                      : 'bg-color-dark text-white'
                  }`}
                >
                  <h1 className="font-bold">Cuidado De La Barba</h1>
                  <h2 className="font-semibold">
                    Usamos la navaja según preferencia del cliente. Toalla
                    caliente, masaje y aplicación de aceite.
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
