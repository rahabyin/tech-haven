import '../styles/LoadingSpinner.css'

function LoadingSpinner({ message = 'Loading...' }) {
  return (
    <div className="loading-container" role="status" aria-live="polite">
      <div className="spinner"></div>
      <p>{message}</p>
    </div>
  )
}

export default LoadingSpinner