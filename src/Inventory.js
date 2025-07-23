import { useState } from 'react';

const sampleInventory = [
  {
    id: 'delica-97',
    title: '1997 Mitsubishi Delica Space Gear',
    image: '/images/delica-1997.jpg',
    status: 'Available',
    year: 1997,
    make: 'Mitsubishi',
    type: 'Van',
    specs: '2.8L Turbo Diesel | Crystal Lite Roof | 4WD'
  },
  {
    id: 'hiace-96',
    title: '1996 Toyota Hiace Super Custom',
    image: '/images/hiace-1996.jpg',
    status: 'Sold',
    year: 1996,
    make: 'Toyota',
    type: 'Van',
    specs: '3.0L Diesel Turbo | 4WD | Automatic'
  },
  {
    id: 'grand-hiace-99',
    title: '1999 Toyota Grand Hiace',
    image: '/images/grand_hiace-1999.png',
    status: 'Available',
    year: 1999,
    make: 'Toyota',
    type: 'Van',
    specs: '3.4L Gasoline | 4WD | Automatic'
  },
  {
    id: 'evo-vi-99',
    title: '1999 Mitsubishi Evolution VI',
    image: '/images/evo_vi_gsr-1999.png',
    status: 'Sold',
    year: 1999,
    make: 'Mitsubishi',
    type: 'Sports Car',
    specs: '2.0L Turbo Gasoline | 4WD | Manual'
  },
];

export default function Inventory() {
  const [filters, setFilters] = useState({ status: '', make: '', year: '', type: '' });

  const filtered = sampleInventory.filter((v) =>
    (!filters.status || v.status === filters.status) &&
    (!filters.make || v.make === filters.make) &&
    (!filters.year || v.year.toString() === filters.year) &&
    (!filters.type || v.type === filters.type)
  );

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-center border-b pb-4">Inventory</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[{ label: 'Status', name: 'status', options: ['Available', 'Sold'] },
          { label: 'Make', name: 'make', options: ['Toyota', 'Mitsubishi', 'Nissan','Subaru'] },
          { label: 'Year', name: 'year', options: ['1995', '1996', '1997','1998','1999','2000'] },
          { label: 'Type', name: 'type', options: ['Van', 'SUV', 'Sports Car','Truck'] }]
          .map((filter) => (
            <select key={filter.name} value={filters[filter.name]} onChange={(e) =>
              setFilters((f) => ({ ...f, [filter.name]: e.target.value }))}>
              <option value="">All {filter.label}s</option>
              {filter.options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((car) => (
          <div key={car.id} className="border rounded-lg overflow-hidden">
            <img src={car.image} alt={car.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{car.title}</h3>
              <p>{car.specs}</p>
              <span className={`text-sm font-semibold ${car.status === 'Available' ? 'text-green-600' : 'text-red-600'}`}>
                {car.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
