import '../styles/ErrorMessage.css'

function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-container" role="alert">
      <div className="error-icon">⚠️</div>
      <h3>Oops! Something went wrong</h3>
      <p>{message}</p>
      {onRetry && (
        <button onClick={onRetry} className="retry-btn">
          Try Again
        </button>
      )}
    </div>
  )
}

export default ErrorMessage
