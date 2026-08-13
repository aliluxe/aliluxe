# ALI LUXE

ALI LUXE is a premium luxury lifestyle storefront built in React + Vite for beauty, fashion, jewelry, watches, fragrance, and accessories.

## Brand

- Primary brand colors: black, white, luxury gold
- Typography: Playfair Display for headings, Inter for interface and body copy
- Official logo asset: stored in the project and used consistently across the storefront

## Tech stack

- React 19
- Vite
- React Router
- Custom responsive styling

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Deployment

The generated production bundle in the dist folder can be deployed to static hosting providers such as Vercel, Netlify, or GitHub Pages.

## Asset organization

- public/logo.png — official ALI LUXE logo
- src/data/products.js — catalog, collections, and pricing source
- src/pages — storefront pages
- src/components — reusable layout and navigation

## Updating the product catalog

Edit the product and collection records in src/data/products.js. Add or modify entries using the existing structure, then the homepage, product pages, category pages, and collection pages will reflect the new data automatically.

## Notes

This is a storefront frontend foundation ready for later WooCommerce or commerce backend integration without changing the architecture.
