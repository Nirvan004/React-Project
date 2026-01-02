import { useEffect, useState } from "react"

export type Theme = "light" | "dark"

export function useTheme() {
  const getInitialTheme = (): Theme => {
    const storedTheme = localStorage.getItem("theme") as Theme | null
    if (storedTheme) return storedTheme

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    return prefersDark ? "dark" : "light"
  }

  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  return { theme, toggleTheme }
}