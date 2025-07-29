import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async'; // ✅ Import HelmetProvider
import Home from './Home';
import Inventory from './Inventory';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import VehicleDetail from './VehicleDetail';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HelmetProvider> {/* ✅ Wrap the entire app */}
      <Router>
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <NavLink to="/" className="flex items-center gap-2">
              <img src="/images/logo.png" alt="Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold text-gray-800">Nippon Motors</span>
            </NavLink>

            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            <nav className={`md:flex space-x-6 ${menuOpen ? 'block mt-4 md:mt-0' : 'hidden md:block'}`}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-500'
                }
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/inventory"
                className={({ isActive }) =>
                  isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-500'
                }
                onClick={() => setMenuOpen(false)}
              >
                Inventory
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-500'
                }
                onClick={() => setMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-500'
                }
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </NavLink>
            </nav>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/inventory/:id" element={<VehicleDetail />} />
          </Routes>
          <Footer />
        </main>
      </Router>
    </HelmetProvider>
  );
}

export default App;
