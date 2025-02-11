// import the mongoose beacause defining the data to store in the mongoDB locally 

import mongoose from "mongoose";

// writing the schema to know what are the data we are transfers 

const bookSchema= mongoose.Schema (
    {
        name: String,
        price: Number,
        category:String,
        image: String,
        title:String
    }
)
const Book = mongoose.model("Book", bookSchema);

// here the name to title was the schema and that was bookSchema it will store to the collection name Book the 
//inshort -- the schema that comes it will store at the Book collection 

export default Book;