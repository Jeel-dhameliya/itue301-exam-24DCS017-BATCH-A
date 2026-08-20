import { useState } from 'react';

function BorrowPage() {
  const [memberName, setMemberName] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [borrowDate, setBorrowDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Task 2: Form state managed locally without API calls
    if (memberName && bookTitle && borrowDate && returnDate) {
      setSubmittedData({
        memberName,
        bookTitle,
        borrowDate,
        returnDate,
        timestamp: new Date().toLocaleTimeString()
      });
    }
  };

  return (
    <div className="page borrow-page">
      <div className="borrow-container">
        {/* Form Card */}
        <div className="borrow-card">
          {submittedData && (
            <div className="success-banner">
              <div className="success-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <strong>Borrow Request Submitted!</strong>
                <p>Book &ldquo;{submittedData.bookTitle}&rdquo; has been requested for {submittedData.memberName}.</p>
              </div>
            </div>
          )}

          <div className="borrow-header">
            <div className="borrow-header-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
                <path d="M12 6v6"/>
                <path d="M9 9h6"/>
              </svg>
            </div>
            <h2 className="borrow-title">Borrow a Book</h2>
            <p className="borrow-subtitle">Enter the borrowing details below.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="borrow-form">
            <div className="form-group">
              <label htmlFor="memberName">
                <span className="label-text">Member Name</span>
                <span className="required-star">*</span>
              </label>
              <div className="input-wrapper">
                <span className="input-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </span>
                <input
                  type="text"
                  id="memberName"
                  value={memberName}
                  onChange={(e) => setMemberName(e.target.value)}
                  placeholder="Enter member name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="bookTitle">
                <span className="label-text">Book Title</span>
                <span className="required-star">*</span>
              </label>
              <div className="input-wrapper">
                <span className="input-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                </span>
                <input
                  type="text"
                  id="bookTitle"
                  value={bookTitle}
                  onChange={(e) => setBookTitle(e.target.value)}
                  placeholder="Enter book title"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="borrowDate">
                  <span className="label-text">Borrow Date</span>
                  <span className="required-star">*</span>
                </label>
                <div className="input-wrapper">
                  <input
                    type="date"
                    id="borrowDate"
                    value={borrowDate}
                    onChange={(e) => setBorrowDate(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="returnDate">
                  <span className="label-text">Return Date</span>
                  <span className="required-star">*</span>
                </label>
                <div className="input-wrapper">
                  <input
                    type="date"
                    id="returnDate"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              <span>Submit Borrow Request</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </form>
        </div>

        {/* Summary Card */}
        <div className="borrow-summary">
          <div className="summary-header">
            <span className="summary-icon">📋</span>
            <h3>Borrow Summary</h3>
          </div>
          
          <div className="summary-list">
            <div className="summary-item">
              <span className="summary-label">Member</span>
              <span className={`summary-value ${memberName ? 'has-value' : 'empty-value'}`}>
                {memberName || 'None'}
              </span>
            </div>

            <div className="summary-item">
              <span className="summary-label">Book Title</span>
              <span className={`summary-value ${bookTitle ? 'has-value' : 'empty-value'}`}>
                {bookTitle || 'None'}
              </span>
            </div>

            <div className="summary-item">
              <span className="summary-label">Borrow Date</span>
              <span className={`summary-value ${borrowDate ? 'has-value' : 'empty-value'}`}>
                {borrowDate || 'None'}
              </span>
            </div>

            <div className="summary-item">
              <span className="summary-label">Return Date</span>
              <span className={`summary-value ${returnDate ? 'has-value' : 'empty-value'}`}>
                {returnDate || 'None'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BorrowPage;

