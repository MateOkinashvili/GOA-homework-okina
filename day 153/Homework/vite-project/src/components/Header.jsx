import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white py-6 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:text-blue-400 transition-colors duration-300">
              <a href="#about" className="flex items-center">
                <span>About</span>
              </a>
            </li>
            <li className="hover:text-blue-400 transition-colors duration-300">
              <a href="#skills" className="flex items-center">
                <span>Skills</span>
              </a>
            </li>
            <li className="hover:text-blue-400 transition-colors duration-300">
              <a href="#contact" className="flex items-center">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;