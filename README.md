# ESIMA Concept Enterprise website

Static, installable (PWA) company site. **No backend, no build step, no database.**

## Files
- `index.html` : the whole site (5 pages: Home, About, Services, Projects, Contact)
- `manifest.webmanifest`, `sw.js`, `icons/` : home-screen install and offline support
- `images/` : logo and project photos

## Publish free on GitHub Pages
1. Create a new GitHub repository (Public), e.g. `esima-website`.
2. Upload everything in this folder (keep the folder structure), commit to `main`.
3. Repository **Settings > Pages > Build and deployment**: Source = *Deploy from a branch*, Branch = `main`, folder `/ (root)`, Save.
4. After about a minute the site is live at `https://YOUR-USERNAME.github.io/esima-website/` (HTTPS, so the "Install app" button works).
5. Optional custom domain: Settings > Pages > Custom domain.

## Common edits (all in `index.html`)
- Phone numbers: search `08073505153` and `2348073505153` (WhatsApp format, no +).
- Email: search `esimaconceptenterptise`. Check the spelling ("enterprise"?).
- Slider captions: the `const S=[...]` list. Photos: replace files in `images/` with the same names.
- After any change, bump `V='esima-v1'` in `sw.js` (to `esima-v2`, ...) so installed apps update.

## Do you need a backend?
No. Quote requests open WhatsApp with the details filled in, and phone, email and map links work directly. Add a backend only if you later want online payments, customer logins or an admin panel. To get quote requests by email, use a form service such as Formspree or Web3Forms (no server needed) instead of building one.
