import React from "react";
import "./index.css";

function App() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-4 md:p-8 space-y-12">
      <header className="text-center border-b pb-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Idaho JDM Motors</h1>
        <p className="text-lg md:text-xl text-gray-600 mt-2">Imported Japanese Vehicles | Boise, ID</p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold border-b pb-2">Featured Inventory</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "1996 Toyota Hiace Super Custom Limited",
              img: "https://www.mc-warehouse.com/wp-content/uploads/2024/05/1996-TOYOTA-HIACE-FRONT.jpg",
              status: "Sold",
              specs: "3.0L Diesel Turbo | 4WD | Automatic"
            },
            {
              title: "1997 Mitsubishi Delica Space Gear",
              img: "https://www.jdmcarandmotorcycle.com/wp-content/uploads/2023/04/delica-main.jpg",
              status: "Sold",
              specs: "2.8L Turbo Diesel | Crystal Lite Roof | 4WD"
            },
            {
              title: "1995 Nissan Skyline R33 GTS25T",
              img: "https://www.ottoex.com/wp-content/uploads/2024/01/r33gtst.jpg",
              status: "Sold",
              specs: "2.5L Turbo | RWD | Manual"
            }
          ].map((car, i) => (
            <div key={i} className="rounded-2xl shadow-md border overflow-hidden">
              <img src={car.img} alt={car.title} className="w-full h-56 object-cover" />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-bold">{car.title}</h3>
                <p className="text-gray-600">{car.specs}</p>
                <span className="text-sm font-semibold text-red-600 uppercase">{car.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold border-b pb-2">About Us</h2>
        <p>
          Idaho JDM Motors is a Boise-based importer of high-quality, legally imported Japanese vehicles. We specialize
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
        <p>📧 info@idahojdmmotors.com</p>
        <p>📞 (208) 555-0199</p>
        <p className="text-gray-500 text-sm">*By appointment only</p>
      </section>

      <footer className="border-t pt-6 text-center text-sm text-gray-500">
        © 2025 Idaho JDM Motors. All rights reserved.
      </footer>
    </main>
  );
}

export default App;
