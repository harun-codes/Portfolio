
"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    const current = saved === "dark" ? "dark" : "light";

    setTheme(current);
    document.documentElement.classList.toggle(
      "dark",
      current === "dark"
    );
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";

    setTheme(next);
    localStorage.setItem("portfolio-theme", next);
    document.documentElement.classList.toggle(
      "dark",
      next === "dark"
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="rounded-lg border border-gray-200 p-2.5 text-gray-800 transition hover:bg-gray-100 dark:border-[#27405E] dark:text-[#64FFDA] dark:hover:bg-[#152B48]"
    >
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
}
