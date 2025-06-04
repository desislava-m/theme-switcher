import { useContext } from "react";
import { ThemeContext } from "./App";


export default function Child() {
    const providerObject = useContext(ThemeContext);
    const theme = providerObject.theme;
    const setTheme = providerObject.setTheme;

    let buttonColor = "";

    if(theme === "light") {
        buttonColor = "lightMode-button"
    }else {
        buttonColor = "darkMode-button"
    }

    return (
        <div>
            <h1>The current theme is: {theme}</h1>
            <button className={buttonColor} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                Toggle Theme
            </button>
        </div>
    )
}