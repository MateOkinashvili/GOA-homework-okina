import React, { useState } from 'react';
import Name from './Name';
import Description from './Description';
import Avatar from './Avatar';

export default function ProfileCard() {
  const [follow, setFollow] = useState(false);
  return (
    <div className="p-4 max-w-sm mx-auto bg-white shadow rounded text-center">
      <Avatar />
      <Name />
      <Description />
      <button
        className={`mt-2 px-4 py-1 rounded ${follow ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        onClick={() => setFollow(!follow)}
      >
        {follow ? 'Following' : 'Follow'}
      </button>
    </div>
  );
}
