// main.tsx

import { BrowserRouter, Routes, Route } from "react-router-dom"
import ReactDOM from "react-dom/client"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
