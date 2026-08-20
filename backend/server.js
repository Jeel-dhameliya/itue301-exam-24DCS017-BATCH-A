const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Body parser middleware
app.use(express.json());

// CORS middleware
app.use(cors());

// Custom request logger middleware
const requestLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${req.method}] ${req.originalUrl || req.url} [${timestamp}]`);
  next();
};

// Global logger registered before routes
app.use(requestLogger);

// In-memory data
let books = [
  {
    id: "1",
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Software Engineering",
    isbn: "9780132350884",
    available: true
  },
  {
    id: "2",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    category: "Programming",
    isbn: "9780201616224",
    available: false
  },
  {
    id: "3",
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    category: "Web Development",
    isbn: "9780596517748",
    available: true
  }
];

let borrowings = [
  {
    id: "b1",
    memberId: "member1",
    bookId: "book2",
    borrowDate: "2026-08-15",
    returnDate: "2026-08-22",
    status: "borrowed"
  }
];

// Root health route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// GET /api/v1/books - Return all books
app.get('/api/v1/books', (req, res) => {
  res.status(200).json({
    success: true,
    data: books
  });
});

// GET /api/v1/borrowings - Return all borrowings
app.get('/api/v1/borrowings', (req, res) => {
  res.status(200).json({
    success: true,
    data: borrowings
  });
});

// POST /api/v1/borrowings - Create a new borrowing record
app.post('/api/v1/borrowings', (req, res) => {
  const { memberId, bookId, borrowDate, returnDate, status } = req.body;

  if (!memberId || !bookId || !borrowDate || !returnDate) {
    return res.status(400).json({
      success: false,
      message: "Please provide memberId, bookId, borrowDate, and returnDate"
    });
  }

  const allowedStatuses = ['borrowed', 'returned', 'overdue'];
  const borrowingStatus = status || 'borrowed';

  if (!allowedStatuses.includes(borrowingStatus)) {
    return res.status(400).json({
      success: false,
      message: "Invalid status. Allowed values are: borrowed, returned, overdue"
    });
  }

  const newBorrowing = {
    id: `b${borrowings.length + 1}`,
    memberId,
    bookId,
    borrowDate,
    returnDate,
    status: borrowingStatus
  };

  borrowings.push(newBorrowing);

  res.status(201).json({
    success: true,
    data: newBorrowing
  });
});

// Global Error-Handling Middleware (Must be the last middleware)
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err.message);
  res.status(500).json({
    success: false,
    message: "Internal server error"
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
