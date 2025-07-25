import { Link } from 'react-router-dom';
import vehicleData from './vehicleData';

export default function Home() {
  const featuredVehicles = vehicleData.filter(v => v.status === 'Available').slice(0, 4);

  return (
    <main className="text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: 'url(/images/hero-van.jpg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl font-bold mb-3">Japanese Imports. American Roads.</h1>
            <p className="text-lg mb-6">Unique, reliable, and adventure-ready vehicles — direct from Japan.</p>
            <Link
              to="/inventory"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded shadow text-white font-semibold"
            >
              Browse Inventory
            </Link>
          </div>
        </div>
      </section>

      {/* Logo and Tagline */}
      <header className="text-center py-10">
        <img src="/logo.png" alt="Nippon Motors logo" className="mx-auto h-28 mb-4" />
        <h2 className="text-3xl font-bold">Nippon Motors</h2>
        <p className="text-lg text-gray-600">Imported Japanese Vehicles | Boise, ID</p>
      </header>

      {/* Featured Vehicles */}
      <section className="px-6 max-w-7xl mx-auto mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-center">Featured Vehicles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredVehicles.map(vehicle => (
            <Link to={`/inventory/${vehicle.id}`} key={vehicle.id} className="bg-white rounded-lg shadow hover:shadow-md transition">
              <img src={vehicle.image} alt={vehicle.title} className="h-40 w-full object-cover rounded-t" />
              <div className="p-4">
                <h4 className="font-bold text-lg mb-1">{vehicle.title}</h4>
                <p className="text-sm text-gray-600">{vehicle.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Nippon Motors */}
      <section className="bg-gray-100 py-12">
        <h3 className="text-2xl font-semibold text-center mb-8">Why Nippon Motors?</h3>
        <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto text-center">
          <div>
            <h4 className="font-bold text-lg mb-2">Hand-Selected Imports</h4>
            <p className="text-sm text-gray-700">We personally inspect and select every vehicle we import — no surprises.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Fully Legal & 25-Year Compliant</h4>
            <p className="text-sm text-gray-700">All vehicles are U.S. legal with proper documentation and clean titles.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Adventure-Ready Vehicles</h4>
            <p className="text-sm text-gray-700">From camper vans to turbo wagons, our inventory is built for life off the beaten path.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
