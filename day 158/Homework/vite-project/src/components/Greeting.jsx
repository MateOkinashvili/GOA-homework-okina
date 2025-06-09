import React from 'react';
import PropTypes from 'prop-types';

function Greeting({ name, age }) {
  return (
    <div className="bg-blue-100 p-4 rounded-md shadow-md">
      <p className="text-lg font-semibold text-blue-700">Hello, {name}!</p>
      {age && <p className="text-sm text-gray-600">You are {age} years old.</p>}
    </div>
  );
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};

export default Greeting;