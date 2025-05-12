import React from 'react';

function Main() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <section id="about" className="mb-10">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          About Me
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Hello! I'm a Web Developer</h3>
          <p className="text-gray-700 mb-4">
            I like React.
          </p>
          <p className="text-gray-700">
            Currently learning and improving my skills in web development.
          </p>
        </div>
      </section>

      <section id="personal-info" className="mb-10">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Personal Information
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p className="text-gray-700">
                Tbilisi, Georgia
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Interests</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  Gym & Fitness
                </li>
                <li>
                  Armwrestling
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
