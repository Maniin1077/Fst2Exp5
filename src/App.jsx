import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container-fluid px-4 mt-3">
        <ThemeToggle />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}