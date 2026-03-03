import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

export default function CardComponent({ item }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: item.id,
        name: item.name,
        price: item.price,
      })
    );
  };

  return (
    <div className="card p-3 shadow-sm">
      <h5>{item.name}</h5>
      <p>Price: ₹{item.price}</p>

      <button
        className="btn btn-primary"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}