import { useState } from 'react';

function BorrowPage() {
  const [memberName, setMemberName] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [borrowDate, setBorrowDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Task 2: Form state managed locally without API calls
  };

  return (
    <div className="page borrow-page">
      <h2>Borrow a Book</h2>
      
      <form onSubmit={handleSubmit} className="borrow-form">
        <div className="form-group">
          <label htmlFor="memberName">Member Name:</label>
          <input
            type="text"
            id="memberName"
            value={memberName}
            onChange={(e) => setMemberName(e.target.value)}
            placeholder="Enter member name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="bookTitle">Book Title:</label>
          <input
            type="text"
            id="bookTitle"
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
            placeholder="Enter book title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="borrowDate">Borrow Date:</label>
          <input
            type="date"
            id="borrowDate"
            value={borrowDate}
            onChange={(e) => setBorrowDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="returnDate">Return Date:</label>
          <input
            type="date"
            id="returnDate"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Borrow Book</button>
      </form>

      <div className="borrow-summary">
        <h3>Borrow Summary</h3>
        <p><strong>Current member:</strong> {memberName || 'None'}</p>
        <p><strong>Book Title:</strong> {bookTitle || 'None'}</p>
        <p><strong>Borrow Date:</strong> {borrowDate || 'None'}</p>
        <p><strong>Return Date:</strong> {returnDate || 'None'}</p>
      </div>
    </div>
  );
}

export default BorrowPage;
