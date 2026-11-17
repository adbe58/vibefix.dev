import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { steps } from "@/lib/services";

export const Route = createFileRoute("/proceso")({
  head: () => ({
    meta: [
      { title: "Cómo funciona · vibefix.dev" },
      { name: "description", content: "Cuatro pasos simples para llevar tu diseño con IA a un sitio publicado." },
      { property: "og:title", content: "Cómo funciona · vibefix.dev" },
      { property: "og:description", content: "Me cuentas, reviso tu código, arreglo los errores y entrego tu sitio funcionando." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Proceso,
});

function Proceso() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h1 className="text-5xl font-extrabold sm:text-6xl">Cómo <span className="text-gradient">funciona</span></h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Un proceso claro, sin tecnicismos. Siempre sabes en qué etapa va tu proyecto.</p>
        <ol className="mt-14 grid gap-4 md:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-display text-4xl font-bold text-primary">{s.n}</span>
              <h2 className="mt-6 text-xl font-bold">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-16 grid gap-6 rounded-3xl border border-border p-8 md:grid-cols-3">
          <div><h3 className="text-lg font-bold text-accent">Hoy</h3><p className="mt-2 text-sm text-muted-foreground">Freelance para emprendedores y pequeñas empresas.</p></div>
          <div><h3 className="text-lg font-bold text-accent">Próximo</h3><p className="mt-2 text-sm text-muted-foreground">Planes de mantenimiento y equipo de apoyo.</p></div>
          <div><h3 className="text-lg font-bold text-accent">Visión</h3><p className="mt-2 text-sm text-muted-foreground">Soporte técnico y corrección de código para agencias que trabajan con IA.</p></div>
        </div>
      </section>
    </SiteShell>
  );
}
