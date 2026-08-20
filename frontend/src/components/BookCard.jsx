function BookCard({ title, author, category, available }) {
  return (
    <div className="book-card">
      <div className="book-card-header">
        <div className="book-icon-badge">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
            <path d="M6 6h10"/>
            <path d="M6 10h10"/>
          </svg>
        </div>
        <span className="book-category-tag">{category}</span>
      </div>

      <div className="book-card-body">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">
          <span className="author-label">Author</span>
          <span className="author-name">{author}</span>
        </p>
      </div>

      <div className="book-card-footer">
        <div className="book-status">
          <span className={available ? "available" : "not-available"}>
            <span className="status-indicator"></span>
            {available ? "Available" : "Not Available"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default BookCard;

