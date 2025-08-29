// components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <a href="/" className="flex items-center overflow-hidden">
        <div className="overflow-hidden h-10 w-32">
          <img
            src="./Logo Wuzznet Transparent_Black 1.svg"
            alt="Wuzznet"
            className="h-full w-full object-cover"
          />
        </div>
      </a>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li>
          <a href="/product" className="hover:text-blue-600 transition">
            Product
          </a>
        </li>
        <li>
          <a href="/promo" className="hover:text-blue-600 transition">
            Promo
          </a>
        </li>
        <li>
          <a href="/coverage-area" className="hover:text-blue-600 transition">
            Coverage Area
          </a>
        </li>
        <li>
          <a href="/about-us" className="hover:text-blue-600 transition">
            About Us
          </a>
        </li>
        <li>
          <a href="/mitra" className="hover:text-blue-600 transition">
            Mitra
          </a>
        </li>
        <li>
          <a
            href="/subscribe"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition font-semibold"
          >
            Langganan Sekarang
          </a>
        </li>
      </ul>
    </nav>
  );
}
