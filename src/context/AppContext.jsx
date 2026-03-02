import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        {children}
      </div>
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);