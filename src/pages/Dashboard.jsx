import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

export default function Dashboard() {
  const { user, setUser } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <h2>Welcome {user?.email || "Guest"}</h2>

      <button
        className="btn btn-danger mt-3"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}