import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProducts } from '../hooks/useProducts'
import ProductForm from '../components/ProductForm'
import '../styles/AddProductPage.css'

function AddProductPage() {
  const { addProduct } = useProducts()
  const navigate = useNavigate()
  const [submitError, setSubmitError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (formData) => {
    try {
      setSubmitError(null)
      setIsSubmitting(true)
      await addProduct(formData)
      navigate('/products')
    } catch (err) {
      setSubmitError('Failed to add product. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <div className="add-product-page">
      <header className="page-header">
        <h1>Add New Product</h1>
        <p>Fill in the details below to add a new product to the inventory.</p>
      </header>

      {submitError && (
        <div className="error-banner" role="alert">
          {submitError}
        </div>
      )}

      <div className="form-container">
        <ProductForm
          onSubmit={handleSubmit}
          submitLabel={isSubmitting ? 'Adding...' : 'Add Product'}
        />
      </div>
    </div>
  )
}

export default AddProductPage