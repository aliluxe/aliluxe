export const categories = [
  {
    slug: 'beauty',
    name: 'Beauty & Cosmetics',
    description: 'Luminous daily rituals in refined textures and sculpted essentials.',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'fashion',
    name: 'Fashion & Apparel',
    description: 'Tailored silhouettes, premium fabrics, and polished wardrobe essentials.',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'jewelry',
    name: 'Jewelry',
    description: 'Fine metals and luminous stones created for everyday heirloom moments.',
    image:
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'watches',
    name: 'Watches',
    description: 'Precision timepieces with discreet luxury and modern elegance.',
    image:
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'perfumes',
    name: 'Perfumes',
    description: 'Sensory signatures designed with richness, warmth, and lasting depth.',
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'accessories',
    name: 'Luxury Accessories',
    description: 'Chosen finishing pieces for an elevated everyday expression.',
    image:
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80',
  },
]

export const collections = [
  { slug: 'new-arrivals', name: 'New Arrivals', description: 'Fresh edits for the season', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80' },
  { slug: 'best-sellers', name: 'Best Sellers', description: 'Loyal favorites, perfected', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80' },
  { slug: 'featured-collection', name: 'Featured Collection', description: 'The signature edit of the house', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80' },
  { slug: 'signature-collection', name: 'Signature Collection', description: 'A refined expression of minimal luxury', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80' },
  { slug: 'luxury-essentials', name: 'Luxury Essentials', description: 'Daily must-haves with elevated intention', image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80' },
  { slug: 'gifts', name: 'Gifts', description: 'Curated tokens of elegance', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80' },
  { slug: 'exclusive-collection', name: 'Exclusive Collection', description: 'Rare pieces, collector-worthy edits', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80' },
]

export const products = [
  {
    id: 'ali-velvet-rose-serum',
    slug: 'velvet-rose-serum',
    name: 'Velvet Rose Serum',
    category: 'beauty',
    collection: 'Beauty Collection',
    price: 64,
    shortDescription: 'A cushiony rose-hydrating serum for a dewy, renewed glow.',
    description:
      'An ultra-luminous serum engineered to visibly replenish hydration and refine tone. Rich in peptides, rose water, and squalane, it leaves skin velvety-soft with a healthy, polished finish.',
    image:
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
    ],
    attributes: ['Rose active complex', 'Hydrating veil', 'Suitable for dry skin'],
    rating: 4.9,
    availability: 'In stock',
    featured: true,
  },
  {
    id: 'ali-silk-glow-masque',
    slug: 'silk-glow-masque',
    name: 'Silk Glow Masque',
    category: 'beauty',
    collection: 'Luxury Essentials',
    price: 58,
    shortDescription: 'A fiber-rich overnight mask for cushioned, refined radiance.',
    description:
      'This indulgent mask restores luminosity while supporting skin elasticity. Creamy and weightless, it melts into the skin for a satin-smooth finish by morning.',
    image:
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80',
    ],
    attributes: ['Overnight hydration', 'Barrier support', 'Opulent texture'],
    rating: 4.8,
    availability: 'Low stock',
    featured: false,
  },
  {
    id: 'ali-gold-lip-oil',
    slug: 'gold-lip-oil',
    name: 'Gold Lip Oil',
    category: 'beauty',
    collection: 'Beauty Collection',
    price: 26,
    shortDescription: 'Enhancing gloss with a soft metallic sheen and nourishing finish.',
    description:
      'Crafted for an effortless rose-gold finish, this lip oil layers color and shine while delivering conditioning nourishment and a smooth, plump feel.',
    image:
      'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    ],
    attributes: ['Sheer pigmentation', 'Lightweight shine', 'Daily essential'],
    rating: 4.7,
    availability: 'In stock',
    featured: true,
  },
  {
    id: 'ali-noir-satin-blazer',
    slug: 'noir-satin-blazer',
    name: 'Noir Satin Blazer',
    category: 'fashion',
    collection: 'Featured Collection',
    price: 220,
    shortDescription: 'An elegant statement layer cut for polished movement and evening ease.',
    description:
      'Sculpted in a fluid satin weave, the Noir Satin Blazer balances structure and softness. It creates an effortlessly tailored silhouette with a luxurious hand feel.',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
    ],
    attributes: ['Italian satin', 'Relaxed tailored fit', 'Evening ready'],
    rating: 4.9,
    availability: 'In stock',
    featured: true,
  },
  {
    id: 'ali-ivory-pleat-dress',
    slug: 'ivory-pleat-dress',
    name: 'Ivory Pleat Dress',
    category: 'fashion',
    collection: 'New Arrivals',
    price: 190,
    shortDescription: 'A sculptural evening dress balanced with fluid motion and modern femininity.',
    description:
      'Cut to follow the body softly while preserving volume in the skirt, this ivory pleat dress brings understated drama to special occasions and elevated evenings.',
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    ],
    attributes: ['Soft pleat finish', 'Silk blend', 'Signature drape'],
    rating: 4.9,
    availability: 'In stock',
    featured: false,
  },
  {
    id: 'ali-monarch-coat',
    slug: 'monarch-wool-coat',
    name: 'Monarch Wool Coat',
    category: 'fashion',
    collection: 'Luxury Essentials',
    price: 300,
    shortDescription: 'A statement wool coat with an architected line and rich, polished finish.',
    description:
      'The Monarch Wool Coat is designed for a refined winter wardrobe, refined with wide lapels, softened shoulders, and a weightless wool blend for all-day ease.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
    ],
    attributes: ['Wool blend', 'Shoulder structure', 'Made for layering'],
    rating: 4.8,
    availability: 'In stock',
    featured: false,
  },
  {
    id: 'ali-aurelia-ring-set',
    slug: 'aurelia-ring-set',
    name: 'Aurelia Ring Set',
    category: 'jewelry',
    collection: 'Signature Collection',
    price: 150,
    shortDescription: 'Layered gold rings designed to catch the light with subtle drama.',
    description:
      'Hand-finished in warm gold-tone metal, the Aurelia Ring Set features soft curves and dimensional surfaces for an elevated everyday statement.',
    image:
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80',
    ],
    attributes: ['18k gold finish', 'Stackable silhouette', 'Gift-ready'],
    rating: 4.9,
    availability: 'In stock',
    featured: true,
  },
  {
    id: 'ali-celeste-necklace',
    slug: 'celeste-necklace',
    name: 'Celeste Necklace',
    category: 'jewelry',
    collection: 'Jewelry Collection',
    price: 180,
    shortDescription: 'A luminous pendant necklace with enduring understated brilliance.',
    description:
      'The Celeste Necklace pairs a delicate chain with a faceted stone-inspired pendant to create a soft, elegant focal point for any wardrobe.',
    image:
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80',
    ],
    attributes: ['Facet detail', 'Fine chain', 'Gift-worthy finish'],
    rating: 4.8,
    availability: 'In stock',
    featured: false,
  },
  {
    id: 'ali-solstice-cuff',
    slug: 'solstice-cuff',
    name: 'Solstice Cuff',
    category: 'jewelry',
    collection: 'Exclusive Collection',
    price: 205,
    shortDescription: 'A bold statement cuff with polished contours and sculptural rhythm.',
    description:
      'Made for confident styling, the Solstice Cuff is defined by a soft geometric silhouette and a refined gold finish designed for day-to-evening layering.',
    image:
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80',
    ],
    attributes: ['Cuff design', 'Modern silhouette', 'Limited release'],
    rating: 4.9,
    availability: 'Only a few left',
    featured: true,
  },
  {
    id: 'ali-etoile-watch',
    slug: 'etoile-42mm-watch',
    name: 'Étoile 42mm Watch',
    category: 'watches',
    collection: 'Featured Collection',
    price: 340,
    shortDescription: 'A polished timepiece with a confident face and minimal luxury rhythm.',
    description:
      'Designed with contemporary restraint, the Étoile Watch gives a crisp, architectural profile with sapphire-inspired details and elegant leather pairing.',
    image:
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=900&q=80',
    ],
    attributes: ['42mm case', 'Leather strap', 'Swiss-inspired movement'],
    rating: 4.9,
    availability: 'In stock',
    featured: true,
  },
  {
    id: 'ali-velvet-oud-elixir',
    slug: 'velvet-oud-elixir',
    name: 'Velvet Oud Elixir',
    category: 'perfumes',
    collection: 'Luxury Essentials',
    price: 120,
    shortDescription: 'A smoky, golden fragrance with a warm-spiced and floral heart.',
    description:
      'Velvet Oud Elixir opens with saffron and blackcurrant before settling into a smooth oud and amber accord, leaving a rich and lasting trail.',
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1563170351-be82bc888e70?auto=format&fit=crop&w=900&q=80',
    ],
    attributes: ['Amber accord', 'Long wear', 'Signature evening scent'],
    rating: 4.9,
    availability: 'In stock',
    featured: true,
  },
  {
    id: 'ali-lune-leather-tote',
    slug: 'lune-leather-tote',
    name: 'Lune Leather Tote',
    category: 'accessories',
    collection: 'Gifts',
    price: 210,
    shortDescription: 'A sculpted leather tote with polished hardware and modern structure.',
    description:
      'The Lune Tote is built to carry an elevated routine: softly structured, roomy, and finished with brass hardware for a refined everyday statement.',
    image:
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80',
    ],
    attributes: ['Italian leather', 'Structured silhouette', 'Spacious interior'],
    rating: 4.8,
    availability: 'In stock',
    featured: false,
  },
  {
    id: 'ali-rose-noire-parfum',
    slug: 'rose-noire-parfum',
    name: 'Rose Noire Parfum',
    category: 'perfumes',
    collection: 'Best Sellers',
    price: 112,
    shortDescription: 'An elegant floral-oriental with black rose, iris, and cedar warmth.',
    description:
      'Rose Noire Parfum captures the contrast between delicate petals and rich wood. It feels modern, intimate, and intensely elegant, with a lingering, powder-soft trail.',
    image:
      'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1563170351-be82bc888e70?auto=format&fit=crop&w=900&q=80',
    ],
    attributes: ['Black rose', 'Iris silk', 'Soft cedar warmth'],
    rating: 4.9,
    availability: 'In stock',
    featured: false,
  },
]

export const featuredProducts = products.filter((product) => product.featured)

export const newArrivals = products.filter((product) => product.collection === 'New Arrivals')
export const bestSellers = products.filter((product) => product.collection === 'Best Sellers')

export const categoryMap = Object.fromEntries(categories.map((category) => [category.slug, category]))
export const collectionMap = Object.fromEntries(collections.map((collection) => [collection.slug, collection]))
