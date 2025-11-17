import React, { useState } from 'react'

const Contact = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone'),
      subject: form.get('subject') || undefined,
      message: form.get('message'),
    }
    try {
      setStatus('sending')
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed')
      setStatus('sent')
      e.currentTarget.reset()
    } catch (err) {
      setStatus(`error:${err.message}`)
    }
  }

  async function handleBooking(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('b_name'),
      email: form.get('b_email'),
      phone: form.get('b_phone'),
      date: form.get('b_date'),
      time: form.get('b_time'),
      guests: Number(form.get('b_guests')),
      message: form.get('b_message') || undefined,
    }
    try {
      setStatus('sending')
      const res = await fetch(`${BACKEND_URL}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed')
      setStatus('booked')
      e.currentTarget.reset()
    } catch (err) {
      setStatus(`error:${err.message}`)
    }
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Contact Us / Book a Table</h2>
          <p className="mt-2 text-gray-600">Fill the form to get in touch or reserve your table</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Booking Form */}
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold text-green-700">Table Booking</h3>
            <form onSubmit={handleBooking} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input name="b_name" required placeholder="Full Name" className="col-span-1 rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-green-600" />
              <input name="b_email" required type="email" placeholder="Email" className="col-span-1 rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-green-600" />
              <input name="b_phone" required placeholder="Phone" className="col-span-1 rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-green-600" />
              <input name="b_date" required type="date" className="col-span-1 rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-green-600" />
              <input name="b_time" required type="time" className="col-span-1 rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-green-600" />
              <input name="b_guests" required type="number" min="1" max="20" placeholder="Guests" className="col-span-1 rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-green-600" />
              <textarea name="b_message" placeholder="Special requests (optional)" className="col-span-2 rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-green-600" rows="3" />
              <button className="col-span-2 rounded-full bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700">Book Now</button>
            </form>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold text-green-700">Send a Message</h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              <input name="name" required placeholder="Full Name" className="rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-green-600" />
              <input name="email" required type="email" placeholder="Email" className="rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-green-600" />
              <input name="phone" placeholder="Phone" className="rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-green-600" />
              <input name="subject" placeholder="Subject" className="rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-green-600" />
              <textarea name="message" required placeholder="Your message" className="rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-green-600" rows="4" />
              <button className="rounded-full bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700">Send Message</button>
            </form>
          </div>
        </div>

        {status && (
          <div className="mt-6 rounded-lg border p-4 text-sm">
            {status === 'sending' && <p>Sending...</p>}
            {status === 'sent' && <p className="text-green-700">Message sent! We will get back to you soon.</p>}
            {status === 'booked' && <p className="text-green-700">Table booked! Check your email for confirmation.</p>}
            {status.startsWith('error:') && <p className="text-red-600">{status.replace('error:', '')}</p>}
          </div>
        )}

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm">
            <p className="font-semibold text-gray-900">Location</p>
            <p className="text-sm text-gray-600">MG Road, Bengaluru</p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm">
            <p className="font-semibold text-gray-900">Hours</p>
            <p className="text-sm text-gray-600">Mon-Sun: 11 AM – 11 PM</p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm">
            <p className="font-semibold text-gray-900">Contact</p>
            <p className="text-sm text-gray-600">+91-90000 00000</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
