// src/pages/Admin.jsx
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../../components/AdminSidebar';

const summaryData = {
  users: 42,
  ordersToday: 15,
  lowStock: 3,
  revenue: 2100000,
};

export default function AdminDashboard() {
  const navigate = useNavigate();

  const sections = [
    { title: 'Menu Management', path: '/admin/menu-management' },
    { title: 'User Management', path: '/admin/users-management' },
    { title: 'Customer Orders', path: '/admin/orders' },
    { title: 'Order History', path: '/admin/orders-history' },
    { title: 'Stock Inventory', path: '/admin/stock-inventory' },
    { title: 'Transactions', path: '/admin/order-transactions' },
    { title: 'Reports', path: '/admin/reports' },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 border-r">
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white shadow p-4 rounded-lg">
            <p className="text-gray-500 text-sm">Total Users</p>
            <p className="text-xl font-semibold">{summaryData.users}</p>
          </div>
          <div className="bg-white shadow p-4 rounded-lg">
            <p className="text-gray-500 text-sm">Orders Today</p>
            <p className="text-xl font-semibold">{summaryData.ordersToday}</p>
          </div>
          <div className="bg-white shadow p-4 rounded-lg">
            <p className="text-gray-500 text-sm">Low Stock</p>
            <p className="text-xl font-semibold">{summaryData.lowStock}</p>
          </div>
          <div className="bg-white shadow p-4 rounded-lg">
            <p className="text-gray-500 text-sm">Revenue This Month</p>
            <p className="text-xl font-semibold">
              Rp {summaryData.revenue.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section) => (
            <div
              key={section.title}
              onClick={() => navigate(section.path)}
              className="cursor-pointer bg-blue-50 hover:bg-blue-100 p-6 rounded-lg shadow transition"
            >
              <h2 className="text-lg font-bold text-blue-700">
                {section.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">Go to section →</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
