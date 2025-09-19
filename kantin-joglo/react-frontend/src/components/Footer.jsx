export default function Footer() {
    return (
      <footer className="bg-gray-100 text-gray-700 py-6 mt-10 border-t">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-semibold mb-2">Kantin Joglo</h4>
            <p className="text-sm">Fresh. Local. Delicious.</p>
          </div>
  
          <div>
            <h4 className="text-lg font-semibold mb-2">Explore</h4>
            <ul className="text-sm space-y-1">
              <li><a href="#" className="hover:text-black">Menu</a></li>
              <li><a href="#" className="hover:text-black">Order</a></li>
              <li><a href="#" className="hover:text-black">About</a></li>
            </ul>
          </div>
  
          <div>
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <p className="text-sm">📍 Joglo, Yogyakarta</p>
            <p className="text-sm">📞 +62 812-3456-7890</p>
          </div>
        </div>
  
        <div className="text-center text-xs text-gray-500 mt-6">
          &copy; {new Date().getFullYear()} Kantin Joglo. All rights reserved.
        </div>
      </footer>
    );
  }
  