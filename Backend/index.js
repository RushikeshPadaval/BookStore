import express from "express";;
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors';

import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'
const app = express()

app.use(cors());
app.use(express.json());


dotenv.config();
const PORT= process.env.PORT || 4000;
const URI=process.env.MongoDBURI;



// connect to mongoDB
try{

    mongoose.connect (URI, {
        // require only when we run the server locally if we use the mongoDB atlas the cloud server then the parser and the topology was not essential
        // useNewUrlParser: true,
        // useUnifiedTopology:true
    });

    console.log("Connected to mongoDB");
    

} catch (error){
    console.log("Error: ", error);
}

//defining routes

app.use("/book",bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})