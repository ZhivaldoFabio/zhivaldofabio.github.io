// src/pages/Orders.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const availableItems = [
  { name: 'Nasi Goreng', price: 15000 },
  { name: 'Mie Ayam', price: 12000 },
  { name: 'Soto Ayam', price: 14000 },
  { name: 'Es Teh', price: 4000 },
  { name: 'Es Jeruk', price: 5000 },
];

export default function Orders() {
  const [selectedItem, setSelectedItem] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [orderItems, setOrderItems] = useState([]);

  const addItem = () => {
    const item = availableItems.find((i) => i.name === selectedItem);
    if (!item || quantity < 1) return;

    setOrderItems([
      ...orderItems,
      {
        name: item.name,
        price: item.price,
        quantity,
        total: item.price * quantity,
      },
    ]);

    setSelectedItem('');
    setQuantity(1);
  };

  const removeItem = (indexToRemove) => {
    setOrderItems(orderItems.filter((_, i) => i !== indexToRemove));
  };

  const total = orderItems.reduce((sum, item) => sum + item.total, 0);
  const navigate = useNavigate();

  return (
    <div className="p-8 flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-orange-600">
        Point of Sale (Orders)
      </h1>
      {/* Order Form */}
      <div className="flex flex-wrap gap-4 items-end">
        <div>
          <label className="block text-sm font-medium mb-1">Select Item</label>
          <select
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.target.value)}
            className="border px-4 py-2 rounded w-52"
          >
            <option value="">-- Choose --</option>
            {availableItems.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name} — Rp {item.price.toLocaleString()}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Quantity</label>
          <input
            type="number"
            value={quantity}
            min={1}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="border px-4 py-2 rounded w-24"
          />
        </div>

        <button
          onClick={addItem}
          className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600"
        >
          Add to Order
        </button>
      </div>
      {/* Order Summary */}
      <div className="mt-4 border rounded p-4 bg-white shadow">
        <h2 className="text-lg font-semibold mb-3">Current Order</h2>
        {orderItems.length === 0 ? (
          <p className="text-gray-500">No items in order.</p>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="pb-2">Item</th>
                <th className="pb-2">Qty</th>
                <th className="pb-2">Price</th>
                <th className="pb-2">Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orderItems.map((item, index) => (
                <tr key={index} className="border-b hover:bg-orange-50">
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>Rp {item.price.toLocaleString()}</td>
                  <td>Rp {item.total.toLocaleString()}</td>
                  <td>
                    <button
                      onClick={() => removeItem(index)}
                      className="text-red-500 text-sm"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              <tr className="font-bold">
                <td colSpan={3}>Total</td>
                <td>Rp {total.toLocaleString()}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-sm text-orange-600 hover:underline"
      >
        ← Back
      </button>
    </div>
  );
}
