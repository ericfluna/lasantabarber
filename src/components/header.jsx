import PropTypes from 'prop-types'

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
}

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header
      className={`fixed z-50 top-0 right-0 flex w-screen h-20 px-2 sm:px-10 md:px-13 fast-trans bg-opacity-0 hover:bg-opacity-100 h ${
        darkMode ? 'bg-black' : 'bg-white'
      }`}
    >
      <img
        className={`h-20 ${darkMode ? '' : 'bg-zinc-800'}`}
        src="/logo.png"
      />

      <div className="ml-auto flex gap-3 sm:gap-12 lg:gap-14 items-center ">
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
          className={`fast-trans shadow-md font-bold w-36 min-h-fit sm:w-56 md:w-72 lg:w-96 h-12 rounded-lg hover:border hover:scale-105 ${
            darkMode
              ? 'bg-white hover:bg-neutral-800 text-black hover:text-white hover:border-white'
              : 'bg-neutral-800 hover:bg-white text-white hover:text-black hover:border-black'
          }`}
        >
          Reserva ahora
        </button>
      </div>
    </header>
  )
}
