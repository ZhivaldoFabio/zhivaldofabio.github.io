export default function AdminMenuManagement() {
  const menuItems = [
    {
      id: 1,
      name: 'Nasi Goreng',
      category: 'Food',
      price: 'Rp15.000',
      image: 'https://via.placeholder.com/50',
    },
    {
      id: 2,
      name: 'Es Teh Manis',
      category: 'Drink',
      price: 'Rp5.000',
      image: 'https://via.placeholder.com/50',
    },
    {
      id: 3,
      name: 'Mie Rebus',
      category: 'Food',
      price: 'Rp12.000',
      image: 'https://via.placeholder.com/50',
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-orange-600 mb-4">
        🍽️ Menu Management
      </h1>
      <button className="mb-6 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
        + Add New Item
      </button>

      <div className="space-y-4">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border rounded shadow-sm bg-white"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-cover rounded"
              />
              <div>
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-gray-500">{item.category}</div>
              </div>
            </div>
            <div className="text-sm font-medium">{item.price}</div>
            <div className="space-x-2">
              <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                Edit
              </button>
              <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
