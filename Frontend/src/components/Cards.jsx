import React from "react";

function Cards ({item})  {
    return (
        <><div>
            <div className="card bg-base-100 w-96 shadow-xl  mt-8 ">
  <figure>
    <img
      src={item.image} 
      alt="Shoes" />
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
      <div className="badge badge-outline  hover:text-pink-500 ">Buy Now</div>
    </div>
  </div>
</div>
        </div>
        </>
    )
}
export default Cards