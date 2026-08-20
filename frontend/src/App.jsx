import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import BorrowPage from './pages/BorrowPage';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <HomePage />
      </header>
      <main>
        <BooksPage />
        <BorrowPage />
      </main>
    </div>
  );
}

export default App;
