import React, { useState } from 'react'
import Presentacion from './components/presentacion'
import Header from './components/header'
import Servicios from './components/servicios'
import Cortes from './components/cortes'
import Mapa from './components/mapa'
import Final from './components/final'

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

  return (
    <div
      className={`w-screen h-screen overflow-x-hidden scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-slate-300 bg-end`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Presentacion
        id="presentacion"
        darkMode={darkMode}
        handleScrollDown={handleScrollDown}
      />
      <Servicios id="servicios" darkMode={darkMode} />
      <Cortes darkMode={darkMode} />
      <Mapa darkMode={darkMode} />
      <Final handleScrollUp={handleScrollUp} />
    </div>
  )
}

export default App
