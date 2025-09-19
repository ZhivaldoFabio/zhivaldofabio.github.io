// react-frontend/src/App.jsx

// import { useState } from 'react'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Admin from './pages/admin/Admin';
import Login from './pages/Login';
import Orders from './pages/Orders';
import AdminMenuManagement from './pages/admin/MenuManagement';
import OrdersHistory from './pages/admin/OrdersHistory';
import UsersManagement from './pages/admin/UsersManagement';
import StockInventory from './pages/admin/StockInventory';
import OrderTransactions from './pages/admin/OrderTransactions';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route
          path="/admin/menu-management"
          element={<AdminMenuManagement />}
        />
        <Route path="/admin/orders-history" element={<OrdersHistory />} />
        <Route path="/admin/users-management" element={<UsersManagement />} />
        <Route path="/admin/stock-inventory" element={<StockInventory />} />
        <Route
          path="/admin/order-transactions"
          element={<OrderTransactions />}
        />
      </Routes>
    </Router>
  );
}
