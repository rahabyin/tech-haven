import { useState, useId } from 'react'
import '../styles/ProductForm.css'

function ProductForm({ initialData = {}, onSubmit, submitLabel = 'Submit', isEdit = false }) {
  const nameId = useId()
  const descId = useId()
  const catId = useId()
  const priceId = useId()
  const stockId = useId()
  const imageId = useId()
  const featuredId = useId()

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    stock: '',
    image: '',
    featured: false,
    ...initialData,
  })

  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Product name is required'
    if (!formData.description.trim()) newErrors.description = 'Description is required'
    if (!formData.category.trim()) newErrors.category = 'Category is required'
    if (!formData.price || formData.price <= 0) newErrors.price = 'Valid price is required'
    if (!formData.stock || formData.stock < 0) newErrors.stock = 'Valid stock quantity is required'
    if (!formData.image.trim()) newErrors.image = 'Image URL is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      onSubmit({
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock, 10),
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="product-form" noValidate>
      <div className="form-group">
        <label htmlFor={nameId}>Product Name *</label>
        <input
          id={nameId}
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? 'error' : ''}
          placeholder="e.g., Quantum Headphones Pro"
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor={descId}>Description *</label>
        <textarea
          id={descId}
          name="description"
          value={formData.description}
          onChange={handleChange}
          className={errors.description ? 'error' : ''}
          rows="3"
          placeholder="Describe the product features..."
        />
        {errors.description && <span className="error-message">{errors.description}</span>}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor={catId}>Category *</label>
          <select
            id={catId}
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={errors.category ? 'error' : ''}
          >
            <option value="">Select category</option>
            <option value="Audio">Audio</option>
            <option value="Wearables">Wearables</option>
            <option value="Drones">Drones</option>
            <option value="VR">VR</option>
            <option value="Accessories">Accessories</option>
            <option value="Storage">Storage</option>
            <option value="Smart Home">Smart Home</option>
            <option value="Gaming">Gaming</option>
          </select>
          {errors.category && <span className="error-message">{errors.category}</span>}
        </div>

        <div className="form-group">
          <label htmlFor={featuredId} className="checkbox-label">
            <input
              id={featuredId}
              name="featured"
              type="checkbox"
              checked={formData.featured}
              onChange={handleChange}
            />
            Featured Product
          </label>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor={priceId}>Price ($) *</label>
          <input
            id={priceId}
            name="price"
            type="number"
            step="0.01"
            min="0"
            value={formData.price}
            onChange={handleChange}
            className={errors.price ? 'error' : ''}
            placeholder="0.00"
          />
          {errors.price && <span className="error-message">{errors.price}</span>}
        </div>

        <div className="form-group">
          <label htmlFor={stockId}>Stock Quantity *</label>
          <input
            id={stockId}
            name="stock"
            type="number"
            min="0"
            value={formData.stock}
            onChange={handleChange}
            className={errors.stock ? 'error' : ''}
            placeholder="0"
          />
          {errors.stock && <span className="error-message">{errors.stock}</span>}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor={imageId}>Image URL *</label>
        <input
          id={imageId}
          name="image"
          type="url"
          value={formData.image}
          onChange={handleChange}
          className={errors.image ? 'error' : ''}
          placeholder="https://example.com/image.jpg"
        />
        {errors.image && <span className="error-message">{errors.image}</span>}
      </div>

      <button type="submit" className="submit-btn">
        {submitLabel}
      </button>
    </form>
  )
}

export default ProductForm
