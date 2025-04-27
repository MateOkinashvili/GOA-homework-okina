import { useState } from "react";

function Register() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("userName", name);
    alert("Registered!");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h1 className="text-2xl mb-4">Register</h1>
        <input
          className="border p-2 mb-4 w-full"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
