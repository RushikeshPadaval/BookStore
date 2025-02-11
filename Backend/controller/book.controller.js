// in the book.model.js we defined the structure of our schema so we import it here

import Book from '../model/book.model'

export const getBook=async(req,res) => {
    try{
        const book=await Book.find()
        res.status(200).json(book)

    }catch(error){
        console.log("Error:", error);
        res.status(500).json(error)
        

    }
};