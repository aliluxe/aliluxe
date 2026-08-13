import { Link, useParams } from 'react-router-dom'
import { collections, products } from '../data/products'

function CollectionDetailPage() {
  const { slug } = useParams()
  const collection = collections.find((item) => item.slug === slug)
  const collectionProducts = products.filter((product) => product.collection === collection?.name)

  if (!collection) return <div className="container page-shell">Collection not found.</div>

  return (
    <div className="container page-shell">
      <div className="page-header page-header--feature">
        <div>
          <p className="eyebrow">Collection</p>
          <h1>{collection.name}</h1>
        </div>
        <img src={collection.image} alt={collection.name} />
      </div>
      <p className="category-intro">{collection.description}</p>
      <div className="product-grid product-grid--wide">
        {collectionProducts.map((product) => (
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

export default CollectionDetailPage
