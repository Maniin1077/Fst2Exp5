import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/slices/cartSlice";
import { useMemo } from "react";

export default function Cart() {
  const dispatch = useDispatch();

  // Redux state
  const cartItems = useSelector((state) => state.cart.items);

  // useMemo for total price (Exp5 Requirement)
  const totalItems = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  return (
    <div className="container-fluid px-5 mt-4">
      <h2 className="mb-4">Cart Items</h2>

      {cartItems.length === 0 && <p>No items in cart.</p>}

      {cartItems.map((item) => (
        <div key={item.id} className="card p-3 my-3 shadow-sm">
          <h5>{item.name}</h5>
          <p>Price: ₹{item.price}</p>

          <div className="d-flex align-items-center gap-3">
            <input
              type="number"
              min="1"
              value={item.quantity}
              className="form-control w-25"
              onChange={(e) =>
                dispatch(
                  updateQuantity({
                    id: item.id,
                    quantity: Number(e.target.value),
                  })
                )
              }
            />

            <button
              className="btn btn-danger"
              onClick={() => dispatch(removeItem(item.id))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {cartItems.length > 0 && (
        <div className="mt-4">
          <h4>Total Items: {totalItems}</h4>
        </div>
      )}
    </div>
  );
}