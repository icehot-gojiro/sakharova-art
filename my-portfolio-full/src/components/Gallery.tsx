import React from 'react'

const images = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg',
  '/images/6.jpg',
]

export default function Gallery() {
  return (
    <div className='grid grid-cols-6 gap-6 p-12'>
      {images.map((src, i) => {
        const colSpan = Math.random() > 0.6 ? 'col-span-3' : 'col-span-2'
        const rowSpan = Math.random() > 0.5 ? 'row-span-2' : 'row-span-1'
        return (
          <div key={i} className={`${colSpan} ${rowSpan}`}>
            <img
              src={src}
              alt={`art-${i}`}
              className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
            />
          </div>
        )
      })}
    </div>
  )
}
