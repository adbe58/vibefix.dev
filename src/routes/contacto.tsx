import { createFileRoute } from "@tanstack/react-router";
import { createServerFn, useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { SiteShell } from "@/components/SiteShell";
import { services } from "@/lib/services";

const EMAIL = "codecart.devs@gmail.com";

const sendContactEmail = createServerFn({ method: "POST" })
  .validator((data: { name: string; service: string; message: string }) => data)
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (!apiKey || apiKey === "re_tu_clave_aqui") {
      throw new Error("EMAIL_NOT_CONFIGURED");
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const from = process.env.RESEND_FROM_EMAIL?.trim() || "onboarding@resend.dev";

    const result = await resend.emails.send({
      from,
      to: EMAIL,
      replyTo: undefined,
      subject: `Cotización: ${data.service} — ${data.name}`,
      text: `Nombre: ${data.name}\nServicio: ${data.service}\n\n${data.message}`,
    });

    if (result.error) {
      const message = result.error.message || "";
      if (/only send testing emails|testing emails to/i.test(message)) {
        throw new Error("EMAIL_TEST_RECIPIENT");
      }
      if (/domain|verify/i.test(message) && !/testing/i.test(message)) {
        throw new Error("EMAIL_DOMAIN_NOT_VERIFIED");
      }
      throw new Error("EMAIL_SEND_FAILED");
    }

    return { success: true };
  });

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto · vibefix.dev" },
      { name: "description", content: "Cuéntame tu proyecto y recibe una propuesta clara." },
      { property: "og:title", content: "Contacto · vibefix.dev" },
      { property: "og:description", content: "Pide tu auditoría express o cotiza tu sitio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  const [name, setName] = useState("");
  const [service, setService] = useState(services[0]?.name ?? "");
  const [msg, setMsg] = useState("");
  const [showSendOptions, setShowSendOptions] = useState(false);
  const [showMailNotice, setShowMailNotice] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false);
  const [mailError, setMailError] = useState("");
  const sendEmail = useServerFn(sendContactEmail);
  const message = `Hola, soy ${name}.\n\nServicio: ${service}\n\n${msg}`;
  const whatsappHref = `https://wa.me/573023879385?text=${encodeURIComponent(message)}`;
  const field = "w-full rounded-lg border border-input bg-card px-4 py-3 outline-none focus:border-primary";

  useEffect(() => {
    if (!showMailNotice) return;
    const timeout = window.setTimeout(() => setShowMailNotice(false), 8000);
    return () => window.clearTimeout(timeout);
  }, [showMailNotice]);

  return (
    <SiteShell>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2">
        <div>
          <h1 className="text-5xl font-extrabold sm:text-6xl">Hablemos de tu <span className="text-gradient">proyecto</span></h1>
          <p className="mt-4 text-lg text-muted-foreground">Cuéntame qué tienes y qué necesitas. Te respondo con una propuesta clara.</p>
          <div className="mt-8 space-y-3">
            <a href="https://wa.me/573023879385" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-xl border border-border bg-card p-4 hover:border-primary">
              <span><span className="block text-xs uppercase tracking-widest text-muted-foreground">WhatsApp / Teléfono</span>302 387 9385</span><span className="text-primary">→</span>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center justify-between rounded-xl border border-border bg-card p-4 hover:border-primary">
              <span><span className="block text-xs uppercase tracking-widest text-muted-foreground">Correo</span>{EMAIL}</span><span className="text-primary">→</span>
            </a>
          </div>
        </div>
        <form className="space-y-4 rounded-2xl border border-border bg-card/50 p-6" onSubmit={(e) => { e.preventDefault(); setShowSendOptions(true); }}>
          <input required className={field} placeholder="Tu nombre" value={name} onChange={(e) => setName(e.target.value)} />
          <select className={field} value={service} onChange={(e) => setService(e.target.value)}>
            {services.map((s) => <option key={s.id}>{s.name}</option>)}
          </select>
          <textarea required rows={5} className={field} placeholder="Cuéntame sobre tu proyecto (enlace, idea, problema...)" value={msg} onChange={(e) => setMsg(e.target.value)} />
          <button className="w-full rounded-full bg-ember px-6 py-3 font-semibold text-primary-foreground shadow-glow">Enviar mensaje</button>
        </form>
      </section>

      {showMailNotice && (
        <div className="fixed bottom-5 left-1/2 z-[60] w-[calc(100%-2.5rem)] max-w-md -translate-x-1/2 rounded-2xl border border-border bg-card p-5 shadow-2xl" role="status" aria-live="polite">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-bold">¡El correo ha sido enviado satisfactoriamente!</p>
              <p className="mt-1 text-sm text-muted-foreground">Tu solicitud fue entregada correctamente.</p>
            </div>
            <button type="button" onClick={() => setShowMailNotice(false)} className="text-muted-foreground hover:text-foreground" aria-label="Cerrar notificación">×</button>
          </div>
        </div>
      )}

      {showSendOptions && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="send-options-title">
          <div className="w-full max-w-[480px] rounded-3xl border border-border bg-card p-8 shadow-2xl sm:p-8">
            <h2 id="send-options-title" className="text-2xl font-bold sm:text-3xl">¿Cómo quieres enviarlo?</h2>
            <p className="mt-2 text-muted-foreground">Tu mensaje ya está listo. Elige por dónde mandarlo.</p>

            <div className="mt-6 space-y-4">
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-xl border border-border bg-background px-5 py-5 text-base font-bold transition hover:border-primary sm:text-lg">
                <span>Enviar por WhatsApp</span>
                <span className="text-primary" aria-hidden="true">→</span>
              </a>
              <button
                type="button"
                disabled={sendingEmail}
                onClick={async () => {
                  setSendingEmail(true);
                  setMailError("");
                  try {
                    await sendEmail({ data: { name, service, message: msg } });
                    setShowSendOptions(false);
                    setShowMailNotice(true);
                  } catch (error) {
                    const message = error instanceof Error ? error.message : "";
                    setMailError(message.includes("EMAIL_NOT_CONFIGURED")
                      ? "El envío directo aún no está configurado. Falta la API key de Resend."
                      : message.includes("EMAIL_DOMAIN_NOT_VERIFIED")
                        ? "El dominio vibefix.dev aún no está verificado en Resend. Por ahora usa WhatsApp."
                        : message.includes("EMAIL_TEST_RECIPIENT")
                          ? "En modo de pruebas, Resend solo puede enviar al correo asociado a la cuenta."
                          : "No se pudo enviar el correo. Inténtalo de nuevo o usa WhatsApp.");
                  } finally {
                    setSendingEmail(false);
                  }
                }}
                className="flex w-full items-center justify-between rounded-xl border border-border bg-background px-5 py-5 text-base font-bold transition hover:border-primary disabled:cursor-wait disabled:opacity-60 sm:text-lg"
              >
                <span>{sendingEmail ? "Enviando..." : "Enviar por correo"}</span>
                <span className="text-primary" aria-hidden="true">→</span>
              </button>
              {mailError && <p role="alert" className="text-sm text-destructive">{mailError}</p>}
            </div>

            <button type="button" onClick={() => setShowSendOptions(false)} className="mt-6 w-full py-2 text-center text-muted-foreground transition hover:text-foreground">
              Volver al formulario
            </button>
          </div>
        </div>
      )}
    </SiteShell>
  );
}
