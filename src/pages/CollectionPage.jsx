import { Link } from 'react-router-dom'
import { collections } from '../data/products'

function CollectionPage() {
  return (
    <div className="container page-shell">
      <div className="page-header">
        <p className="eyebrow">Collections</p>
        <h1>Curated stories of modern luxury</h1>
      </div>
      <div className="collection-grid">
        {collections.map((collection) => (
          <Link key={collection.slug} to={`/collection/${collection.slug}`} className="collection-card">
            <img src={collection.image} alt={collection.name} />
            <div className="collection-card__content">
              <p>{collection.name}</p>
              <span>{collection.description}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CollectionPage
