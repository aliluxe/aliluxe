import { Link } from 'react-router-dom'
import { products, categories } from '../data/products'

function ShopPage() {
  return (
    <div className="container page-shell">
      <div className="page-header">
        <p className="eyebrow">Shop</p>
        <h1>Curated luxury essentials</h1>
      </div>

      <div className="shop-layout">
        <aside className="filters-panel">
          <h3>Categories</h3>
          <ul>
            {categories.map((category) => (
              <li key={category.slug}><Link to={`/${category.slug}`}>{category.name}</Link></li>
            ))}
          </ul>
          <h3>Collections</h3>
          <ul>
            <li><Link to="/collection/new-arrivals">New Arrivals</Link></li>
            <li><Link to="/collection/best-sellers">Best Sellers</Link></li>
            <li><Link to="/collection/featured-collection">Featured Collection</Link></li>
          </ul>
          <h3>Price</h3>
          <input type="range" min="20" max="400" defaultValue="250" aria-label="Price filter" />
        </aside>

        <div className="shop-results">
          <div className="shop-toolbar">
            <span>{products.length} products</span>
            <select aria-label="Sort products">
              <option>Sort by newest</option>
              <option>Sort by price</option>
              <option>Sort by popularity</option>
            </select>
          </div>
          <div className="product-grid product-grid--wide">
            {products.map((product) => (
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
        </div>
      </div>
    </div>
  )
}

export default ShopPage
