import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="page home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span>Next-Generation Library System</span>
        </div>
        <h1 className="hero-title">
          Your Digital Library, <span className="gradient-text">Simplified.</span>
        </h1>
        <p className="hero-description">
          Explore our comprehensive collection of books, monitor real-time availability, and manage book borrowings seamlessly through an intuitive digital experience.
        </p>
        
        <div className="hero-actions">
          <Link to="/books" className="btn btn-primary">
            <span>Explore Books</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
          <Link to="/borrow" className="btn btn-secondary">
            <span>Borrow a Book</span>
          </Link>
        </div>
      </section>

      {/* Visual Library Preview Area (CSS-based) */}
      <section className="hero-visual">
        <div className="visual-card">
          <div className="visual-card-header">
            <div className="visual-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="visual-search-bar">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <span>Search books, categories, authors...</span>
            </div>
          </div>
          
          <div className="visual-card-body">
            <div className="visual-stat-pill">
              <span className="pill-icon">📚</span>
              <div>
                <strong>Active Catalog</strong>
                <small>Curated Collection</small>
              </div>
            </div>
            <div className="visual-stat-pill">
              <span className="pill-icon">⚡</span>
              <div>
                <strong>Instant Tracking</strong>
                <small>Real-time Status</small>
              </div>
            </div>
            <div className="visual-stat-pill">
              <span className="pill-icon">🏷️</span>
              <div>
                <strong>Multi-Category</strong>
                <small>CS, Fiction & More</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">Designed for Modern Reading & Management</h2>
          <p className="section-subtitle">Everything you need to discover and manage library records effortlessly.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card feature-1">
            <div className="feature-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <h3 className="feature-title">Browse Books</h3>
            <p className="feature-desc">
              Explore an extensive catalog with clear categorization, detailed author information, and rich metadata.
            </p>
          </div>

          <div className="feature-card feature-2">
            <div className="feature-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="feature-title">Easy Borrowing</h3>
            <p className="feature-desc">
              Submit streamlined borrow requests with immediate preview feedback for members and return schedules.
            </p>
          </div>

          <div className="feature-card feature-3">
            <div className="feature-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="feature-title">Smart Availability</h3>
            <p className="feature-desc">
              Instantly view availability indicators so members always know which books are ready for checkout.
            </p>
          </div>

          <div className="feature-card feature-4">
            <div className="feature-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </div>
            <h3 className="feature-title">Organized Library</h3>
            <p className="feature-desc">
              Structured architecture keeping borrowing history, member records, and book inventories harmonized.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

