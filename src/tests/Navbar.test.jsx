import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from '../components/Navbar'

vi.mock('../hooks/useProducts', () => ({
  useProducts: () => ({
    searchQuery: '',
    setSearchQuery: vi.fn(),
  }),
}))

describe('Navbar', () => {
  it('renders brand name and navigation links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )

    expect(screen.getByText('Tech Haven')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(screen.getByText('Add Product')).toBeInTheDocument()
  })

  it('renders search input', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )

    expect(screen.getByPlaceholderText('Search products...')).toBeInTheDocument()
  })
})