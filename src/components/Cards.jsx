import React from "react";

function Cards ({item})  {
    return (
        <>
        <div className="mt-8  my-3" >
            < div className="card bg-base-100 w-96 shadow-xl  hover:scale-105 duration-200  ">
  <figure>
    <img
      src={item.image} 
      alt="Shoes" className=" object-cover rounded-md"  />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <h4>
      <div className="" > {item.author}

      </div>
    </h4>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Rs{item.price}</div>
      <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200 ">Buy Now</div>
    </div>
  </div>
</div>
        </div>
        </>
    )
}
export default Cards
//