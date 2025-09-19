export default function Hero() {
    return (
      <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-orange-100 to-yellow-200 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Selamat Datang di <span className="text-orange-500">Kantin Joglo</span></h1>
        <p className="text-lg mb-8 text-gray-700">Makanan Lezat, Harga Bersahabat</p>
        <div className="space-x-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-xl shadow-lg transition">Lihat Menu</button>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-xl shadow-lg transition">Pesan Sekarang</button>
        </div>
      </section>
    );
  }
  