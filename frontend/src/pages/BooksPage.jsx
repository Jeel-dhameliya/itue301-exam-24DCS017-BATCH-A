import { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';

function BooksPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('http://localhost:5001/api/v1/books');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result.success && Array.isArray(result.data)) {
          setData(result.data);
        } else {
          throw new Error('Invalid data format received from API');
        }
      } catch (err) {
        setError('Failed to load books. ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="page books-page">
      <div className="page-header">
        <h2 className="page-title">Explore Our Library</h2>
        <p className="page-subtitle">
          Browse through our curated collection of books, check real-time availability, and discover your next read.
        </p>
      </div>

      {loading && (
        <div className="loading-container">
          <p className="loading">
            <span className="spinner"></span>
            Loading books...
          </p>
          <div className="skeleton-grid">
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
          </div>
        </div>
      )}

      {error && (
        <div className="error-card">
          <div className="error-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <div className="error-content">
            <h4 className="error-heading">Unable to Load Catalog</h4>
            <p className="error-message">{error}</p>
            <p className="error-hint">Please check if the backend server is running on port 5001.</p>
          </div>
        </div>
      )}

      {!loading && !error && (
        <div className="books-list">
          {data.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon">📖</span>
              <p className="empty-title">No books available</p>
              <p className="empty-desc">There are currently no books registered in the catalog.</p>
            </div>
          ) : (
            data.map((book) => (
              <BookCard
                key={book.id || book._id}
                title={book.title}
                author={book.author}
                category={book.category}
                available={book.available}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default BooksPage;

