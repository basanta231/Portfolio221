import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header className="fixed top-6 inset-x-0 z-50 px-6 sm:px-8">
      <nav
        className={`mx-auto max-w-3xl h-14 px-4 flex items-center justify-between rounded-full transition-all duration-300 ${
          scrolled
            ? "border border-border/60 bg-background/60 backdrop-blur-xl shadow-md supports-[backdrop-filter]:bg-background/40"
            : "border border-transparent bg-transparent backdrop-blur-0 shadow-none"
        }`}
      >
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 hover:opacity-80 transition-smooth"
          aria-label="Basanta Adhikari — Home"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-accent to-primary text-primary-foreground text-sm font-extrabold tracking-tight shadow-[0_4px_20px_-4px_hsl(var(--primary)/0.6)] ring-1 ring-foreground/10 transition-transform duration-300 hover:scale-105 hover:rotate-3">
            <span className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/30 to-transparent opacity-60" />
            <span className="relative drop-shadow-sm">BA</span>
          </span>
          <span className="text-base font-semibold tracking-tight">Basanta Adhikari</span>
        </button>

        <div className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth rounded-full"
            >
              {l.label}
            </button>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};
