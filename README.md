# Dixon Doobies Static Site

This repository contains a small website for the Dixon Doobies brand. It uses Node.js with Express and EJS templates along with TailwindCSS via CDN and vanilla JavaScript.

## Run locally

```bash
npm install
npm start
```

Visit <http://localhost:3000> in your browser.

## Deploy

### Netlify
1. Create a new site and link this repository.
2. Use **npm start** as the build command. Netlify will run the Express server.

### GitHub Pages
GitHub Pages serves static files only. Render the EJS templates to HTML (for example: `npx ejs-cli views -o dist`) and deploy the generated output directory.

## Future integrations
- Point-of-sale and METRC-synced menu providers can be added for real-time inventory.
- Geofencing and IP-based messages may be required for Colorado-only marketing.

## Replacing placeholders
- Replace `/public/assets/logo.svg` and remote hero images with branded assets.
- Update the contact email and any social links in the footer.
