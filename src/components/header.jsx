import PropTypes from 'prop-types'

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
}

export default function Header({
  darkMode,
  setDarkMode,
  mostrarMenu,
  setMostrarMenu,
}) {
  return (
    <header
      className={`fixed z-50 top-0 left-0 ${
        darkMode ? 'bg-color-presentacion-dark' : 'bg-color-presentacion'
      } flex justify-center align-middle w-screen h-20 px-10 lg:px-20 2xl:px-40 fast-trans shadow-md `}
    >
      <img src={darkMode ? '/logo-dark.png' : '/logo.png'} />

      <div className="ml-auto lg:hidden flex items-center">
        <img
          className={`cursor-pointer h-12 w-14`}
          src={darkMode ? 'menu-dark.png' : '/menu.png'}
          onClick={() => {
            console.log(!mostrarMenu)
            setMostrarMenu(!mostrarMenu)
          }}
        />
      </div>

      <div className="hidden ml-auto lg:flex gap-3 sm:gap-12 lg:gap-14 items-center px-10 ">
        <img
          onClick={() => {
            setDarkMode(!darkMode)
          }}
          className="w-6 hover:cursor-pointer hover:scale-125 fast-trans"
          src={darkMode ? '/moon-dark.svg' : '/moon.svg'}
        />

        <a
          href="https://www.instagram.com/la.santabarber/?hl=es"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-6 hover:cursor-pointer hover:scale-125 fast-trans"
            src={darkMode ? '/insta-dark.svg' : '/insta.svg'}
          />
        </a>

        <button
          onClick={() => {
            window.open(
              'https://booksy.com/es-es/13385_la-santa-barber_barberia_48923_santa-coloma-de-gramenet'
            )
          }}
          className={`fast-trans border shadow-md font-bold w-36 min-h-fit sm:w-56 md:w-72 lg:w-96 h-12 hover:border hover:scale-105 ${
            darkMode
              ? 'bg-white hover:bg-neutral-800 text-black hover:text-white border-black hover:border-white'
              : 'bg-neutral-800 hover:bg-white text-white hover:text-black border-white hover:border-black'
          }`}
        >
          Reserva ahora
        </button>
      </div>
    </header>
  )
}
