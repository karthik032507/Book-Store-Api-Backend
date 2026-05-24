<h1 align="center">📚 Book Store API Backend</h1>

<p align="center">
  A powerful and scalable REST API for managing an online bookstore built with Node.js, Express, and MongoDB.
</p>

<p align="center">
  
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=jsonwebtokens"/>
  <img src="https://img.shields.io/badge/Bcrypt-orange?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"/>

</p>

---

# 🚀 Features

✅ User Authentication & Authorization  
✅ JWT Secure Login System  
✅ Password Hashing using bcrypt  
✅ CRUD Operations for Books  
✅ RESTful API Architecture  
✅ MongoDB Database Integration  
✅ Middleware-based Error Handling  
✅ Environment Variable Configuration  

---

# 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| ⚡ Node.js | Backend Runtime |
| 🚂 Express.js | Server Framework |
| 🍃 MongoDB | Database |
| 🧩 Mongoose | ODM |
| 🔐 JWT | Authentication |
| 🔒 bcryptjs | Password Security |
| 🌱 dotenv | Environment Variables |

---

# 📂 Folder Structure

```bash
Book-Store-Api-Backend/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── config/
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/karthik032507/Book-Store-Api-Backend.git
```

## 2️⃣ Move to Project Directory

```bash
cd Book-Store-Api-Backend
```

## 3️⃣ Install Dependencies

```bash
npm install
```

## 4️⃣ Setup Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## 5️⃣ Run the Server

### Production

```bash
npm start
```

### Development

```bash
npm run dev
```

---

# 📌 API Endpoints

# 🔑 Authentication Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/login` | Login User |

---

# 📚 Book Routes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/books` | Fetch All Books |
| GET | `/api/books/:id` | Fetch Single Book |
| POST | `/api/books` | Add New Book |
| PUT | `/api/books/:id` | Update Book |
| DELETE | `/api/books/:id` | Delete Book |

---

# 🧪 Example Request

## Register User

```json
{
  "name": "Karthik",
  "email": "karthik@example.com",
  "password": "123456"
}
```

---

## Login User

```json
{
  "email": "karthik@example.com",
  "password": "123456"
}
```

---

# 🔐 Authentication

Protected routes require JWT Token:

```bash
Authorization: Bearer your_token
```

---

# 🌟 Future Improvements

- 📖 Book Categories
- ⭐ Reviews & Ratings
- 🛒 Cart Functionality
- 💳 Payment Integration
- 👨‍💼 Admin Dashboard
- 📄 Swagger Documentation

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the project  
2. Create your feature branch  
3. Commit your changes  
4. Push to the branch  
5. Open a Pull Request  

---

# 👨‍💻 Author

### Karthik

<p align="left">
  <a href="https://github.com/karthik032507">
    <img src="https://img.shields.io/badge/GitHub-Profile-black?style=for-the-badge&logo=github"/>
  </a>
</p>

---

# 📜 License

This project is licensed under the MIT License.

---

<p align="center">
  ⭐ If you like this project, don't forget to star the repository!
</p>
