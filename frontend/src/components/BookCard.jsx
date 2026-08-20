function BookCard({ title, author, category, available }) {
  return (
    <div className="book-card">
      <h3 className="book-title">{title}</h3>
      <p className="book-author"><strong>Author:</strong> {author}</p>
      <p className="book-category"><strong>Category:</strong> {category}</p>
      <p className="book-status">
        <strong>Status:</strong>{' '}
        <span className={available ? "available" : "not-available"}>
          {available ? "Available" : "Not Available"}
        </span>
      </p>
    </div>
  );
}

export default BookCard;
