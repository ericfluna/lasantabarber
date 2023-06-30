export default function Servicios() {
  return (
    <div className="mx-14 gap-20 flex align-middle justify-center min-w-screen h-5/6">
      <div className="bg-white opacity-90 hover:opacity-100 scale-95 hover:scale-100 shadow-2xl align-middle justify-center text-center w-1/3 h-full">
        <img src="/servicio1.png" />
        <div className="w-full h-fit  text-black font-semibold p-10 space-y-10">
          <h1 className="font-bold">Cuidado De La Barba</h1>
          <h2>
            Utilizamos la navaja según preferencia del cliente. Ritual de toalla
            caliente, masaje final y aplicación de aceite para barba.
          </h2>
        </div>
      </div>

      <div className="bg-color-dark opacity-90 hover:opacity-100 scale-95 hover:scale-100 shadow-2xl align-middle justify-center text-center w-1/3 h-full">
        <img src="/servicio2.png" />
        <div className="w-full h-fit  text-white font-semibold p-10 space-y-10">
          <h1 className="font-bold">Corte De Cabello</h1>
          <h2>
            Asesoramiento basado en el estudio de cada cabello, forma craneal y
            rasgos faciales.
          </h2>
        </div>
      </div>
      <div className="bg-white opacity-90 hover:opacity-100 scale-95 hover:scale-100 shadow-2xl align-middle justify-center text-center w-1/3 h-full">
        <img src="/servicio3.png" />
        <div className="w-full h-fit  text-black font-semibold p-10 space-y-10">
          <h1 className="font-bold">Depilación Facial</h1>
          <h2>
            Depilación a cera. Retirada del bello sobrante con posterior
            aplicación de crema hidratante.
          </h2>
        </div>
      </div>
    </div>
  )
}
