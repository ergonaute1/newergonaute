# Ergonaute Consulting website

Official website source for [Ergonaute Consulting](https://www.ergonaute.net).

## Website

The site presents Ergonaute's consulting offer, brand promise, services,
principles, experience, and contact form.

## Local preview

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

## Validation

```bash
npm run build
npm test
```

## Cloudflare Workers deployment

The project is configured for Cloudflare Workers through `vinext` and
`wrangler.jsonc`.

```bash
npm run deploy
```

For automatic deployments, connect this GitHub repository to a Cloudflare
Worker and use `npm run deploy` as the deploy command.

## Contact form configuration

Configure these variables as Cloudflare Worker secrets or environment
variables. Never commit the real API key.

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL` (currently `rami@ergonaute.net`)
- `CONTACT_FROM_EMAIL` (currently `Ergonaute Website <website@ergonaute.net>`)

The non-secret template is available in `.env.example`.
