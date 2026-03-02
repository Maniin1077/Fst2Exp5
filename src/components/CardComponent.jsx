import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function CardComponent({ item }) {
  const { dispatch } = useContext(AppContext);

  const handleAdd = () => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  return (
    <div className="card m-3 p-3" style={{ width: "18rem" }}>
      <h5>{item.name}</h5>
      <p>Category: {item.category}</p>

      <button className="btn btn-primary" onClick={handleAdd}>
        Add to Cart
      </button>
    </div>
  );
}