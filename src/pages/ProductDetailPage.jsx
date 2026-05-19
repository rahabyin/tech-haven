import { useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProducts } from '../hooks/useProducts'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'
import '../styles/ProductDetailPage.css'

function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { products, updateProduct, deleteProduct, loading, error, fetchProducts } = useProducts()
  const priceInputRef = useRef(null)

  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({})
  const [updateError, setUpdateError] = useState(null)
  const [updateSuccess, setUpdateSuccess] = useState(false)

  const product = products.find((p) => p.id === parseInt(id, 10))

  const handleStartEdit = () => {
    setEditData({ ...product })
    setIsEditing(true)
    setUpdateSuccess(false)
    setTimeout(() => priceInputRef.current?.focus(), 0)
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
    setEditData({})
    setUpdateError(null)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setEditData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSave = async () => {
    try {
      setUpdateError(null)
      await updateProduct(product.id, {
        name: editData.name,
        description: editData.description,
        category: editData.category,
        price: parseFloat(editData.price),
        stock: parseInt(editData.stock, 10),
        featured: editData.featured,
      })
      setIsEditing(false)
      setUpdateSuccess(true)
      setTimeout(() => setUpdateSuccess(false), 3000)
    } catch (err) {
      setUpdateError('Failed to update product. Please try again.')
    }
  }

    const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(product.id)
        navigate('/products')
      } catch (err) {
        setUpdateError('Failed to delete product. Please try again.')
      }
    }
  }

  if (loading) return <LoadingSpinner message="Loading product details..." />
  if (error) return <ErrorMessage message={error} onRetry={fetchProducts} />
  if (!product) {
    return (
      <div className="not-found">
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/products')} className="back-btn">
          Back to Products
        </button>
      </div>
    )
  }

  return (
    <div className="product-detail-page">
      <button onClick={() => navigate('/products')} className="back-link">
        ← Back to Products
      </button>

      {updateSuccess && (
        <div className="success-banner" role="status">
          ✅ Product updated successfully!
        </div>
      )}

      {updateError && (
        <div className="error-banner" role="alert">
          {updateError}
        </div>
      )}

      <div className="detail-container">
        <div className="detail-image-section">
          <img src={product.image} alt={product.name} className="detail-image" />
          {!isEditing && product.featured && (
            <span className="detail-featured-badge">⭐ Featured</span>
          )}
        </div>

        <div className="detail-info">
          {!isEditing ? (
            <>
              <span className="detail-category">{product.category}</span>
              <h1>{product.name}</h1>
              <p className="detail-description">{product.description}</p>

              <div className="detail-stats">
                <div className="detail-stat">
                  <span className="stat-label">Price</span>
                  <span className="stat-value price">${product.price.toFixed(2)}</span>
                </div>
                <div className="detail-stat">
                  <span className="stat-label">Stock</span>
                  <span className={`stat-value ${product.stock < 20 ? 'low-stock' : ''}`}>
                    {product.stock} units
                  </span>
                </div>
                <div className="detail-stat">
                  <span className="stat-label">Product ID</span>
                  <span className="stat-value">#{product.id}</span>
                </div>
              </div>

              <div className="detail-actions">
                <button onClick={handleStartEdit} className="edit-btn">
                  ✏️ Edit Product
                </button>
                <button onClick={handleDelete} className="delete-btn">
                  🗑️ Delete Product
                </button>
              </div>
                          </>
          ) : (
            <div className="edit-form">
              <h2>Edit Product</h2>

              <div className="edit-group">
                <label>Name</label>
                <input
                  name="name"
                  value={editData.name}
                  onChange={handleChange}
                  type="text"
                />
              </div>

              <div className="edit-group">
                <label>Category</label>
                <select name="category" value={editData.category} onChange={handleChange}>
                  <option value="Audio">Audio</option>
                  <option value="Wearables">Wearables</option>
                  <option value="Drones">Drones</option>
                  <option value="VR">VR</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Storage">Storage</option>
                  <option value="Smart Home">Smart Home</option>
                  <option value="Gaming">Gaming</option>
                </select>
              </div>

              <div className="edit-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={editData.description}
                  onChange={handleChange}
                  rows="3"
                />
              </div>

              <div className="edit-row">
                <div className="edit-group">
                  <label>Price ($)</label>
                  <input
                    ref={priceInputRef}
                    name="price"
                    value={editData.price}
                    onChange={handleChange}
                    type="number"
                    step="0.01"
                    min="0"
                  />
                </div>
                <div className="edit-group">
                  <label>Stock</label>
                  <input
                    name="stock"
                    value={editData.stock}
                    onChange={handleChange}
                    type="number"
                    min="0"
                  />
                </div>
              </div>

              <div className="edit-group">
                <label className="checkbox-label">
                  <input
                    name="featured"
                    type="checkbox"
                    checked={editData.featured}
                    onChange={handleChange}
                  />
                  Featured Product
                </label>
              </div>

              <div className="edit-actions">
                <button onClick={handleSave} className="save-btn">
                  💾 Save Changes
                </button>
                <button onClick={handleCancelEdit} className="cancel-btn">
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
