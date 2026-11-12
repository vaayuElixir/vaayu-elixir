import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { COMMODITIES } from '../products.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(__dirname, '../dist');
const baseHtml = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const baseUrl = 'https://www.vaayuelixir.com';
const slugById = {
  'basmati-1121': '1121-basmati-rice',
  'basmati-1509': '1509-basmati-rice',
  'ir64-parboiled': 'ir64-parboiled-rice',
  'sona-masoori': 'sona-masoori-rice',
  'teja-s17-chilli': 's17-teja-red-chilli',
  'byadgi-chilli': 'byadgi-red-chilli',
  'green-cardamom': 'alleppey-green-cardamom',
  'fresh-moringa': 'odc3-moringa-drumsticks',
  'red-onion': 'indian-red-onion',
  'g4-green-chilli': 'g4-green-chilli',
  'g9-banana': 'g9-cavendish-banana',
  'pomegranate': 'bhagwa-pomegranate',
  'semi-husked-coconut': 'semi-husked-coconut'
};
const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]));
const stripHtml = (value) => escapeHtml(value);
const today = new Date().toISOString().slice(0, 10);
const urls = [`${baseUrl}/`];

for (const product of COMMODITIES) {
  const slug = slugById[product.id];
  if (!slug) throw new Error(`Missing SEO slug for ${product.id}`);
  const url = `${baseUrl}/products/${slug}/`;
  urls.push(url);
  const title = `${product.name} Exporter India | Vaayu Elixir`;
  const description = `${product.desc} Bulk export enquiries from Mumbai, India. Request specifications and a quotation from Vaayu Elixir.`.slice(0, 158);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description,
    category: product.category,
    countryOfOrigin: { '@type': 'Country', name: 'India' },
    brand: { '@type': 'Brand', name: 'Vaayu Elixir' },
    manufacturer: {
      '@type': 'Organization',
      name: 'Vaayu Elixir Global Trade & Strategic Ventures',
      url: `${baseUrl}/`
    }
  };
  const specRows = (product.specs || []).map(([label, value]) =>
    `<li><strong>${stripHtml(label)}:</strong> ${stripHtml(value)}</li>`).join('');
  const staticContent = `
    <main style="font-family:system-ui,sans-serif;max-width:900px;margin:40px auto;padding:0 20px;line-height:1.65;color:#0f172a">
      <p><a href="/">Vaayu Elixir</a> / Export products / ${stripHtml(product.name)}</p>
      <p>${stripHtml(product.category)} · HS ${stripHtml(product.hs)}</p>
      <h1>${stripHtml(product.name)} Exporter &amp; Supplier from India</h1>
      <p>${stripHtml(product.desc)} Vaayu Elixir is a Mumbai-based merchant exporter coordinating sourcing, grading, export packing and shipment for international buyers.</p>
      <h2>Product overview</h2>
      <p><strong>Botanical name:</strong> ${stripHtml(product.botanical)}</p>
      <p><strong>Origin:</strong> ${stripHtml(product.origin)}</p>
      <p><strong>Shipment:</strong> ${stripHtml(product.mode)}</p>
      <p><strong>Indicative minimum order:</strong> ${stripHtml(product.moq)}</p>
      <p><strong>Availability:</strong> ${stripHtml(product.season)}</p>
      <h2>Product specifications</h2><ul>${specRows}</ul>
      <p><strong>Packaging:</strong> ${stripHtml(product.packaging)}</p>
      <p><strong>Testing and documents:</strong> ${stripHtml(product.testing)}</p>
      <h2>Bulk export enquiries</h2>
      <p>Contact <a href="mailto:care@vaayuelixir.com">care@vaayuelixir.com</a> or WhatsApp +91 7208666522 for specifications, availability and a quotation.</p>
      <p><a href="/">Explore all Vaayu Elixir products</a></p>
    </main>`;
  let html = baseHtml
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${stripHtml(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escapeHtml(description)}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${escapeHtml(description)}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`)
    .replace('</head>', `<script id="product-schema" type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>\n  </head>`)
    .replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${staticContent}</div>`);
  const outputDir = path.join(dist, 'products', slug);
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, 'index.html'), html);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url, index) => `  <url><loc>${url}</loc><lastmod>${today}</lastmod><changefreq>${index === 0 ? 'weekly' : 'monthly'}</changefreq><priority>${index === 0 ? '1.0' : '0.8'}</priority></url>`).join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
console.log(`Prerendered ${COMMODITIES.length} product pages and generated sitemap (${urls.length} URLs).`);
