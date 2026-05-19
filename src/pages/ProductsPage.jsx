import { useProducts } from '../hooks/useProducts'
import ProductCard from '../components/ProductCard'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'
import '../styles/ProductsPage.css'

function ProductsPage() {
  const { filteredProducts, loading, error, searchQuery, fetchProducts } = useProducts()

  if (loading) return <LoadingSpinner message="Loading products..." />
  if (error) return <ErrorMessage message={error} onRetry={fetchProducts} />

  return (
    <div className="products-page">
      <header className="page-header">
        <h1>Product Inventory</h1>
        <p className="results-count">
          {searchQuery
            ? `Found ${filteredProducts.length} result${filteredProducts.length !== 1 ? 's' : ''} for "${searchQuery}"`
            : `Showing ${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''}`}
        </p>
      </header>

      {filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map((product) => (    // <-- Uses filteredProducts
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <span className="no-results-icon">🔍</span>
          <h3>No products found</h3>
          <p>Try adjusting your search terms or add a new product.</p>
        </div>
      )}
    </div>
  )
}
export default ProductsPage