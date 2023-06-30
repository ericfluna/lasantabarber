import { useState } from 'react'
import Presentacion from './components/presentacion'
import Header from './components/header'
import Servicios from './components/servicios'

function App() {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  return (
    <div className={`w-screen h-screen overflow-x-hidden scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-slate-300 ${darkMode?' bg-color-dark':' bg-color'}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Presentacion/>
      <Servicios/>
      <Presentacion/>
      
    </div>
  )
}

export default App
