import React from 'react';

function ProfileCard({ user }) {
  return (
    <div className="p-4 border rounded-lg shadow-md w-80">
      <img src={user.photo} alt="profile" className="rounded-full w-32 h-32 mx-auto"/>
      <h2 className="text-center text-xl font-semibold">{user.firstName} {user.lastName}</h2>
      <p className="text-center text-gray-500">{user.description}</p>
    </div>
  );
}

export default ProfileCard;
