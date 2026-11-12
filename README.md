# Vaayu Elixir – SEO product pages

## What changed
- Added React Router routes for `/` and `/products/:slug/`.
- Added 13 individual product pages using the existing commodity records.
- Added product-specific title, meta description, canonical URL and Product JSON-LD.
- Added a build-time prerender script that writes static HTML for all 13 product URLs.
- Build-time script also generates `dist/sitemap.xml` with the homepage and all 13 products.
- Product cards now link to their individual detail pages.
- Existing homepage sections, styling, logo, RFQ form and WhatsApp links are retained.
- Added Vercel trailing-slash configuration.

## Product URL paths
- `/products/1121-basmati-rice/`
- `/products/1509-basmati-rice/`
- `/products/ir64-parboiled-rice/`
- `/products/sona-masoori-rice/`
- `/products/s17-teja-red-chilli/`
- `/products/byadgi-red-chilli/`
- `/products/alleppey-green-cardamom/`
- `/products/odc3-moringa-drumsticks/`
- `/products/indian-red-onion/`
- `/products/g4-green-chilli/`
- `/products/g9-cavendish-banana/`
- `/products/bhagwa-pomegranate/`
- `/products/semi-husked-coconut/`

## Local development
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

The production build runs Vite and then `scripts/prerender-products.mjs`. The script generates the product HTML files and sitemap under `dist/`. Deploy the complete `dist/` output to Vercel.

## Important checks before deployment
1. Install dependencies and run `npm run build`.
2. Test the homepage and each of the 13 product URLs in the preview.
3. Test RFQ submission and WhatsApp links on both homepage and product pages.
4. Confirm the product-specific page source contains its title, description, canonical URL and Product JSON-LD.
5. Confirm `https://www.vaayuelixir.com/sitemap.xml` lists 14 URLs after deployment.
6. Submit the sitemap in Google Search Console and inspect several product URLs.

## Product data and claims
Product details, HS codes, origins, MOQ, seasons and technical specifications are reused from the existing catalogue and remain indicative. Confirm each value against supplier documentation, destination-country rules and the actual shipment before treating it as a firm commitment.
