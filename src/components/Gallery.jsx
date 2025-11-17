import React from 'react'

const photos = [
  'https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=1600&auto=format&fit=crop',
]

const Gallery = () => {
  return (
    <section id="gallery" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Photo Gallery</h2>
        <p className="mt-2 text-center text-gray-600">A glimpse into our ambience and plates</p>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {photos.map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl shadow ring-1 ring-black/5">
              <img src={src} alt="Mokshu gallery" className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
