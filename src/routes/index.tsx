import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { services } from "@/lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "vibefix.dev · De diseño con IA a sitio real" },
      { name: "description", content: "Desarrollo web técnico: reviso el código, arreglo los errores y convierto tu diseño hecho con IA en un sitio real." },
      { property: "og:title", content: "vibefix.dev · De diseño con IA a sitio real" },
      { property: "og:description", content: "Auditoría, arreglo responsivo, publicación, backend y mantenimiento mensual." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-20 sm:pt-28">
          <p className="mb-6 inline-block rounded-full border border-border px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
            Desarrollador web: de diseño con IA a sitio real
          </p>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.02] sm:text-7xl">
            Tu diseño hecho con IA, <span className="text-gradient">convertido en un sitio real.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Servicio de desarrollo web: reviso el código, arreglo los errores y convierto tu diseño hecho con IA en un sitio real, rápido y responsivo, listo para tus clientes.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contacto" className="rounded-full bg-ember px-6 py-3 font-semibold text-primary-foreground shadow-glow">
              Pide tu auditoría express
            </Link>
            <Link to="/servicios" className="rounded-full border border-border px-6 py-3 font-semibold hover:bg-secondary">
              Ver servicios
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-bold sm:text-4xl">Lo que hago</h2>
          <Link to="/servicios" className="text-sm text-primary hover:underline">Detalle completo →</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article key={s.id} className={`group rounded-2xl border border-border bg-card p-6 transition hover:border-primary ${i === 2 ? "lg:row-span-2 bg-ember text-primary-foreground border-transparent" : ""}`}>
              <div className={`flex justify-between text-xs uppercase tracking-widest ${i === 2 ? "" : "text-muted-foreground"}`}>
                <span>{s.category}</span><span>{s.tag}</span>
              </div>
              <h3 className="mt-8 text-2xl font-bold">{s.name}</h3>
              <p className={`mt-3 text-sm ${i === 2 ? "" : "text-muted-foreground"}`}>{s.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="rounded-3xl border border-border bg-card p-10 text-center sm:p-16">
          <h2 className="text-3xl font-bold sm:text-5xl">¿Tienes un diseño que no termina de funcionar?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Para emprendedores, micro y pequeñas empresas, y agencias que necesitan llevar sus proyectos al siguiente nivel.</p>
          <Link to="/proceso" className="mt-8 inline-block rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Mira cómo trabajo</Link>
        </div>
      </section>
    </SiteShell>
  );
}
