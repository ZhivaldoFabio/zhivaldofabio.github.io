// src/pages/admin/StockInventory.jsx

import { useState } from 'react';

const dummyStock = [
  { id: 1, name: 'Rice', quantity: 20, unit: 'kg', lastUpdated: '2025-07-25' },
  { id: 2, name: 'Eggs', quantity: 5, unit: 'pcs', lastUpdated: '2025-07-30' },
  {
    id: 3,
    name: 'Chicken',
    quantity: 15,
    unit: 'kg',
    lastUpdated: '2025-07-29',
  },
  { id: 4, name: 'Oil', quantity: 9, unit: 'L', lastUpdated: '2025-07-28' },
  { id: 5, name: 'Sugar', quantity: 8, unit: 'kg', lastUpdated: '2025-07-31' },
];

export default function StockInventory() {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [sortBy, setSortBy] = useState('name');

  const getStatus = (qty) => (qty <= 10 ? 'Low Stock' : 'Available');

  const sortedItems = [...dummyStock]
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'quantity') return a.quantity - b.quantity;
      if (sortBy === 'status')
        return getStatus(a.quantity).localeCompare(getStatus(b.quantity));
      if (sortBy === 'lastUpdated')
        return new Date(b.lastUpdated) - new Date(a.lastUpdated);
      return a.name.localeCompare(b.name);
    });

  const paginatedItems = sortedItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);

  return (
    <div className="p-6">
      <button
        onClick={() => window.history.back()}
        className="mb-4 text-sm text-blue-600 hover:underline"
      >
        ← Back
      </button>

      <h1 className="text-2xl font-bold mb-4">Stock Inventory</h1>

      <input
        type="text"
        placeholder="Search stock items..."
        className="border rounded px-3 py-2 mb-4 w-full md:w-1/3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="mb-4 flex gap-2">
        <label className="text-sm font-medium">Sort by:</label>
        <select
          className="border rounded px-2 py-1"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="quantity">Quantity</option>
          <option value="status">Status</option>
          <option value="lastUpdated">Last Updated</option>
        </select>
      </div>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Item Name</th>
            <th className="border px-4 py-2">Quantity</th>
            <th className="border px-4 py-2">Unit</th>
            <th className="border px-4 py-2">Last Updated</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedItems.map((item) => (
            <tr
              key={item.id}
              className={`hover:bg-gray-50 ${
                getStatus(item.quantity) === 'Low Stock' ? 'bg-red-100' : ''
              }`}
            >
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.quantity}</td>
              <td className="border px-4 py-2">{item.unit}</td>
              <td className="border px-4 py-2">{item.lastUpdated}</td>
              <td className="border px-4 py-2">{getStatus(item.quantity)}</td>
              <td className="border px-4 py-2 space-x-2">
                <button className="text-blue-600 hover:underline">Edit</button>
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-center space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
