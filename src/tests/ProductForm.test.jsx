import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ProductForm from '../components/ProductForm'

describe('ProductForm', () => {
  const mockSubmit = vi.fn()

  beforeEach(() => {
    mockSubmit.mockClear()
  })

  it('renders all form fields', () => {
    render(<ProductForm onSubmit={mockSubmit} />)

    expect(screen.getByLabelText(/Product Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Category/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Price/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Stock Quantity/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Image URL/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Featured Product/i)).toBeInTheDocument()
  })

  it('displays validation errors for empty required fields', () => {
    render(<ProductForm onSubmit={mockSubmit} />)

    const submitButton = screen.getByText('Submit')
    fireEvent.click(submitButton)

    expect(screen.getByText('Product name is required')).toBeInTheDocument()
    expect(screen.getByText('Description is required')).toBeInTheDocument()
    expect(screen.getByText('Category is required')).toBeInTheDocument()
    expect(screen.getByText('Valid price is required')).toBeInTheDocument()
    expect(screen.getByText('Valid stock quantity is required')).toBeInTheDocument()
    expect(screen.getByText('Image URL is required')).toBeInTheDocument()
  })

  it('submits form with valid data', () => {
    render(<ProductForm onSubmit={mockSubmit} submitLabel="Add Product" />)

    fireEvent.change(screen.getByLabelText(/Product Name/i), {
      target: { value: 'New Gadget' },
    })
    fireEvent.change(screen.getByLabelText(/Description/i), {
      target: { value: 'A cool new gadget' },
    })
    fireEvent.change(screen.getByLabelText(/Category/i), {
      target: { value: 'Audio' },
    })
    fireEvent.change(screen.getByLabelText(/Price/i), {
      target: { value: '199.99' },
    })
    fireEvent.change(screen.getByLabelText(/Stock Quantity/i), {
      target: { value: '50' },
    })
    fireEvent.change(screen.getByLabelText(/Image URL/i), {
      target: { value: 'https://example.com/gadget.jpg' },
    })

    fireEvent.click(screen.getByText('Add Product'))

    expect(mockSubmit).toHaveBeenCalledWith({
      name: 'New Gadget',
      description: 'A cool new gadget',
      category: 'Audio',
      price: 199.99,
      stock: 50,
      image: 'https://example.com/gadget.jpg',
      featured: false,
    })
  })

  it('populates form with initial data when editing', () => {
    const initialData = {
      name: 'Existing Product',
      description: 'Already exists',
      category: 'Gaming',
      price: 299.99,
      stock: 20,
      image: 'https://example.com/existing.jpg',
      featured: true,
    }

    render(<ProductForm initialData={initialData} onSubmit={mockSubmit} isEdit />)

    expect(screen.getByLabelText(/Product Name/i)).toHaveValue('Existing Product')
    expect(screen.getByLabelText(/Featured Product/i)).toBeChecked()
  })
})