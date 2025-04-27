import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
          <span className="font-bold text-xl"></span>
          <div className="space-x-4">
            <Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link>
            <Link to="/about" className="text-blue-500 hover:text-blue-700">About</Link>
            <Link to="/contact" className="text-blue-500 hover:text-blue-700">Contact</Link>
            <Link to="/login" className="text-blue-500 hover:text-blue-700">Login</Link>
            <Link to="/signup" className="text-blue-500 hover:text-blue-700">Signup</Link>
          </div>
        </nav>

        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
