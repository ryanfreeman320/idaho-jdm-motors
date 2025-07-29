import { Link } from 'react-router-dom';
import vehicleData from './vehicleData';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  const featuredVehicles = vehicleData.filter(v => v.status === 'Available').slice(0, 4);

  return (
    <main className="text-gray-800">
      <Helmet>
        <title>Nippon Motors | Japanese Vehicle Imports</title>
        <meta
          name="description"
          content="Nippon Motors specializes in hand-picked Japanese vehicles imported to Boise, ID. Browse our 25-year compliant vans, SUVs, and adventure-ready rides."
        />
        <meta
          name="keywords"
          content="Japanese vehicles, JDM imports, Toyota Hiace, Toyota Grand Hiace, Mitsubishi Delica, imported vans, Boise Idaho"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nippon Motors | Japanese Vehicle Imports" />
        <meta
          property="og:description"
          content="Browse our curated inventory of reliable, adventure-ready Japanese vehicles imported to the U.S."
        />
        <meta property="og:image" content="https://nipponmotors.org/images/hero-van.jpg" />
        <meta property="og:url" content="https://nipponmotors.org/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nippon Motors | Japanese Vehicle Imports" />
        <meta
          name="twitter:description"
          content="Imported Japanese vehicles for life off the beaten path. View our selection online."
        />
        <meta name="twitter:image" content="https://nipponmotors.org/images/hero-van.jpg" />
      </Helmet>

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
              cla

  );
}
