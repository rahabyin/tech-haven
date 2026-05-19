import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'

vi.mock('../hooks/useProducts', () => ({
  useProducts: () => ({
    storeInfo: {
      name: 'Tech Haven',
      description: 'Test store description',
    },
    featuredProducts: [
      {
        id: 1,
        name: 'Featured Gadget',
        description: 'A featured item',
        category: 'Test',
        price: 199.99,
        stock: 10,
        image: 'https://example.com/feat.jpg',
        featured: true,
      },
    ],
    loading: false,
    error: null,
    fetchProducts: vi.fn(),
  }),
}))

describe('LandingPage', () => {
  it('renders hero section with store name', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    )

    expect(screen.getByText('Tech Haven')).toBeInTheDocument()
    expect(screen.getByText('Test store description')).toBeInTheDocument()
  })

  it('renders featured products section', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    )

    expect(screen.getByText('Featured Products')).toBeInTheDocument()
    expect(screen.getByText('Featured Gadget')).toBeInTheDocument()
  })

  it('renders admin quick actions', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    )

    expect(screen.getByText('Admin Quick Actions')).toBeInTheDocument()
    expect(screen.getByText('Add Product')).toBeInTheDocument()
    expect(screen.getByText('Manage Inventory')).toBeInTheDocument()
  })
})