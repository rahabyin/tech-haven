import { Link } from 'react-router-dom'
import { useProducts } from '../hooks/useProducts'
import ProductCard from '../components/ProductCard'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'
import '../styles/LandingPage.css'

function LandingPage() {
  const { storeInfo, featuredProducts, loading, error, fetchProducts } = useProducts()

  if (loading) return <LoadingSpinner message="Loading store data..." />
  if (error) return <ErrorMessage message={error} onRetry={fetchProducts} />

  return (
    <div className="landing-page">
      <section className="hero">
        <div className="hero-content">
          <h1>{storeInfo?.name || 'Tech Haven'}</h1>
          <p className="hero-description">
            {storeInfo?.description || 'Your premier destination for cutting-edge technology'}
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Products</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
            <div className="stat">
              <span className="stat-number">99%</span>
              <span className="stat-label">Uptime</span>
            </div>
          </div>
          <Link to="/products" className="hero-cta">
            Browse Products
          </Link>
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Products</h2>
        <p className="section-subtitle">Hand-picked premium tech for you</p>
        {featuredProducts.length > 0 ? (
          <div className="featured-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="no-products">No featured products available.</p>
        )}
        <Link to="/products" className="view-all-btn">
          View All Products →
        </Link>
      </section>

      <section className="quick-actions">
        <h2>Admin Quick Actions</h2>
        <div className="actions-grid">
          <Link to="/add-product" className="action-card">
            <span className="action-icon">➕</span>
            <h3>Add Product</h3>
            <p>Add new inventory to the store</p>
          </Link>
          <Link to="/products" className="action-card">
            <span className="action-icon">📦</span>
            <h3>Manage Inventory</h3>
            <p>View and edit existing products</p>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default LandingPage