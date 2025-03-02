"use client"

import { useState } from "react"

export default function ContactDetails() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Book Now
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-10">
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2 text-black">Contact Us</h3>
            <p className="text-sm text-black mb-4">
              You're just a call away from living within the mystical marvels of nature in Vattakanal.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-black">
                Phone:{" "}
                <a href="tel:9865153573" className="text-blue-600 hover:underline">
                  9865153573
                </a>
              </p>
              <p className="text-sm text-black">
                Email:{" "}
                <a href="mailto:info@jenovahomestays.com" className="text-blue-600 hover:underline">
                  info@jenovahomestays.com
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

