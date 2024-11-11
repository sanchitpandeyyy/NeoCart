'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const router = useRouter() // Get the current route

  const toggleNav = () => setNavOpen(!navOpen)
  const closeNav = () => setNavOpen(false)

  return (
    <div className="w-full h-20 sticky top-0 z-50 bg-gray-200">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <div>
          <p className="text-3xl font-bold text-black animate-slidein700">PRATEEK ARYAL</p>
        </div>
        <div className="flex items-center h-full">
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-9 text-black">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase()}`}>
                  <p
                    onClick={closeNav}
                    className={`${
                      router.pathname === `/${item.toLowerCase()}` ? 'text-emerald-600 font-semibold' : ''
                    } hover:border-b-[2px] border-black `}
                  >
                    {item}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleNav} aria-label="Toggle menu">
              {navOpen ? (
                <AiOutlineClose className="text-black" size={24} />
              ) : (
                <AiOutlineMenu className="text-black" size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {navOpen && (
          <div className="md:hidden bg-emerald-800 bg-opacity-80 p-4 absolute top-20 left-0 w-full backdrop-blur-md">
            <ul className="flex flex-col gap-4 text-white">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`}>
                    <p
                      onClick={closeNav}
                      className={`${
                        router.pathname === `/${item.toLowerCase()}` ? 'text-emerald-300 font-semibold' : ''
                      } hover:text-emerald-300`}
                    >
                      {item}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
