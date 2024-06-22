import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="px-6 lg:px-6 h-10 flex items-center">
        <Link className="flex items-center justify-center" to="/">
        <CoinsIcon className="h-6 w-6" />
        <span className="sr-only">Crypto Platform</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link to="/" className="text-sm font-medium hover:underline underline-offset-4" >
            Home
        </Link>
        <Link to="/topcoins" className="text-sm font-medium hover:underline underline-offset-4" >
            Coins
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="/about">
            About
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="/contact">
            Contact
        </Link>
    </nav>
  </header>
  )
}

function CoinsIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="8" r="6" />
        <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
        <path d="M7 6h1v4" />
        <path d="m16.71 13.88.7.71-2.82 2.82" />
      </svg>
    )
  }

export default Header