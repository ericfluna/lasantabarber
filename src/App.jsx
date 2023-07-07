import React, { useState } from 'react'
import Presentacion from './components/presentacion'
import Header from './components/header'
import Servicios from './components/servicios'
import Cortes from './components/cortes'
import Mapa from './components/mapa'
import ButtonUp from './components/buttonUp'
import Menu from './components/menu'

function App() {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  const handleScrollDown = () => {
    const serviciosSection = document.getElementById('servicios')
    serviciosSection.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScrollUp = () => {
    const serviciosSection = document.getElementById('presentacion')
    serviciosSection.scrollIntoView({ behavior: 'smooth' })
  }

  const [mostrarMenu, setMostrarMenu] = useState(false)

  return (
    <div
      className={`w-screen h-screen overflow-x-hidden scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-slate-300 bg-end`}
    >
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        mostrarMenu={mostrarMenu}
        setMostrarMenu={setMostrarMenu}
      />
      {mostrarMenu ? (
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
      ) : (
        ''
      )}
      <Presentacion
        id="presentacion"
        darkMode={darkMode}
        handleScrollDown={handleScrollDown}
      />
      <Servicios id="servicios" darkMode={darkMode} />
      <Cortes darkMode={darkMode} />
      <Mapa darkMode={darkMode} />
      <ButtonUp handleScrollUp={handleScrollUp} />

      <div
        className={`w-screen h-fit ${
          !darkMode
            ? 'bg-color-presentacion text-black '
            : 'bg-color-presentacion-dark text-white '
        }`}
      >
        <img
          className="w-24 py-5 m-auto slow-trans -rotate-180 hover:rotate-180 scale-95 hover:scale-105"
          src="/trimmer.png"
        />
      </div>
    </div>
  )
}

export default App
