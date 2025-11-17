import React from 'react'

const testimonials = [
  {
    name: 'Aarav',
    quote: 'The best dining experience I have had in a long time. Fresh flavors and beautiful plating!',
  },
  {
    name: 'Ishita',
    quote: 'Loved the ambiance and the vegan options. The staff was super warm and welcoming.',
  },
  {
    name: 'Rohan',
    quote: 'Their chef specials are a must-try. Great cocktails and live music made our night.',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Customer Testimonials</h2>
        <p className="mt-2 text-center text-gray-600">What guests say about Mokshu</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-10 w-10 rounded-full bg-green-600/10 flex items-center justify-center text-green-700 font-bold">
                  {t.name.charAt(0)}
                </span>
                <p className="font-semibold">{t.name}</p>
              </div>
              <p className="text-gray-700">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
