import { useParams, Link } from 'react-router-dom';
import vehicleData from './vehicleData';
import { Helmet } from 'react-helmet-async';

export default function VehicleDetail() {
  const { id } = useParams();
  const vehicle = vehicleData.find((v) => v.id === id);

  if (!vehicle) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Vehicle not found</h1>
        <Link to="/inventory" className="text-blue-500 underline">← Back to Inventory</Link>
      </div>
    );
  }

  // Create a concise model name (e.g., remove year and make)
  const modelName = vehicle.title
    .replace(`${vehicle.year}`, '')
    .replace(`${vehicle.make}`, '')
    .trim();

  const pageTitle = `Used ${vehicle.year} ${vehicle.make} ${modelName} for Sale | Nippon Motors`;
  const metaDescription = `Buy a ${vehicle.year} ${vehicle.make} ${modelName} with ${vehicle.mileage}, ${vehicle.specs}, and a price of ${vehicle.price}. Available now at Nippon Motors in Boise, ID.`;
  const metaKeywords = [
    vehicle.make,
    modelName,
    `${vehicle.make} ${modelName}`,
    `${modelName} for sale`,
    `${vehicle.make} ${modelName} for sale`,
    vehicle.type,
    vehicle.specs?.split('|').join(',') // specs like "4WD, Turbo, Diesel"
  ].join(', ');

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href={`https://nipponmotors.org/inventory/${vehicle.id}`} />
      </Helmet>

      <Link to="/inventory" className="text-blue-500 underline mb-4 inline-block">← Back to Inventory</Link>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <img src={vehicle.image} alt={vehicle.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2">{vehicle.title}</h1>
          <span className={`inline-block mb-4 px-3 py-1 text-sm font-semibold rounded-full ${vehicle.status === 'Available' ? 'bg-green-600 text-white' : 'bg-gray-400 text-white'}`}>
            {vehicle.status}
          </span>
          <p className="mb-2"><strong>Specs:</strong> {vehicle.specs}</p>
          <p className="mb-2"><strong>Price:</strong> {vehicle.price}</p>
          <p className="mb-2"><strong>Mileage:</strong> {vehicle.mileage}</p>
          <p className="mb-2"><strong>Year:</strong> {vehicle.year}</p>
          <p className="mb-2"><strong>Make:</strong> {vehicle.make}</p>
          <p className="mb-2"><strong>Type:</strong> {vehicle.type}</p>
        </div>
      </div>
    </main>
  );
}
