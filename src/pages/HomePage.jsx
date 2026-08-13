import { Link } from 'react-router-dom'
import { products, categories, collections, featuredProducts } from '../data/products'

const heroMetrics = [
  { label: 'Curated collections', value: '24+' },
  { label: 'Satisfied clients', value: '18k' },
  { label: 'Luxury essentials', value: '120+' },
]

function HomePage() {
  const topProducts = products.slice(0, 4)

  return (
    <>
      <section className="hero-section">
        <div className="hero-content container">
          <div className="hero-copy">
            <p className="eyebrow">ALI LUXE</p>
            <h1>Luxury, Defined Differently.</h1>
            <p className="lead">Discover beauty, fashion and timeless luxury curated for a modern world.</p>
            <div className="cta-row">
              <Link to="/shop" className="button-primary">Shop Collection</Link>
              <Link to="/about" className="button-secondary">Explore ALI LUXE</Link>
            </div>
            <div className="metric-row">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="metric-item">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card hero-card--main">
              <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80" alt="ALI LUXE fashion editorial" />
            </div>
            <div className="hero-card hero-card--mini">
              <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80" alt="ALI LUXE skin care ritual" />
            </div>
          </div>
        </div>
      </section>

      <section className="story-section container">
        <div className="section-heading">
          <p className="eyebrow">AIL LUXE</p>
          <h2>Curated with intent. Worn with confidence.</h2>
        </div>
        <div className="story-grid">
          <div>
            <p>ALI LUXE brings together beauty, fashion, and timeless essentials for a life that feels polished on purpose. Every piece is selected to balance modern elegance with enduring craftsmanship.</p>
          </div>
          <div>
            <p>From luminous skincare to elevated tailoring and statement jewelry, each collection is designed to feel quietly luxurious and unmistakably premium.</p>
          </div>
        </div>
      </section>

      <section className="container section-block">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">Shop by Category</p>
            <h2>House essentials for every ritual.</h2>
          </div>
          <Link to="/shop" className="inline-link">View all</Link>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <Link key={category.slug} to={`/${category.slug}`} className="category-card">
              <img src={category.image} alt={category.name} />
              <div className="category-card__copy">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <span>Explore</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container section-block featured-collection">
        <div className="feature-banner">
          <div className="feature-banner__content">
            <p className="eyebrow">Featured Collection</p>
            <h2>The Signature Edit</h2>
            <p>Modern luxury shaped by refined silhouettes, tactile details, and elevated rituals.</p>
            <Link to="/collection/featured-collection" className="button-primary">Discover the Edit</Link>
          </div>
          <img src={collections[2]?.image} alt="Featured ALI LUXE collection" />
        </div>
      </section>

      <section className="container section-block">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">New Arrivals</p>
            <h2>Freshly curated for the season.</h2>
          </div>
          <Link to="/shop" className="inline-link">Shop the edit</Link>
        </div>
        <div className="product-grid">
          {topProducts.map((product) => (
            <article key={product.id} className="product-card">
              <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <div className="product-card__content">
                <div className="product-card__meta">
                  <span>{product.category}</span>
                  <button type="button" aria-label={`Save ${product.name}`}>♡</button>
                </div>
                <h3>{product.name}</h3>
                <p>{product.shortDescription}</p>
                <div className="product-card__bottom">
                  <strong>${product.price}</strong>
                  <button type="button" className="mini-button">Add to cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-block editorial-beauty">
        <div className="container editorial-panel">
          <div className="editorial-copy">
            <p className="eyebrow">Beauty</p>
            <h2>Skin-first rituals with a luminous finish.</h2>
            <p>Discover textures and formulas designed to refine, soften, and elevate everyday self-care.</p>
            <Link to="/beauty" className="button-secondary">Explore Beauty</Link>
          </div>
        </div>
      </section>

      <section className="editorial-block editorial-fashion">
        <div className="container editorial-panel editorial-panel--reverse">
          <div className="editorial-copy">
            <p className="eyebrow">Fashion</p>
            <h2>Elegant essentials, cut for motion.</h2>
            <p>Minimal silhouettes and tactile layers built for evenings, travel, and polished daily dressing.</p>
            <Link to="/fashion" className="button-secondary">Discover Fashion</Link>
          </div>
        </div>
      </section>

      <section className="editorial-block editorial-jewelry">
        <div className="container editorial-panel">
          <div className="editorial-copy">
            <p className="eyebrow">Jewelry</p>
            <h2>Fine detail. Lasting shine.</h2>
            <p>Statement pieces and everyday refinements crafted to be worn, layered, and cherished.</p>
            <Link to="/jewelry" className="button-secondary">Discover Jewelry</Link>
          </div>
        </div>
      </section>

      <section className="container section-block">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">Best Sellers</p>
            <h2>House favorites with enduring appeal.</h2>
          </div>
          <Link to="/shop" className="inline-link">See all</Link>
        </div>
        <div className="product-grid">
          {featuredProducts.slice(0, 4).map((product) => (
            <article key={product.id} className="product-card">
              <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <div className="product-card__content">
                <div className="product-card__meta">
                  <span>{product.category}</span>
                  <button type="button" aria-label={`Save ${product.name}`}>♡</button>
                </div>
                <h3>{product.name}</h3>
                <p>{product.shortDescription}</p>
                <div className="product-card__bottom">
                  <strong>${product.price}</strong>
                  <button type="button" className="mini-button">Add to cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="lifestyle-banner container">
        <div className="lifestyle-banner__content">
          <p className="eyebrow">ALI LUXE lifestyle</p>
          <h2>Elegance for the way you live.</h2>
          <Link to="/shop" className="button-primary">Shop the lifestyle</Link>
        </div>
      </section>

      <section className="container story-block">
        <div className="story-block__image">
          <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80" alt="ALI LUXE brand story" />
        </div>
        <div className="story-block__text">
          <p className="eyebrow">Our story</p>
          <h2>Intentional luxury for modern rituals.</h2>
          <p>ALI LUXE was founded around a simple idea: that luxury should feel personal, elevated, and easy to live with. We curate essentials that translate beauty, confidence, and sophistication into daily life.</p>
          <Link to="/about" className="button-secondary">Read our story</Link>
        </div>
      </section>

      <section className="container benefits-section">
        <div className="section-heading center-heading">
          <p className="eyebrow">Why ALI LUXE</p>
          <h2>Premium support, thoughtfully delivered.</h2>
        </div>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h3>Complimentary Shipping</h3>
            <p>Fast, insured delivery on curated orders across global destinations.</p>
          </div>
          <div className="benefit-item">
            <h3>Luxury Packaging</h3>
            <p>Signature wrapping and elevated presentation for every order.</p>
          </div>
          <div className="benefit-item">
            <h3>Easy Returns</h3>
            <p>Simple exchange support designed around confidence and trust.</p>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container newsletter-shell">
          <div>
            <p className="eyebrow">Stay connected</p>
            <h2>Receive new arrivals, beauty notes, and private offers.</h2>
          </div>
          <form className="newsletter-form newsletter-form--wide">
            <input type="email" placeholder="Email address" aria-label="Email address for newsletter" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default HomePage
