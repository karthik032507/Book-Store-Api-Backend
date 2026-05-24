# 📚 Book Store API Backend

A RESTful API backend for a Book Store application built with **Node.js**, **Express**, and **MongoDB (Mongoose)**. The project follows a clean MVC architecture with separate layers for routes, controllers, models, and database configuration.

---

## 🚀 Tech Stack

<p align="left">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express"/>
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose"/>
  <img src="https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black" alt="dotenv"/>
  <img src="https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white" alt="Nodemon"/>
</p>

---

## 📁 Project Structure

```
Book-Store-Api-Backend/
├── controllers/       # Business logic for each route
├── database/          # MongoDB connection setup
├── models/            # Mongoose schemas/models
├── routes/            # Express route definitions
├── server.js          # App entry point
├── .gitignore
└── package.json
```

---

## ⚙️ Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- [MongoDB](https://www.mongodb.com/) (local instance or MongoDB Atlas)
- npm

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/karthik032507/Book-Store-Api-Backend.git
cd Book-Store-Api-Backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/bookstore
```

> Replace `MONGO_URI` with your MongoDB Atlas connection string if using the cloud.

### 4. Run the server

```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

The server will start at `http://localhost:5000` (or the port specified in `.env`).

---

## 📡 API Endpoints

> Base URL: `http://localhost:5000`

### Books

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/books` | Get all books |
| GET | `/api/books/:id` | Get a single book by ID |
| POST | `/api/books` | Create a new book |
| PUT | `/api/books/:id` | Update a book by ID |
| DELETE | `/api/books/:id` | Delete a book by ID |

### Example Request Body (POST / PUT)

```json
{
  "title": "The Pragmatic Programmer",
  "author": "Andrew Hunt",
  "price": 499,
  "publishYear": 1999
}
```

---

## 🧪 Testing the API

You can test the endpoints using:

- [Postman](https://www.postman.com/)
- [Thunder Client](https://www.thunderclient.com/) (VS Code extension)
- `curl` from the terminal

```bash
# Example: Get all books
curl http://localhost:5000/api/books
```

---

## 📦 Scripts

| Command | Description |
|---|---|
| `npm start` | Start the server in production mode |
| `npm run dev` | Start the server in development mode with Nodemon |

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 👤 Author

**Karthik** — [@karthik032507](https://github.com/karthik032507)
