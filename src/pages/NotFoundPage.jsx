import { Link } from 'react-router-dom'
import '../styles/NotFoundPage.css'

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <span className="not-found-code">404</span>
        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="home-link">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage