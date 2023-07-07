export default function Cortes({ darkMode }) {
  return (
    <div
      className={`w-screen text-center py-10 lg:h-screen ${
        darkMode ? 'bg-color-presentacion-dark' : 'bg-color-presentacion'
      } `}
    >
      <h1
        className={`font-semibold  ${darkMode ? 'text-white' : 'text-black'}`}
      >
        Nuestros clientes más{' '}
        <span
          className={`${
            darkMode
              ? 'bg-color-presentacion text-black '
              : 'bg-color-presentacion-dark text-white '
          }px-2`}
        >
          Estilosos
        </span>
      </h1>
      <div className="-rotate-2 w-screen scale-50 -my-32 lg:scale-100 lg:my-10">
        <div className=" min-w-screen slide-track overflow-hidden ">
          <div className="slide">
            <img src="corte1.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte2.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte3.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte4.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte5.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte6.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte7.png" alt="" />
          </div>

          <div className="slide">
            <img src="corte1.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte2.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte3.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte4.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte5.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte6.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte7.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte1.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte2.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte3.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte4.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte5.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte6.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte7.png" alt="" />
          </div>
        </div>
        <div className="slide-track-back overflow-hidden ">
          <div className="slide">
            <img src="corte8.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte9.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte10.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte11.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte12.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte13.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte14.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte8.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte9.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte10.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte11.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte12.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte13.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte14.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte8.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte9.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte10.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte11.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte12.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte13.png" alt="" />
          </div>
          <div className="slide">
            <img src="corte14.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
