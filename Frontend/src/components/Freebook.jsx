import React from "react";
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Slider from "react-slick";

function Freebook() {
    const filterData = list.filter((data) => data.category === "Free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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

    console.log(filterData); // Should show 4 items (ids: 16, 18, 19, 20)

    return (
    <>
        <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 " >
            <h1 className="font-semibold text-xl  pd-2 " >50% Discount </h1>
            <p className="text-gray-600 mt-2">
  Don't miss out on this limited-time offer! Enjoy a massive 50% discount on your favorite books across various categories. Whether you're into fiction, self-improvement, or biographies, we've got something for everyone. Shop now and grab your favorites before the deal ends!
</p>
        </div>
        <div>
        <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
      </Slider>
        </div>
    </>
    );
}

export default Freebook;