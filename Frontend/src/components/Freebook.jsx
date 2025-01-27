import React from "react";
import list from "../../public/list.json"

const filterData = list.filter ((data)=>data.category=== "free" );
console.log(filterData);
 

function Freebook() {


    return (
        <div>

        </div>
    )
    
}
export default Freebook