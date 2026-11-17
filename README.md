# vibefix.dev

Sitio web de vibefix.dev, construido con TanStack Start, React y TypeScript.

## Desarrollo local

Requiere Node.js y npm.

```sh
npm install
npm run dev
```

## Producción

El proyecto se compila para Cloudflare Workers con Nitro.

```sh
npm run build
npx nitro deploy --prebuilt
```

Configura `RESEND_API_KEY` y `RESEND_FROM_EMAIL` como variables secretas del Worker para habilitar el envío de correo.
