import React from 'react';
import PartCard from './PartCard';

function PartsList({ parts }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {parts.map(part => (
        <PartCard key={part.id} part={part} />
      ))}
    </div>
  );
}

export default PartsList;