import BookCard from '../components/BookCard';

function BooksPage() {
  const sampleBooks = [
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "Software Engineering",
      available: true
    },
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt & David Thomas",
      category: "Programming",
      available: false
    },
    {
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      category: "Web Development",
      available: true
    }
  ];

  return (
    <div className="page books-page">
      <h2>Books Catalog</h2>
      <div className="books-list">
        {sampleBooks.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            author={book.author}
            category={book.category}
            available={book.available}
          />
        ))}
      </div>
    </div>
  );
}

export default BooksPage;
