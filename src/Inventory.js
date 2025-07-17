import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-4 md:p-8 space-y-12">
      <header className="text-center border-b pb-6">
        <img src="/logo.png" alt="Nippon Motors logo" className="mx-auto h-28 mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Nippon Motors</h1>
        <p className="text-lg md:text-xl text-gray-600 mt-2">Imported Japanese Vehicles | Boise, ID</p>
        <div className="mt-4">
          <Link href="/inventory" className="text-blue-600 hover:underline text-lg">
            View Inventory →
          </Link>
        </div>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold border-b pb-2">About Us</h2>
        <p>
          Nippon Motors is a Boise-based importer of high-quality, legally imported Japanese vehicles. We specialize
          in unique and reliable vans, 4WD off-roaders, and classic JDM cars. Each vehicle is hand-selected and
          inspected for condition and compliance with U.S. import laws.
        </p>
        <p>
          Whether you're looking for a rugged Delica for mountain adventures or a VIP Hiace for road trips, we’ve got
          something special. We handle import logistics, titling, and support—so you can focus on enjoying the drive.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold border-b pb-2">Contact Us</h2>
        <p>📍 Boise, Idaho</p>
        <p>📧 info@nipponmotors.com</p>
        <p>📞 (208) 555-0199</p>
        <p className="text-gray-500 text-sm">*By appointment only</p>
      </section>

      <footer className="border-t pt-6 text-center text-sm text-gray-500">
        © 2025 Nippon Motors. All rights reserved.
      </footer>
    </main>
  );
}
