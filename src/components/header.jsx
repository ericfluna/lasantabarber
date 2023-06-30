import PropTypes from 'prop-types'

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
}

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header
      className={`fixed top-0 right-0 flex w-screen h-20 px-2 sm:px-10 md:px-13 ${
        darkMode ? 'bg-black' : 'bg-white'
      }  bg-opacity-80`}
    >
      <img className="h-20" src="/logo.png" />

      <div className="ml-auto flex gap-3 sm:gap-12 lg:gap-14 items-center">
        <img
          onClick={() => {
            setDarkMode(!darkMode)
          }}
          className="w-6 hover:cursor-pointer"
          src={darkMode ? '/moon-dark.svg' : '/moon.svg'}
        />

        <a
          href="https://www.instagram.com/la.santabarber/?hl=es"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-6 hover:cursor-pointer"
            src={darkMode ? '/insta-dark.svg' : '/insta.svg'}
          />
        </a>

     

        <button
          onClick={() => {
            window.open(
              'https://booksy.com/es-es/13385_la-santa-barber_barberia_48923_santa-coloma-de-gramenet'
            )
          }}
          className={`shadow-md font-bold w-36 min-h-fit sm:w-56 md:w-72 lg:w-96 h-12 rounded-lg ${
            darkMode
              ? 'bg-white hover:bg-neutral-800 text-black hover:text-white'
              : 'bg-neutral-800 hover:bg-white text-white hover:text-black'
          }`}
        >
          Reserva ahora
        </button>
      </div>
    </header>
  )
}

