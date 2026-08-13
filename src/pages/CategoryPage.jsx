import { Link } from 'react-router-dom'
import { categories, products } from '../data/products'

function CategoryPage({ category }) {
  const categoryData = categories.find((item) => item.slug === category)
  const categoryProducts = products.filter((product) => product.category === category)

  if (!categoryData) {
    return <div className="container page-shell">Category not found.</div>
  }

  return (
    <div className="container page-shell">
      <div className="page-header page-header--feature">
        <div>
          <p className="eyebrow">{categoryData.name}</p>
          <h1>{categoryData.name}</h1>
        </div>
        <img src={categoryData.image} alt={categoryData.name} />
      </div>

      <p className="category-intro">{categoryData.description}</p>

      <div className="product-grid product-grid--wide">
        {categoryProducts.map((product) => (
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
  )
}

export default CategoryPage
