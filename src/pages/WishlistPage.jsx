import { Link } from 'react-router-dom'
import { products } from '../data/products'

function WishlistPage() {
  const wishlist = products.slice(0, 3)

  return (
    <div className="container page-shell">
      <div className="page-header">
        <p className="eyebrow">Wishlist</p>
        <h1>Saved pieces</h1>
      </div>
      <div className="product-grid product-grid--wide">
        {wishlist.map((product) => (
          <article key={product.id} className="product-card">
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-card__content">
              <div className="product-card__meta">
                <span>{product.category}</span>
                <button type="button" aria-label={`Save ${product.name}`}>♥</button>
              </div>
              <h3>{product.name}</h3>
              <div className="product-card__bottom">
                <strong>${product.price}</strong>
                <button type="button" className="mini-button">Add to cart</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default WishlistPage
