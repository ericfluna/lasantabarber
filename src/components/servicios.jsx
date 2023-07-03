export default function Servicios({ darkMode }) {
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
        Nuestros <span className={`${darkMode?'bg-color-presentacion text-black ':'bg-color-presentacion-dark text-white '}px-2`}>Servicios</span>
      </h1>



      <div className="flex gap-20 px-60">
        <div className={`w-1/3 hover:scale-105 shadow-lg `}>
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

        <div className={`w-1/3 hover:scale-105 shadow-lg `}>
          <img src="/servicio2.png" />

          <div
            className={`p-10 space-y-10 ${
              !darkMode ? 'bg-color-presentacion text-black' : 'bg-color-presentacion-dark text-white'
            }`}
          >
            <h1 className="font-bold">Corte De Cabello</h1>
            <h2 className="font-semibold">
              Asesoramiento basado en el estudio de cada cabello, forma craneal
              y rasgos faciales.
            </h2>
          </div>
        </div>

        <div className={`w-1/3 hover:scale-105 shadow-lg `}>
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
    </div>
  )
}
