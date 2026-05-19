import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { useProducts } from '../hooks/useProducts'
import '../styles/Navbar.css'

function Navbar() {
  const { searchQuery, setSearchQuery } = useProducts()
  const navigate = useNavigate()
  const location = useLocation()

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // Navigate to products page when pressing Enter
      if (location.pathname !== '/products') {
        navigate('/products')
      }
    }
  }

  // Clear search and navigate home
  const handleClear = () => {
    setSearchQuery('')
  }

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-brand">
        <NavLink to="/" className="brand-link" onClick={handleClear}>
          <span className="brand-icon">🌐</span>
          <span className="brand-text">Tech Haven</span>
        </NavLink>
      </div>

      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="search-input"
          aria-label="Search products"
        />
        {searchQuery && (
          <button
            className="search-clear"
            onClick={handleClear}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>

      <ul className="navbar-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={handleClear}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-product" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Add Product
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar