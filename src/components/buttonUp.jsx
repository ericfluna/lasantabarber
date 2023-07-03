import React from 'react'

export default function ButtonUp({ handleScrollUp }) {
  return (
    <button
      onClick={handleScrollUp}
      className={`hidden lg:flex fixed bottom-10 right-10 fast-trans shadow-md font-bold w-20 h-20 p-3 opacity-30 hover:opacity-100 scale-50 hover:scale-90 overflow-hidden rounded-lg hover:border bg-white text-black`}
    >
      <img width={'100%'} src="/flechas-volver.png" />
    </button>
  )
}
