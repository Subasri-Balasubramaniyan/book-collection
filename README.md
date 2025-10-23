📚 Book Collection Website

A simple full-stack Book Collection website built using HTML, CSS, JavaScript, Node.js, Express, and MongoDB.
It allows you to view and search books stored in a MongoDB database, displayed dynamically on a styled webpage.

🚀 Features

Displays books stored in MongoDB.

Fetches book data from a Node.js + Express backend API.

Stylish and responsive design using pure CSS.

Search bar to filter books by title or author.

Fully responsive layout for desktop and mobile.

Works with both MongoDB Atlas (cloud) or local MongoDB.

🧩 Project Structure
book-site/
│
├── public/
│   ├── index.html       # Frontend structure
│   ├── style.css        # Styling for layout and book cards
│   ├── script.js        # Fetches and displays book data
│
├── server.js            # Node.js + Express backend
├── .env                 # Stores MongoDB URI and port
├── package.json         # Project dependencies
└── README.md            # Project documentation

⚙️ Installation Guide
1️⃣ Prerequisites

Make sure you have installed:

Node.js

MongoDB
 (for local setup)

A text editor (VS Code recommended)

2️⃣ Clone or Create the Project

If you’re starting fresh:

mkdir book-site
cd book-site
npm init -y
npm install express mongoose dotenv

3️⃣ Folder Setup

Create this structure:

book-site/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── server.js
└── .env

4️⃣ MongoDB Connection
Option 1 — Use Local MongoDB

Start your MongoDB server:

mongod


Then in .env:

PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/bookDB

Option 2 — Use MongoDB Atlas

In your .env file:

PORT=3000
MONGODB_URI=mongodb+srv://<username>:<password>@<your-cluster>.mongodb.net/bookDB?retryWrites=true&w=majorit


(Replace <username>, <password>, and <your-cluster> with your actual credentials.)

5️⃣ Run the Server

Start your app:

node server.js


Output:

Server running at http://localhost:3000
MongoDB connected successfully


Then open:
👉 http://localhost:3000

🧠 How It Works

server.js connects to MongoDB and defines an API /books to fetch all book records.

script.js calls /books using fetch() and displays them dynamically as cards.

style.css adds clean styling, animations, and responsiveness.

index.html acts as the main page to render all books.

🧪 Sample Data (Mongo Shell)

You can add sample data using:

mongo
use bookDB
db.books.insertMany([
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 }
])

🖌️ Frontend Preview

Search bar to find books easily

Hover animations for book cards

Clean layout with responsive design

🧰 Technologies Used

Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express.js

Database: MongoDB / Mongoose

Environment Variables: dotenv

💡 Future Improvements

Add "Add Book" and "Delete Book" functionality.

Implement book categories and sorting.

Create a login system for managing the collection.
