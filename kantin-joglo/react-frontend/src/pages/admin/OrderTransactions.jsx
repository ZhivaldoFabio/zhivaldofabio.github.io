// src/pages/admin/OrderTransactions.jsx
import { useState } from 'react';

const dummyOrders = [
  {
    id: 1,
    customer: 'Alice',
    total: 50000,
    status: 'Pending',
    date: '2025-07-30',
  },
  {
    id: 2,
    customer: 'Bob',
    total: 75000,
    status: 'Completed',
    date: '2025-07-28',
  },
  {
    id: 3,
    customer: 'Charlie',
    total: 30000,
    status: 'Canceled',
    date: '2025-07-27',
  },
  {
    id: 4,
    customer: 'Diana',
    total: 82000,
    status: 'Pending',
    date: '2025-07-31',
  },
  {
    id: 5,
    customer: 'Ethan',
    total: 91000,
    status: 'Completed',
    date: '2025-07-25',
  },
  {
    id: 6,
    customer: 'Fanny',
    total: 67000,
    status: 'Pending',
    date: '2025-07-24',
  },
];

export default function OrderTransactions() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Filter by date range
  const filteredOrders = dummyOrders.filter((order) => {
    const orderDate = new Date(order.date);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    const matchDate =
      (!start || orderDate >= start) && (!end || orderDate <= end);

    const matchSearch = order.customer
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchStatus = filterStatus === 'all' || order.status === filterStatus;

    return matchDate && matchSearch && matchStatus;
  });

  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

  return (
    <div className="p-6">
      <button
        onClick={() => window.history.back()}
        className="mb-4 text-sm text-blue-600 hover:underline"
      >
        ← Back
      </button>

      <h1 className="text-2xl font-bold mb-4">Order Transactions</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by customer name..."
          className="border rounded px-3 py-2 w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border rounded px-2 py-2 w-full md:w-1/4"
        >
          <option value="all">All Status</option>
          <option value="Paid">Paid</option>
          <option value="Unpaid">Unpaid</option>
        </select>
      </div>

      <div className="mb-4 flex flex-col md:flex-row gap-4">
        <div>
          <label className="block text-sm font-medium">Start Date</label>
          <input
            type="date"
            className="border rounded px-2 py-1"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">End Date</label>
          <input
            type="date"
            className="border rounded px-2 py-1"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Customer</th>
            <th className="border px-4 py-2">Total</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedOrders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{order.date}</td>
              <td className="border px-4 py-2">{order.customer}</td>
              <td className="border px-4 py-2">
                Rp {order.total.toLocaleString()}
              </td>
              <td className="border px-4 py-2">{order.status}</td>
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
