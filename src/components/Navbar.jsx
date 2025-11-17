import React from 'react'

const Logo = () => (
  <div className="flex items-center gap-2">
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-600/10">
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-green-600">
        <path d="M12 3c-4 3-6 6.5-6 9.5S8 21 12 21s6-4 6-8.5S16 6 12 3Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 9c-2 1.5-3 3.25-3 4.75S10 18 12 18s3-2.25 3-4.25S14 10.5 12 9Z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    </span>
    <span className="text-xl font-extrabold tracking-tight text-green-700">Mokshu</span>
  </div>
)

const Navbar = () => {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#menu', label: 'Menu' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Logo />
        <div className="hidden gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-gray-700 hover:text-green-700 transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-green-700 transition-colors">
          Book a Table
        </a>
      </nav>
    </header>
  )
}

export default Navbar
