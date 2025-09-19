export default function TestimonialsSection() {
    const testimonials = [
      {
        name: "Rina",
        comment: "Makanannya enak dan murah! Tempatnya juga nyaman. Pasti balik lagi!",
        stars: 5,
      },
      {
        name: "Adi",
        comment: "Pelayanan cepat dan ramah. Rekomendasi banget buat makan siang.",
        stars: 4,
      },
      {
        name: "Dewi",
        comment: "Menu variatif dan selalu fresh. Cocok untuk semua kalangan.",
        stars: 5,
      },
    ];
  
    return (
      <section className="bg-orange-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-orange-600">Apa Kata Mereka</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-yellow-500 mb-2">
                  {"★".repeat(item.stars)}{"☆".repeat(5 - item.stars)}
                </div>
                <p className="text-gray-700 italic mb-4">"{item.comment}"</p>
                <h4 className="text-orange-600 font-semibold">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  