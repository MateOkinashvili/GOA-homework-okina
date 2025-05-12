import React, { useState, useEffect } from 'react';

function App() {
  const [isFunctionActive, setIsFunctionActive] = useState(false);

  const toggleFunction = () => {
    setIsFunctionActive(!isFunctionActive);
  };

  useEffect(() => {
    document.body.style.backgroundColor = isFunctionActive ? 'black' : 'white';
  }, [isFunctionActive]);

  return (
    <div className="p-4">
      <button
        onClick={toggleFunction}
        className={`px-4 py-2 rounded ${isFunctionActive ? 'bg-green-500' : 'bg-red-500'}`}
      >
        {isFunctionActive ? 'Function ON' : 'Function OFF'}
      </button>
    </div>
  );
}

export default App;
