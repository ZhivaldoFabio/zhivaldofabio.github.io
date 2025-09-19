// src/pages/About.jsx
export default function About() {
    return (
      <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-orange-600">About Kantin Joglo</h1>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
          <p>
            Kantin Joglo was founded with the passion of bringing delicious, affordable, and authentic Indonesian food to everyone. What started as a humble food stall has now grown into a local favorite for students, workers, and food lovers alike.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p>
            We strive to serve tasty meals with fast service, warm smiles, and a traditional atmosphere. We believe in quality, consistency, and affordability.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Fresh ingredients</li>
            <li>Affordable prices</li>
            <li>Friendly staff</li>
            <li>Easy ordering system</li>
          </ul>
        </section>
  
        <div className="mt-10 text-center">
          <a
            href="/menu"
            className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition"
          >
            Explore Our Menu
          </a>
        </div>
      </div>
    );
  }
  