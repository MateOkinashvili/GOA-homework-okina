import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      setMessage('გთხოვთ შეავსოთ ყველა ველი.'); setIsError(true); return;
    }
    if (password.length < 6) {
      setMessage('პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო.'); setIsError(true); return;
    }
    if (password !== confirmPassword) {
      setMessage('პაროლები არ ემთხვევა.'); setIsError(true); return;
    }

    try {
      const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      if (users.some(u => u.username === username || u.email === email)) {
        setMessage('მომხმარებელი ან ელ-ფოსტა უკვე არსებობს.'); setIsError(true); return;
      }

      users.push({ username, email, password });
      localStorage.setItem('registeredUsers', JSON.stringify(users));

      setMessage('რეგისტრაცია წარმატებით განხორციელდა!'); setIsError(false);
      setUsername(''); setEmail(''); setPassword(''); setConfirmPassword('');
    } catch (error) {
      setMessage('რეგისტრაციისას მოხდა შეცდომა.'); setIsError(true);
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-sans antialiased text-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">რეგისტრაცია</h2>
        {message && (
          <div className={`p-3 mb-4 rounded-md text-center text-sm font-medium ${isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {message}
          </div>
        )}
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">მომხმარებლის სახელი</label>
            <input type="text" id="username" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">ელ-ფოსტა</label>
            <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">პაროლი</label>
            <input type="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">პაროლის დადასტურება</label>
            <input type="password" id="confirmPassword" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
          <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            რეგისტრაცია
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
