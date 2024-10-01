import React, { useState } from 'react';




function Header() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
        <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          Logo
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>

        {/* Links - Shown as dropdown on mobile, inline on desktop */}
        <div className={`flex-col md:flex md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
          <a href="#" className="text-white block py-2 md:py-0 hover:text-gray-300">Link 1</a>
          <a href="#" className="text-white block py-2 md:py-0 hover:text-gray-300">Link 2</a>
          <a href="#" className="text-white block py-2 md:py-0 hover:text-gray-300">Link 3</a>
        </div>
      </div>
    </nav>    
        </div>
    );
}


export default Header;