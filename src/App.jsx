import React, { useState } from 'react'
import Presentacion from './components/presentacion'
import Header from './components/header'
import Servicios from './components/servicios'
import Cortes from './components/cortes'

function App() {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  const handleScrollDown = () => {
    const serviciosSection = document.getElementById('servicios')
    serviciosSection.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      className={`w-screen h-screen overflow-x-hidden scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-slate-300 ${
        darkMode ? ' bg-color-dark' : ' bg-color'
      }`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Presentacion darkMode={darkMode} handleScrollDown={handleScrollDown} />
      <Servicios id="servicios" darkMode={darkMode} />
      <Cortes darkMode={darkMode} />
    </div>
  )
}

export default App
