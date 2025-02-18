import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";
import axios from "axios";
import { useState,useEffect } from "react";

import Slider from "react-slick";

function Freebook() {

  
  const [book,setBook ] = useState([]);
  useEffect(()=>{
      const getBook=async()=>{
          try{
              const res = await axios.get("http://localhost:4001/book");
              const data = res.data.filter((data) => data.category === "sell")

              console.log(data);

              setBook(data);
          }
          catch(error){
              console.log(error);
          }
      };
      getBook();
  },[]);


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };


    return (
    <>
        <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 " >
            <h1 className="font-semibold text-xl  pd-2 " >50% Discount </h1>
        <div>
        <p className="text-gray-600 mt-2">
  Don't miss out on this limited-time offer! Enjoy a massive 50% discount on your favorite books across various categories. Whether you're into fiction, self-improvement, or biographies, we've got something for everyone. Shop now and grab your favorites before the deal ends!
</p>
        </div>
        <div>
        <Slider {...settings}>
          { book.map((item)=> (
            <Cards item={item} key={item.id} />
          ))}
    
      </Slider>
        </div>
        </div>

    </>
    );
}

export default Freebook;