import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import vehicleData from './vehicleData';

export default function Inventory() {
  const [filters, setFilters] = useState({ status: '', make: '', year: '', type: '' });

  const filteredVehicles = vehicleData.filter((v) =>
    (!filters.status || v.status === filters.status) &&
    (!filters.make || v.make === filters.make) &&
    (!filters.year || v.year.toString() === filters.year) &&
    (!filters.type || v.type === filters.type)
  );

  return (
    <main className="p-8">
      <Helmet>
        <title>Inventory | Nippon Motors</title>
        <meta
          name="description"
          content="Browse our current inventory of imported Japanese vehicles including vans, sports cars, SUVs, and campers. All 25-year compliant and U.S. legal."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nipponmotors.org/inventory" />
      </Helmet>

      <h1 className="text-3xl font-bold text-center border-b pb-4 mb-8">Inventory</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[{ label: 'Status', name: 'status', options: ['Available', 'Sold'] },
          { label: 'Make', name: 'make', options: ['Toyota', 'Mitsubishi', 'Nissan', 'Subaru', 'Chevy'] },
          { label: 'Year', name: 'year', options: ['1995', '1996', '1997', '1998', '1999', '2000'] },
          { label: 'Type', name: 'type', options: ['Van', 'SUV', 'Sports Car', 'Truck', 'Camper'] }]
          .map((filter) => (
            <select
              key={filter.name}
              value={filters[filter.name]}
              onChange={(e) => setFilters((f) => ({ ...f, [filter.name]: e.target.value }))}
              className="border border-gray-300 rounded p-2"
            >
              <option value="">
                All {filter.label === 'Status' ? 'Statuses' : `${filter.label}s`}
              </option>
              {filter.options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredVehicles.map((vehicle) => (
          <Link to={`/inventory/${vehicle.id}`} key={vehicle.id} className="group">
            <div className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden relative transform transition duration-200 group-hover:scale-105">
              <div className="relative">
                <img
                  src={vehicle.image}
                  alt={vehicle.title}
                  className="w-full h-48 object-cover"
                />
                <span className={`absolute top-2 left-2 px-3 py-1 text-xs font-semibold rounded-full ${
                  vehicle.status === 'Available' ? 'bg-green-600 text-white' : 'bg-gray-400 text-white'
                }`}>
                  {vehicle.status}
                </span>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-1">{vehicle.title}</h2>
                <p className="text-sm text-gray-600 mb-2">{vehicle.specs}</p>
                <p className="text-sm"><strong>Price:</strong> {vehicle.price}</p>
                <p className="text-sm"><strong>Mileage:</strong> {vehicle.mileage}</p>
                <p className="text-sm"><strong>Year:</strong> {vehicle.year}</p>
                <p className="text-sm"><strong>Make:</strong> {vehicle.make}</p>
                <p className="text-sm"><strong>Type:</strong> {vehicle.type}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
