const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const Book = require('./models/Book');
const Member = require('./models/Member');
const Borrowing = require('./models/Borrowing');

const app = express();
const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('MONGO_URI is not configured');
  process.exit(1);
}

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

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB database: library_management');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
  });

// ==========================================
// TASK 3 IN-MEMORY DATA (Preserved for Task 3 & Task 4)
// ==========================================
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
  },
  {
    id: "4",
    title: "Design Patterns",
    author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    category: "Software Architecture",
    isbn: "9780201633610",
    available: true
  },
  {
    id: "5",
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen & Charles E. Leiserson",
    category: "Computer Science",
    isbn: "9780262033848",
    available: false
  },
  {
    id: "6",
    title: "Clean Architecture",
    author: "Robert C. Martin",
    category: "Software Engineering",
    isbn: "9780134494166",
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

// ==========================================
// TASK 3 & 4 IN-MEMORY ENDPOINTS
// ==========================================

// GET /api/v1/books - Return all books (Consumed by React Task 4)
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

// POST /api/v1/borrowings - Create a new borrowing record (In-Memory)
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

// ==========================================
// TASK 5 MONGOOSE / MONGODB DEMONSTRATION ENDPOINTS
// ==========================================

// POST /api/v1/db/demonstrate - Create sample Book & Member in MongoDB
app.post('/api/v1/db/demonstrate', async (req, res, next) => {
  try {
    let sampleBook = await Book.findOne({ isbn: "9780132350884" });
    if (!sampleBook) {
      sampleBook = await Book.create({
        title: "Clean Code",
        author: "Robert C. Martin",
        category: "Software Engineering",
        isbn: "9780132350884",
        available: true
      });
    }

    let sampleMember = await Member.findOne({ email: "john.doe@example.com" });
    if (!sampleMember) {
      sampleMember = await Member.create({
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "1234567890",
        department: "Computer Science"
      });
    }

    const sampleBorrowing = await Borrowing.create({
      memberId: sampleMember._id,
      bookId: sampleBook._id,
      borrowDate: new Date("2026-08-20"),
      returnDate: new Date("2026-08-27"),
      status: "borrowed"
    });

    res.status(201).json({
      success: true,
      message: "MongoDB operation successful",
      data: {
        book: sampleBook,
        member: sampleMember,
        borrowing: sampleBorrowing
      }
    });
  } catch (err) {
    next(err);
  }
});

// POST /api/v1/db/borrowings - Create Mongoose Borrowing with validation
app.post('/api/v1/db/borrowings', async (req, res, next) => {
  try {
    const { memberId, bookId, borrowDate, returnDate, status } = req.body;

    const newBorrowing = new Borrowing({
      memberId,
      bookId,
      borrowDate,
      returnDate,
      status
    });

    const saved = await newBorrowing.save();

    res.status(201).json({
      success: true,
      data: saved
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        error: err.message
      });
    }
    next(err);
  }
});

// GET /api/v1/db/books - Query books from MongoDB
app.get('/api/v1/db/books', async (req, res, next) => {
  try {
    const dbBooks = await Book.find();
    res.status(200).json({
      success: true,
      count: dbBooks.length,
      data: dbBooks
    });
  } catch (err) {
    next(err);
  }
});

// ==========================================
// GLOBAL ERROR-HANDLING MIDDLEWARE (Must be the last middleware)
// ==========================================
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
