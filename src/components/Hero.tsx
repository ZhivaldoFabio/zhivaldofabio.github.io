// src/components/Hero.tsx

import { useState, useEffect } from "react"

const promos = [
  {
    title: "Promo 1",
    desc: "Get 50% off your first order today!",
    btn: "Order Now",
    bg: "bg-blue-600",
  },
  {
    title: "Promo 2",
    desc: "Free delivery for orders above $20.",
    btn: "Grab Offer",
    bg: "bg-green-600",
  },
  {
    title: "Promo 3",
    desc: "Join our loyalty program and save more.",
    btn: "Sign Up",
    bg: "bg-purple-600",
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  // TIMER Auto-scroll every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % promos.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (i: number) => setIndex(i)

  return (
    <section className="relative w-full h-full overflow-hidden">
      {/* Slider */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${index * 100}%)` }}

      >
        {promos.map((promo, i) => (
          <div
            key={i}
            className={`${promo.bg} flex-shrink-0 w-full h-screen flex flex-col items-center justify-center text-white`}
          >
            <h2 className="text-5xl font-bold mb-4">{promo.title}</h2>
            <p className="text-lg mb-6">{promo.desc}</p>
            <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition">
              {promo.btn}
            </button>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {promos.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-4 h-4 rounded-full ${
              i === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
