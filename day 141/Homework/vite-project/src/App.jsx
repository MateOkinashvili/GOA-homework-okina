import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { useState } from 'react';

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="flex space-x-4">
          <button
            onClick={() => setActivePage('home')}
            className={`text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium  : ''}`}
          >
            home
          </button>
          <button
            onClick={() => setActivePage('about')}
            className={`text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium  : ''}`}
          >
            about
          </button>
          <button
            onClick={() => setActivePage('contact')}
            className={`text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium  : ''}`}
          >
            contact
          </button>
        </div>
      </nav>

      <div className="p-4">
        {activePage === 'home' && <Home />}
        {activePage === 'about' && <About />}
        {activePage === 'contact' && <Contact />}
      </div>
    </div>
  );
}

export default App;