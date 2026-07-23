# GTC Concrete Landing Page

A lightweight, responsive landing page for ready-mix concrete quote requests by WhatsApp or phone.

## Run locally

Serve the folder with any static file server, then open the local URL in a browser.

```bash
python -m http.server 8000
```

## Main files

- `index.html` — page content, metadata, and structured data
- `styles.css` — responsive layout and visual styling
- `script.js` — quote validation, WhatsApp message creation, and lead tracking
- `ready-mix-concrete-pump-guyana-*.webp` — optimized responsive hero images
- `ready-mix-concrete-pump-guyana-*.jpg` — JPEG hero-image fallbacks
- `og.jpg` — social sharing image
- `robots.txt` and `sitemap.xml` — search discovery files

## Common updates

- Phone and WhatsApp: update the number in `index.html` and `WHATSAPP_NUMBER` in `script.js`.
- Prices: update the table rows in the `prices` section.
- Pump minimum: update the visible page copy and `PUMP_MINIMUM_YARDS` in `script.js` together.
- Domain: update `CNAME`, canonical links, social metadata, structured-data URLs, `robots.txt`, and `sitemap.xml` together.

The page intentionally contains no street address or map.
