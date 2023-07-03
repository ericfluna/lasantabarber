export default function Presentacion({ darkMode, handleScrollDown }) {
  return (
    <div id="presentacion" className={`flex min-w-screen min-h-screen`}>
      <div
        className={`p-12 flex lg:w-2/5 h-screen ${
          darkMode
            ? 'text-white bg-color-presentacion-dark-difuminated'
            : 'text-black bg-color-presentacion-difuminated'
        } `}
      >
        <div className="space-y-5">
          <h1 className="hidden xl:block p-10  hover:scale-105 m-auto font-semibold">
            "En{' '}
            <span
              className={`${
                darkMode
                  ? 'bg-color-presentacion text-black '
                  : 'bg-color-presentacion-dark text-white '
              } px-2`}
            >
              La Santa Barber
            </span>{' '}
            valoramos la tradición y el trabajo duro, dominando las técnicas
            clásicas mientras nos mantenemos actualizados con las últimas
            tendencias de moda masculina"
          </h1>

          <h2 className="xl:hidden p-10  hover:scale-105 bg-opacity-40 m-auto font-semibold">
            "En{' '}
            <span
              className={`${
                darkMode
                  ? 'bg-color-presentacion text-black '
                  : 'bg-color-presentacion-dark text-white '
              } font-bold px-2`}
            >
              La Santa Barber
            </span>{' '}
            valoramos la tradición y el trabajo duro, dominando las técnicas
            clásicas mientras nos mantenemos actualizados con las últimas
            tendencias de moda masculina"
          </h2>

          <button
            className={`fast-trans shadow-md font-bold h-fit w-80 px-10 py-3  border hover:scale-105 ${
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
    </div>
  )
}
