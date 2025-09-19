// src/pages/admin/AdminOrdersHistory.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function OrdersHistory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('All');

  const itemsPerPage = 2;

  const orders = [
    {
      id: 'ORD001',
      customer: 'John Doe',
      date: '2025-07-31 10:30',
      items: 'Nasi Goreng, Es Teh',
      total: '25.000',
      status: 'Completed',
    },
    {
      id: 'ORD002',
      customer: 'Guest',
      date: '2025-07-31 11:00',
      items: 'Mie Ayam',
      total: '15.000',
      status: 'Pending',
    },
    {
      id: 'ORD003',
      customer: 'Jane Smith',
      date: '2025-07-31 12:15',
      items: 'Bakso, Teh Manis',
      total: '30.000',
      status: 'Cancelled',
    },
    {
      id: 'ORD004',
      customer: 'Alex Hartono',
      date: '2025-07-31 13:45',
      items: 'Soto Ayam, Air Mineral',
      total: '28.000',
      status: 'Completed',
    },
  ];

  // 1. Filter orders by search
  const filteredOrders = orders
    .filter((order) =>
      `${order.id} ${order.customer} ${order.items}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
    .filter((order) => statusFilter === 'All' || order.status === statusFilter);

  // 2. Paginate the filtered list
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOrders = filteredOrders.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // 3. Navigation handlers
  const nextPage = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  // 4. Reset to page 1 when search changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Customer Order History</h1>

      <input
        type="text"
        placeholder="Search by customer, item, or ID..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full max-w-md mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-orange-400"
      />
      <select
        value={statusFilter}
        onChange={(e) => {
          setStatusFilter(e.target.value);
          setCurrentPage(1); // reset page on filter change
        }}
        className="mb-4 ml-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-orange-400"
      >
        <option value="All">All Statuses</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
        <option value="Cancelled">Cancelled</option>
      </select>

      <table className="w-full text-sm border rounded shadow overflow-hidden">
        <thead className="bg-orange-100">
          <tr>
            <th className="p-2 border">Order ID</th>
            <th className="p-2 border">Customer</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Items</th>
            <th className="p-2 border">Total</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.length > 0 ? (
            currentOrders.map((order) => (
              <tr key={order.id} className="text-center hover:bg-orange-50">
                <td className="p-2 border">{order.id}</td>
                <td className="p-2 border">{order.customer}</td>
                <td className="p-2 border">{order.date}</td>
                <td className="p-2 border">{order.items}</td>
                <td className="p-2 border">{order.total}</td>
                <td className="p-2 border">{order.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="p-4 text-center text-gray-500">
                No matching orders found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      {filteredOrders.length > itemsPerPage && (
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="px-4 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            ← Previous
          </button>
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Next →
          </button>
        </div>
      )}

      <Link
        to="/admin"
        className="inline-block mt-6 text-sm text-indigo-600 hover:underline"
      >
        ← Back to Dashboard
      </Link>
    </div>
  );
}
