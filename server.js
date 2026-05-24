require('dotenv').config()
const express = require('express');
const app = express();
const connectToDB = require("./database/db")
const bookRoutes = require('./routes/books-routes')


const PORT = process.env.PORT || 3000
//middleware-> express.json()
app.use(express.json())


//routes here
app.use('/api/books', bookRoutes)// format is /api/books/get, etc

// connect to database:
//starting the server:
connectToDB().then(()=>{
    if (require.main === module) {
    app.listen(PORT, ()=>{
        console.log(`Server successfully running on ${PORT}`);
    })}
})

module.exports = app;



