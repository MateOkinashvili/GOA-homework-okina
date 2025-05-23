import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main />
    </div>
  );
}

export default App;