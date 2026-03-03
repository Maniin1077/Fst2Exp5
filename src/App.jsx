import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
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
      <div className="app-layout d-flex flex-column min-vh-100">
        
        <Navbar />

        {/* Theme Toggle */}
        <div className="theme-section text-end pt-4 px-4">
          <ThemeToggle />
        </div>

        {/* Animated Page Content */}
        <div className="main-content flex-grow-1">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </motion.div>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}