import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="p-8">
      <header className="text-center border-b pb-6">
        <img src="/logo.png" alt="Nippon Motors logo" className="mx-auto h-28 mb-4" />
        <h1 className="text-4xl font-bold">Nippon Motors</h1>
        <p className="text-lg text-gray-600">Imported Japanese Vehicles | Boise, ID</p>
        <div className="mt-4">
          <Link to="/inventory" className="text-blue-600 underline text-lg">
            View Inventory →
          </Link>
        </div>
      </header>
    </main>
  );
}
