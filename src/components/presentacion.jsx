export default function Presentacion({ darkMode, handleScrollDown }) {
  return (
    <div
      id="presentacion"
      className={`flex justify-center align-middle w-screen h-screen`}
    >
      <div
        className={`p-12 text-center flex items-center lg:w-2/5 h-screen ${
          darkMode
            ? 'text-white bg-color-presentacion-dark-difuminated'
            : 'text-black bg-color-presentacion-difuminated'
        } `}
      >
        <div className="space-y-5">
          <h1 className="hidden 2xl:block m-auto font-semibold">
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
          <h2 className="hidden sm:block 2xl:hidden m-auto font-semibold">
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
          </h2>
          <h3 className="sm:hidden bg-opacity-40 m-auto font-semibold">
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
          </h3>

          <button
            className={`fast-trans shadow-md font-bold h-fit w-2/3  py-3 border hover:scale-105 ${
              !darkMode
                ? 'bg-white border-black hover:bg-neutral-800 text-black hover:text-white hover:border-white'
                : 'bg-neutral-800 hover:bg-white text-white hover:text-black hover:border-black'
            }`}
            onClick={handleScrollDown}
          >
            <h2 className="fast-trans m-auto">Conócenos</h2>
          </button>
        </div>
      </div>
    </div>
  )
}
