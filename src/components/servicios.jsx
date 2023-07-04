import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

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
      className={`overflow-hidden py-28 space-y-5  ${
        darkMode ? 'bg-color-dark' : 'bg-color'
      }`}
    >
      <h1
        className={`font-semibold  mb-10 ${
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
        transition={{ duration:0.5, delay: 0.25 }}
      >
        <div className="flex flex-col xl:flex-row gap-20 px-10 xl:px-40 2xl:px-60">
          <div
            className={`flex flex-col xl:w-1/3 hover:scale-105 shadow-lg ${
              !darkMode ? 'bg-color-presentacion' : 'bg-color-presentacion-dark'
            }`}
          >
            <img src="/servicio1.png" />
            <div
              className={`p-10 space-y-10 ${
                darkMode ? 'bg-color text-black' : 'bg-color-dark text-white'
              }`}
            >
              <h1 className="font-bold">Cuidado De La Barba</h1>
              <h2 className="font-semibold">
                Usamos la navaja según preferencia del cliente. Toalla caliente,
                masaje y aplicación de aceite.
              </h2>
            </div>
          </div>

          <div
            className={`flex flex-col xl:w-1/3 hover:scale-105 shadow-lg ${
              darkMode ? 'bg-color-presentacion' : 'bg-color-presentacion-dark'
            }`}
          >
            <img src="/servicio2.png" />

            <div
              className={`p-10 space-y-10 overflow-hidden ${
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

          <div
            className={`flex flex-col xl:w-1/3 hover:scale-105 shadow-lg ${
              !darkMode ? 'bg-color-presentacion' : 'bg-color-presentacion-dark'
            }`}
          >
            <img src="/servicio3.png" />

            <div
              className={`p-10 space-y-10 ${
                darkMode ? 'bg-color text-black' : 'bg-color-dark text-white'
              }`}
            >
              <h1 className="font-bold">Depilación Facial</h1>
              <h2 className="font-semibold">
                Depilación a cera. Retirada del bello sobrante con posterior
                aplicación de crema hidratante.
              </h2>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
