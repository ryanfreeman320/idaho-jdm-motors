import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Inventory from './Inventory';

function App() {
  return (
    <Router>
      <nav className="p-4 border-b flex justify-center gap-8 text-lg">
        <Link to="/">Home</Link>
        <Link to="/inventory">Inventory</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </Router>
  );
}

export default App;
