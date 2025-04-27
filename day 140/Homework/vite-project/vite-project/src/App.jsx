import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./Register";

function App() {
  return (
    <Router>
      <header className="fixed top-0 left-0 right-0 bg-white shadow z-10">
        <nav className="w-full px-6 py-3">
          <div className="flex justify-end">
            <div className="flex space-x-6">
              <span className="text-gray-400">Home</span>
              <span className="text-gray-400">About</span>
              <span className="text-gray-400">Contact</span>
              <Link to="/register" className="text-gray-700 hover:text-blue-500">Register</Link>
              <span className="text-gray-400">Login</span>
            </div>
          </div>
        </nav>

      </header>

      <Routes>
        <Route path="/" element={<h1 className="mt-20 text-center">Home Page</h1>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
