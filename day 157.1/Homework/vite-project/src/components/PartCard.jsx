import React from 'react';

function PartCard({ part }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{part.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{part.description}</p>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-green-500 font-bold">${part.price}</span>
        {part.inStock ? (
          <span className="bg-green-100 text-green-800 py-1 px-2 rounded-full text-xs font-semibold">In Stock</span>
        ) : (
          <span className="bg-red-100 text-red-800 py-1 px-2 rounded-full text-xs font-semibold">Out of Stock</span>
        )}
      </div>
      <button className="mt-4 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Add to Cart
      </button>
    </div>
  );
}

export default PartCard;