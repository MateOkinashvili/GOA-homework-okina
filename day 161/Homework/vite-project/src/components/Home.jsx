import React from 'react';
import { Card } from './Card.jsx';
import { CardsData } from './CardsData.js';

export const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-extrabold text-center mb-8">Our Amazing Cards Collection</h2>
      <div className="flex flex-wrap justify-center">
        {cardsData.map((card) => (
          <Card key={card.id} title={card.title} /> 
        ))}
      </div>
    </div>
  );
};
