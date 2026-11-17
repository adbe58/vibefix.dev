import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { services } from "@/lib/services";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios · vibefix.dev" },
      { name: "description", content: "Auditoría express, arreglo responsivo, de IA a producción, backend y mantenimiento mensual." },
      { property: "og:title", content: "Servicios · vibefix.dev" },
      { property: "og:description", content: "Revisión de código, corrección de errores y desarrollo para sitios hechos con IA." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Servicios,
});

function Servicios() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h1 className="text-5xl font-extrabold sm:text-6xl">Servicios</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Todo es trabajo directo sobre tu código: <span className="text-foreground">revisión técnica</span> (encuentro los errores y te digo qué arreglar), <span className="text-foreground">desarrollo e implementación</span> (arreglo y te entrego el sitio funcionando) y <span className="text-foreground">soporte técnico</span> (me quedo pendiente de que no vuelva a fallar).</p>
        <div className="mt-14 divide-y divide-border border-y border-border">
          {services.map((s) => (
            <article key={s.id} className="grid gap-6 py-10 md:grid-cols-[120px_1fr_1fr]">
              <span className="font-display text-5xl font-bold text-primary">{s.tag}</span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{s.category}</p>
                <h2 className="mt-2 text-3xl font-bold">{s.name}</h2>
                <p className="mt-3 text-muted-foreground">{s.summary}</p>
              </div>
              <div>
                <ul className="space-y-2 text-sm">
                  {s.includes.map((x) => (
                    <li key={x} className="flex gap-2"><span className="text-primary">✓</span>{x}</li>
                  ))}
                </ul>
                <p className="mt-4 rounded-lg bg-secondary p-3 text-sm"><span className="font-semibold text-accent">Entrega:</span> {s.deliverable}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/contacto" className="rounded-full bg-ember px-6 py-3 font-semibold text-primary-foreground shadow-glow">Cotizar un servicio</Link>
        </div>
      </section>
    </SiteShell>
  );
}
