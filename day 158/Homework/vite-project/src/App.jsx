import React from 'react';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Greeting name="Gio" age={30} />
      <Greeting name="Ana" /> {/* optional */}
    </div>
  );
}

export default App;