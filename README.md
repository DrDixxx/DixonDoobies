# Dixon Doobies

A small static website for the Dixon Doobies cannabis brand. Built with plain HTML, TailwindCSS via CDN, and vanilla JavaScript.

## Structure
- `index.html` – landing page
- `shop.html` – sales placeholder
- `learn.html` – cannabis education
- `about.html` – contact and story
- `assets/` – logo placeholder
- `css/site.css` – minimal overrides
- `js/main.js` – age gate, navigation, FAQ, and placeholder handlers

## Local use
Open `index.html` in any modern browser. No build step is required.

## Deploy
### Netlify
Netlify uses the included `netlify.toml` to publish the repository root with no build step.
Drag the folder into the Netlify dashboard or connect the repo and deploy. Extensionless paths like `/shop` redirect to their corresponding HTML files.

### GitHub Pages
Enable Pages in repository settings and choose the `main` branch with the root folder.

## Future integrations
- Connect a point-of-sale or menu provider for live inventory (e.g., METRC-synced).
- Add geofencing or messaging for Colorado-only marketing.

## Replace placeholders
- `assets/logo.svg` – swap with your brand logo.
- Replace the hero placeholder block in `index.html` with a real image if desired.
- Update `info@example.com` in footers and forms with a real contact email.

## Compliance
Dixon Doobies serves adults 21+ in Colorado. We do not ship cannabis. Orders will
be fulfilled via in-store pickup or locally permitted delivery only. All content
is for educational purposes and not medical or legal advice.
