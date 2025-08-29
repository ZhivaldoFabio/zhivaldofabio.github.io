import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet /> {/* This is where page content will render */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
