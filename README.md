# Greenway Shooting Range — Website

A simple, fast, volunteer-manageable website for Greenway Shooting Range in
Bozeman, MT. Built with SvelteKit; deploys free to Cloudflare Pages.

## Philosophy

The website itself holds **no sensitive data and needs almost no maintenance**.
The operational pieces run on managed services that volunteers control from a
normal dashboard or their phone:

| Feature      | Runs on            | Where volunteers manage it        |
| ------------ | ------------------ | --------------------------------- |
| Waivers      | **Smartwaiver**    | smartwaiver.com dashboard         |
| Payments     | **Stripe**         | Stripe dashboard (Payment Links)  |
| Calendar     | **Google Calendar**| Google Calendar (any phone)       |
| Contact form | mailto / Formspree | The range's email inbox           |

## The one file to edit: `src/lib/site.config.js`

Almost all text, hours, prices, and the links to the services above live in
**one file**. Edit it, save, and the whole site updates. No coding required —
just keep the quotes and commas.

## Run it locally

```bash
npm install
npm run dev      # open the printed http://localhost:5173
```

## Build & deploy (Cloudflare Pages)

1. `npm install --save-dev @sveltejs/adapter-cloudflare`
2. In `svelte.config.js`, swap `adapter-auto` for `adapter-cloudflare`.
3. Push to GitHub and connect the repo in the Cloudflare Pages dashboard
   (build command `npm run build`, output dir `.svelte-kit/cloudflare`).

## Setup checklist

Real content is already loaded from the range's existing Google Site
(phone, email, programs, rates, range rules) and its live Google Calendar
and a Fairgrounds map are embedded. Remaining items:

- [x] Phone, email, programs, rates, range rules → `site.config.js`
- [x] Live Google Calendar embedded (the range's real calendar)
- [x] Map embedded (Gallatin County Fairgrounds)
- [ ] Exact building/street address (currently points at the Fairgrounds)
- [ ] A few real photos of the range (hero + about)
- [ ] Smartwaiver kiosk/embed URL → enables online waiver signing
- [ ] (Optional) Stripe Payment Links → turns on online card payment.
      The range currently takes cash/check on-site; online is opt-in.

## Pages

`/` home · `/about` · `/programs` · `/membership` (Rates) · `/visit` ·
`/waiver` · `/calendar` · `/contact`
