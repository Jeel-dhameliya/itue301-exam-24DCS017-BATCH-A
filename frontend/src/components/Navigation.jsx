import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-brand">Library System</div>
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
  );
}

export default Navigation;
