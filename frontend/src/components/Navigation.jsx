import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <NavLink to="/" className="nav-brand">
          <span className="brand-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
              <path d="M6 6h10"/>
              <path d="M6 10h10"/>
            </svg>
          </span>
          <span className="brand-text">
            Digital<span className="brand-accent">Library</span>
          </span>
        </NavLink>
        <div className="nav-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/books" 
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Books
          </NavLink>
          <NavLink 
            to="/borrow" 
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Borrow
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;

