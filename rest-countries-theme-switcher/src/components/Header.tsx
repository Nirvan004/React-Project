import { useThemeContext } from "../context/ThemeContext"

export default function Header() {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <header className="header">
      <h1 className="header__title">Where in the world?</h1>

      <button
        onClick={toggleTheme}
        className="header__theme-toggle"
        aria-label="Toggle color theme"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </header>
  )
}