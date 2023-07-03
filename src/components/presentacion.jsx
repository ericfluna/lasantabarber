export default function Presentacion({ darkMode, handleScrollDown }) {
  return (
    <div id="presentacion" className={`flex min-w-screen min-h-screen`}>


      <div
        className={`p-12 flex lg:w-1/3 h-screen bg-opacity-80  ${
          darkMode ? 'text-white bg-black' : 'text-black bg-white'
        } `}
      >


        <div className="space-y-10 ">
          <h1 className="hidden lg:block p-10 rounded-2xl  hover:scale-105 m-auto ">
            En <span>La Santa Barber</span> valoramos la tradición y el trabajo
            duro, dominando las técnicas clásicas mientras se mantienen
            actualizados con las últimas tendencias de moda masculina.
          </h1>

          <h2 className="lg:hidden p-10 rounded-2xl  hover:scale-105 bg-opacity-40 m-auto ">
            En <span className="font-bold">La Santa Barber</span> valoramos la
            tradición y el trabajo duro, dominando las técnicas clásicas
            mientras se mantienen actualizados con las últimas tendencias de
            moda masculina.
          </h2>

          <button
            className={`fast-trans shadow-md font-bold h-fit w-80 px-10 py-3 rounded-lg border hover:scale-105 ${
              !darkMode
                ? 'bg-white border-black hover:bg-neutral-800 text-black hover:text-white hover:border-white'
                : 'bg-neutral-800 hover:bg-white text-white hover:text-black hover:border-black'
            }`}
            onClick={handleScrollDown}
          >
            <h2 className="fast-trans">Conocenos</h2>
          </button>
        </div>

      </div>


      <div className="hidden lg:flex lg:w-2/3 h-screen">
        <img
          className="slow-trans m-auto -rotate-6 hover:rotate-12 scale-95 hover:scale-105"
          src="/trimmer.png"
        />
      </div>


    </div>
  )
}
