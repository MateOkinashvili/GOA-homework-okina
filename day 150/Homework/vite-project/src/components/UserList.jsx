import React from 'react';

function UsersList({ users }) {
  return (
    <div className="p-4 space-y-4">
      {users.map(user => (
        <div key={user.id} className="p-4 border rounded-xl shadow bg-white">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default UsersList;
