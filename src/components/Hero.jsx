import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-green-200 blur-3xl opacity-60" />
      <div className="absolute -right-20 top-40 h-72 w-72 rounded-full bg-emerald-200 blur-3xl opacity-60" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Savor the Essence of Green Gastronomy
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Welcome to Mokshu — where fresh, seasonal ingredients meet modern culinary art.
            Enjoy elevated dining with a sustainable heart.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#menu" className="rounded-full bg-green-600 px-5 py-3 text-white font-semibold shadow hover:bg-green-700 transition">Explore Menu</a>
            <a href="#contact" className="rounded-full border border-green-600 px-5 py-3 text-green-700 font-semibold hover:bg-green-50 transition">Book a Table</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-green-600/10 flex items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-green-600 animate-pulse" />
              </div>
              <span>Open Today 11:00 AM – 11:00 PM</span>
            </div>
            <span>Farm-to-Table • Vegan Options • Live Music</span>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-black/5 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop"
              alt="Mokshu restaurant ambience"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow ring-1 ring-black/5">
            <p className="text-sm font-semibold text-green-700">Locally Sourced • Chef Crafted</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
