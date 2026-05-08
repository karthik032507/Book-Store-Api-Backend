const express = require('express')
const { getAllBooks, getSingleBookbyID, addNewBook, updateBook, deleteBook} = require("../controllers/books-controllers")



//create express router
const router = express.Router();

//all the routes that are related to books only:
router.get('/get',getAllBooks )
router.get('/get/:id', getSingleBookbyID )
router.post('/add', addNewBook )
router.put('/update/:id', updateBook )
router.delete('/delete/:id', deleteBook)


module.exports = router