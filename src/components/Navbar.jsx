import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { useAppContext } from "../context/AppContext";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const { toggleTheme } = useAppContext();

  const totalQuantity = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  return (
    <nav className="navbar px-4 py-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        <NavLink to="/" className="navbar-brand fw-bold text-white">
          EXP5
        </NavLink>

        <div className="d-flex align-items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "nav-link active-link"
                : "nav-link text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "nav-link active-link"
                : "nav-link text-white"
            }
          >
            Cart
            <span className="badge bg-info ms-2">
              {totalQuantity}
            </span>
          </NavLink>

          <NavLink
            to="/reports"
            className={({ isActive }) =>
              isActive
                ? "nav-link active-link"
                : "nav-link text-white"
            }
          >
            Reports
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "nav-link active-link"
                : "nav-link text-white"
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "nav-link active-link"
                : "nav-link text-white"
            }
          >
            Login
          </NavLink>

          <button
            onClick={toggleTheme}
            className="btn btn-outline-light btn-sm ms-3"
          >
            Toggle Theme
          </button>
        </div>
      </div>
    </nav>
  );
}