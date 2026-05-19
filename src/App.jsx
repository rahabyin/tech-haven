import { Routes, Route } from 'react-router-dom'
import { ProductProvider } from './hooks/useProducts'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import AddProductPage from './pages/AddProductPage'
import NotFoundPage from './pages/NotFoundPage'
import './styles/App.css'

function App() {
  return (
    <ProductProvider>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/add-product" element={<AddProductPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ProductProvider>
  )
}

export default App