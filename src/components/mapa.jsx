import { useState } from 'react'

export default function Mapa({ darkMode }) {
  const [mostrarSatelite, setMostrarSatelite] = useState(true)
  return (
    <div
      className={`flex h-4/6 p-10  ${darkMode ? 'bg-color-dark' : 'bg-color'}`}
    >
      <div
        className={`w-1/3 h-full flex align-middle justify-center text-center ${
          darkMode ? 'bg-color-presentacion-dark' : 'bg-color-presentacion'
        }`}
      >
        <div className="m-auto space-y-10 flex flex-col align-middle justify-center text-center">
          <h1 className={darkMode ? 'text-white' : 'text-black'}>
            Nuestro Local
          </h1>
          <button
            className={`fast-trans shadow-md font-bold w-36 min-h-fit sm:w-56 md:w-72 lg:w-96 h-12 rounded-lg hover:border hover:scale-105 ${
              darkMode
                ? 'bg-white hover:bg-neutral-800 text-black hover:text-white hover:border-white'
                : 'bg-neutral-800 hover:bg-white text-white hover:text-black hover:border-black'
            }`}
            onClick={() => {
              setMostrarSatelite(!mostrarSatelite)
            }}
          >
            {mostrarSatelite
              ? 'Cambiar a vista de calle'
              : 'Cambiar a vista de satélite'}
          </button>
        </div>
      </div>
      <div className="w-2/3 h-full overflow-hidden">
        {mostrarSatelite ? (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d747.5817520349074!2d2.211091908696658!3d41.45382233983911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4bdecb0ce0643%3A0xa23a183b300f8a83!2sLa%20Santa%20Barber!5e0!3m2!1ses!2ses!4v1688298201289!5m2!1ses!2ses"
            style={{ border: 0, width: '100%', height: '100%' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        ) : (
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1688320589957!6m8!1m7!1srWLtILA8gSd78iQCZdqAQw!2m2!1d41.45396865233351!2d2.211267363025249!3f213.7715278125251!4f-3.0669315943274427!5f2.4974480820701754"
            style={{ border: 0, width: '100%', height: '100%' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </div>
    </div>
  )
}
