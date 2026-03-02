import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Dashboard() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className="container mt-5">
      <h2>Welcome {state.user?.email}</h2>
      <button
        className="btn btn-danger"
        onClick={() => dispatch({ type: "LOGOUT" })}
      >
        Logout
      </button>
    </div>
  );
}