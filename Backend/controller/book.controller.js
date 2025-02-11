// we import the book.model.js bcz we define there the structure of our data in that model

import Book from "../model/book.model.js";

export const getBook = async(req,res)=>{
    try{
        const book =await Book.find()
        res.status(200).json(book)

    }
    catch(error){
        console.log("Error: ",error);
        res.status(500).json(error)
        

    }
};