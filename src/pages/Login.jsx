import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email) {
      dispatch({ type: "LOGIN", payload: { email } });
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