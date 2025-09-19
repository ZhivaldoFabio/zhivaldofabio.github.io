// src/pages/Menu.jsx
export default function Menu() {
    return (
      <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Our Menu</h1>
          <p className="mb-12 text-lg">Explore our delicious food and beverages.</p>
  
          {/* Placeholder for categories or items */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-2">Nasi Goreng</h2>
              <p className="text-gray-600">Fried rice with chicken, vegetables, and our special spices.</p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-2">Es Teh Manis</h2>
              <p className="text-gray-600">Sweet iced tea, perfect for a hot day.</p>
            </div>
            {/* Add more items here later */}
          </div>
        </div>
      </div>
    );
  }
  