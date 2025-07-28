// src/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-sm py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Nippon Motors. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="https://facebook.com" className="hover:text-blue-400">Facebook</a>
          <a href="https://instagram.com" className="hover:text-pink-400">Instagram</a>
          <a href="mailto:info@nipponmotors.org" className="hover:text-blue-300">Email</a>
        </div>
      </div>
    </footer>
  );
}
