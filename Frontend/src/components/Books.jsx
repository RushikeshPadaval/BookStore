import React, { useState, useEffect } from "react";  // <-- Add useState import here

import Cards from "./Cards";
import {Link} from 'react-router-dom'
import axios from 'axios'; 

function Books() {


    const [book,setBook ] = useState([]);
    useEffect(()=>{
        const getBook=async()=>{
            try{
                const res = await axios.get("http://localhost:4001/book");
                console.log(res.data);
                setBook(res.data)
            }
            catch(error){
                console.log(error);
            }
        };
        getBook();
    },[])

    return(
    <>
    <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4">
<div className="mt-28 items-center justify-center text-center " >
    <h1 className="text-2x1  md:text-4xl" >
        We're delighted to have you <span className="text-pink-500" > Here! </span> :) 
        </h1>
        <p className="mt-12" >
        "Explore our wide collection of books across various genres, from the latest bestsellers to timeless classics. Whether you're a fan of fiction, non-fiction, self-help, or children's books, we have something for everyone. Discover new authors and dive into captivating stories that will expand your knowledge and imagination. Browse, read reviews, and find your next favorite book today. Start your literary journey with us!"
        </p>
        <Link to="/" >

        <button className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300  " >
            Back
        </button>
        </Link>
   
</div>
    <div  className="mt-12 grid grid-cols-1 md:grid-cols-4 " >
        {
            book.map((item)=> (
                < Cards key= {item.id} item={item}  />
            ))
            
        }
    </div>
        </div>
    </>
    )
}

export default Books