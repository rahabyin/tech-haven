import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const mockProduct = {
  id: 1,
  name: 'Test Gadget',
  description: 'A test gadget for testing',
  category: 'Test',
  price: 99.99,
  stock: 10,
  image: 'https://example.com/image.jpg',
  featured: true,
}

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>
    )

    expect(screen.getByText('Test Gadget')).toBeInTheDocument()
    expect(screen.getByText('A test gadget for testing')).toBeInTheDocument()
    expect(screen.getByText('Test')).toBeInTheDocument()
    expect(screen.getByText('$99.99')).toBeInTheDocument()
    expect(screen.getByText('10 in stock')).toBeInTheDocument()
  })

  it('displays featured badge for featured products', () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>
    )

    expect(screen.getByText('⭐ Featured')).toBeInTheDocument()
  })

  it('links to product detail page', () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>
    )

    const link = screen.getByText('View Details →')
    expect(link).toHaveAttribute('href', '/products/1')
  })
})