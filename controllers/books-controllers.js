const Book = require("../models/book")

const getAllBooks = async(req,res)=>{
    try {
        const allBooks = await Book.find({})
        if(allBooks?.length > 0){
            res.status(200).json({
                success: true,
                message: 'List of books fetched successfully',
                data: allBooks
            })
        } else{
            res.status(404).json({
                success: false,
                message: 'No books found in the collection'
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Something went wrong, please try again'
        })
    }
}

const getSingleBookbyID = async(req,res)=>{
     try {
        const getCurrentBookID = req.params.id
        const bookDetailsByID = await Book.findById(getCurrentBookID)

        if(!bookDetailsByID){
           return res.status(404).json({
            success: false,
            message: "Book with the required ID is not found, please try again with another ID"
           })
        } else{
            res.status(200).json({
                success: true,
                data: bookDetailsByID
            })
        }
     } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong, please try again'
        })
     }
}

const addNewBook = async(req,res)=>{
   try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData)
    if(newBookFormData){
        res.status(201).json({
            success: true,
            message: 'Book added successfully',
            data: newlyCreatedBook
        })
    }
    
   } catch (error) {
      console.log(error)
   }
}

const updateBook = async(req,res)=>{
   try {
    const updatedBookFormData = req.body;
    const getCurrentBookID = req.params.id;
    const updatedBook = await Book.findByIdAndUpdate(getCurrentBookID, updatedBookFormData, {new: true})
    if(!updatedBook){
        return res.status(404).json({
            success: false,
            message: "Book with the required ID is not found, please try again with another ID"
           })
    } else {
       res.status(200).json({
        success: true,
        message: "Book updated successfully",
        data: updatedBook
       })
    }

   } catch (error) {
     console.log(error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong, please try again'
        })
   }
}

const deleteBook = async(req,res)=>{
   try {
    const getCurrentBookID = req.params.id
    const deletedBook = await Book.findByIdAndDelete(getCurrentBookID)
    if(!deletedBook){
        return res.status(404).json({
            success: false,
            message: "Book with the required ID is not found, please try again with another ID"
           })
    } else{
        res.status(200).json({
                success: true,
                data: deletedBook   
            })
    }
   } catch (error) {
    console.log(error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong, please try again'
        })
   }
}

module.exports = {
    getAllBooks, 
    getSingleBookbyID,
    addNewBook,
    updateBook,
    deleteBook
}