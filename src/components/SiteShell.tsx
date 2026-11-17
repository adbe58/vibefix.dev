import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const links = [
  { to: "/servicios", label: "Servicios" },
  { to: "/proceso", label: "Cómo funciona" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold" aria-label="Ir al inicio">
            <img src="/codecart_transparent.png" alt="" className="h-9 w-9 object-contain" />
            <span>vibefix<span className="text-primary">.</span>dev</span>
          </Link>
          <div className="flex items-center gap-5 text-sm">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="hidden sm:inline text-muted-foreground hover:text-foreground transition-colors" activeProps={{ className: "text-foreground" }}>
                {l.label}
              </Link>
            ))}
            <Link to="/contacto" className="rounded-full bg-primary px-4 py-2 font-semibold text-primary-foreground hover:opacity-90">
              Cotizar
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>© 2026 vibefix.dev · Especialista en producción web con IA</p>
          <p>Proyecto piloto · Freelance → Soporte técnico para agencias</p>
        </div>
      </footer>
    </div>
  );
}
