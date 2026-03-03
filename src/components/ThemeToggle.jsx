import { useAppContext } from "../context/AppContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useAppContext();

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-secondary"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}