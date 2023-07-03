import React from 'react'

export default function Menu({ darkMode, setDarkMode }) {
  return (
    <div
      className={`fixed flex-col lg:hidden top-20 right-0 w-fit ${
        darkMode ? 'bg-color-presentacion-dark' : 'bg-color-presentacion'
      }`}
    >
      <div className="flex flex-col py-10 px-5 h-full w-full">
        <div className="flex px-7 w-full">
          {' '}
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
        </div>

        <button
          onClick={() => {
            window.open(
              'https://booksy.com/es-es/13385_la-santa-barber_barberia_48923_santa-coloma-de-gramenet'
            )
          }}
          className={`mt-10 fast-trans border px-5 shadow-md font-bold w-full h-12 hover:border hover:scale-105 ${
            darkMode
              ? 'bg-white hover:bg-neutral-800 text-black hover:text-white border-black hover:border-white'
              : 'bg-neutral-800 hover:bg-white text-white hover:text-black border-white hover:border-black'
          }`}
        >
          Reserva ahora
        </button>
      </div>
    </div>
  )
}
