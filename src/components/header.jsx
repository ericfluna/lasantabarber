import PropTypes from 'prop-types'
import { useState } from 'react'

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
}

export default function Header({ darkMode, setDarkMode }) {
  const [mostrarMenu, setMostrarMenu] = useState(false)

  return (
    <header
      className={`fixed z-50 top-0 right-0 flex w-screen h-20 px-10 lg:px-20 2xl:px-40 fast-trans`}
    >
      <img
        className={`h-16 bg-zinc-800 px-10 rounded-b-2xl bg-opacity-0 hover:`}
        src="/logo.png"
      />

      <div className="ml-auto lg:hidden ">
        <img
          className={`cursor-pointer h-16 pb-1 mb-2 px-4 scale-95 hover:scale-105 bg-zinc-800  rounded-b-2xl`}
          src={darkMode ? 'menu-dark.png' : '/menu.png'}
          onClick={() => {
            setMostrarMenu(true)
          }}
        />
      </div>

      <div className="hidden ml-auto lg:flex gap-3 sm:gap-12 lg:gap-14 items-center bg-zinc-800 px-10 rounded-b-2xl bg-opacity-0 hover:bg-opacity-100">
        <img
          onClick={() => {
            setDarkMode(!darkMode)
          }}
          className="w-6 hover:cursor-pointer hover:scale-125 fast-trans"
          src={!darkMode ? '/moon-dark.svg' : '/moon.svg'}
        />

        <a
          href="https://www.instagram.com/la.santabarber/?hl=es"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-6 hover:cursor-pointer hover:scale-125 fast-trans"
            src={!darkMode ? '/insta-dark.svg' : '/insta.svg'}
          />
        </a>

        <button
          onClick={() => {
            window.open(
              'https://booksy.com/es-es/13385_la-santa-barber_barberia_48923_santa-coloma-de-gramenet'
            )
          }}
          className={`fast-trans shadow-md font-bold w-36 min-h-fit sm:w-56 md:w-72 lg:w-96 h-12 rounded-lg hover:border hover:scale-105 ${
            !darkMode
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
