import { useContext } from "react";
import { ThemeContext } from "./App";

export default function Child() {
    const providerObject = useContext(ThemeContext);
    const theme = providerObject.theme;
    const setTheme = providerObject.setTheme;

    return (
        <div>
            <h1>The current theme is: {theme}</h1>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                Toggle Theme
            </button>
        </div>
    )
}