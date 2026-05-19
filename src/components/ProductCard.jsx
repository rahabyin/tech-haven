import { Link } from 'react-router-dom'
import '../styles/ProductCard.css'

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
        {product.featured && <span className="featured-badge">⭐ Featured</span>}
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <span className={`product-stock ${product.stock < 20 ? 'low-stock' : ''}`}>
            {product.stock} in stock
          </span>
        </div>
        <Link to={`/products/${product.id}`} className="view-details-btn">
          View Details →
        </Link>
      </div>
    </article>
  )
}

export default ProductCard