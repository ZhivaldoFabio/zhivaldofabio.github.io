// src/pages/Login.jsx
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Bypass: always navigate to /admin
    navigate('/admin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-yellow-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-orange-600 text-center">
          Admin Login
        </h2>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium">
            Email (skip this)
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Type anything"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-1 font-medium">
            Password (skip this too)
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Just click login"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
}
