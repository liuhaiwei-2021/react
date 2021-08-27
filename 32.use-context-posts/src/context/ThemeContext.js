/** @format */

import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [isLight, setIsLight] = useState(false);
  const [light] = useState({
    text: "#333",
    ui: "#fff",
    bg: "#eee",
  });
  const [dark] = useState({
    text: "#fff",
    ui: "#333",
    bg: "#888",
  });

  const toggleTheme = () => {
    setIsLight(!isLight);
  };
  return (
    <ThemeContext.Provider value={{ isLight, light, dark,toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
