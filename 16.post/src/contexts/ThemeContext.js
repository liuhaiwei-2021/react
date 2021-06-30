/** @format */

import { createContext, useState } from "react";
export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [isLightTheme, setLightTheme] = useState(false);
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
        setLightTheme(!isLightTheme)
    }
  return (
    <ThemeContext.Provider value={{ isLightTheme, light, dark, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
