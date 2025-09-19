// src/components/AdminSidebar.jsx
import { Link } from 'react-router-dom';

export default function AdminSidebar() {
  return (
    <aside className="bg-orange-100 w-64 h-screen p-6 shadow-md">
      <h2 className="text-xl font-bold text-orange-600 mb-6">Admin Panel</h2>
      <nav className="flex flex-col gap-4 text-gray-700">
        <Link to="/admin" className="hover:text-orange-500">
          Dashboard
        </Link>
        <Link to="/admin/orders" className="hover:text-orange-500">
          Orders
        </Link>
        <Link to="/admin/menu-management" className="hover:text-orange-500">
          Menu Management
        </Link>
        <Link to="/admin/orders-history" className="hover:text-orange-500">
          Order History
        </Link>
        <Link to="/admin/users-management" className="hover:text-orange-500">
          Users Management
        </Link>
        <Link to="/admin/stock-inventory" className="hover:text-orange-500">
          Stock Inventory
        </Link>
        <Link to="/admin/order-transactions" className="hover:text-orange-500">
          Order Transactions
        </Link>

        <Link to="/admin/reports" className="hover:text-orange-500">
          Reports
        </Link>
      </nav>
    </aside>
  );
}
