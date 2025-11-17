import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-black/5 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:text-left">
        <p className="font-extrabold tracking-tight text-green-700">Mokshu</p>
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Mokshu. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <a href="#about" className="hover:text-green-700">About</a>
          <a href="#menu" className="hover:text-green-700">Menu</a>
          <a href="#contact" className="hover:text-green-700">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
