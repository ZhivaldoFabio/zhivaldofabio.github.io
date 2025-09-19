export default function LocationSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-orange-600">
            Kunjungi Kantin Joglo
          </h2>
          <p className="text-gray-700 mb-6">
            Lokasi strategis di Jogja! Kami buka setiap hari dari jam 9 pagi
            sampai 9 malam. Mampir dan nikmati makanan lezat dengan harga
            bersahabat.
          </p>
          <ul className="text-gray-800">
            <li>
              <strong>Alamat:</strong> Kaliurang Barat, Kaliurang,
              Hargobinangun, Kec. Pakem, Kabupaten Sleman, Daerah Istimewa
              Yogyakarta 55582
            </li>
            <li>
              <strong>Telepon:</strong> +62 882-3356-2800
            </li>
            <li>
              <strong>Jam Operasional:</strong> 09:00 - 21:00
            </li>
          </ul>
        </div>

        {/* Embedded Google Map */}
        <div className="w-full h-64 md:h-80">
          <iframe
            title="Kantin Joglo Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d310.89608184783106!2d110.42417878104033!3d-7.6018758579451795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sid!4v1754319881848!5m2!1sen!2sid"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg border-2 border-orange-200 shadow"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
