import { useSelector } from "react-redux";
import { useMemo } from "react";
import { useAppContext } from "../context/AppContext";

const Reports = () => {
  const { theme } = useAppContext();
  const items = useSelector((state) => state.cart.items);

  const totalItems = useMemo(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }, [items]);

  const totalPrice = useMemo(() => {
    return items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [items]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Reports Dashboard</h2>

      <div className="card p-4 shadow-sm">
        <p><strong>Current Theme:</strong> {theme}</p>
        <p><strong>Total Unique Products:</strong> {items.length}</p>
        <p><strong>Total Items Quantity:</strong> {totalItems}</p>
        <p><strong>Total Cart Value:</strong> ₹{totalPrice}</p>
      </div>
    </div>
  );
};

export default Reports;