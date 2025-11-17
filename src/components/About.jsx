import React from 'react'

const About = () => {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
              <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop" alt="Chef at Mokshu" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-green-600 text-white px-5 py-3 shadow-lg">
              <p className="font-semibold">Since 2020</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">About Us</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              At Mokshu, our philosophy is simple: celebrate nature’s bounty with creativity and care.
              We collaborate with local farmers and artisans to bring you a seasonal menu that’s as nourishing as it is delicious.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <li className="rounded-xl border border-black/5 p-4 shadow-sm">
                <p className="font-semibold text-green-700">Sustainable Sourcing</p>
                <p className="text-sm text-gray-600">Ethically sourced ingredients from local farms.</p>
              </li>
              <li className="rounded-xl border border-black/5 p-4 shadow-sm">
                <p className="font-semibold text-green-700">Chef-Driven Menu</p>
                <p className="text-sm text-gray-600">Seasonal dishes with modern techniques.</p>
              </li>
              <li className="rounded-xl border border-black/5 p-4 shadow-sm">
                <p className="font-semibold text-green-700">Cozy Ambience</p>
                <p className="text-sm text-gray-600">Warm interiors and live weekend music.</p>
              </li>
              <li className="rounded-xl border border-black/5 p-4 shadow-sm">
                <p className="font-semibold text-green-700">Vegan-Friendly</p>
                <p className="text-sm text-gray-600">Plenty of plant-forward options.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
