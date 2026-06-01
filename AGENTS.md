<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# The Vegan Counsellor — project guide

This is the website for **The Vegan Counsellor** (thevegancounsellor.com). David is a
counsellor who offers one-on-one sessions and works closely with vegans. The site exists to
introduce David, build trust, and let visitors book a session.

David is the main builder here and works through conversation, not by hand-editing code. When
he asks for a change, make it work end to end — don't leave half-finished pieces or ask him to
edit files himself.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** for styling
- **shadcn/ui** for components (in `src/components/ui/`) — prefer these over hand-built UI.
  Add new ones with `npx shadcn@latest add <name> -y` (e.g. `form`, `input`, `dialog`).
- Deployed on **Vercel**. Every push to the `main` branch on GitHub deploys automatically.

## Project layout

- `src/app/` — pages and layouts. Each folder with a `page.tsx` is a route
  (e.g. `src/app/about/page.tsx` → `/about`).
- `src/app/layout.tsx` — wraps every page; holds site-wide `<head>` metadata.
- `src/app/globals.css` — the theme. Colours are CSS variables (a calm green palette);
  change `--primary`, `--accent`, etc. here to re-theme the whole site at once.
- `src/components/ui/` — shadcn components. Don't edit these by hand unless asked.
- `src/components/` — put custom shared components here (e.g. `site-header.tsx`).
- `src/lib/` — helpers and utilities.
- `public/` — static files (images, audio, favicon). Reference as `/filename.ext`.

## How to work

- **Preview while building:** use the preview tools to run the dev server and screenshot the
  page so you can see your changes. Don't just assume — look at the result.
- **Before saying a task is done:** run `npm run build`. It must succeed. It catches type and
  layout errors before they reach the live site.
- **Linting:** `npm run lint`.
- **Adding a page:** create `src/app/<name>/page.tsx`. Add a link to it in the site header so
  visitors can find it.

## Conventions & tone

- Keep the voice warm, calm, and professional — this is a counselling practice, not a startup.
- Reuse the existing green theme and shadcn components so the site stays visually consistent.
- Keep content factual; ask David for real copy (qualifications, pricing, contact details)
  rather than inventing professional claims.

## Planned sections (roadmap)

Home (done) · About David · Services & booking · Media · Blog (written + audio). Build these
one at a time as David asks for them.
