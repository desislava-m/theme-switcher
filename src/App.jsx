import { createContext } from "react";
import { useState } from "react";
import  Child  from "./Child";
import "./App.css";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value = { {theme, setTheme} }>
      <Child />
    </ThemeContext.Provider>
  )
}

export default App
