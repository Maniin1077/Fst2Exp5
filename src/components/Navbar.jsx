import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { useAppContext } from "../context/AppContext";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const { toggleTheme } = useAppContext();

  // useMemo for total quantity
  const totalQuantity = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  return (
    <nav className="navbar navbar-dark bg-dark px-4 py-3 w-100">
      <div className="container-fluid">
        <Link className="navbar-brand text-light fw-bold" to="/">
          EXP5
        </Link>

        <div className="d-flex align-items-center">
          <Link className="text-light me-4 text-decoration-none" to="/">
            Home
          </Link>

          <Link className="text-light me-4 text-decoration-none" to="/cart">
            Cart ({totalQuantity})
          </Link>

          <Link className="text-light me-4 text-decoration-none" to="/reports">
            Reports
          </Link>

          <Link className="text-light me-4 text-decoration-none" to="/dashboard">
            Dashboard
          </Link>

          <Link className="text-light me-4 text-decoration-none" to="/login">
            Login
          </Link>

          <button
            onClick={toggleTheme}
            className="btn btn-outline-light btn-sm"
          >
            Toggle Theme
          </button>
        </div>
      </div>
    </nav>
  );
}