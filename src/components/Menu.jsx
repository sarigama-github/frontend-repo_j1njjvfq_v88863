import React from 'react'

const menu = [
  { name: 'Avocado Quinoa Bowl', price: '₹420', desc: 'Citrus, herbs, toasted seeds' },
  { name: 'Charred Broccoli Steak', price: '₹480', desc: 'Almond romesco, pickled shallots' },
  { name: 'Truffle Mushroom Risotto', price: '₹650', desc: 'Carnaroli rice, wild mushrooms' },
  { name: 'Lemon Herb Salmon', price: '₹720', desc: 'Greens, capers, butter sauce' },
  { name: 'Matcha Panna Cotta', price: '₹320', desc: 'Yuzu gel, sesame tuile' },
]

const Menu = () => {
  return (
    <section id="menu" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Explore Our Menu</h2>
            <p className="mt-4 text-gray-600">Seasonal specials and crowd favorites crafted with care.</p>
            <div className="mt-6 space-y-4">
              {menu.map((item) => (
                <div key={item.name} className="flex items-start justify-between rounded-xl border border-black/5 p-4 shadow-sm">
                  <div>
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                  <span className="font-semibold text-green-700">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop" alt="Dish" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-white px-5 py-3 shadow ring-1 ring-black/5">
              <p className="text-sm font-semibold text-green-700">Chef Recommends</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
