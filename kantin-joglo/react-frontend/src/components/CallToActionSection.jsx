export default function CallToActionSection() {
  return (
    <section className="bg-gradient-to-r from-orange-400 to-yellow-400 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Siap Untuk Memesan?
        </h2>
        <p className="text-lg mb-8">
          Klik tombol di bawah untuk melihat menu lengkap atau langsung pesan
          makanan favoritmu!
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#menu"
            className="bg-white text-orange-500 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-orange-100 transition"
          >
            Lihat Menu
          </a>
          <a
            href="https://wa.me/6288233562800"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-green-600 transition"
          >
            Pesan Lewat WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
