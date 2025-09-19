// react-frontend/src/pages/Home.jsx

import { useState } from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import MenuHighlight from '../components/MenuHighlight';
import LocationSection from '../components/LocationSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CallToActionSection from '../components/CallToActionSection';
import Navbar from '../components/Navbar';

export default function Home() {
  const [debugData] = useState(null);
  const [result, setResult] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [users, setUsers] = useState(null);

  // Function: login
  async function handleLogin() {
    const res = await fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'admin@example.com',
        password: 'admin123',
      }),
    });
    const data = await res.json();
    setResult(data);

    if (data.access_token) {
      setToken(data.access_token);
      localStorage.setItem('token', data.access_token); // save token so it survives refresh
    }
  }

  // Function: fetch protected users
  async function fetchUsers() {
    if (!token) {
      alert('No token, please login first.');
      return;
    }

    try {
      const res = await fetch('http://127.0.0.1:8000/api/users', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const text = await res.text(); // get raw response
      let data;

      try {
        data = JSON.parse(text); // try parsing
      } catch {
        data = { raw: text }; // if not JSON, show raw
      }

      setUsers({
        status: res.status,
        ok: res.ok,
        data,
      });
    } catch (err) {
      setUsers({ error: err.message });
    }
  }

  // Function: logout
  function handleLogout() {
    setToken(null);
    localStorage.removeItem('token');
    setUsers(null);
    setResult({ message: 'Logged out (frontend only)' });
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MenuHighlight />
      <LocationSection />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />

      {/* Debug Section */}
      <div
        style={{ background: '#f0f0f0', padding: '1rem', marginTop: '2rem' }}
      >
        <h2>Debug API Response</h2>
        <pre>{JSON.stringify(debugData, null, 2)}</pre>
      </div>

      {/* Auth Debug Section */}
      <div
        style={{ background: '#e0f7fa', padding: '1rem', marginTop: '2rem' }}
      >
        <h2>Auth Flow Test</h2>

        {!token ? (
          <button
            onClick={handleLogin}
            className="mx-2 p-2 rounded-md bg-emerald-700"
          >
            Login
          </button>
        ) : (
          <>
            <p>
              <strong>Token:</strong> {token}
            </p>
            <button
              onClick={fetchUsers}
              className="mx-2 p-2 rounded-md bg-emerald-700"
            >
              Fetch Users
            </button>
            <button
              onClick={handleLogout}
              className="mx-2 p-2 rounded-md bg-emerald-700"
            >
              Logout
            </button>
          </>
        )}

        <h3>Login Response:</h3>
        <pre>{JSON.stringify(result, null, 2)}</pre>

        <h3>Users Response:</h3>
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </div>
    </>
  );
}
