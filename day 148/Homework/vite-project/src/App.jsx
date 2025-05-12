import React from 'react';
import ProfileCard from './ProfileCard';

function App() {
  const user = {
    firstName: "John",
    lastName: "Doe",
    description: "Web developer passionate about coding.",
    photo: "https://via.placeholder.com/150"
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <ProfileCard user={user} />
    </div>
  );
}

export default App;
