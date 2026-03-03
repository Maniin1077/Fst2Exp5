import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const { setUser } = useAppContext();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email) {
      setUser({ email });
      navigate("/dashboard");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>

      <input
        className="form-control my-3"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}