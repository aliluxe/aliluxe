import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function ProductPage({ products, categories, collections }) {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)

  if (!product) {
    return <div className="container page-shell">Product not found.</div>
  }

  const related = products
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, 4)

  const categoryName = categories.find((c) => c.slug === product.category)?.name || product.category
  const collectionName = collections.find((c) => c.slug === product.collection?.toLowerCase().replace(/\s+/g, '-'))?.name || 'Featured collection'

  return (
    <div className="container page-shell product-page">
      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/shop">Shop</Link>
        <span>/</span>
        <span>{categoryName}</span>
      </div>

      <div className="product-detail">
        <div className="product-gallery">
          <div className="gallery-main">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="gallery-thumbs">
            {product.gallery.map((image, index) => (
              <img key={`${product.id}-${index}`} src={image} alt={`${product.name} view ${index + 1}`} />
            ))}
          </div>
        </div>

        <div className="product-summary">
          <p className="eyebrow">{collectionName}</p>
          <h1>{product.name}</h1>
          <div className="rating-row">
            <span>★★★★★</span>
            <small>{product.rating} / 5</small>
          </div>
          <div className="price-row">
            <strong>${product.price}</strong>
            <span>Free shipping on orders over $150</span>
          </div>
          <p className="product-description">{product.description}</p>

          <div className="product-options">
            <div>
              <label>Size</label>
              <div className="chip-group">
                <button type="button">XS</button>
                <button type="button">S</button>
                <button type="button" className="active">M</button>
                <button type="button">L</button>
              </div>
            </div>
            <div>
              <label>Color</label>
              <div className="chip-group">
                <button type="button" className="swatch swatch--black active" aria-label="Black" />
                <button type="button" className="swatch swatch--gold" aria-label="Gold" />
                <button type="button" className="swatch swatch--ivory" aria-label="Ivory" />
              </div>
            </div>
          </div>

          <div className="purchase-row">
            <label className="qty-box">
              Qty
              <input type="number" defaultValue="1" min="1" />
            </label>
            <button type="button" className="button-primary">Add to cart</button>
            <button type="button" className="button-secondary">Buy now</button>
          </div>

          <div className="secondary-actions">
            <button type="button">♡ Add to wishlist</button>
            <button type="button">Share</button>
          </div>

          <div className="product-meta-boxes">
            <div><strong>Shipping</strong><span>Complimentary delivery</span></div>
            <div><strong>Returns</strong><span>30-day exchange support</span></div>
            <div><strong>Care</strong><span>Luxury care instructions</span></div>
          </div>
        </div>
      </div>

      <div className="detail-sections">
        <div className="detail-block">
          <h2>Product details</h2>
          <ul>
            {product.attributes.map((attribute) => <li key={attribute}>{attribute}</li>)}
          </ul>
        </div>
        <div className="detail-block">
          <h2>Shipping & returns</h2>
          <p>Orders are prepared with signature gifting and delivered with tracking. Returns are accepted within 30 days for eligible items.</p>
        </div>
        <div className="detail-block">
          <h2>Reviews</h2>
          <p>“The finish feels beautifully refined and the quality is immediately visible.”</p>
        </div>
      </div>

      <div className="related-section">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">You may also like</p>
            <h2>Related pieces</h2>
          </div>
        </div>
        <div className="product-grid">
          {related.map((item) => (
            <article key={item.id} className="product-card">
              <Link to={`/product/${item.slug}`}>
                <img src={item.image} alt={item.name} />
              </Link>
              <div className="product-card__content">
                <div className="product-card__meta">
                  <span>{item.category}</span>
                  <button type="button" aria-label={`Save ${item.name}`}>♡</button>
                </div>
                <h3>{item.name}</h3>
                <p>{item.shortDescription}</p>
                <div className="product-card__bottom">
                  <strong>${item.price}</strong>
                  <button type="button" className="mini-button">Add to cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductPage
