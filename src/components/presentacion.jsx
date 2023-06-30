export default function Presentacion() {
  return (
    <div className="flex align-middle justify-center min-w-screen h-screen">
      <div className="p-20 flex align-middle justify-center text-center w-1/2 h-full">
        <h1 className="m-auto">
          “En <span className="font-bold">La Santa Barber</span> valoramos la
          tradición y el trabajo duro. Nuestro equipo de talentosos barberos ha
          perfeccionado su oficio, dominando las técnicas clásicas mientras se
          mantienen actualizados con las últimas tendencias de moda masculina.
          Cada corte de pelo es una obra maestra única, donde el estilo se
          encuentra con la precisión y la atención al detalle.”
        </h1>
      </div>
      <div className="flex align-middle justify-center text-center w-1/2 h-full">
        <img className="hover:scale-105" src="/trimmer.png" />
      </div>
    </div>
  )
}
