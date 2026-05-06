import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const light = stored === "light";
    setIsLight(light);
    document.documentElement.classList.toggle("light", light);
  }, []);

  const toggle = () => {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-secondary/40 text-foreground/80 hover:text-foreground hover:border-accent/50 transition-smooth"
    >
      {isLight ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  );
};
