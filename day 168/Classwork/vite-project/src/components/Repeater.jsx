import React, { useState } from 'react';

const Repeater = () => {
  const [char, setChar] = useState('');
  const [num, setNum] = useState('');

  const output = char.repeat(Math.max(0, parseInt(num) || 0));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-sans antialiased text-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">სიმბოლოების გამეორება</h1>
        <div className="space-y-4 mb-6">
          <input type="text" className="w-full px-3 py-2 border rounded-md" value={char} onChange={e => setChar(e.target.value)} maxLength="1" placeholder="სიმბოლო" />
          <input type="number" className="w-full px-3 py-2 border rounded-md" value={num} onChange={e => setNum(e.target.value)} min="0" placeholder="რაოდენობა" />
        </div>
        <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200 text-center break-all text-xl font-mono text-gray-800">
          {output || <span className="text-gray-500">შედეგი აქ</span>}
        </div>
      </div>
    </div>
  );
};

export default Repeater;
