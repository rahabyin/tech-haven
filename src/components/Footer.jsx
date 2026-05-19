import { useProducts } from '../hooks/useProducts'
import '../styles/Footer.css'

function Footer() {
  const { storeInfo } = useProducts()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>{storeInfo?.name || 'Tech Haven'}</h3>
          <p>{storeInfo?.description || 'Premium technology and gadgets'}</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>📞 {storeInfo?.phone_number || '555-HAVEN'}</p>
          <p>✉️ {storeInfo?.email || 'admin@techhaven.com'}</p>
        </div>
        <div className="footer-section">
          <h4>Address</h4>
          <p>{storeInfo?.address || '456 Innovation Boulevard'}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Tech Haven Admin Portal. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer