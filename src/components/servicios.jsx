export default function Servicios({ darkMode }) {
  return (
    <div
      id="servicios"
      className={`border w-screen ${darkMode ? 'bg-color-dark' : 'bg-color'} min-h-screen`}
    >
      <h1
        className={`pt-24 lg:pt-10 font-bold ${
          !darkMode ? 'text-black' : 'text-white'
        }`}
      >
        Nuestros Servicios
      </h1>

      <div className="border flex h-fit">
        <div
          className={`${
            darkMode ? 'bg-color text-black' : 'bg-color-dark text-white'
          } opacity-80 hover:opacity-100 scale-90 hover:scale-95 shadow-2xl  w-1/3`}
        >
          <img src="/servicio1.png" />
          <div className="w-full h-full font-semibold p-10 space-y-10">
            <h1 className="font-bold">Cuidado De La Barba</h1>
            <h2>
              Utilizamos la navaja según preferencia del cliente. Ritual de
              toalla caliente, masaje final y aplicación de aceite para barba.
            </h2>
          </div>
        </div>

        <div
          className={`${
            !darkMode
              ? 'bg-color-presentacion text-black'
              : 'bg-color-dark text-white'
          } opacity-80 hover:opacity-100  scale-90 hover:scale-95 shadow-2xl  w-1/3 h-full`}
        >
          <img src="/servicio2.png" />
          <div className="w-full h-80 font-semibold p-10 space-y-10">
            <h1 className="font-bold">Corte De Cabello</h1>
            <h2>
              Asesoramiento basado en el estudio de cada cabello, forma craneal
              y rasgos faciales.
            </h2>
          </div>
        </div>
        <div
          className={`${
            darkMode ? 'bg-color text-black' : 'bg-color-dark text-white'
          } opacity-80 hover:opacity-100 scale-90 hover:scale-95 shadow-2xl w-1/3 h-full`}
        >
          <img src="/servicio3.png" />
          <div className="w-full h-80  font-semibold p-10 space-y-10">
            <h1 className="font-bold">Depilación Facial</h1>
            <h2>
              Depilación a cera. Retirada del bello sobrante con posterior
              aplicación de crema hidratante.
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}
