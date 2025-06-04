import { createContext } from "react";
import { useState } from "react";
import  Child  from "./Child";
import "./App.css";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  
    let themeClass = "";

    if (theme === "light") {
        themeClass = "light-theme"
    } else {
        themeClass = "dark-theme"
    }

  return (
    <ThemeContext.Provider value = { {theme, setTheme} }>
      <div className={themeClass}>
        <Child />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
