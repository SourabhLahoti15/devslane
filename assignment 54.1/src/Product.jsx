import React from "react";

function Product(props) {
    return (
        <>
        <img src="https://th.bing.com/th/id/OIP.nu49I3ew1V7FCt9SPMh1EQHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
        <p>{props.name}</p>
        <p>{props.description}</p>
        <div>
            <img src="" alt="" />
        </div>
        <p>{props.price}</p>
        </>
    )
}

export default Product;