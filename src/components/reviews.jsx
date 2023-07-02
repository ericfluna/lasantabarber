import { useEffect, useState } from 'react'

export default function Reviews({ darkMode }) {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      usuario: 'Pepe',
      nota: 5,
      reseña: 'fdsf',
    },
  ])

  return (
    <div
      className={`flex h-4/6 p-10 ${darkMode ? 'bg-color-dark' : 'bg-color'}`}
    >
      <div
        className={`w-2/3 h-full shadow-lg border flex ${
          darkMode ? 'bg-color-presentacion-dark' : 'bg-color-presentacion'
        }`}
      >
        {reviews.map((review) => (
          <div className="space-y-5" key={review.id}>
            <h1 className="font-bold">{review.usuario}</h1>
            <p>{review.nota}</p>
            <p>{review.reseña}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
