import React from "react";
import list from "../../public/list.json"
    
function Freebook() {
    const filterData = list.filter((data) => data.category === "Free");
    console.log(filterData); // Should show 4 items (ids: 16, 18, 19, 20)

    return (
    <>
        <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 " >
            <h1 className="font-semibold text-xl  pd-2 " >50% Discount </h1>
            <p className="text-gray-600 mt-2">
  Don't miss out on this limited-time offer! Enjoy a massive 50% discount on your favorite books across various categories. Whether you're into fiction, self-improvement, or biographies, we've got something for everyone. Shop now and grab your favorites before the deal ends!
</p>
        </div>
    </>
    );
}

export default Freebook;