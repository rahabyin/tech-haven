import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const API_URL = 'http://localhost:3001'

const ProductContext = createContext(null)

export function useProducts() {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider')
  }
  return context
}

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([])
  const [storeInfo, setStoreInfo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch(`${API_URL}/products`)
      if (!response.ok) throw new Error('Failed to fetch products')
      const data = await response.json()
      setProducts(data)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchStoreInfo = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/store_info/1`)
      if (!response.ok) throw new Error('Failed to fetch store info')
      const data = await response.json()
      setStoreInfo(data)
    } catch (err) {
      console.error('Store info fetch error:', err)
    }
  }, [])

  useEffect(() => {
    fetchProducts()
    fetchStoreInfo()
  }, [fetchProducts, fetchStoreInfo])

  const addProduct = async (productData) => {
    try {
      const response = await fetch(`${API_URL}/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...productData,
          id: Date.now(),
        }),
      })
      if (!response.ok) throw new Error('Failed to add product')
      const newProduct = await response.json()
      setProducts((prev) => [...prev, newProduct])
      return newProduct
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  const updateProduct = async (id, updates) => {
    try {
      const response = await fetch(`${API_URL}/products/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      })
      if (!response.ok) throw new Error('Failed to update product')
      const updatedProduct = await response.json()
      setProducts((prev) =>
        prev.map((p) => (p.id === id ? updatedProduct : p))
      )
      return updatedProduct
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: 'DELETE',
    })
    if (!response.ok) throw new Error('Failed to delete product')
    setProducts((prev) => prev.filter((p) => p.id !== id))
  } catch (err) {
    setError(err.message)
    throw err
  }
}

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const featuredProducts = products.filter((p) => p.featured)

  const value = {
    products,
    filteredProducts,
    featuredProducts,
    storeInfo,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    addProduct,
    updateProduct,
    deleteProduct,
    fetchProducts,
  }

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
  
}