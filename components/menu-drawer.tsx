"use client"

import { useState } from "react"
import Link from "next/link"
import { Instagram, Phone } from "lucide-react"

export default function MenuDrawer() {
  const [isOpen, setIsOpen] = useState(false)
  const [showContact, setShowContact] = useState(false)

  const toggleContact = () => {
    setShowContact(!showContact)
  }

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-black" aria-label="Menu">
        <svg
          className="h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-xl p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-black hover:text-gray-700"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="mt-8 bg-[#e6f3ff] rounded-lg">
              <ul className="space-y-4 p-4">
                <li className="bg-white p-2 rounded-lg hover:bg-[#cce6ff] transition-colors">
                  <Link href="/about" className="text-black hover:text-gray-900 block">
                    About Us
                  </Link>
                </li>
                <li className="bg-white p-2 rounded-lg hover:bg-[#cce6ff] transition-colors">
                  <button onClick={toggleContact} className="text-black hover:text-gray-900 w-full text-left">
                    Contact
                  </button>
                  {showContact && (
                    <div className="mt-2 ml-4 space-y-2">
                      <a
                        href="https://www.instagram.com/jenova_homestay_vattakanal/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-black hover:text-blue-600 bg-white p-2 rounded-lg hover:bg-[#cce6ff] transition-colors"
                      >
                        <Instagram className="h-5 w-5 mr-2" />
                        Instagram
                      </a>
                      <a 
                        href="tel:9865153573" 
                        className="flex items-center text-black hover:text-blue-600 bg-white p-2 rounded-lg hover:bg-[#cce6ff] transition-colors"
                      >
                        <Phone className="h-5 w-5 mr-2" />
                        9865153573
                      </a>
                    </div>
                  )}
                </li>
                <li className="bg-white p-2 rounded-lg hover:bg-[#cce6ff] transition-colors">
                  <a
                    href="https://maps.app.goo.gl/fNvodSN483QoSxUs7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gray-900 block"
                  >
                    Location
                  </a>
                </li>
                <li className="bg-white p-2 rounded-lg hover:bg-[#cce6ff] transition-colors">
                  <Link href="/services" className="text-black hover:text-gray-900 block">
                    Services
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}

