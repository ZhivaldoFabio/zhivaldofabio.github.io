// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-br from-orange-200 to-yellow-200 sticky top-0 z-50 shadow-sm px-6 py-4 backdrop-blur-md bg-opacity-90">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-extrabold text-orange-600">
          Kantin Joglo
        </div>
        <div className="space-x-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
          >
            Menu
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
          >
            About
          </Link>
          <a
            href="#contact"
            className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
          >
            Contact
          </a>
          <Link
            to="/login"
            className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
