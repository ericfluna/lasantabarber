export default function Presentacion({ darkMode, handleScrollDown }) {
  return (
    <div className={`flex min-w-screen h-screen ${!darkMode?'bg-color-presentacion':'bg-color-presentacion-dark'}`}>
      <div
        className={`p-20 flex w-1/2 h-full ${
          darkMode ? 'text-white' : 'text-black'
        } `}
      >
        <div className="space-y-10">
          <h1 className="m-auto hover:rotate-1">
            En <span>La Santa Barber</span> valoramos la tradición y el trabajo
            duro, dominando las técnicas clásicas mientras se mantienen
            actualizados con las últimas tendencias de moda masculina.
          </h1>

          <button
            className={`fast-trans shadow-md font-bold w-36 min-h-fit sm:w-56 md:w-72 lg:w-96 h-12 rounded-lg hover:border hover:scale-105 ${
              darkMode
                ? 'bg-white hover:bg-neutral-800 text-black hover:text-white hover:border-white'
                : 'bg-neutral-800 hover:bg-white text-white hover:text-black hover:border-black'
            }`}
            onClick={handleScrollDown}
          >
            <h2 className="fast-trans">Conocenos</h2>
          </button>
        </div>
      </div>
      <div className="flex w-1/2 h-full">
        <img
          className="slow-trans w-5/6 -rotate-6 hover:rotate-12 scale-95 hover:scale-105"
          src="/trimmer.png"
        />
      </div>  
    </div>
    
  )
}
