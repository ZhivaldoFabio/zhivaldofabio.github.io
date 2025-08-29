// product.tsx

import React, { useState } from 'react';

const products = [
  {
    name: 'Wuzz Oke',
    category: 'Personal',
    speed: '25 mbps',
    price: '222.000',
    image: '/assets/wuzz-oke.png',
    feature: [
      'Unlimited Data',
      'Free Installation',
      '24/7 Customer Support',
      'No Hidden Fees',
      'Free Wi-Fi Router',
      'Upload & Download 1:1',
    ],
    details: [
      'Harga sudah termasuk PPN',
      'Ideal untuk 1-5 Device',
      'Gratis pemasangan Rp650.000',
      'Internet tanpa FUP',
      'Garansi alat rusak selama berlangganan',
      'Tidak ada kenaikan harga kecuali PPN naik',
    ],
  },
  {
    name: 'Wuzz Oke 2',
    category: 'Personal',
    speed: '45 mbps',
    price: '255.300',
    image: '/assets/wuzz-oke2.png',
    feature: [
      'Unlimited Data',
      'Free Installation',
      '24/7 Customer Support',
      'No Hidden Fees',
      'Free Wi-Fi Router',
      'Upload & Download 1:1',
    ],
    details: [
      'Harga sudah termasuk PPN',
      'Ideal untuk 1-7 Device',
      'Gratis pemasangan Rp650.000',
      'Internet tanpa FUP',
      'Garansi alat rusak selama berlangganan',
      'Tidak ada kenaikan harga kecuali PPN naik',
    ],
  },
];

const tabs = ['Personal', 'UMKM', 'Enterprise'];

export default function Product() {
  const [activeTab, setActiveTab] = useState('Personal');

  // Filter products by category (add category to your product objects)
  const filteredProducts = products.filter(
    (product) => product.category === activeTab
  );

  return (
    <div>
      <h1 className="text-5xl font-poppins">Product</h1>
      <div className="flex gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-4 py-2 rounded-full font-medium transition-colors
              ${
                activeTab === tab
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }
            `}
          >
            {tab}
            <span
              className={`absolute left-1/2 -bottom-1.5 -translate-x-1/2 h-1 w-8 rounded-full bg-blue-600 transition-all duration-300
                ${
                  activeTab === tab
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-75'
                }
              `}
            />
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-6">
        {filteredProducts.map((product, idx) => (
          <div
            key={idx}
            className="bg-white shadow-xl rounded p-6 w-80 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-32 w-full object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-blue-600 font-semibold mb-2">{product.speed}</p>
            <p className="text-lg font-bold mb-4">Rp {product.price}</p>
            <button className="bg-blue-600 text-white font-semibold rounded-lg px-5 py-2 shadow hover:bg-blue-700 transition-colors duration-200 focus:outline-none cursor-pointer">
              Langganan Sekarang
            </button>
            <ul className="mb-2">
              {product.feature.map((f, i) => (
                <li key={i} className="text-sm text-gray-700">
                  • {f}
                </li>
              ))}
            </ul>
            <ul className="text-xs text-gray-500">
              {product.details.map((d, i) => (
                <li key={i}>- {d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
