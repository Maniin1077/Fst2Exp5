import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function ThemeToggle() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <button
      onClick={() => dispatch({ type: "TOGGLE_THEME" })}
      className="btn btn-secondary"
    >
      {state.theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}