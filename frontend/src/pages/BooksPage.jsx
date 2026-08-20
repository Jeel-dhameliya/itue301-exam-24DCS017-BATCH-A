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
      <h2>Books Catalog</h2>

      {loading && <p className="loading">Loading books...</p>}

      {error && <p className="error-message">{error}</p>}

      {!loading && !error && (
        <div className="books-list">
          {data.length === 0 ? (
            <p>No books available.</p>
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
