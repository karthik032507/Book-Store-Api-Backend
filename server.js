require('dotenv').config()
const express = require('express');
const app = express();
const connectToDB = require("./database/db")
const bookRoutes = require('./routes/books-routes')
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api/books', bookRoutes)

// Connect to DB (don't wrap app in .then — Vercel won't wait for it)
connectToDB().catch(err => console.error("DB connection failed:", err));

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server successfully running on ${PORT}`);
    })
}

module.exports = app;
